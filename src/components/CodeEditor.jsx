import { useState } from 'react';
import { useSidebar } from '@/components/ui/sidebar';
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from '@/components/ui/resizable';

import { TopNavBar } from './TopNavBar';
import { CodeEditorPanel } from './CodeEditorPanel';
import { CollaborationPanel } from './CollaborationPanel';
import { OutputPanel } from './OutputPanel';

export default function CodeEditor() {
  const { toggleSidebar, open } = useSidebar();
  const [currentPath, setCurrentPath] = useState(['src', 'components', 'Editor.tsx']);
  const [activeTab, setActiveTab] = useState('chat');
  const [output, setOutput] = useState('');
  const [isOutputVisible, setIsOutputVisible] = useState(false);

  const handleRunCode = () => {
    setIsOutputVisible(true);
    setOutput('Running code...\n> Console output will appear here\n> Program completed successfully');
  };

  return (
    <div className="flex flex-col h-full w-full overflow-hidden">
      <TopNavBar 
        toggleSidebar={toggleSidebar}
        open={open}
        currentPath={currentPath}
        onRunCode={handleRunCode}
      />

      <ResizablePanelGroup direction="vertical" className="flex-1">
        {/* Editor Section */}
        <ResizablePanel defaultSize={70}>
          <ResizablePanelGroup direction="horizontal" className="h-full">
            {/* Code Editor */}
            <ResizablePanel defaultSize={65} minSize={30}>
              <CodeEditorPanel />
            </ResizablePanel>

            <ResizableHandle />

            {/* Collaboration Panel */}
            <ResizablePanel defaultSize={35} minSize={20}>
              <CollaborationPanel 
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>

        {/* Output Panel */}
        {isOutputVisible && (
          <>
            <ResizableHandle />
            <ResizablePanel defaultSize={30} minSize={20}>
              <OutputPanel 
                output={output}
                onClose={() => setIsOutputVisible(false)}
              />
            </ResizablePanel>
          </>
        )}
      </ResizablePanelGroup>
    </div>
  );
}