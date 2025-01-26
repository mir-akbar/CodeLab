// components/editor/TopNavigationBar.jsx
// import  from 'react';
import { ChevronLeft, Menu, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { UserSection } from './UserSection';
import { PathBreadCrumb } from './PathBreadCrumb';

export function TopNavBar({ 
  toggleSidebar, 
  open, 
  currentPath, 
  onRunCode 
}) {
  return (
    <div className="border-b border-[#444] flex items-center justify-between px-2 py-1">
      {/* Left Section */}
      <div className="flex items-center gap-2">
        <button
          onClick={toggleSidebar}
          className="p-2 hover:bg-[#333] rounded-md transition-colors"
        >
          {open ? (
            <ChevronLeft size={20} className="text-gray-400" />
          ) : (
            <Menu size={20} className="text-gray-400" />
          )}
        </button>
        <PathBreadCrumb path={currentPath} />
      </div>

      {/* Center Section - Run Button */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Button 
          onClick={onRunCode}
          className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2"
        >
          <Play size={16} />
          Run Code
        </Button>
      </div>

      {/* Right Section */}
      <UserSection />
    </div>
  );
}