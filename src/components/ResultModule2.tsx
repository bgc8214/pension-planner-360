import React from 'react';
import { usePensionContext } from '../context/PensionContext';

export function ResultModule2() {
  const { 상태 } = usePensionContext();
  const { 미래자산 } = 상태.결과값;
  const { 현재나이, 은퇴나이, 연평균수익률 } = 상태.입력값;

  if (미래자산.총납입원금 === 0) {
    return null;
  }

  const 납입기간 = 은퇴나이 - 현재나이;
  const 총수익률 = ((미래자산.총미래가치 / 미래자산.총납입원금) - 1) * 100;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-lg font-bold text-gray-800 mb-4">🚀 미래 자산 성장 시뮬레이션</h3>
      
      {/* 요약 정보 */}
      <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border-l-4 border-blue-400">
        <p className="text-gray-700 leading-relaxed">
          <strong className="text-blue-700">{납입기간}년간</strong> 연 <strong className="text-blue-700">{연평균수익률}%</strong>로 운용할 경우,<br />
          총 납입원금 <strong className="text-blue-700">{미래자산.총납입원금.toLocaleString('ko-KR')}원</strong>이 
          은퇴 시점에 <strong className="text-green-600">{미래자산.총미래가치.toLocaleString('ko-KR')}원</strong>으로 성장할 것으로 예상됩니다.
          <span className="text-sm text-gray-600 ml-2">
            (총 수익률: {총수익률.toFixed(1)}%)
          </span>
        </p>
      </div>

      {/* 자산 구성 현황 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="text-sm text-blue-600 font-medium">총 납입원금</div>
          <div className="text-2xl font-bold text-blue-800">
            {미래자산.총납입원금.toLocaleString('ko-KR')}
          </div>
          <div className="text-xs text-blue-500">원 ({납입기간}년간 납입)</div>
        </div>

        <div className="bg-green-50 p-4 rounded-lg">
          <div className="text-sm text-green-600 font-medium">🎯 세액공제 대상 원금</div>
          <div className="text-2xl font-bold text-green-800">
            {미래자산.세액공제대상원금.toLocaleString('ko-KR')}
          </div>
          <div className="text-xs text-green-500">원 (수령시 과세)</div>
        </div>

        <div className="bg-orange-50 p-4 rounded-lg">
          <div className="text-sm text-orange-600 font-medium">💰 비과세 원금</div>
          <div className="text-2xl font-bold text-orange-800">
            {미래자산.비과세원금.toLocaleString('ko-KR')}
          </div>
          <div className="text-xs text-orange-500">원 (수령시 비과세)</div>
        </div>

        <div className="bg-purple-50 p-4 rounded-lg">
          <div className="text-sm text-purple-600 font-medium">📈 운용 수익</div>
          <div className="text-2xl font-bold text-purple-800">
            {미래자산.총예상수익.toLocaleString('ko-KR')}
          </div>
          <div className="text-xs text-purple-500">원 (수령시 과세)</div>
        </div>
      </div>

      {/* 총 미래가치 */}
      <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border-2 border-green-200">
        <div className="text-center">
          <div className="text-sm text-green-600 font-medium mb-1">🏆 은퇴 시점 총 자산</div>
          <div className="text-4xl font-bold text-green-800 mb-1">
            {미래자산.총미래가치.toLocaleString('ko-KR')}원
          </div>
          <div className="text-sm text-green-600">
            납입원금 대비 <strong>{총수익률.toFixed(1)}%</strong> 성장 예상
          </div>
        </div>
      </div>

      {/* 자산 구성 비율 */}
      <div className="mb-4">
        <h4 className="font-semibold text-gray-700 mb-3">📊 은퇴 시점 자산 구성</h4>
        <div className="space-y-3">
          {/* 세액공제 대상 원금 */}
          <div className="flex items-center">
            <div className="w-32 text-sm text-gray-600">세액공제 대상 원금</div>
            <div className="flex-1 mx-3">
              <div className="bg-gray-200 rounded-full h-4 relative overflow-hidden">
                <div 
                  className="bg-green-400 h-full rounded-full"
                  style={{ width: `${(미래자산.세액공제대상원금 / 미래자산.총미래가치) * 100}%` }}
                ></div>
              </div>
            </div>
            <div className="w-20 text-right text-sm font-medium">
              {((미래자산.세액공제대상원금 / 미래자산.총미래가치) * 100).toFixed(1)}%
            </div>
          </div>

          {/* 비과세 원금 */}
          <div className="flex items-center">
            <div className="w-32 text-sm text-gray-600">비과세 원금</div>
            <div className="flex-1 mx-3">
              <div className="bg-gray-200 rounded-full h-4 relative overflow-hidden">
                <div 
                  className="bg-orange-400 h-full rounded-full"
                  style={{ width: `${(미래자산.비과세원금 / 미래자산.총미래가치) * 100}%` }}
                ></div>
              </div>
            </div>
            <div className="w-20 text-right text-sm font-medium">
              {((미래자산.비과세원금 / 미래자산.총미래가치) * 100).toFixed(1)}%
            </div>
          </div>

          {/* 운용 수익 */}
          <div className="flex items-center">
            <div className="w-32 text-sm text-gray-600">운용 수익</div>
            <div className="flex-1 mx-3">
              <div className="bg-gray-200 rounded-full h-4 relative overflow-hidden">
                <div 
                  className="bg-purple-400 h-full rounded-full"
                  style={{ width: `${(미래자산.총예상수익 / 미래자산.총미래가치) * 100}%` }}
                ></div>
              </div>
            </div>
            <div className="w-20 text-right text-sm font-medium">
              {((미래자산.총예상수익 / 미래자산.총미래가치) * 100).toFixed(1)}%
            </div>
          </div>
        </div>
      </div>

      {/* 계산 상세 */}
      <div className="space-y-4">
        <div className="p-3 bg-gray-50 rounded-md">
          <h4 className="font-semibold text-gray-700 mb-2">📋 계산 상세</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• 납입 기간: {현재나이}세 ~ {은퇴나이}세 ({납입기간}년간)</li>
            <li>• 연평균 수익률: {연평균수익률}% (복리 적용)</li>
            <li>• 세액공제 대상 원금: 수령 시 연금소득세 부과</li>
            <li>• 비과세 원금: 수령 시 원금 반환 (비과세)</li>
            <li>• 운용 수익: 수령 시 연금소득세 부과</li>
          </ul>
        </div>
        
        <div className="p-3 bg-blue-50 rounded-md">
          <h4 className="font-semibold text-blue-700 mb-2">💡 미래 자산 활용 전략</h4>
          <ul className="text-sm text-blue-600 space-y-1">
            <li>• <strong>세액공제 최대화:</strong> 연간 한도(900만원) 내에서 납입</li>
            <li>• <strong>장기 투자:</strong> {납입기간}년간 꾸준한 납입으로 복리 효과 극대화</li>
            <li>• <strong>수익률 관리:</strong> 목표 수익률 달성을 위한 포트폴리오 관리</li>
            <li>• <strong>세금 최적화:</strong> 수령 방식에 따른 세금 부담 고려</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

