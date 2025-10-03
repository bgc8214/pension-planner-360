import React from 'react';
import { usePensionContext } from '../context/PensionContext';

export function InputModule2() {
  const { 상태, 입력값업데이트 } = usePensionContext();
  const { 입력값 } = 상태;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
        📈 모듈 2: 미래 자산 시뮬레이터
        <span className="ml-2 text-sm font-normal text-gray-600">(연금 성장 시뮬레이션)</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            현재 나이
          </label>
          <input
            type="number"
            value={입력값.현재나이}
            onChange={(e) => 입력값업데이트('현재나이', Number(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="35"
            min="20"
            max="70"
          />
          <div className="text-xs text-gray-500 mt-1">
            {입력값.현재나이}세
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            은퇴 예정 나이
          </label>
          <input
            type="number"
            value={입력값.은퇴나이}
            onChange={(e) => 입력값업데이트('은퇴나이', Number(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="60"
            min={입력값.현재나이 + 1}
            max="80"
          />
          <div className="text-xs text-gray-500 mt-1">
            {입력값.은퇴나이}세 (납입기간: {입력값.은퇴나이 - 입력값.현재나이}년)
          </div>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            연평균 수익률
          </label>
          <div className="flex items-center space-x-2">
            <input
              type="range"
              min="0"
              max="15"
              step="0.1"
              value={입력값.연평균수익률}
              onChange={(e) => 입력값업데이트('연평균수익률', Number(e.target.value))}
              className="flex-1"
            />
            <input
              type="number"
              value={입력값.연평균수익률}
              onChange={(e) => 입력값업데이트('연평균수익률', Number(e.target.value))}
              className="w-20 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              min="0"
              max="15"
              step="0.1"
            />
            <span className="text-sm text-gray-700">%</span>
          </div>
          <div className="text-xs text-gray-500 mt-1">
            연 {입력값.연평균수익률}% 수익률 기준
          </div>
        </div>
      </div>

      <div className="mt-4 p-3 bg-green-50 rounded-md">
        <p className="text-sm text-green-700">
          💡 <strong>참고:</strong> 과거 국내 연금펀드 평균 수익률은 연 4-6% 수준입니다. 
          보수적으로 3-5%, 적극적으로 6-8% 수익률을 가정해보세요.
        </p>
      </div>
    </div>
  );
}