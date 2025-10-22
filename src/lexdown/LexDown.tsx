/**
 * LexDown.tsx
 * ----------------
 * Main LexDown React component.
 * Sets up the Lexical editor and integrates plugins such as ToolbarPlugin
 * and MarkdownPlugin. Provides a controlled interface with `value` and
 * `onChange` props to handle Markdown input/output.
 */

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { $getRoot, type EditorState } from "lexical";
import ToolbarPlugin from "./plugins/ToolbarPlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import InitialValuePlugin from "./plugins/InitialValuePlugin";

interface LexDownProps {
  value?: string;
  onChange?: (markdown: string) => void;
}

export const LexDown: React.FC<LexDownProps> = ({ onChange }) => {
  const initialConfig = {
    namespace: "LexDown",
    nodes: [],
    onError: (error: Error) => console.error(error),
  };

  // Called whenever the editor state changes
  const handleChange = (editorState: EditorState) => {
    editorState.read(() => {
      const root = $getRoot();
      const text = root.getTextContent();
      if (onChange) onChange(text); // Replace with Markdown conversion later
    });
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className="overflow-hidden rounded-lg border shadow-sm">
        {/* Toolbar */}
        <ToolbarPlugin />
        <InitialValuePlugin value={"bold italic code"} />
        {/* Editor */}
        <RichTextPlugin
          contentEditable={
            <ContentEditable className="editor min-h-[200px] bg-white p-4 dark:bg-zinc-900" />
          }
          placeholder={<div className="text-gray-400">Start typing...</div>}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <HistoryPlugin />
        <OnChangePlugin onChange={handleChange} />
      </div>
    </LexicalComposer>
  );
};
