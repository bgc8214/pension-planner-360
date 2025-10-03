import React, { useState, useEffect } from 'react';
import { usePensionContext } from '../context/PensionContext';
import { formatInputNumber, parseFormattedNumber, sanitizeInput } from '../utils/formatters';

export function InputModule1() {
  const { 상태, 입력값업데이트 } = usePensionContext();
  const { 입력값 } = 상태;

  // 입력 중인 상태를 관리하기 위한 local state
  const [총급여액입력중, set총급여액입력중] = useState(false);
  const [총급여액표시값, set총급여액표시값] = useState('');

  // 입력값이 변경될 때 표시값 동기화
  useEffect(() => {
    if (!총급여액입력중) {
      set총급여액표시값(formatInputNumber(입력값.총급여액.toString()));
    }
  }, [입력값.총급여액, 총급여액입력중]);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
        📊 모듈 1: 연간 이득 계산기
        <span className="ml-2 text-sm font-normal text-gray-600">(세액공제 시뮬레이션)</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            총급여액
          </label>
          <input
            type="text"
            value={총급여액표시값}
            onFocus={() => {
              set총급여액입력중(true);
            }}
            onChange={(e) => {
              const sanitizedValue = sanitizeInput(e.target.value);
              set총급여액표시값(sanitizedValue);
              const numericValue = parseFormattedNumber(sanitizedValue);
              입력값업데이트('총급여액', numericValue);
            }}
            onBlur={() => {
              set총급여액입력중(false);
              const numericValue = parseFormattedNumber(총급여액표시값);
              입력값업데이트('총급여액', numericValue);
            }}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="90,000,000"
          />
          <div className="text-xs text-gray-500 mt-1">원</div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            연금저축 납입액 (세액공제 대상)
          </label>
          <input
            type="text"
            value={formatInputNumber(입력값.연금저축납입액.toString())}
            onChange={(e) => {
              const numericValue = parseFormattedNumber(e.target.value);
              입력값업데이트('연금저축납입액', numericValue);
            }}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="6,000,000"
          />
          <div className="text-xs text-gray-500 mt-1">원 (한도: 600만원)</div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            연금저축 추가납입액 (한도초과분)
          </label>
          <input
            type="text"
            value={formatInputNumber(입력값.연금저축한도초과납입액.toString())}
            onChange={(e) => {
              const numericValue = parseFormattedNumber(e.target.value);
              입력값업데이트('연금저축한도초과납입액', numericValue);
            }}
            className="w-full px-3 py-2 border border-orange-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="0"
          />
          <div className="text-xs text-orange-600 mt-1">원 (세액공제 없음, 수령시 비과세, 연금저축 총한도 1,800만원)</div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            IRP 납입액 (세액공제 대상)
          </label>
          <input
            type="text"
            value={formatInputNumber(입력값.IRP납입액.toString())}
            onChange={(e) => {
              const numericValue = parseFormattedNumber(e.target.value);
              입력값업데이트('IRP납입액', numericValue);
            }}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="3,000,000"
          />
          <div className="text-xs text-gray-500 mt-1">원 (연금저축과 합쳐 900만원 한도)</div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            IRP 추가납입액 (한도초과분)
          </label>
          <input
            type="text"
            value={formatInputNumber(입력값.IRP한도초과납입액.toString())}
            onChange={(e) => {
              const numericValue = parseFormattedNumber(e.target.value);
              입력값업데이트('IRP한도초과납입액', numericValue);
            }}
            className="w-full px-3 py-2 border border-orange-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="0"
          />
          <div className="text-xs text-orange-600 mt-1">원 (세액공제 없음, 수령시 비과세, 전체 연금계좌 한도 1,800만원)</div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            만 50세 이상 여부
          </label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="만50세이상"
                checked={입력값.만50세이상}
                onChange={() => 입력값업데이트('만50세이상', true)}
                className="mr-2"
              />
              예
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="만50세이상"
                checked={!입력값.만50세이상}
                onChange={() => 입력값업데이트('만50세이상', false)}
                className="mr-2"
              />
              아니오
            </label>
          </div>
        </div>
      </div>

      <div className="mt-4 p-3 bg-blue-50 rounded-md">
        <p className="text-sm text-blue-700">
          💡 <strong>2025년 기준:</strong>
          <br />• 세액공제: 연금저축 600만원, IRP 포함 총 900만원까지
          <br />• 총 납입한도: 연금저축 1,800만원, 전체 연금계좌 1,800만원
        </p>
      </div>

      {/* 한도 초과 경고 메시지 */}
      {((입력값.연금저축납입액 + 입력값.연금저축한도초과납입액 + 입력값.IRP납입액 + 입력값.IRP한도초과납입액) > 18000000) && (
        <div className="mt-4 p-3 bg-red-50 rounded-md border-l-4 border-red-400">
          <p className="text-sm text-red-800">
            ⚠️ <strong>경고:</strong> 전체 연금계좌 납입액이 연간 한도 1,800만원을 초과합니다.
            현재 총 납입액: {formatInputNumber(((입력값.연금저축납입액 + 입력값.연금저축한도초과납입액 + 입력값.IRP납입액 + 입력값.IRP한도초과납입액)).toString())}원
          </p>
        </div>
      )}

      {((입력값.연금저축납입액 + 입력값.IRP납입액) > 9000000) && (
        <div className="mt-4 p-3 bg-orange-50 rounded-md border-l-4 border-orange-400">
          <p className="text-sm text-orange-800">
            📝 <strong>안내:</strong> 세액공제 대상 납입액이 한도 900만원을 초과합니다.
            초과분은 세액공제 혜택이 없지만 수령시 비과세로 처리됩니다.
          </p>
        </div>
      )}
    </div>
  );
}