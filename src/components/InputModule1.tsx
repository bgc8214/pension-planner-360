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
    <div className="glass-card p-6 mb-6 hover:shadow-card-hover transition-shadow duration-300">
      <div className="flex items-start gap-4 mb-6">
        <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-display font-bold text-slate-800 mb-1">
            연간 이득 계산기
          </h2>
          <p className="text-sm text-slate-600">세액공제 시뮬레이션</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-700 mb-2">
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
            className="input-field"
            placeholder="90,000,000"
          />
          <div className="text-xs text-slate-500 mt-1">원</div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-700 mb-2">
            연금저축 납입액
          </label>
          <input
            type="text"
            value={formatInputNumber(입력값.연금저축납입액.toString())}
            onChange={(e) => {
              const numericValue = parseFormattedNumber(e.target.value);
              입력값업데이트('연금저축납입액', numericValue);
            }}
            className="input-field"
            placeholder="6,000,000"
          />
          <div className="text-xs text-blue-600 mt-1">세액공제 대상 (한도: 600만원)</div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-700 mb-2">
            연금저축 추가납입액
          </label>
          <input
            type="text"
            value={formatInputNumber(입력값.연금저축한도초과납입액.toString())}
            onChange={(e) => {
              const numericValue = parseFormattedNumber(e.target.value);
              입력값업데이트('연금저축한도초과납입액', numericValue);
            }}
            className="input-field border-orange-300 focus:ring-orange-500 focus:border-orange-500"
            placeholder="0"
          />
          <div className="text-xs text-orange-600 mt-1">한도초과분 (수령시 비과세)</div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-700 mb-2">
            IRP 납입액
          </label>
          <input
            type="text"
            value={formatInputNumber(입력값.IRP납입액.toString())}
            onChange={(e) => {
              const numericValue = parseFormattedNumber(e.target.value);
              입력값업데이트('IRP납입액', numericValue);
            }}
            className="input-field"
            placeholder="3,000,000"
          />
          <div className="text-xs text-blue-600 mt-1">세액공제 대상 (합산 900만원 한도)</div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-700 mb-2">
            IRP 추가납입액
          </label>
          <input
            type="text"
            value={formatInputNumber(입력값.IRP한도초과납입액.toString())}
            onChange={(e) => {
              const numericValue = parseFormattedNumber(e.target.value);
              입력값업데이트('IRP한도초과납입액', numericValue);
            }}
            className="input-field border-orange-300 focus:ring-orange-500 focus:border-orange-500"
            placeholder="0"
          />
          <div className="text-xs text-orange-600 mt-1">한도초과분 (수령시 비과세)</div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-700 mb-2">
            만 50세 이상 여부
          </label>
          <div className="flex items-center gap-4 h-12">
            <label className="flex items-center gap-2 cursor-pointer group">
              <div className="relative">
                <input
                  type="radio"
                  name="만50세이상"
                  checked={입력값.만50세이상}
                  onChange={() => 입력값업데이트('만50세이상', true)}
                  className="peer sr-only"
                />
                <div className="w-5 h-5 rounded-full border-2 border-slate-300 peer-checked:border-blue-500 peer-checked:bg-blue-50 transition-all duration-200"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-blue-600 scale-0 peer-checked:scale-100 transition-transform duration-200"></div>
                </div>
              </div>
              <span className="text-slate-700 group-hover:text-slate-900 transition-colors">예</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer group">
              <div className="relative">
                <input
                  type="radio"
                  name="만50세이상"
                  checked={!입력값.만50세이상}
                  onChange={() => 입력값업데이트('만50세이상', false)}
                  className="peer sr-only"
                />
                <div className="w-5 h-5 rounded-full border-2 border-slate-300 peer-checked:border-blue-500 peer-checked:bg-blue-50 transition-all duration-200"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-blue-600 scale-0 peer-checked:scale-100 transition-transform duration-200"></div>
                </div>
              </div>
              <span className="text-slate-700 group-hover:text-slate-900 transition-colors">아니오</span>
            </label>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center mt-0.5">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-sm text-blue-700 font-semibold mb-2">2025년 기준</p>
            <div className="space-y-1 text-sm text-slate-600">
              <p>• 세액공제: 연금저축 600만원, IRP 포함 총 900만원까지</p>
              <p>• 총 납입한도: 연금저축 1,800만원, 전체 연금계좌 1,800만원</p>
            </div>
          </div>
        </div>
      </div>

      {/* 한도 초과 경고 메시지 */}
      {((입력값.연금저축납입액 + 입력값.연금저축한도초과납입액 + 입력값.IRP납입액 + 입력값.IRP한도초과납입액) > 18000000) && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl animate-slide-in-right">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-lg flex items-center justify-center mt-0.5">
              <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-sm text-red-700 font-semibold mb-1">경고</p>
              <p className="text-sm text-slate-600">
                전체 연금계좌 납입액이 연간 한도 1,800만원을 초과합니다.
                <br />
                <span className="text-red-600 font-medium">현재 총 납입액: {formatInputNumber(((입력값.연금저축납입액 + 입력값.연금저축한도초과납입액 + 입력값.IRP납입액 + 입력값.IRP한도초과납입액)).toString())}원</span>
              </p>
            </div>
          </div>
        </div>
      )}

      {((입력값.연금저축납입액 + 입력값.IRP납입액) > 9000000) && (
        <div className="mt-4 p-4 bg-orange-50 border border-orange-200 rounded-xl animate-slide-in-right">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-6 h-6 bg-orange-100 rounded-lg flex items-center justify-center mt-0.5">
              <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-sm text-orange-700 font-semibold mb-1">안내</p>
              <p className="text-sm text-slate-600">
                세액공제 대상 납입액이 한도 900만원을 초과합니다.
                <br />
                초과분은 세액공제 혜택이 없지만 수령시 비과세로 처리됩니다.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}