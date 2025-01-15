// import React, { useState } from "react";
// import { Editor } from "@monaco-editor/react";
// import { ChevronRight, Menu, ChevronLeft } from "lucide-react";
// import { useSidebar } from "@/components/ui/sidebar";

// import {
//   ResizablePanelGroup,
//   ResizablePanel,
//   ResizableHandle,
// } from "@/components/ui/resizable";

// const CodeEditor = () => {
//   const { toggleSidebar, isOpen } = useSidebar();
//   const [currentPath, setCurrentPath] = useState(["src", "components", "Editor.tsx"]);

//   console.log(isOpen);

//   return (
//     <div className="flex flex-col h-full w-full overflow-hidden">
//       {/* Top Navigation Bar */}
//       <div className="h-12 min-h-[48px] border-b border-[#444] flex items-center px-2 gap-2">
//         <button
//           onClick={toggleSidebar}
//           className="p-2 hover:bg-[#333] rounded-md transition-colors"
//         >
//           {isOpen ? (
//             <ChevronLeft size={20} className="text-gray-400" />
//           ) : (
//             <Menu size={20} className="text-gray-400" />
//           )}
//         </button>

//         {/* Breadcrumbs */}
//         <div className="flex items-center gap-2 text-sm text-gray-400">
//           {currentPath.map((item, index) => (
//             <React.Fragment key={index}>
//               {index > 0 && <ChevronRight size={16} className="text-gray-600" />}
//               <span className="hover:text-gray-200 cursor-pointer">
//                 {item}
//               </span>
//             </React.Fragment>
//           ))}
//         </div>
//       </div>

//       {/* Editor and Terminal Container */}
//       <ResizablePanelGroup direction="horizontal">
//         <ResizablePanel defaultSize={70} minSize={30}>
//           {/* Editor Container */}

//         </ResizablePanel>
//       </ResizablePanelGroup> 
//       <div className="flex flex-1 gap-2 p-2 min-h-0">
//         {/* Editor Container */}
//         <div className="flex-1 rounded-lg overflow-hidden border border-[#444]">
//           <Editor
//             width="100%"
//             height="100%"
//             defaultLanguage="javascript"
//             defaultValue="// Welcome to the editor"
//             theme="vs-dark"
//             options={{
//               automaticLayout: true,
//               minimap: { enabled: false },
//               padding: {
//                 top: 16,      
//                 bottom: 16
//               },
//               fontSize: 14
//             }}
//           />
//         </div>

//         {/* Terminal Container */}
//         <div className="w-1/3 flex flex-col bg-[#1e1e1e] border border-[#444] rounded-lg overflow-hidden">
//           <div className="px-4 py-2 border-b border-[#444] bg-[#333] text-gray-300 font-medium">
//             Terminal
//           </div>
//           <div className="flex-1 p-4 font-mono text-sm text-gray-300 overflow-y-auto">
//             <p>$ npm start</p>
//             <p className="text-green-400">Ready on http://localhost:3000</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CodeEditor;

import React, { useState } from "react";
import { Editor } from "@monaco-editor/react";
import { ChevronRight, Menu, ChevronLeft } from "lucide-react";
import { useSidebar } from "@/components/ui/sidebar";

import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";

const CodeEditor = () => {
  const { toggleSidebar, isOpen } = useSidebar();
  const [currentPath, setCurrentPath] = useState(["src", "components", "Editor.tsx"]);

  console.log(isOpen);

  return (
    <div className="flex flex-col h-full w-full overflow-hidden">
      {/* Top Navigation Bar */}
      <div className="h-12 min-h-[48px] border-b border-[#444] flex items-center px-2 gap-2">
        <button
          onClick={toggleSidebar}
          className="p-2 hover:bg-[#333] rounded-md transition-colors"
        >
          {isOpen ? (
            <ChevronLeft size={20} className="text-gray-400" />
          ) : (
            <Menu size={20} className="text-gray-400" />
          )}
        </button>

        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-gray-400">
          {currentPath.map((item, index) => (
            <React.Fragment key={index}>
              {index > 0 && <ChevronRight size={16} className="text-gray-600" />}
              <span className="hover:text-gray-200 cursor-pointer">
                {item}
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Editor and Terminal Container */}
      <ResizablePanelGroup direction="horizontal" className={""}>
        <ResizablePanel defaultSize={70} minSize={30} className="flex-1 h-full rounded-lg overflow-hidden border border-[#444]">
          {/* Editor Container */}
          {/* <div className="h-full flex-1 rounded-lg overflow-hidden border border-[#444]"> */}
            <Editor
              width="100%"
              height="100%"
              defaultLanguage="javascript"
              defaultValue="// Welcome to the editor"
              theme="vs-dark"
              options={{
                automaticLayout: true,
                minimap: { enabled: false },
                padding: {
                  top: 16,
                  bottom: 16
                },
                fontSize: 14
              }}
            />
          {/* </div> */}
        </ResizablePanel>

        {/* Resizable Handle */}
        <ResizableHandle />

        {/* Terminal Container */}
        <ResizablePanel defaultSize={30} minSize={20} >
          <div className="h-full flex flex-col bg-[#1e1e1e] border border-[#444] rounded-lg overflow-hidden">
            <div className="px-4 py-2 border-b border-[#444] bg-[#333] text-gray-300 font-medium">
              Terminal
            </div>
            <div className="flex-1 p-4 font-mono text-sm text-gray-300 overflow-y-auto">
              <p>$ npm start</p>
              <p className="text-green-400">Ready on http://localhost:3000</p>
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default CodeEditor;