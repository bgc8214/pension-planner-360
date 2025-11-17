import React from 'react';
import { usePensionContext } from '../context/PensionContext';
import { formatNumber } from '../utils/formatters';

export function SummaryCards() {
  const { 상태 } = usePensionContext();
  const { 세액공제, 미래자산, 자산변화시뮬레이션, 투자비교 } = 상태.결과값;

  const cards = [
    {
      title: '연간 세액공제',
      value: `${formatNumber(세액공제.예상환급액)}원`,
      subtitle: `총 납입액 ${formatNumber(세액공제.총납입액)}원`,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: 'from-blue-500 to-cyan-500',
      accent: 'text-blue-600',
      bgAccent: 'bg-blue-100',
    },
    {
      title: '예상 총 자산',
      value: `${formatNumber(미래자산.총미래가치)}원`,
      subtitle: `원금 ${formatNumber(미래자산.총납입원금)}원 + 수익 ${formatNumber(미래자산.총예상수익)}원`,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      gradient: 'from-emerald-500 to-teal-500',
      accent: 'text-emerald-600',
      bgAccent: 'bg-emerald-100',
    },
    {
      title: '연금 지속 기간',
      value: 자산변화시뮬레이션.지속가능년수 > 0
        ? `약 ${자산변화시뮬레이션.지속가능년수}년`
        : '-',
      subtitle: 자산변화시뮬레이션.예상고갈나이 > 0
        ? `${자산변화시뮬레이션.예상고갈나이}세까지 수령 가능`
        : '데이터를 입력해주세요',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: 'from-purple-500 to-violet-500',
      accent: 'text-purple-600',
      bgAccent: 'bg-purple-100',
    },
    {
      title: '연금계좌 세금 절약',
      value: `${formatNumber(투자비교.절약효과.세금절약액)}원`,
      subtitle: `일반계좌 대비 ${투자비교.절약효과.절약률}% 절약`,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      gradient: 'from-amber-500 to-orange-500',
      accent: 'text-amber-600',
      bgAccent: 'bg-amber-100',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`glass-card p-6 hover:shadow-card-hover transition-all duration-300 group animate-scale-in border-l-4 border-${card.gradient.split(' ')[0].replace('from-', '')}`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="flex items-start justify-between mb-4">
            <div className={`w-12 h-12 rounded-xl ${card.bgAccent} flex items-center justify-center ${card.accent} group-hover:scale-110 transition-transform duration-300`}>
              {card.icon}
            </div>
            <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">
              #{index + 1}
            </div>
          </div>
          <h3 className="text-sm font-medium text-slate-600 mb-3">{card.title}</h3>
          <p className="metric-value mb-2">{card.value}</p>
          <p className="text-sm text-slate-500">{card.subtitle}</p>
        </div>
      ))}
    </div>
  );
}
