import React from 'react';
import { Bell } from 'lucide-react';

export function CollaborationPanel({ activeTab, setActiveTab }) {
  return (
    <div className="h-full flex flex-col bg-[#1e1e1e] border border-[#444] m-2 rounded-xl overflow-hidden">
      <div className="h-12 border-b border-[#444] flex items-center justify-between px-4">
        <span className="text-gray-300">Collaboration</span>
        <button className="p-2 hover:bg-[#333] rounded-md">
          <Bell size={18} className="text-gray-400" />
        </button>
      </div>

      <CollaborationTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <CollaborationContent activeTab={activeTab} />
    </div>
  );
}

function CollaborationTabs({ activeTab, setActiveTab }) {
  const tabs = ['chat', 'video', 'settings'];
  
  return (
    <div className="border-b border-[#444]">
      <div className="flex">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-gray-300 capitalize ${
              activeTab === tab ? 'border-b-2 border-blue-500' : ''
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}

function CollaborationContent({ activeTab }) {
  const content = {
    chat: "Start a conversation with your collaborators...",
    video: "Start a video call with your team...",
    settings: "Collaboration settings and preferences..."
  };

  return (
    <div className="flex-1 overflow-y-auto p-4">
      <div className="text-gray-400 text-sm">
        {content[activeTab]}
      </div>
    </div>
  );
}