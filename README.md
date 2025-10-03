# 🏦 연금 플래너 360

한국의 연금저축 및 IRP 가입자를 위한 웹 기반 시뮬레이터입니다.

## 📋 주요 기능

### 🎯 3대 모듈

1. **세액공제 시뮬레이션** - 연간 이득 계산기
   - 연금저축 + IRP 납입액에 따른 세액공제 혜택 계산
   - 2025년 세법 기준 적용 (900만원 한도)

2. **미래 자산 시뮬레이션** - 연금 성장 예측
   - 연복리 효과를 고려한 미래 가치 계산
   - 수익률별 시나리오 분석

3. **전략적 연금 수령 시뮬레이션** - 세금 최적화
   - 종합과세 vs 분리과세 vs 저율과세 비교
   - 1,500만원 기준 자동 판별

### ✨ 특징

- **실시간 계산**: 입력값 변경 시 즉시 결과 업데이트
- **한글 변수명**: 직관적인 코드 구조
- **투명한 계산**: 모든 공식과 로직 공개
- **반응형 디자인**: 모바일/데스크톱 최적화
- **교육적 목적**: 연금 제도 이해 증진

## 🚀 시작하기

### 필수 조건

- Node.js 16.0 이상
- npm 또는 yarn

### 설치 및 실행

```bash
# 저장소 클론
git clone [repository-url]
cd retire

# 의존성 설치
npm install

# 개발 서버 실행
npm start
```

브라우저에서 `http://localhost:3000`으로 접속

## 🛠️ 기술 스택

- **Frontend**: React 18 + TypeScript
- **상태 관리**: React Context API
- **스타일링**: Tailwind CSS 4.x
- **빌드 도구**: Create React App

## 📊 계산 공식

### 세액공제 계산
```
세액공제 = min(총납입액, 900만원) × 세율
세율 = 총급여액 <= 5,500만원 ? 16.5% : 13.2%
```

### 미래 가치 계산
```
미래가치 = 연납입액 × ((1+수익률)^기간 - 1) / 수익률
```

### 연금소득공제
- 350만원 이하: 전액
- 350~700만원: 350만원 + (초과액 × 40%)
- 700~1,400만원: 490만원 + (초과액 × 20%)
- 1,400만원 초과: 630만원 + (초과액 × 10%)
- 최대 한도: 900만원

## ⚠️ 주의사항

- 2025년 세법 기준으로 계산
- 교육 및 전략 수립 목적
- 실제 투자 결정 시 전문가 상담 권장
- 세법 변경에 따른 업데이트 필요

## 📁 프로젝트 구조

```
src/
├── components/          # React 컴포넌트
│   ├── InputModule1.tsx    # 세액공제 입력
│   ├── InputModule2.tsx    # 미래자산 입력
│   ├── InputModule3.tsx    # 연금수령 입력
│   ├── ResultModule1.tsx   # 세액공제 결과
│   ├── ResultModule2.tsx   # 미래자산 결과
│   └── ResultModule3.tsx   # 연금수령 결과
├── context/             # 상태 관리
│   └── PensionContext.tsx
├── types/               # TypeScript 타입
│   └── index.ts
├── utils/               # 유틸리티 함수
│   └── calculations.ts     # 계산 로직
└── App.tsx             # 메인 컴포넌트
```

## 🎨 디자인 가이드

- **색상**: Blue(세액공제), Green(미래자산), Purple(연금수령)
- **아이콘**: 직관적인 이모지 사용
- **레이아웃**: 카드 기반 모듈형 설계
- **반응형**: Mobile-first 접근

## 📈 향후 계획

- [ ] 차트 라이브러리 추가 (Chart.js/D3.js)
- [ ] PDF 리포트 생성 기능
- [ ] 시나리오 저장/불러오기
- [ ] 다중 포트폴리오 비교
- [ ] 연금 수령 스케줄 시뮬레이션

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

MIT License

## 📞 문의

프로젝트에 대한 문의사항이나 개선 제안은 이슈를 통해 남겨주세요.

---

**⚡ 실시간 연금 계산으로 더 나은 노후 준비하세요! ⚡**