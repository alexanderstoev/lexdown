/**
 * LexDown.tsx
 * ----------------
 * Main LexDown React component.
 * Sets up the Lexical editor and integrates plugins such as ToolbarPlugin
 * and MarkdownPlugin. Provides a controlled interface with `value` and
 * `onChange` props to handle Markdown input/output.
 */

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { type EditorState } from "lexical";
import ToolbarPlugin from "./plugins/ToolbarPlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { ListItemNode, ListNode } from "@lexical/list";
import { CodeNode } from "@lexical/code";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";

import { $convertToMarkdownString, TRANSFORMERS } from "@lexical/markdown";

import "./theme/lexdownTheme.css";
import lexdownTheme from "./theme/lexdownTheme";
import { LinkNode } from "@lexical/link";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import InitialValuePlugin from "./plugins/InitialValuePlugin";

interface LexDownProps {
  value?: string;
  onChange?: (markdown: string) => void;
}

export const LexDown: React.FC<LexDownProps> = ({ value, onChange }) => {
  const initialConfig = {
    namespace: "LexDown",
    theme: lexdownTheme,
    nodes: [HeadingNode, QuoteNode, ListNode, ListItemNode, CodeNode, LinkNode],
    onError: (error: Error) => console.error(error),
  };

  // Called whenever the editor state changes
  const handleChange = (editorState: EditorState) => {
    if (!onChange) return;
    editorState.read(() => {
      const markdown = $convertToMarkdownString(TRANSFORMERS);
      onChange(markdown);
    });
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className="overflow-hidden rounded-lg border shadow-sm">
        {/* Toolbar */}
        <ToolbarPlugin />
        {/* Editor */}
        <RichTextPlugin
          contentEditable={
            <ContentEditable className="editor min-h-[200px] bg-white p-4 dark:bg-zinc-900" />
          }
          placeholder={<div className="text-gray-400">Start typing...</div>}
          ErrorBoundary={LexicalErrorBoundary}
        />

        <ListPlugin />
        <LinkPlugin />
        <HistoryPlugin />
        <InitialValuePlugin value={value ?? ""} />
        <OnChangePlugin onChange={handleChange} />
      </div>
    </LexicalComposer>
  );
};
