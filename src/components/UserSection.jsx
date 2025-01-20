// import React from 'react';
import { Users, MessageSquare, VideoIcon, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export function UserSection() {
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  return (
    <div className="flex items-center gap-4">
      <UsersDialog onCopyLink={handleCopyLink} />
      <LoginButton />
      <CommunicationButtons />
    </div>
  );
}

function UsersDialog({ onCopyLink }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex items-center gap-2 cursor-pointer hover:bg-[#333] p-2 rounded-md">
          <Users size={18} className="text-gray-400" />
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-sm">JD</div>
            <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-sm">AS</div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="bg-[#1e1e1e] text-gray-300 border-[#444]">
        <DialogHeader>
          <DialogTitle>Collaboration</DialogTitle>
        </DialogHeader>
        <UsersDialogContent onCopyLink={onCopyLink} />
      </DialogContent>
    </Dialog>
  );
}

function UsersDialogContent({ onCopyLink }) {
  return (
    <div className="space-y-4">
      <ActiveUsersList />
      <ShareSession onCopyLink={onCopyLink} />
    </div>
  );
}

function ActiveUsersList() {
  const users = [
    { id: 1, initials: 'JD', name: 'John Doe', color: 'blue', isYou: true },
    { id: 2, initials: 'AS', name: 'Alice Smith', color: 'green', isYou: false },
  ];

  return (
    <div className="space-y-2">
      <h3 className="text-sm font-medium">Active Users</h3>
      <div className="space-y-2">
        {users.map(user => (
          <div key={user.id} className="flex items-center gap-2 p-2 rounded bg-[#2d2d2d]">
            <div className={`w-8 h-8 rounded-full bg-${user.color}-500 flex items-center justify-center`}>
              {user.initials}
            </div>
            <span>{user.name} {user.isYou && '(You)'}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ShareSession({ onCopyLink }) {
  return (
    <div className="space-y-2">
      <h3 className="text-sm font-medium">Share Session</h3>
      <div className="flex items-center gap-2">
        <input 
          type="text" 
          value={window.location.href} 
          readOnly 
          className="flex-1 bg-[#2d2d2d] border border-[#444] rounded p-2 text-sm"
        />
        <Button onClick={onCopyLink} variant="outline" size="icon">
          <Copy size={16} />
        </Button>
      </div>
    </div>
  );
}

function LoginButton() {
  return (
    <Button 
      onClick={() => {}} 
      variant="outline" 
      className="border-blue-500 text-blue-500 hover:bg-blue-500/10"
    >
      Login
    </Button>
  );
}

function CommunicationButtons() {
  return (
    <>
      <button className="p-2 hover:bg-[#333] rounded-md">
        <MessageSquare size={18} className="text-gray-400" />
      </button>
      <button className="p-2 hover:bg-[#333] rounded-md">
        <VideoIcon size={18} className="text-gray-400" />
      </button>
    </>
  );
}