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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 font-body">
      {/* Ambient background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-violet-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* 헤더 */}
        <header className="text-center py-12 px-4 animate-fade-in">
          <div className="inline-block mb-6">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-violet-600 rounded-2xl shadow-lg flex items-center justify-center transform hover:rotate-6 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4 animate-slide-up">
            <span className="text-gradient-primary">연금 플래너</span>
            <span className="text-slate-800"> 360</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 font-light animate-slide-up animate-delay-100">
            당신의 은퇴 전략을 시뮬레이션하세요
          </p>
          <div className="mt-6 flex items-center justify-center gap-6 text-sm text-slate-500 animate-slide-up animate-delay-200">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span>실시간 계산</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-violet-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <span>2025년 세법 기준</span>
            </div>
          </div>
        </header>

        {/* 탭 섹션 */}
        <div className="px-4 py-6 animate-slide-up animate-delay-300">
          <Tabs>
            <Tab label="입력">
              <div className="space-y-6">
                <div className="glass-card p-4 border-l-4 border-blue-500">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      입력하신 값이 <span className="text-blue-600 font-semibold">실시간으로 계산</span>됩니다
                    </p>
                  </div>
                </div>
                <InputModule1 />
                <InputModule2 />
                <InputModule3 />
              </div>
            </Tab>

            <Tab label="결과">
              <div className="space-y-6">
                {/* 요약 카드 */}
                <SummaryCards />

                {/* 상세 결과 (아코디언) */}
                <div className="mt-8">
                  <h2 className="section-title px-2">상세 분석</h2>

                  <Accordion title="세액공제 상세" defaultOpen={true}>
                    <ResultModule1 />
                  </Accordion>

                  <Accordion title="미래 자산 상세">
                    <ResultModule2 />
                  </Accordion>

                  <Accordion title="연금 수령 시뮬레이션">
                    <ResultModule3 />
                  </Accordion>

                  <Accordion title="자산 변화 시뮬레이션">
                    <ResultModule4 />
                  </Accordion>

                  <Accordion title="투자 방식 비교">
                    <ResultModule5 />
                  </Accordion>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>

        {/* 푸터 */}
        <footer className="mt-12 py-8 px-4 text-center border-t border-slate-200">
          <div className="glass-card inline-block px-6 py-4">
            <p className="text-sm text-slate-600 mb-2">
              <span className="text-blue-600 font-semibold">2025년 세법 기준</span> · 교육 및 전략 수립 목적
            </p>
            <p className="text-xs text-slate-500">
              실제 투자 결정 시에는 전문가와 상담하시기 바랍니다
            </p>
          </div>
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
