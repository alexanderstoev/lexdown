/**
 * ToolbarPlugin.tsx
 * -----------------
 * Provides a customizable toolbar for LexDown editor.
 * Includes buttons with Lucide icons for common formatting commands
 * (Bold, Italic, Code, Headings, etc.).
 */

import React from "react";
import { Bold, Italic, Code } from "lucide-react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { FORMAT_TEXT_COMMAND } from "lexical";

const ToolbarPlugin: React.FC = () => {
  const [editor] = useLexicalComposerContext();
  return (
    <div className="flex gap-2 border-b border-gray-200 bg-gray-100 p-2 dark:border-zinc-700 dark:bg-zinc-800">
      <button
        type="button"
        className="rounded p-1 hover:bg-gray-200 dark:hover:bg-zinc-700"
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold")}
      >
        <Bold size={16} />
      </button>
      <button
        type="button"
        className="rounded p-1 hover:bg-gray-200 dark:hover:bg-zinc-700"
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic")}
      >
        <Italic size={16} />
      </button>
      <button
        type="button"
        className="rounded p-1 hover:bg-gray-200 dark:hover:bg-zinc-700"
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "code")}
      >
        <Code size={16} />
      </button>
    </div>
  );
};

export default ToolbarPlugin;
