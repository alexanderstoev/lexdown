/**
 * LexDown.tsx
 * ----------------
 * Main LexDown React component.
 * Sets up the Lexical editor and integrates plugins such as ToolbarPlugin
 * and MarkdownPlugin. Provides a controlled interface with `value` and
 * `onChange` props to handle Markdown input/output.
 */

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import {
  $getRoot,
  FORMAT_TEXT_COMMAND,
  type EditorState,
  type LexicalEditor,
} from "lexical";
import { useState } from "react";
import ToolbarPlugin from "./plugins/ToolbarPlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";

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

  const [editor] = useState<LexicalEditor | null>(null);

  // Called whenever the editor state changes
  const handleChange = (editorState: EditorState) => {
    editorState.read(() => {
      const root = $getRoot();
      const text = root.getTextContent();
      if (onChange) onChange(text); // Replace with Markdown conversion later
    });
  };

  const applyFormat = (format: "bold" | "italic" | "code") => {
    if (!editor) return;
    switch (format) {
      case "bold":
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold");
        break;
      case "italic":
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic");
        break;
      case "code":
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, "code");
        break;
    }
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className="overflow-hidden rounded-lg border shadow-sm">
        {/* Toolbar */}
        <ToolbarPlugin
          onBold={() => applyFormat("bold")}
          onItalic={() => applyFormat("italic")}
          onCode={() => applyFormat("code")}
        />

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
