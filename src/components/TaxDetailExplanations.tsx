import React from 'react';
import { DetailToggle } from './DetailToggle';

// 연금소득공제 상세 설명
export function PensionIncomeDeductionDetail() {
  return (
    <DetailToggle title="연금소득공제란?" iconColor="text-green-500">
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">📋 연금소득공제 개념</h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            연금소득공제는 <strong>연금 수령액에서 일정 금액을 공제</strong>해주는 제도입니다. 
            연금은 노후 생활을 위한 소득이므로, 세금 부담을 덜어주기 위해 정부에서 마련한 혜택입니다.
          </p>
        </div>
        
        <div className="bg-green-50 p-3 rounded-md">
          <h5 className="font-semibold text-green-800 mb-2">💰 공제 구간별 계산법</h5>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-100">
                  <th className="border border-green-200 px-2 py-1 text-left">연금 수령액</th>
                  <th className="border border-green-200 px-2 py-1 text-left">공제 계산법</th>
                  <th className="border border-green-200 px-2 py-1 text-left">예시</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-green-200 px-2 py-1">350만원 이하</td>
                  <td className="border border-green-200 px-2 py-1"><strong>전액 공제</strong></td>
                  <td className="border border-green-200 px-2 py-1">300만원 → 300만원 공제</td>
                </tr>
                <tr className="bg-green-25">
                  <td className="border border-green-200 px-2 py-1">350만원 ~ 700만원</td>
                  <td className="border border-green-200 px-2 py-1">350만원 + <strong>(초과액 × 40%)</strong></td>
                  <td className="border border-green-200 px-2 py-1">500만원 → 350 + (150×0.4) = 410만원</td>
                </tr>
                <tr>
                  <td className="border border-green-200 px-2 py-1">700만원 ~ 1,400만원</td>
                  <td className="border border-green-200 px-2 py-1">490만원 + <strong>(초과액 × 20%)</strong></td>
                  <td className="border border-green-200 px-2 py-1">1,000만원 → 490 + (300×0.2) = 550만원</td>
                </tr>
                <tr className="bg-green-25">
                  <td className="border border-green-200 px-2 py-1">1,400만원 초과</td>
                  <td className="border border-green-200 px-2 py-1">630만원 + <strong>(초과액 × 10%)</strong></td>
                  <td className="border border-green-200 px-2 py-1">2,000만원 → 630 + (600×0.1) = 690만원</td>
                </tr>
                <tr>
                  <td className="border border-green-200 px-2 py-1 font-bold">최대 한도</td>
                  <td className="border border-green-200 px-2 py-1 font-bold text-red-600">900만원</td>
                  <td className="border border-green-200 px-2 py-1">5,000만원 → 900만원 (한도 적용)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-blue-50 p-3 rounded-md">
          <h5 className="font-semibold text-blue-800 mb-2">💡 왜 이렇게 계산하나요?</h5>
          <ul className="text-blue-700 text-sm space-y-1">
            <li>• <strong>소액 연금 우대:</strong> 적은 연금은 거의 세금을 내지 않도록 배려</li>
            <li>• <strong>점진적 부담:</strong> 연금액이 많아질수록 점차 세금 부담 증가</li>
            <li>• <strong>노후 보장:</strong> 기본 생활비는 세금 없이 보장</li>
          </ul>
        </div>
      </div>
    </DetailToggle>
  );
}

// 인적공제 상세 설명
export function PersonalDeductionDetail() {
  return (
    <DetailToggle title="인적공제란?" iconColor="text-purple-500">
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">👨‍👩‍👧‍👦 인적공제 개념</h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            인적공제는 <strong>납세자 본인과 부양가족에 대해 일정 금액을 소득에서 빼주는</strong> 제도입니다. 
            기본적인 생활비는 과세하지 않겠다는 정부의 정책입니다.
          </p>
        </div>

        <div className="bg-purple-50 p-3 rounded-md">
          <h5 className="font-semibold text-purple-800 mb-2">💰 인적공제 항목별 금액</h5>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-purple-100">
                  <th className="border border-purple-200 px-2 py-1 text-left">구분</th>
                  <th className="border border-purple-200 px-2 py-1 text-left">대상</th>
                  <th className="border border-purple-200 px-2 py-1 text-right">공제액</th>
                  <th className="border border-purple-200 px-2 py-1 text-left">조건</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-purple-200 px-2 py-1 font-semibold">기본공제</td>
                  <td className="border border-purple-200 px-2 py-1">본인</td>
                  <td className="border border-purple-200 px-2 py-1 text-right font-bold">150만원</td>
                  <td className="border border-purple-200 px-2 py-1">무조건 적용</td>
                </tr>
                <tr className="bg-purple-25">
                  <td className="border border-purple-200 px-2 py-1 font-semibold">배우자</td>
                  <td className="border border-purple-200 px-2 py-1">배우자</td>
                  <td className="border border-purple-200 px-2 py-1 text-right">150만원</td>
                  <td className="border border-purple-200 px-2 py-1">연소득 100만원 이하</td>
                </tr>
                <tr>
                  <td className="border border-purple-200 px-2 py-1 font-semibold">부양가족</td>
                  <td className="border border-purple-200 px-2 py-1">직계존속</td>
                  <td className="border border-purple-200 px-2 py-1 text-right">150만원</td>
                  <td className="border border-purple-200 px-2 py-1">60세 이상, 연소득 100만원 이하</td>
                </tr>
                <tr className="bg-purple-25">
                  <td className="border border-purple-200 px-2 py-1 font-semibold">부양가족</td>
                  <td className="border border-purple-200 px-2 py-1">직계비속</td>
                  <td className="border border-purple-200 px-2 py-1 text-right">150만원</td>
                  <td className="border border-purple-200 px-2 py-1">20세 이하, 연소득 100만원 이하</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-yellow-50 p-3 rounded-md">
          <h5 className="font-semibold text-yellow-800 mb-2">📝 연금 수령자의 경우</h5>
          <p className="text-yellow-700 text-sm">
            연금을 받는 은퇴자의 경우, 대부분 <strong>본인 기본공제 150만원</strong>만 적용됩니다. 
            배우자나 부양가족이 있다면 추가 공제가 가능하지만, 
            시뮬레이터에서는 <strong>기본적으로 150만원</strong>으로 계산합니다.
          </p>
        </div>
      </div>
    </DetailToggle>
  );
}

