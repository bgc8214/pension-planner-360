import React from 'react';
import { usePensionContext } from '../context/PensionContext';
import { formatNumber } from '../utils/formatters';

export function SummaryCards() {
  const { 상태 } = usePensionContext();
  const { 세액공제, 미래자산, 자산변화시뮬레이션, 투자비교 } = 상태.결과값;

  const cards = [
    {
      title: '💰 연간 세액공제',
      value: `${formatNumber(세액공제.예상환급액)}원`,
      subtitle: `총 납입액 ${formatNumber(세액공제.총납입액)}원`,
      color: 'bg-gradient-to-br from-blue-500 to-blue-600',
    },
    {
      title: '📈 예상 총 자산',
      value: `${formatNumber(미래자산.총미래가치)}원`,
      subtitle: `원금 ${formatNumber(미래자산.총납입원금)}원 + 수익 ${formatNumber(미래자산.총예상수익)}원`,
      color: 'bg-gradient-to-br from-green-500 to-green-600',
    },
    {
      title: '🎯 연금 지속 기간',
      value: 자산변화시뮬레이션.지속가능년수 > 0
        ? `약 ${자산변화시뮬레이션.지속가능년수}년`
        : '-',
      subtitle: 자산변화시뮬레이션.예상고갈나이 > 0
        ? `${자산변화시뮬레이션.예상고갈나이}세까지 수령 가능`
        : '데이터를 입력해주세요',
      color: 'bg-gradient-to-br from-purple-500 to-purple-600',
    },
    {
      title: '✨ 연금계좌 세금 절약',
      value: `${formatNumber(투자비교.절약효과.세금절약액)}원`,
      subtitle: `일반계좌 대비 ${투자비교.절약효과.절약률}% 절약`,
      color: 'bg-gradient-to-br from-orange-500 to-orange-600',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`${card.color} text-white rounded-lg p-6 shadow-lg`}
        >
          <h3 className="text-sm font-semibold opacity-90 mb-2">{card.title}</h3>
          <p className="text-2xl md:text-3xl font-bold mb-1">{card.value}</p>
          <p className="text-xs md:text-sm opacity-80">{card.subtitle}</p>
        </div>
      ))}
    </div>
  );
}
