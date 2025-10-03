// 숫자를 천단위 콤마로 포맷팅
export const formatNumber = (value: number): string => {
  return value.toLocaleString('ko-KR');
};

// 천단위 콤마가 포함된 문자열을 숫자로 변환
export const parseFormattedNumber = (value: string): number => {
  return parseInt(value.replace(/,/g, ''), 10) || 0;
};

// 입력 중인 숫자 문자열을 포맷팅 (blur 시에만 사용)
export const formatInputNumber = (value: string): string => {
  // 숫자가 아닌 문자 제거
  const numbersOnly = value.replace(/[^\d]/g, '');

  // 빈 문자열이면 그대로 반환
  if (!numbersOnly) return '';

  // 숫자로 변환 후 콤마 추가
  const number = parseInt(numbersOnly, 10);
  return number.toLocaleString('ko-KR');
};

// 실시간 입력 중에는 숫자와 콤마만 허용
export const sanitizeInput = (value: string): string => {
  return value.replace(/[^\d,]/g, '');
};