// 누진세율표 상세 설명
export function ProgressiveTaxDetail() {
  return (
    <DetailToggle title="누진세율표와 산출세액이란?" iconColor="text-red-500">
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">📊 누진세율표 개념</h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            누진세율표는 <strong>소득이 많을수록 더 높은 세율을 적용</strong>하는 제도입니다. 
            소득 구간별로 다른 세율을 적용하여 <strong>소득 재분배 효과</strong>를 만듭니다.
          </p>
        </div>

        <div className="bg-red-50 p-3 rounded-md">
          <h5 className="font-semibold text-red-800 mb-2">📋 2025년 소득세 누진세율표</h5>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-red-100">
                  <th className="border border-red-200 px-2 py-1 text-left">과세표준</th>
                  <th className="border border-red-200 px-2 py-1 text-right">세율</th>
                  <th className="border border-red-200 px-2 py-1 text-right">누진공제</th>
                  <th className="border border-red-200 px-2 py-1 text-left">계산 예시</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-red-200 px-2 py-1">1,400만원 이하</td>
                  <td className="border border-red-200 px-2 py-1 text-right font-bold">6%</td>
                  <td className="border border-red-200 px-2 py-1 text-right">0원</td>
                  <td className="border border-red-200 px-2 py-1">1,000만원 × 6% = 60만원</td>
                </tr>
                <tr className="bg-red-25">
                  <td className="border border-red-200 px-2 py-1">1,400만원 ~ 5,000만원</td>
                  <td className="border border-red-200 px-2 py-1 text-right font-bold">15%</td>
                  <td className="border border-red-200 px-2 py-1 text-right">126만원</td>
                  <td className="border border-red-200 px-2 py-1">3,000만원 × 15% - 126 = 324만원</td>
                </tr>
                <tr>
                  <td className="border border-red-200 px-2 py-1">5,000만원 ~ 8,800만원</td>
                  <td className="border border-red-200 px-2 py-1 text-right font-bold">24%</td>
                  <td className="border border-red-200 px-2 py-1 text-right">576만원</td>
                  <td className="border border-red-200 px-2 py-1">6,000만원 × 24% - 576 = 864만원</td>
                </tr>
                <tr className="bg-red-25">
                  <td className="border border-red-200 px-2 py-1">8,800만원 ~ 1억 5,000만원</td>
                  <td className="border border-red-200 px-2 py-1 text-right font-bold">35%</td>
                  <td className="border border-red-200 px-2 py-1 text-right">1,544만원</td>
                  <td className="border border-red-200 px-2 py-1">1억원 × 35% - 1,544 = 1,956만원</td>
                </tr>
                <tr>
                  <td className="border border-red-200 px-2 py-1">1억 5,000만원 ~ 3억원</td>
                  <td className="border border-red-200 px-2 py-1 text-right font-bold">38%</td>
                  <td className="border border-red-200 px-2 py-1 text-right">1,994만원</td>
                  <td className="border border-red-200 px-2 py-1">2억원 × 38% - 1,994 = 5,606만원</td>
                </tr>
                <tr className="bg-red-25">
                  <td className="border border-red-200 px-2 py-1">3억원 ~ 5억원</td>
                  <td className="border border-red-200 px-2 py-1 text-right font-bold">40%</td>
                  <td className="border border-red-200 px-2 py-1 text-right">2,594만원</td>
                  <td className="border border-red-200 px-2 py-1">4억원 × 40% - 2,594 = 1억 1,406만원</td>
                </tr>
                <tr>
                  <td className="border border-red-200 px-2 py-1">5억원 ~ 10억원</td>
                  <td className="border border-red-200 px-2 py-1 text-right font-bold">42%</td>
                  <td className="border border-red-200 px-2 py-1 text-right">3,594만원</td>
                  <td className="border border-red-200 px-2 py-1">7억원 × 42% - 3,594 = 2억 5,806만원</td>
                </tr>
                <tr className="bg-red-25">
                  <td className="border border-red-200 px-2 py-1">10억원 초과</td>
                  <td className="border border-red-200 px-2 py-1 text-right font-bold">45%</td>
                  <td className="border border-red-200 px-2 py-1 text-right">6,594만원</td>
                  <td className="border border-red-200 px-2 py-1">15억원 × 45% - 6,594 = 6억 156만원</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-blue-50 p-3 rounded-md">
          <h5 className="font-semibold text-blue-800 mb-2">🧮 산출세액 계산 예시</h5>
          <div className="text-blue-700 text-sm space-y-2">
            <p><strong>과세표준이 3,950만원인 경우:</strong></p>
            <div className="bg-white p-2 rounded border">
              <p>• 해당 구간: 1,400만원 ~ 5,000만원 (15% 구간)</p>
              <p>• 계산: 3,950만원 × 15% - 126만원 = <strong>466.5만원</strong></p>
              <p>• 지방소득세: 466.5만원 × 10% = <strong>46.65만원</strong></p>
              <p>• 총 세액: 466.5 + 46.65 = <strong>513.15만원</strong></p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 p-3 rounded-md">
          <h5 className="font-semibold text-green-800 mb-2">💡 누진공제란?</h5>
          <p className="text-green-700 text-sm">
            누진공제는 <strong>계산을 간편하게 하기 위한 값</strong>입니다. 
            구간별로 나누어 계산하지 않고, <strong>전체 금액에 해당 구간의 세율을 곱한 후 누진공제액을 빼면</strong> 
            같은 결과가 나옵니다.
          </p>
        </div>
      </div>
    </DetailToggle>
  );
}

