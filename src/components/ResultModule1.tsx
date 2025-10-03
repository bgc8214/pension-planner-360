import React from 'react';
import { usePensionContext } from '../context/PensionContext';

export function ResultModule1() {
  const { 상태 } = usePensionContext();
  const { 세액공제 } = 상태.결과값;

  if (세액공제.총납입액 === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-lg font-bold text-gray-800 mb-4">📊 세액공제 계산 결과</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="text-sm text-blue-600 font-medium">총 납입액</div>
          <div className="text-2xl font-bold text-blue-800">
            {세액공제.총납입액.toLocaleString('ko-KR')}
          </div>
          <div className="text-xs text-blue-500">원</div>
        </div>

        <div className="bg-green-50 p-4 rounded-lg">
          <div className="text-sm text-green-600 font-medium">🎯 세액공제 대상</div>
          <div className="text-2xl font-bold text-green-800">
            {세액공제.세액공제대상금액.toLocaleString('ko-KR')}
          </div>
          <div className="text-xs text-green-500">원</div>
        </div>

        <div className="bg-orange-50 p-4 rounded-lg">
          <div className="text-sm text-orange-600 font-medium">💰 한도초과 납입</div>
          <div className="text-2xl font-bold text-orange-800">
            {세액공제.세액공제한도초과금액.toLocaleString('ko-KR')}
          </div>
          <div className="text-xs text-orange-500">원 (비과세)</div>
        </div>

        <div className="bg-purple-50 p-4 rounded-lg">
          <div className="text-sm text-purple-600 font-medium">적용 세율</div>
          <div className="text-2xl font-bold text-purple-800">
            {(세액공제.적용세율 * 100).toFixed(1)}
          </div>
          <div className="text-xs text-purple-500">%</div>
        </div>

        <div className="bg-red-50 p-4 rounded-lg">
          <div className="text-sm text-red-600 font-medium">예상 환급액</div>
          <div className="text-2xl font-bold text-red-800">
            {세액공제.예상환급액.toLocaleString('ko-KR')}
          </div>
          <div className="text-xs text-red-500">원</div>
        </div>
      </div>

      <div className="mt-4 space-y-4">
        <div className="p-3 bg-gray-50 rounded-md">
          <h4 className="font-semibold text-gray-700 mb-2">📋 계산 상세</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• 총 납입액: 연금저축 + IRP = {세액공제.총납입액.toLocaleString('ko-KR')}원</li>
            <li>• 세액공제 대상: {세액공제.세액공제대상금액.toLocaleString('ko-KR')}원 (한도: 900만원)</li>
            <li>• 한도 초과분: {세액공제.세액공제한도초과금액.toLocaleString('ko-KR')}원 (수령시 비과세)</li>
            <li>• 적용 세율: {세액공제.적용세율 === 0.165 ? '16.5% (5,500만원 이하)' : '13.2% (5,500만원 초과)'}</li>
            <li>• 환급 세액: {세액공제.세액공제대상금액.toLocaleString('ko-KR')}원 × {(세액공제.적용세율 * 100).toFixed(1)}% = {세액공제.예상환급액.toLocaleString('ko-KR')}원</li>
          </ul>
        </div>
        
        <div className="p-3 bg-orange-50 rounded-md">
          <h4 className="font-semibold text-orange-700 mb-2">💡 EET 과세체계 안내</h4>
          <ul className="text-sm text-orange-600 space-y-1">
            <li>• <strong>세액공제 대상 원금:</strong> 수령시 전액 과세 대상</li>
            <li>• <strong>한도 초과 원금:</strong> 수령시 비과세 (원금 반환)</li>
            <li>• <strong>운용 수익:</strong> 수령시 전액 과세 대상</li>
            <li>• <strong>연금소득공제:</strong> 수령시 과세 대상 금액에서 차감</li>
          </ul>
        </div>
      </div>
    </div>
  );
}