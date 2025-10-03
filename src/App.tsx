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

function PensionCalculator() {
  const { 전체계산실행 } = usePensionContext();

  // 컴포넌트 마운트 시 초기 계산 실행
  useEffect(() => {
    전체계산실행();
  }, [전체계산실행]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* 헤더 */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            🏦 연금 플래너 360
          </h1>
          <p className="text-lg text-gray-600">
            연금저축 및 IRP 전략 시뮬레이터 (v2.3)
          </p>
          <div className="mt-4 p-3 bg-blue-100 rounded-lg inline-block">
            <p className="text-sm text-blue-800">
              💡 <strong>투명한 계산:</strong> 모든 공식과 로직이 명확히 표시됩니다
            </p>
          </div>
        </header>

        {/* 입력 섹션 */}
        <section className="mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
            <InputModule1 />
            <InputModule2 />
            <InputModule3 />
          </div>
          
          {/* 실시간 계산 안내 */}
          <div className="text-center mt-6">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-lg">
              <span className="animate-pulse mr-2">🔄</span>
              실시간으로 계산 결과가 업데이트됩니다
            </div>
          </div>
        </section>

        {/* 결과 섹션 */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">📊 계산 결과</h2>
          <div className="space-y-6">
            <ResultModule1 />
            <ResultModule2 />
            <ResultModule3 />
            <ResultModule4 />
            <ResultModule5 />
          </div>
        </section>

        {/* 푸터 */}
        <footer className="mt-12 text-center text-gray-500 text-sm">
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