// 분리과세 상세 설명
export function SeparateTaxDetail() {
  return (
    <DetailToggle title="16.5% 분리과세란?" iconColor="text-orange-500">
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">🏦 분리과세 개념</h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            분리과세는 <strong>다른 소득과 합산하지 않고 별도로 과세</strong>하는 제도입니다. 
            연금소득의 경우 <strong>16.5% 단일세율</strong>을 적용하여 간단하게 계산합니다.
          </p>
        </div>

        <div className="bg-orange-50 p-3 rounded-md">
          <h5 className="font-semibold text-orange-800 mb-2">📊 분리과세 vs 종합과세</h5>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-orange-100">
                  <th className="border border-orange-200 px-2 py-1 text-left">구분</th>
                  <th className="border border-orange-200 px-2 py-1 text-left">종합과세</th>
                  <th className="border border-orange-200 px-2 py-1 text-left">분리과세</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-orange-200 px-2 py-1 font-semibold">세율</td>
                  <td className="border border-orange-200 px-2 py-1">6% ~ 45% (누진)</td>
                  <td className="border border-orange-200 px-2 py-1"><strong>16.5% (단일)</strong></td>
                </tr>
                <tr className="bg-orange-25">
                  <td className="border border-orange-200 px-2 py-1 font-semibold">공제</td>
                  <td className="border border-orange-200 px-2 py-1">연금소득공제 + 인적공제</td>
                  <td className="border border-orange-200 px-2 py-1"><strong>공제 없음</strong></td>
                </tr>
                <tr>
                  <td className="border border-orange-200 px-2 py-1 font-semibold">계산</td>
                  <td className="border border-orange-200 px-2 py-1">복잡 (구간별 계산)</td>
                  <td className="border border-orange-200 px-2 py-1"><strong>간단 (연금액 × 16.5%)</strong></td>
                </tr>
                <tr className="bg-orange-25">
                  <td className="border border-orange-200 px-2 py-1 font-semibold">다른 소득</td>
                  <td className="border border-orange-200 px-2 py-1">합산하여 계산</td>
                  <td className="border border-orange-200 px-2 py-1"><strong>별도 계산</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-blue-50 p-3 rounded-md">
          <h5 className="font-semibold text-blue-800 mb-2">🤔 언제 분리과세가 유리한가요?</h5>
          <ul className="text-blue-700 text-sm space-y-1">
            <li>• <strong>연금액이 많은 경우:</strong> 누진세율이 16.5%보다 높을 때</li>
            <li>• <strong>다른 소득이 많은 경우:</strong> 합산시 높은 구간에 적용될 때</li>
            <li>• <strong>계산이 복잡한 경우:</strong> 간단한 계산을 원할 때</li>
          </ul>
        </div>

        <div className="bg-yellow-50 p-3 rounded-md">
          <h5 className="font-semibold text-yellow-800 mb-2">💡 16.5% 구성</h5>
          <div className="text-yellow-700 text-sm">
            <p>• <strong>소득세:</strong> 15%</p>
            <p>• <strong>지방소득세:</strong> 1.5% (소득세의 10%)</p>
            <p>• <strong>합계:</strong> 16.5%</p>
          </div>
        </div>
      </div>
    </DetailToggle>
  );
}