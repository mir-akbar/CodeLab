import { Editor } from '@monaco-editor/react';

export function CodeEditorPanel() {
  return (
    <div className="h-full border border-[#444]  mr-0 rounded-xl overflow-hidden">
      <Editor
        width="100%"
        height="100%"
        defaultLanguage="javascript"
        defaultValue="// Welcome to the editor"
        theme="vs-dark"
        options={{
          automaticLayout: true,
          minimap: { enabled: false },
          padding: { top: 16, bottom: 16 },
          fontSize: 14
        }}
      />
    </div>
  );
}