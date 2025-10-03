import React from 'react';
import { usePensionContext } from '../context/PensionContext';

export function ResultModule4() {
  const { 상태 } = usePensionContext();
  const { 자산변화시뮬레이션 } = 상태.결과값;
  const { 은퇴나이, 연평균수익률 } = 상태.입력값;

  if (자산변화시뮬레이션.시작자산 === 0) {
    return null;
  }

  const { 시작자산, 연간수령요청액, 예상고갈나이, 지속가능년수, 연차별데이터 } = 자산변화시뮬레이션;

  // 모든 연차 데이터 표시 (100세까지 또는 자산 고갈시까지)
  const 표시데이터 = 연차별데이터;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-lg font-bold text-gray-800 mb-4">💰 연금 자산 변화 시뮬레이션</h3>
      
      {/* 요약 정보 */}
      <div className="mb-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border-l-4 border-purple-400">
        <p className="text-gray-700 leading-relaxed">
          은퇴 시점의 총 <strong className="text-purple-700">{시작자산.toLocaleString('ko-KR')}원</strong>을 
          연 <strong className="text-purple-700">{연평균수익률}%</strong>로 운용하며, 
          매년 <strong className="text-purple-700">{연간수령요청액.toLocaleString('ko-KR')}원</strong>을 인출할 경우,<br />
          <span className="text-sm text-blue-600">(단, <strong>비과세 재원은 세금 없이 먼저 인출</strong>됩니다)</span><br />
          고객님의 연금은 <strong className="text-red-600">약 {예상고갈나이}세</strong>까지 
          수령 가능할 것으로 예상됩니다. 
          <span className="text-sm text-gray-600">
            (총 {지속가능년수}년간 지속 가능)
          </span>
        </p>
      </div>

      {/* 연차별 자산 변화 표 */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse border border-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="border border-gray-200 px-3 py-2 text-left">연차 (나이)</th>
              <th className="border border-gray-200 px-3 py-2 text-right">기초자산</th>
              <th className="border border-gray-200 px-3 py-2 text-right">연간 운용수익 ({연평균수익률}%)</th>
              <th className="border border-gray-200 px-3 py-2 text-right">세전 인출액</th>
              <th className="border border-gray-200 px-3 py-2 text-right">납부세액</th>
              <th className="border border-gray-200 px-3 py-2 text-right">세후 인출액</th>
              <th className="border border-gray-200 px-3 py-2 text-right">기말자산</th>
            </tr>
          </thead>
          <tbody>
            {표시데이터.map((데이터, index) => {
              const isLastYear = 데이터.기말자산 < 연간수령요청액;
              const rowClass = isLastYear 
                ? "bg-red-50 text-red-700" 
                : 데이터.연차 <= 5 
                  ? "bg-blue-50" 
                  : "";

              return (
                <tr key={데이터.연차} className={rowClass}>
                  <td className="border border-gray-200 px-3 py-2 font-medium">
                    {데이터.연차}년차 ({데이터.나이}세)
                    {isLastYear && (
                      <span className="ml-2 text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
                        예상 고갈
                      </span>
                    )}
                  </td>
                  <td className="border border-gray-200 px-3 py-2 text-right">
                    {데이터.기초자산.toLocaleString('ko-KR')}
                  </td>
                  <td className="border border-gray-200 px-3 py-2 text-right text-green-600">
                    + {데이터.연간운용수익.toLocaleString('ko-KR')}
                  </td>
                  <td className="border border-gray-200 px-3 py-2 text-right text-gray-700">
                    - {데이터.세전인출액.toLocaleString('ko-KR')}
                  </td>
                  <td className="border border-gray-200 px-3 py-2 text-right">
                    {데이터.납부세액 === 0 ? (
                      <span className="text-blue-600 font-semibold">0원</span>
                    ) : (
                      <span className="text-red-600">-{데이터.납부세액.toLocaleString('ko-KR')}</span>
                    )}
                  </td>
                  <td className="border border-gray-200 px-3 py-2 text-right">
                    {데이터.납부세액 === 0 ? (
                      <span className="text-blue-600 font-semibold">{데이터.세후인출액.toLocaleString('ko-KR')}</span>
                    ) : (
                      <span className="text-gray-700">{데이터.세후인출액.toLocaleString('ko-KR')}</span>
                    )}
                  </td>
                  <td className="border border-gray-200 px-3 py-2 text-right font-semibold">
                    {데이터.기말자산.toLocaleString('ko-KR')}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* 주의사항 */}
      <div className="mt-4 p-3 bg-yellow-50 rounded-md border-l-4 border-yellow-400">
        <h4 className="font-semibold text-yellow-800 mb-2">⚠️ 시뮬레이션 주의사항</h4>
        <ul className="text-sm text-yellow-700 space-y-1">
          <li>• 이 시뮬레이션은 일정한 수익률과 인출액을 가정한 이론적 계산입니다.</li>
          <li>• 실제 투자 수익률은 시장 상황에 따라 변동될 수 있습니다.</li>
          <li>• 인플레이션, 의료비 증가 등 추가 비용은 고려되지 않았습니다.</li>
          <li>• 연금 고갈에 대비한 추가적인 노후 준비가 필요할 수 있습니다.</li>
        </ul>
      </div>

      {/* 개선 제안 */}
      {지속가능년수 < 25 && (
        <div className="mt-4 p-3 bg-blue-50 rounded-md border-l-4 border-blue-400">
          <h4 className="font-semibold text-blue-800 mb-2">💡 연금 지속성 개선 방안</h4>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• <strong>납입액 증가:</strong> 현재보다 더 많은 금액을 연금에 납입</li>
            <li>• <strong>수익률 개선:</strong> 적극적 투자 상품으로 포트폴리오 조정</li>
            <li>• <strong>인출액 조정:</strong> 연간 인출 금액을 줄여 자산 지속성 향상</li>
            <li>• <strong>은퇴 연기:</strong> 은퇴 시점을 늦춰 납입 기간 연장</li>
          </ul>
        </div>
      )}
    </div>
  );
}