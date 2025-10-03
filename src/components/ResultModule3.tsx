import React from 'react';
import { usePensionContext } from '../context/PensionContext';
import { PensionIncomeDeductionDetail, PersonalDeductionDetail, ProgressiveTaxDetail, SeparateTaxDetail } from './TaxDetailExplanations';

export function ResultModule3() {
  const { 상태 } = usePensionContext();
  const { 연금수령시뮬레이션 } = 상태.결과값;
  const { 연간수령액, 은퇴나이 } = 상태.입력값;

  if (연간수령액 === 0) {
    return null;
  }

  const { 기준금액초과여부, 종합과세, 분리과세, 저율과세 } = 연금수령시뮬레이션;

  // 최적 옵션 결정 (세후 실수령액이 가장 높은 방식)
  let 최적옵션 = '저율과세';
  let 최대세후수령액 = 저율과세.세후실수령액;

  if (기준금액초과여부) {
    if (종합과세.세후실수령액 > 분리과세.세후실수령액) {
      최적옵션 = '종합과세';
      최대세후수령액 = 종합과세.세후실수령액;
    } else {
      최적옵션 = '분리과세';
      최대세후수령액 = 분리과세.세후실수령액;
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-lg font-bold text-gray-800 mb-4">💰 연금 수령 시뮬레이션 결과</h3>

      {/* 비과세원금 소진 후 계산 안내 */}
      <div className="mb-4 p-3 bg-blue-50 rounded-md border-l-4 border-blue-400">
        <p className="text-sm text-blue-800">
          <strong>📋 계산 기준:</strong> 아래 세금 계산은 <strong>비과세 원금이 모두 소진된 후</strong>의 상황을 가정합니다.<br/>
          실제로는 비과세 원금이 있는 동안 해당 부분에 대해서는 세금이 부과되지 않습니다.
        </p>
      </div>

      <div className="mb-4 p-3 bg-yellow-50 rounded-md border-l-4 border-yellow-400">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-semibold text-yellow-800">🏆 권장 수령 방식</h4>
            <p className="text-yellow-700">
              <strong>{최적옵션}</strong> - 세후 실수령액: <strong>{최대세후수령액.toLocaleString('ko-KR')}원</strong>
            </p>
          </div>
          <div className="text-right text-yellow-600">
            <div className="text-sm">연간 수령액</div>
            <div className="text-xl font-bold">{연간수령액.toLocaleString('ko-KR')}원</div>
          </div>
        </div>
      </div>

      {/* 1,500만원 이하 - 저율과세 */}
      {!기준금액초과여부 && (
        <div className="mb-4">
          <h4 className="font-semibold text-gray-700 mb-3">💡 저율 분리과세 (1,500만원 이하)</h4>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <div className="text-sm text-green-600">적용 세율</div>
                <div className="text-lg font-bold text-green-800">
                  {(저율과세.적용세율 * 100).toFixed(1)}%
                </div>
                <div className="text-xs text-green-500">
                  ({은퇴나이}세 수령 시작 기준)
                </div>
              </div>
              <div>
                <div className="text-sm text-green-600">납부 세액</div>
                <div className="text-lg font-bold text-green-800">
                  {저율과세.총납부세액.toLocaleString('ko-KR')}원
                </div>
              </div>
              <div>
                <div className="text-sm text-green-600">세후 실수령액</div>
                <div className="text-lg font-bold text-green-800">
                  {저율과세.세후실수령액.toLocaleString('ko-KR')}원
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 1,500만원 초과 - 두 가지 옵션 비교 */}
      {기준금액초과여부 && (
        <div className="space-y-4">
          <h4 className="font-semibold text-gray-700">📊 과세 방식 비교 (1,500만원 초과)</h4>
          
          {/* 상세 설명 토글들 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <PensionIncomeDeductionDetail />
            <PersonalDeductionDetail />
            <ProgressiveTaxDetail />
            <SeparateTaxDetail />
          </div>
          
          {/* 종합과세 */}
          <div className={`p-4 rounded-lg border-2 ${최적옵션 === '종합과세' ? 'border-blue-400 bg-blue-50' : 'border-gray-200 bg-gray-50'}`}>
            <div className="flex items-center justify-between mb-4">
              <h5 className="font-semibold text-gray-800">🏛️ 옵션 1: 종합과세</h5>
              {최적옵션 === '종합과세' && (
                <span className="px-2 py-1 bg-blue-500 text-white text-xs rounded-full">권장</span>
              )}
            </div>
            
            {/* 상세 계산 표 */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 px-1">항목</th>
                    <th className="text-left py-2 px-1">계산 과정</th>
                    <th className="text-right py-2 px-1">금액</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-1 font-medium">연간 수령액</td>
                    <td className="py-2 px-1 text-gray-600"></td>
                    <td className="py-2 px-1 text-right font-bold">{연간수령액.toLocaleString('ko-KR')}원</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-2 px-1">(-) 연금소득공제</td>
                    <td className="py-2 px-1 text-gray-600 text-xs">(최대 한도 적용)</td>
                    <td className="py-2 px-1 text-right">{종합과세.연금소득공제액.toLocaleString('ko-KR')}원</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-1 font-medium">(=) 연금소득금액</td>
                    <td className="py-2 px-1 text-gray-600"></td>
                    <td className="py-2 px-1 text-right">{종합과세.연금소득금액.toLocaleString('ko-KR')}원</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-2 px-1">(-) 인적공제 (기본)</td>
                    <td className="py-2 px-1 text-gray-600"></td>
                    <td className="py-2 px-1 text-right">1,500,000원</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-1 font-medium">(=) 과세표준</td>
                    <td className="py-2 px-1 text-gray-600"></td>
                    <td className="py-2 px-1 text-right font-bold">{종합과세.과세표준.toLocaleString('ko-KR')}원</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-2 px-1">(→) 산출세액</td>
                    <td className="py-2 px-1 text-gray-600 text-xs">누진세율표 적용</td>
                    <td className="py-2 px-1 text-right">{종합과세.산출소득세.toLocaleString('ko-KR')}원</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-1">(+) 지방소득세</td>
                    <td className="py-2 px-1 text-gray-600 text-xs">산출세액 × 10%</td>
                    <td className="py-2 px-1 text-right">{종합과세.지방소득세.toLocaleString('ko-KR')}원</td>
                  </tr>
                  <tr className="border-t-2">
                    <td className="py-2 px-1 font-bold">(=) 총 납부세액</td>
                    <td className="py-2 px-1 text-gray-600"></td>
                    <td className="py-2 px-1 text-right font-bold text-red-600">{종합과세.총납부세액.toLocaleString('ko-KR')}원</td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td className="py-2 px-1 font-bold">세후 실수령액</td>
                    <td className="py-2 px-1 text-gray-600 text-xs">연간수령액 - 총납부세액</td>
                    <td className="py-2 px-1 text-right font-bold text-blue-600">{종합과세.세후실수령액.toLocaleString('ko-KR')}원</td>
                  </tr>
                  <tr className="bg-indigo-50 border-t-2 border-indigo-200">
                    <td className="py-2 px-1 font-bold text-indigo-700">💡 실효세율</td>
                    <td className="py-2 px-1 text-gray-600 text-xs">총납부세액 ÷ 연간수령액 × 100</td>
                    <td className="py-2 px-1 text-right font-bold text-indigo-700">{((종합과세.총납부세액 / 연간수령액) * 100).toFixed(2)}%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 분리과세 */}
          <div className={`p-4 rounded-lg border-2 ${최적옵션 === '분리과세' ? 'border-green-400 bg-green-50' : 'border-gray-200 bg-gray-50'}`}>
            <div className="flex items-center justify-between mb-4">
              <h5 className="font-semibold text-gray-800">🏦 옵션 2: 16.5% 분리과세</h5>
              {최적옵션 === '분리과세' && (
                <span className="px-2 py-1 bg-green-500 text-white text-xs rounded-full">권장</span>
              )}
            </div>
            
            {/* 상세 계산 표 */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 px-1">항목</th>
                    <th className="text-left py-2 px-1">계산 과정</th>
                    <th className="text-right py-2 px-1">금액</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-1 font-medium">연간 수령액</td>
                    <td className="py-2 px-1 text-gray-600"></td>
                    <td className="py-2 px-1 text-right font-bold">{연간수령액.toLocaleString('ko-KR')}원</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-2 px-1">(×) 적용 세율</td>
                    <td className="py-2 px-1 text-gray-600 text-xs">(분리과세 단일세율)</td>
                    <td className="py-2 px-1 text-right font-bold">{(분리과세.적용세율 * 100).toFixed(1)}%</td>
                  </tr>
                  <tr className="border-t-2">
                    <td className="py-2 px-1 font-bold">(=) 총 납부세액</td>
                    <td className="py-2 px-1 text-gray-600 text-xs">{연간수령액.toLocaleString('ko-KR')}원 × {(분리과세.적용세율 * 100).toFixed(1)}%</td>
                    <td className="py-2 px-1 text-right font-bold text-red-600">{분리과세.총납부세액.toLocaleString('ko-KR')}원</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="py-2 px-1 font-bold">세후 실수령액</td>
                    <td className="py-2 px-1 text-gray-600 text-xs">연간수령액 - 총납부세액</td>
                    <td className="py-2 px-1 text-right font-bold text-green-600">{분리과세.세후실수령액.toLocaleString('ko-KR')}원</td>
                  </tr>
                  <tr className="bg-orange-50 border-t-2 border-orange-200">
                    <td className="py-2 px-1 font-bold text-orange-700">💡 실효세율</td>
                    <td className="py-2 px-1 text-gray-600 text-xs">분리과세 고정세율</td>
                    <td className="py-2 px-1 text-right font-bold text-orange-700">16.50%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 비교 요약 */}
          <div className="p-3 bg-gray-100 rounded-md">
            <h5 className="font-semibold text-gray-700 mb-2">📋 비교 요약</h5>
            <div className="text-sm text-gray-600 space-y-1">
              <div>
                <strong>실효세율:</strong> 
                종합과세 {((종합과세.총납부세액 / 연간수령액) * 100).toFixed(2)}% vs 
                분리과세 16.50%
              </div>
              <div>
                <strong>세후 실수령액 차이:</strong> 
                {Math.abs(종합과세.세후실수령액 - 분리과세.세후실수령액).toLocaleString('ko-KR')}원 
                ({종합과세.세후실수령액 > 분리과세.세후실수령액 ? '종합과세' : '분리과세'}가 유리)
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}