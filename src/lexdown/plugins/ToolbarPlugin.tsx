/**
 * ToolbarPlugin.tsx
 * -----------------
 * Provides a customizable toolbar for LexDown editor.
 * Includes buttons with Lucide icons for common formatting commands
 * (Bold, Italic, Code, Headings, etc.).
 */

import React from "react";
import { Bold, Italic, Code } from "lucide-react";

interface ToolbarPluginProps {
  // Optional callbacks for button actions
  onBold?: () => void;
  onItalic?: () => void;
  onCode?: () => void;
}

const ToolbarPlugin: React.FC<ToolbarPluginProps> = ({
  onBold,
  onItalic,
  onCode,
}) => {
  return (
    <div className="flex gap-2 border-b border-gray-200 bg-gray-100 p-2 dark:border-zinc-700 dark:bg-zinc-800">
      <button
        type="button"
        className="rounded p-1 hover:bg-gray-200 dark:hover:bg-zinc-700"
        onClick={onBold}
      >
        <Bold size={16} />
      </button>
      <button
        type="button"
        className="rounded p-1 hover:bg-gray-200 dark:hover:bg-zinc-700"
        onClick={onItalic}
      >
        <Italic size={16} />
      </button>
      <button
        type="button"
        className="rounded p-1 hover:bg-gray-200 dark:hover:bg-zinc-700"
        onClick={onCode}
      >
        <Code size={16} />
      </button>
    </div>
  );
};

export default ToolbarPlugin;
