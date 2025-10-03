import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { 연금플래너상태, 입력값타입, 결과값타입, 초기입력값, 초기결과값 } from '../types';
import { 세액공제계산, 미래자산계산, 연금수령시뮬레이션계산, 자산변화시뮬레이션계산, 투자비교계산 } from '../utils/calculations';

interface 연금플래너컨텍스트타입 {
  상태: 연금플래너상태;
  입력값업데이트: (필드: keyof 입력값타입, 값: any) => void;
  전체계산실행: () => void;
}

const PensionContext = createContext<연금플래너컨텍스트타입 | undefined>(undefined);

export function usePensionContext() {
  const context = useContext(PensionContext);
  if (context === undefined) {
    throw new Error('usePensionContext는 PensionProvider 내에서 사용되어야 합니다');
  }
  return context;
}

interface PensionProviderProps {
  children: ReactNode;
}

export function PensionProvider({ children }: PensionProviderProps) {
  const [상태, set상태] = useState<연금플래너상태>({
    입력값: 초기입력값,
    결과값: 초기결과값,
  });

  const 입력값업데이트 = useCallback((필드: keyof 입력값타입, 값: any) => {
    set상태(이전상태 => {
      // 연금저축 총 납입한도 검증 (1,800만원)
      let 검증된값 = 값;

      if (필드 === '연금저축납입액') {
        // 연금저축 세액공제 대상은 600만원 한도
        검증된값 = Math.min(값, 6000000);
      } else if (필드 === '연금저축한도초과납입액') {
        // 연금저축 추가납입액은 연금저축 전체 한도(1,800만원)에서 세액공제 대상액을 뺀 금액
        const 연금저축세액공제액 = 이전상태.입력값.연금저축납입액;
        const 연금저축최대추가납입 = Math.max(0, 18000000 - 연금저축세액공제액);
        검증된값 = Math.min(값, 연금저축최대추가납입);
      } else if (필드 === 'IRP납입액') {
        // IRP 세액공제 대상은 연금저축과 합쳐서 900만원 한도
        const 연금저축세액공제액 = 이전상태.입력값.연금저축납입액;
        const IRP세액공제가능한도 = Math.max(0, 9000000 - 연금저축세액공제액);
        검증된값 = Math.min(값, IRP세액공제가능한도);
      } else if (필드 === 'IRP한도초과납입액') {
        // IRP 추가납입액도 전체 연금계좌 한도(1,800만원) 내에서
        const 기존총납입액 = 이전상태.입력값.연금저축납입액 + 이전상태.입력값.연금저축한도초과납입액 + 이전상태.입력값.IRP납입액;
        const IRP추가납입가능금액 = Math.max(0, 18000000 - 기존총납입액);
        검증된값 = Math.min(값, IRP추가납입가능금액);
      }

      const 새입력값 = {
        ...이전상태.입력값,
        [필드]: 검증된값,
      };
      
      // 입력값 변경 시 즉시 계산 실행
      const 세액공제결과 = 세액공제계산(새입력값);
      const 미래자산결과 = 미래자산계산(새입력값, 세액공제결과);
      const 연금수령결과 = 연금수령시뮬레이션계산(
        새입력값,
        미래자산결과,
        새입력값.은퇴나이
      );
      
      // 모듈 4: 자산 변화 시뮬레이션 계산
      const 자산변화결과 = 자산변화시뮬레이션계산(
        미래자산결과.총미래가치,
        새입력값.연평균수익률,
        새입력값.연간수령액, // PRD v2.4: 연간수령요청액
        새입력값.은퇴나이,
        미래자산결과.비과세원금, // PRD v2.4: 비과세원금 추가
        연금수령결과.종합과세.총납부세액 // PRD v2.4: 종합과세 납부세액 추가
      );

      // 모듈 5: 투자 비교 계산
      const 투자비교결과 = 투자비교계산(
        새입력값,
        미래자산결과,
        연금수령결과
      );

      const 새결과값 = {
        세액공제: 세액공제결과,
        미래자산: 미래자산결과,
        연금수령시뮬레이션: 연금수령결과,
        자산변화시뮬레이션: 자산변화결과,
        투자비교: 투자비교결과,
      };
      
      return {
        입력값: 새입력값,
        결과값: 새결과값,
      };
    });
  }, []);

  const 전체계산실행 = useCallback(() => {
    set상태(이전상태 => {
      const { 입력값 } = 이전상태;
      
      // 모듈 1: 세액공제 계산
      const 세액공제결과 = 세액공제계산(입력값);
      
      // 모듈 2: 미래 자산 계산
      const 미래자산결과 = 미래자산계산(입력값, 세액공제결과);
      
      // 모듈 3: 연금 수령 시뮬레이션 계산
      const 연금수령결과 = 연금수령시뮬레이션계산(
        입력값,
        미래자산결과,
        입력값.은퇴나이
      );
      
      // 모듈 4: 자산 변화 시뮬레이션 계산
      const 자산변화결과 = 자산변화시뮬레이션계산(
        미래자산결과.총미래가치,
        입력값.연평균수익률,
        입력값.연간수령액, // PRD v2.4: 연간수령요청액
        입력값.은퇴나이,
        미래자산결과.비과세원금, // PRD v2.4: 비과세원금 추가
        연금수령결과.종합과세.총납부세액 // PRD v2.4: 종합과세 납부세액 추가
      );

      // 모듈 5: 투자 비교 계산
      const 투자비교결과 = 투자비교계산(
        입력값,
        미래자산결과,
        연금수령결과
      );

      const 새결과값: 결과값타입 = {
        세액공제: 세액공제결과,
        미래자산: 미래자산결과,
        연금수령시뮬레이션: 연금수령결과,
        자산변화시뮬레이션: 자산변화결과,
        투자비교: 투자비교결과,
      };
      
      return {
        ...이전상태,
        결과값: 새결과값,
      };
    });
  }, []);

  const contextValue: 연금플래너컨텍스트타입 = {
    상태,
    입력값업데이트,
    전체계산실행,
  };

  return (
    <PensionContext.Provider value={contextValue}>
      {children}
    </PensionContext.Provider>
  );
}