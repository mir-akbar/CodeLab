import { X } from "lucide-react";

export function OutputPanel({ output, onClose }) {
    return (
      <div className="flex flex-col h-full border border-[#444] m-2 rounded-lg overflow-hidden">
        <div className="px-4 py-2 border-b border-[#444] bg-[#333] text-gray-300 font-medium flex justify-between items-center">
          <span>Output</span>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-200"
          >
            <X size={16} />
          </button>
        </div>
        <div className="flex-1 p-4 font-mono text-sm text-gray-300 overflow-y-auto bg-[#1e1e1e]">
          {output.split('\n').map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </div>
      </div>
    );
  }