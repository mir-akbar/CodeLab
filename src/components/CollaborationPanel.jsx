import { Bell, Send, Mic, MicOff, Camera, CameraOff } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function CollaborationPanel({ activeTab, setActiveTab }) {
  return (
    <div className="h-full flex flex-col bg-[#1e1e1e] border border-[#444] mx-2 rounded-xl overflow-hidden">
      <div className="h-12 border-b border-[#444] flex items-center justify-between px-4">
        <span className="text-gray-300">Collaboration</span>
        <button className="p-2 hover:bg-[#333] rounded-md">
          <Bell size={18} className="text-gray-400" />
        </button>
      </div>

      <CollaborationTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 overflow-hidden">
        <CollaborationContent activeTab={activeTab} />
      </div>
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
  switch (activeTab) {
    case 'chat':
      return <ChatPanel />;
    case 'video':
      return <VideoPanel />;
    case 'settings':
      return <SettingsPanel />;
    default:
      return null;
  }
}
function ChatPanel() {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'John', content: 'Hey, how\'s the coding going?' },
    { id: 2, sender: 'You', content: 'Pretty good! Just working on the new feature.' },
    { id: 3, sender: 'Alice', content: 'Can someone help me with this bug?' },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages(prev => [...prev, { 
        id: prev.length + 1, 
        sender: 'You', 
        content: newMessage.trim() 
      }]);
      setNewMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sender === 'You' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[70%] rounded-lg p-2 ${message.sender === 'You' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-200'}`}>
              <p className="font-semibold text-sm">{message.sender}</p>
              <p className="text-sm">{message.content}</p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="p-4 border-t border-[#444] bg-[#1e1e1e]">
        <div className="flex items-center space-x-2">
          <Input
            type="text"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={handleKeyPress}
            className="flex-1 bg-[#2d2d2d] border-[#444] text-gray-200"
          />
          <Button onClick={handleSendMessage} size="icon">
            <Send size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
}


function VideoPanel() {
  const [isMuted, setIsMuted] = useState(false);
  const [isCameraOn, setIsCameraOn] = useState(true);

  return (
    <div className="flex-1 flex flex-col p-4 space-y-4">
      <div className="flex-1 grid grid-cols-2 gap-4 auto-rows-fr">
        <div className="bg-gray-700 rounded-lg flex items-center justify-center aspect-square">
          <Avatar className="w-1/2 h-1/2 max-w-24 max-h-24">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="bg-gray-700 rounded-lg flex items-center justify-center aspect-square">
          <Avatar className="w-1/2 h-1/2 max-w-24 max-h-24">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className="flex justify-center space-x-4">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsMuted(!isMuted)}
        >
          {isMuted ? <MicOff size={18} /> : <Mic size={18} />}
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsCameraOn(!isCameraOn)}
        >
          {isCameraOn ? <Camera size={18} /> : <CameraOff size={18} />}
        </Button>
      </div>
    </div>
  );
}

function SettingsPanel() {
  return (
    <div className="flex-1 p-4">
      <h3 className="text-lg font-semibold mb-4">Collaboration Settings</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Notification Preferences</label>
          <select className="w-full bg-[#2d2d2d] border border-[#444] rounded-md p-2 text-gray-200">
            <option>All messages</option>
            <option>Mentions only</option>
            <option>None</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Theme</label>
          <select className="w-full bg-[#2d2d2d] border border-[#444] rounded-md p-2 text-gray-200">
            <option>Dark</option>
            <option>Light</option>
            <option>System</option>
          </select>
        </div>
      </div>
    </div>
  );
}