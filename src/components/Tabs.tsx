import React, { useState } from 'react';

interface TabsProps {
  children: React.ReactNode;
}

interface TabProps {
  label: string;
  children: React.ReactNode;
}

export function Tabs({ children }: TabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = React.Children.toArray(children) as React.ReactElement<TabProps>[];

  return (
    <div className="w-full">
      {/* 탭 헤더 */}
      <div className="glass-card mb-6 p-2 flex gap-2 sticky top-4 z-10">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`flex-1 py-3 px-6 text-center font-display font-semibold rounded-xl transition-all duration-300 ${
              activeTab === index
                ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg scale-105'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/50'
            }`}
          >
            {tab.props.label}
          </button>
        ))}
      </div>

      {/* 탭 콘텐츠 */}
      <div className="mt-4 animate-fade-in">
        {tabs[activeTab]}
      </div>
    </div>
  );
}

export function Tab({ children }: TabProps) {
  return <div>{children}</div>;
}
