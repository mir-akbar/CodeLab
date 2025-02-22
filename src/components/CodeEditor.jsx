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
        <ResizablePanel id='editor-section' order={1} minSize={30}>
          <div className="h-full pt-2"> {/* Added padding top here */}
            <ResizablePanelGroup direction="horizontal" className="h-full">
              {/* Code Editor */}
              <ResizablePanel id='code-editor' order={1} defaultSize={65} minSize={30}>
                <CodeEditorPanel />
              </ResizablePanel>

              <ResizableHandle />

              {/* Collaboration Panel */}
              <ResizablePanel id='collab-panel' order={2} defaultSize={35} minSize={20}>
                <CollaborationPanel 
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
        </ResizablePanel>

        {/* Output Panel */}
        {isOutputVisible && (
          <>
            <ResizableHandle />
            <ResizablePanel id='output-panel' order={2} defaultSize={30} minSize={20}>
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