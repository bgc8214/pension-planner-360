import React from 'react';
import { usePensionContext } from '../context/PensionContext';
import { formatInputNumber, parseFormattedNumber } from '../utils/formatters';

export function InputModule3() {
  const { 상태, 입력값업데이트 } = usePensionContext();
  const { 입력값 } = 상태;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
        💰 모듈 3: 전략적 연금 수령 시뮬레이터
        <span className="ml-2 text-sm font-normal text-gray-600">(세금 최적화)</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            연간 수령 희망액
          </label>
          <input
            type="text"
            value={formatInputNumber(입력값.연간수령액.toString())}
            onChange={(e) => {
              const numericValue = parseFormattedNumber(e.target.value);
              입력값업데이트('연간수령액', numericValue);
            }}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="50,000,000"
          />
          <div className="text-xs text-gray-500 mt-1">
            원 (월 {Math.round(입력값.연간수령액 / 12).toLocaleString('ko-KR')}원)
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            연금 외 소득
          </label>
          <input
            type="text"
            value={formatInputNumber(입력값.연금외소득.toString())}
            onChange={(e) => {
              const numericValue = parseFormattedNumber(e.target.value);
              입력값업데이트('연금외소득', numericValue);
            }}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="0"
          />
          <div className="text-xs text-gray-500 mt-1">원</div>
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <div className="p-3 bg-yellow-50 rounded-md">
          <p className="text-sm text-yellow-700">
            💡 <strong>1,500만원 기준:</strong> 연간 수령액이 1,500만원 이하면 저율분리과세(5.5% 등) 적용
          </p>
        </div>
        <div className="p-3 bg-purple-50 rounded-md">
          <p className="text-sm text-purple-700">
            📋 <strong>1,500만원 초과:</strong> 종합과세 vs 16.5% 분리과세 중 유리한 방식 선택 가능
          </p>
        </div>
      </div>
    </div>
  );
}