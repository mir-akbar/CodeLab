// // import React from 'react';
// import { Users, MessageSquare, VideoIcon, Copy } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from '@/components/ui/dialog';

// export function UserSection() {
//   const handleCopyLink = () => {
//     navigator.clipboard.writeText(window.location.href);
//   };

//   return (
//     <div className="flex items-center gap-4">
//       <UsersDialog onCopyLink={handleCopyLink} />
//       <LoginButton />
//       <CommunicationButtons />
//     </div>
//   );
// }

// function UsersDialog({ onCopyLink }) {
//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         <div className="flex items-center gap-2 cursor-pointer hover:bg-[#333] p-2 rounded-md">
//           <Users size={18} className="text-gray-400" />
//           <div className="flex -space-x-2">
//             <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-sm">JD</div>
//             <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-sm">AS</div>
//           </div>
//         </div>
//       </DialogTrigger>
//       <DialogContent className="bg-[#1e1e1e] text-gray-300 border-[#444]">
//         <DialogHeader>
//           <DialogTitle>Collaboration</DialogTitle>
//         </DialogHeader>
//         <UsersDialogContent onCopyLink={onCopyLink} />
//       </DialogContent>
//     </Dialog>
//   );
// }

// function UsersDialogContent({ onCopyLink }) {
//   return (
//     <div className="space-y-4">
//       <ActiveUsersList />
//       <ShareSession onCopyLink={onCopyLink} />
//     </div>
//   );
// }

// function ActiveUsersList() {
//   const users = [
//     { id: 1, initials: 'JD', name: 'John Doe', color: 'blue', isYou: true },
//     { id: 2, initials: 'AS', name: 'Alice Smith', color: 'green', isYou: false },
//   ];

//   return (
//     <div className="space-y-2">
//       <h3 className="text-sm font-medium">Active Users</h3>
//       <div className="space-y-2">
//         {users.map(user => (
//           <div key={user.id} className="flex items-center gap-2 p-2 rounded bg-[#2d2d2d]">
//             <div className={`w-8 h-8 rounded-full bg-${user.color}-500 flex items-center justify-center`}>
//               {user.initials}
//             </div>
//             <span>{user.name} {user.isYou && '(You)'}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// function ShareSession({ onCopyLink }) {
//   return (
//     <div className="space-y-2">
//       <h3 className="text-sm font-medium">Share Session</h3>
//       <div className="flex items-center gap-2">
//         <input 
//           type="text" 
//           value={window.location.href} 
//           readOnly 
//           className="flex-1 bg-[#2d2d2d] border border-[#444] rounded p-2 text-sm"
//         />
//         <Button onClick={onCopyLink} variant="outline" size="icon">
//           <Copy size={16} />
//         </Button>
//       </div>
//     </div>
//   );
// }

// function LoginButton() {
//   return (
//     <Button 
//       onClick={() => {}} 
//       variant="outline" 
//       className="border-blue-500 text-blue-500 hover:bg-blue-500/10"
//     >
//       Login
//     </Button>
//   );
// }

// function CommunicationButtons() {
//   return (
//     <>
//       <button className="p-2 hover:bg-[#333] rounded-md">
//         <MessageSquare size={18} className="text-gray-400" />
//       </button>
//       <button className="p-2 hover:bg-[#333] rounded-md">
//         <VideoIcon size={18} className="text-gray-400" />
//       </button>
//     </>
//   );
// }
import { userPool } from '@/utils/auth';
import { useEffect, useState } from 'react';
import { Users, MessageSquare, VideoIcon, Copy, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { isAuthenticated, logout } from '@/utils/auth';
import { useNavigate } from 'react-router-dom';

export function UserSection() {
  const navigate = useNavigate();
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="flex items-center gap-4">
      <UsersDialog onCopyLink={handleCopyLink} />
      <AuthButton handleLogout={handleLogout} navigate={navigate} />
      {/* <CommunicationButtons /> */}
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

function AuthButton({ handleLogout, navigate }) {
  const isLoggedIn = isAuthenticated();

  return isLoggedIn ? (
    <Button 
      onClick={handleLogout}
      variant="outline" 
      className="border-red-500 text-red-500 hover:bg-red-500/10 gap-2"
    >
      <LogOut size={16} />
      Logout
    </Button>
  ) : (
    <Button 
      onClick={() => navigate('/login')}
      variant="outline" 
      className="border-blue-500 text-blue-500 hover:bg-blue-500/10"
    >
      Login
    </Button>
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
  const currentUser = userPool.getCurrentUser();
  const [username, setUsername] = useState('');

  useEffect(() => {
    if (currentUser) {
      currentUser.getSession((err, session) => {
        if (!err) {
          setUsername(session.getIdToken().payload['name'] || 'User');
        }
      });
    }
  }, []);

  const users = [
    { 
      id: 1, 
      initials: username.substring(0, 2).toUpperCase(), 
      name: username, 
      color: 'blue', 
      isYou: true 
    },
    // Keep other users as needed
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