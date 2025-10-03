import React from 'react';
import { usePensionContext } from '../context/PensionContext';
import { formatNumber } from '../utils/formatters';

export function ResultModule5() {
  const { 상태 } = usePensionContext();
  const { 투자비교 } = 상태.결과값;
  const { 현재나이, 은퇴나이, 연간수령액 } = 상태.입력값;

  const 투자기간 = 은퇴나이 - 현재나이;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
        📊 모듈 5: 투자 방식 비교 분석
        <span className="ml-2 text-sm font-normal text-gray-600">(일반계좌 해외주식 vs 연금계좌 해외주식 ETF)</span>
      </h2>

      <div className="mb-4 p-3 bg-blue-50 rounded-md border-l-4 border-blue-400">
        <p className="text-sm text-blue-800">
          <strong>📋 비교 기준:</strong> 동일한 금액을 {투자기간}년간 투자 후, 은퇴 시점부터 매년 {formatNumber(연간수령액)}원씩 수령
          <br />• <strong>QQQ ETF 기준:</strong> 배당수익률 0.47%, 연평균 수익률 {상태.입력값.연평균수익률}%
          <br />• <strong>일반계좌:</strong> 은퇴 후에도 계속 보유하며, 매년 필요한 만큼만 매도 (배당세 15.4% + 양도소득세 22%)
          <br />• <strong>연금계좌:</strong> 운용 중 비과세, 매년 연금 수령 시 세금 납부 (비과세원금 우선 인출)
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* 일반계좌 투자 */}
        <div className="border border-red-200 rounded-lg p-4 bg-red-50">
          <h3 className="text-lg font-bold text-red-800 mb-3 flex items-center">
            🏦 일반계좌 해외주식 직접투자
          </h3>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-700">총 투자원금:</span>
              <span className="font-medium">{formatNumber(투자비교.일반계좌투자.총투자원금)}원</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">세전 총 평가액:</span>
              <span className="font-medium">{formatNumber(투자비교.일반계좌투자.세전총평가액)}원</span>
            </div>
            <div className="flex justify-between border-t pt-2">
              <span className="text-red-600">배당세 (15.4%):</span>
              <span className="font-medium text-red-600">-{formatNumber(투자비교.일반계좌투자.배당세누적)}원</span>
              <div className="text-xs text-gray-500 mt-1">QQQ 배당수익률 0.47% 기준</div>
            </div>
            <div className="flex justify-between">
              <span className="text-red-600">양도소득세 (22%):</span>
              <span className="font-medium text-red-600">-{formatNumber(투자비교.일반계좌투자.양도소득세)}원</span>
              <div className="text-xs text-gray-500 mt-1">자본이득에 대해서만 적용</div>
            </div>
            <div className="flex justify-between font-bold text-red-700 border-t pt-2">
              <span>총 세금:</span>
              <span>-{formatNumber(투자비교.일반계좌투자.총세금)}원</span>
            </div>
            <div className="flex justify-between font-bold text-lg text-red-800 border-t pt-2 bg-red-100 px-2 py-1 rounded">
              <span>세후 수령액:</span>
              <span>{formatNumber(투자비교.일반계좌투자.세후수령액)}원</span>
            </div>
          </div>
        </div>

        {/* 연금계좌 투자 */}
        <div className="border border-blue-200 rounded-lg p-4 bg-blue-50">
          <h3 className="text-lg font-bold text-blue-800 mb-3 flex items-center">
            🏛️ 연금계좌 해외주식 ETF
          </h3>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-700">총 투자원금:</span>
              <span className="font-medium">{formatNumber(투자비교.연금계좌투자.총투자원금)}원</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">세전 총 평가액:</span>
              <span className="font-medium">{formatNumber(투자비교.연금계좌투자.세전총평가액)}원</span>
            </div>
            <div className="flex justify-between border-t pt-2">
              <span className="text-green-600">비과세 원금:</span>
              <span className="font-medium text-green-600">{formatNumber(투자비교.연금계좌투자.비과세원금)}원</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">과세대상 수익:</span>
              <span className="font-medium">{formatNumber(투자비교.연금계좌투자.과세대상수익)}원</span>
            </div>
            <div className="flex justify-between">
              <span className="text-orange-600">연금소득세:</span>
              <span className="font-medium text-orange-600">-{formatNumber(투자비교.연금계좌투자.연금소득세)}원</span>
              <div className="text-xs text-gray-500 mt-1">
                과세대상 수익에 대해 적용
                <br />연간 수령액 1,500만원 이하 시 5.5%
              </div>
            </div>
            <div className="flex justify-between font-bold text-blue-700 border-t pt-2">
              <span>총 세금:</span>
              <span>-{formatNumber(투자비교.연금계좌투자.총세금)}원</span>
            </div>
            <div className="flex justify-between font-bold text-lg text-blue-800 border-t pt-2 bg-blue-100 px-2 py-1 rounded">
              <span>세후 수령액:</span>
              <span>{formatNumber(투자비교.연금계좌투자.세후수령액)}원</span>
            </div>
          </div>
        </div>
      </div>

      {/* 절약 효과 요약 */}
      <div className="border border-green-200 rounded-lg p-4 bg-green-50">
        <h3 className="text-lg font-bold text-green-800 mb-3 flex items-center">
          💰 연금계좌 투자의 세제혜택
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-3 bg-white rounded-lg border border-green-200">
            <div className="text-2xl font-bold text-green-600">
              {formatNumber(투자비교.절약효과.세금절약액)}원
            </div>
            <div className="text-sm text-gray-600 mt-1">세금 절약 금액</div>
          </div>

          <div className="text-center p-3 bg-white rounded-lg border border-green-200">
            <div className="text-2xl font-bold text-green-600">
              {투자비교.절약효과.절약률}%
            </div>
            <div className="text-sm text-gray-600 mt-1">세금 절약률</div>
          </div>

          <div className="text-center p-3 bg-white rounded-lg border border-green-200">
            <div className="text-2xl font-bold text-green-600">
              +{투자비교.절약효과.추가수익률}%
            </div>
            <div className="text-sm text-gray-600 mt-1">추가 수익률 효과</div>
          </div>
        </div>

        <div className="mt-4 p-3 bg-green-100 rounded-md">
          <p className="text-sm text-green-800">
            <strong>💡 핵심 포인트:</strong>
            <br />• <strong>일반계좌 세금:</strong> 매년 배당금에 15.4% 배당세 + 매도시 양도차익에 22% 양도소득세
            <br />• <strong>연금계좌 세금:</strong> 운용 중 비과세, 수령 시 과세대상 수익에만 연금소득세 (비과세원금 우선 인출)
            <br />• <strong>배당세 15.4% 근거:</strong> 한미조세협정 적용 (미국 15% + 한국 지방세 0.4%)
            <br />• <strong>공정한 비교:</strong> 두 계좌 모두 계속 투자 상태를 유지하므로, 실제 투자 시나리오와 가장 유사합니다.
          </p>
        </div>
      </div>

      {/* 연차별 비교 테이블 */}
      {투자비교.연차별비교데이터.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-bold text-gray-800 mb-3">📈 연차별 자산 및 세금 비교</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse border border-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border border-gray-200 px-3 py-2 text-left">연차 (나이)</th>
                  <th className="border border-gray-200 px-3 py-2 text-right">일반계좌 잔액</th>
                  <th className="border border-gray-200 px-3 py-2 text-right">일반계좌 연간세금</th>
                  <th className="border border-gray-200 px-3 py-2 text-right">연금계좌 잔액</th>
                  <th className="border border-gray-200 px-3 py-2 text-right">연금계좌 연간세금</th>
                  <th className="border border-gray-200 px-3 py-2 text-right">누적 세금 차이</th>
                </tr>
              </thead>
              <tbody>
                {투자비교.연차별비교데이터.map((데이터, index) => {
                  const is첫해 = index === 0;
                  const rowClass = is첫해 ? "bg-yellow-50" : "";

                  return (
                    <tr key={데이터.연차} className={rowClass}>
                      <td className="border border-gray-200 px-3 py-2 font-medium">
                        {데이터.연차}년차 ({데이터.나이}세)
                      </td>
                      <td className="border border-gray-200 px-3 py-2 text-right">
                        {formatNumber(데이터.일반계좌잔액)}원
                      </td>
                      <td className="border border-gray-200 px-3 py-2 text-right">
                        {데이터.일반계좌연간세금 > 0 ? (
                          <span className="text-red-600 font-semibold">
                            -{formatNumber(데이터.일반계좌연간세금)}원
                          </span>
                        ) : (
                          <span className="text-gray-400">-</span>
                        )}
                      </td>
                      <td className="border border-gray-200 px-3 py-2 text-right">
                        {formatNumber(데이터.연금계좌잔액)}원
                      </td>
                      <td className="border border-gray-200 px-3 py-2 text-right">
                        {데이터.연금계좌연간세금 > 0 ? (
                          <span className="text-orange-600">
                            -{formatNumber(데이터.연금계좌연간세금)}원
                          </span>
                        ) : (
                          <span className="text-blue-600 font-semibold">0원</span>
                        )}
                      </td>
                      <td className="border border-gray-200 px-3 py-2 text-right">
                        <span className="text-green-600 font-semibold">
                          +{formatNumber(데이터.누적세금차이)}원
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="mt-3 p-3 bg-gray-50 rounded-md">
            <p className="text-xs text-gray-600">
              • <strong>일반계좌:</strong> 은퇴 후에도 계속 보유하며, 매년 배당세(15.4%)를 납부하고 필요한 만큼만 매도하여 양도세(22%)를 납부합니다.
              <br />• <strong>연금계좌:</strong> 비과세원금을 우선 인출하므로 초기에는 세금이 없거나 적고, 비과세원금 소진 후 연금소득세가 발생합니다.
              <br />• <strong>누적 세금 차이:</strong> 일반계좌 대비 연금계좌에서 절약한 세금의 누적액입니다.
              <br />• <strong>공정한 비교:</strong> 두 계좌 모두 동일한 수익률(연 {상태.입력값.연평균수익률}%)로 계속 운용하면서 비교합니다.
            </p>
          </div>
        </div>
      )}

      <div className="mt-4 p-3 bg-yellow-50 rounded-md border-l-4 border-yellow-400">
        <p className="text-sm text-yellow-800">
          <strong>⚠️ 주의사항:</strong>
          <br />• 연금계좌는 55세 이후 수령 가능하므로 장기 노후자금으로만 활용하세요.
          <br />• 중도인출시 불이익이 있으므로 여유자금으로 투자하세요.
          <br />• 투자상품에 따라 세금 계산이 달라질 수 있습니다.
        </p>
      </div>
    </div>
  );
}