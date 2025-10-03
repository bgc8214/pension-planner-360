# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Run tests without watch mode
npm test -- --watchAll=false
```

## Project Overview

This is a Korean pension planning simulator (연금 플래너 360) built with React 18 and TypeScript. The application helps Korean pension savings and IRP account holders simulate tax deductions, future asset growth, and optimal pension withdrawal strategies.

## Architecture

### Technology Stack
- **Frontend**: React 18 with TypeScript
- **State Management**: React Context API (`PensionContext`)
- **Styling**: Tailwind CSS 4.x
- **Build Tool**: Create React App
- **Testing**: Jest with React Testing Library

### Core Architecture Pattern
The application follows a **modular calculation architecture** with real-time updates:

1. **Central State Management**: `PensionContext` (`src/context/PensionContext.tsx`) manages all input and calculated results
2. **Reactive Calculations**: Input changes trigger immediate recalculation of all dependent modules
3. **Calculation Chain**: Module 1 → Module 2 → Module 3 → Module 4 (each module depends on previous results)

### Key Components Structure

```
src/
├── App.tsx                 # Main app component with layout
├── context/
│   └── PensionContext.tsx  # Central state management with Korean variable names
├── types/
│   └── index.ts           # TypeScript interfaces with Korean naming
├── utils/
│   └── calculations.ts    # Core calculation logic (4 modules)
└── components/
    ├── InputModule1.tsx   # Tax deduction inputs
    ├── InputModule2.tsx   # Future asset inputs
    ├── InputModule3.tsx   # Pension withdrawal inputs
    ├── ResultModule1.tsx  # Tax deduction results
    ├── ResultModule2.tsx  # Future asset results
    ├── ResultModule3.tsx  # Pension withdrawal results
    └── ResultModule4.tsx  # Asset depletion simulation
```

### Calculation Modules

1. **Module 1** (`세액공제계산`): Tax deduction calculation based on 2025 Korean tax law
2. **Module 2** (`미래자산계산`): Future asset value with compound interest, distinguishing tax-deductible vs non-tax-deductible contributions
3. **Module 3** (`연금수령시뮬레이션계산`): Pension withdrawal tax optimization (comprehensive vs separate vs low-rate taxation)
4. **Module 4** (`자산변화시뮬레이션계산`): Asset depletion timeline simulation

### Korean Variable Naming Convention

This codebase uses **Korean variable and function names** for domain clarity:
- `총급여액` (total salary), `연금저축납입액` (pension savings contribution)
- `세액공제계산` (tax deduction calculation), `미래자산계산` (future asset calculation)
- All TypeScript interfaces and state variables use Korean names

### State Management Pattern

- **Single Source of Truth**: `PensionContext` holds all `입력값` (inputs) and `결과값` (results)
- **Reactive Updates**: `입력값업데이트` function triggers immediate recalculation chain
- **Calculation Dependencies**: Each module's results feed into the next module's calculations

### Important Implementation Details

1. **Tax Law Compliance**: Calculations implement 2025 Korean pension tax regulations
2. **Precision**: All monetary calculations use `Math.round()` for Korean won precision
3. **Real-time Updates**: No manual "calculate" button - all results update on input change
4. **Tax Optimization**: Module 3 compares three taxation methods and identifies the optimal approach

## Development Notes

- Uses React 18's Concurrent Features
- Strict TypeScript configuration with Korean interface definitions
- Tailwind CSS with responsive design (mobile-first)
- All calculation logic is transparent and documented in Korean comments