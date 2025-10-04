import React, { useEffect } from 'react';
import { PensionProvider, usePensionContext } from './context/PensionContext';
import { InputModule1 } from './components/InputModule1';
import { InputModule2 } from './components/InputModule2';
import { InputModule3 } from './components/InputModule3';
import { ResultModule1 } from './components/ResultModule1';
import { ResultModule2 } from './components/ResultModule2';
import { ResultModule3 } from './components/ResultModule3';
import { ResultModule4 } from './components/ResultModule4';
import { ResultModule5 } from './components/ResultModule5';
import { Tabs, Tab } from './components/Tabs';
import { SummaryCards } from './components/SummaryCards';
import { Accordion } from './components/Accordion';

function PensionCalculator() {
  const { 전체계산실행 } = usePensionContext();

  // 컴포넌트 마운트 시 초기 계산 실행
  useEffect(() => {
    전체계산실행();
  }, [전체계산실행]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* 헤더 */}
        <header className="text-center py-8 px-4 bg-white shadow-sm">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            🏦 연금 플래너 360
          </h1>
          <p className="text-base md:text-lg text-gray-600">
            연금저축 및 IRP 전략 시뮬레이터
          </p>
        </header>

        {/* 탭 섹션 */}
        <div className="px-4 py-6">
          <Tabs>
            <Tab label="📝 입력">
              <div className="space-y-6">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800 text-center">
                    💡 입력하신 값이 실시간으로 계산됩니다
                  </p>
                </div>
                <InputModule1 />
                <InputModule2 />
                <InputModule3 />
              </div>
            </Tab>

            <Tab label="📊 결과">
              <div className="space-y-6">
                {/* 요약 카드 */}
                <SummaryCards />

                {/* 상세 결과 (아코디언) */}
                <div className="mt-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-4 px-2">📋 상세 결과</h2>

                  <Accordion title="💰 세액공제 상세" defaultOpen={true}>
                    <ResultModule1 />
                  </Accordion>

                  <Accordion title="📈 미래 자산 상세">
                    <ResultModule2 />
                  </Accordion>

                  <Accordion title="🎯 연금 수령 시뮬레이션">
                    <ResultModule3 />
                  </Accordion>

                  <Accordion title="💵 자산 변화 시뮬레이션">
                    <ResultModule4 />
                  </Accordion>

                  <Accordion title="📊 투자 방식 비교">
                    <ResultModule5 />
                  </Accordion>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>

        {/* 푸터 */}
        <footer className="mt-8 py-6 px-4 text-center text-gray-500 text-sm bg-white border-t">
          <p>📋 2025년 세법 기준 | 교육 및 전략 수립 목적</p>
          <p className="mt-1">⚠️ 실제 투자 결정 시에는 전문가와 상담하시기 바랍니다</p>
        </footer>
      </div>
    </div>
  );
}

function App() {
  return (
    <PensionProvider>
      <PensionCalculator />
    </PensionProvider>
  );
}

export default App;
