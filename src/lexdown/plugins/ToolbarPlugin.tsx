/**
 * ToolbarPlugin.tsx
 * -----------------
 * Provides a Jira-style toolbar for LexDown editor.
 * Includes buttons for undo/redo, headings, formatting, lists, links,
 * colors, and separators. Uses Lucide icons and Tailwind for styling.
 */

import React from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { FORMAT_TEXT_COMMAND, UNDO_COMMAND, REDO_COMMAND } from "lexical";
import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Link,
  List,
  ListOrdered,
  Quote,
  Undo2,
  Redo2,
  Heading1,
  Heading3,
  Heading2,
  Pilcrow,
  Code,
} from "lucide-react";
import { applyBlockType, applyTextColor, toggleList } from "../utils/lexical";
import { TOGGLE_LINK_COMMAND } from "@lexical/link";

const ToolbarPlugin: React.FC = () => {
  const [editor] = useLexicalComposerContext();

  const separator = <div className="mx-1 h-lh w-px bg-slate-600" />;

  return (
    <div className="flex flex-wrap items-center gap-1 border-b border-gray-200 bg-gray-100 p-2 dark:border-zinc-700 dark:bg-zinc-800">
      {/* Undo / Redo */}
      <button
        className="rounded p-1 hover:bg-gray-200 dark:hover:bg-zinc-700"
        onClick={() => editor.dispatchCommand(UNDO_COMMAND, undefined)}
      >
        <Undo2 size={16} />
      </button>
      <button
        className="rounded p-1 hover:bg-gray-200 dark:hover:bg-zinc-700"
        onClick={() => editor.dispatchCommand(REDO_COMMAND, undefined)}
      >
        <Redo2 size={16} />
      </button>

      {separator}

      {/* Headings / Paragraph / Quote */}
      <button
        className="rounded p-1 hover:bg-gray-200 dark:hover:bg-zinc-700"
        onClick={() => applyBlockType(editor, "h1")}
      >
        <Heading1 size={16} />
      </button>
      <button
        className="rounded p-1 hover:bg-gray-200 dark:hover:bg-zinc-700"
        onClick={() => applyBlockType(editor, "h2")}
      >
        <Heading2 size={16} />
      </button>
      <button
        className="rounded p-1 hover:bg-gray-200 dark:hover:bg-zinc-700"
        onClick={() => applyBlockType(editor, "h3")}
      >
        <Heading3 size={16} />
      </button>
      <button
        className="rounded p-1 hover:bg-gray-200 dark:hover:bg-zinc-700"
        onClick={() => applyBlockType(editor, "paragraph")}
      >
        <Pilcrow size={16} />
      </button>
      <button
        className="rounded p-1 hover:bg-gray-200 dark:hover:bg-zinc-700"
        onClick={() => applyBlockType(editor, "quote")}
      >
        <Quote size={16} />
      </button>
      <button
        className="rounded p-1 hover:bg-gray-200 dark:hover:bg-zinc-700"
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "code")}
      >
        <Code size={16} />
      </button>

      {/* Lists */}
      <button
        className="rounded p-1 hover:bg-gray-200 dark:hover:bg-zinc-700"
        onClick={() => toggleList(editor, "unordered")}
        title="Unordered list"
      >
        <List size={16} />
      </button>
      <button
        className="rounded p-1 hover:bg-gray-200 dark:hover:bg-zinc-700"
        onClick={() => toggleList(editor, "ordered")}
        title="Ordered list"
      >
        <ListOrdered size={16} />
      </button>
      {separator}

      {/* Text formatting */}
      <button
        className="rounded p-1 hover:bg-gray-200 dark:hover:bg-zinc-700"
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold")}
      >
        <Bold size={16} />
      </button>
      <button
        className="rounded p-1 hover:bg-gray-200 dark:hover:bg-zinc-700"
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic")}
      >
        <Italic size={16} />
      </button>
      <button
        className="rounded p-1 hover:bg-gray-200 dark:hover:bg-zinc-700"
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, "underline");
        }}
      >
        <Underline size={16} />
      </button>
      <button
        className="rounded p-1 hover:bg-gray-200 dark:hover:bg-zinc-700"
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, "strikethrough");
        }}
      >
        <Strikethrough size={16} />
      </button>

      {separator}

      {/* Colors (just placeholders) */}
      <button
        className="h-4 w-4 rounded border border-gray-400 bg-transparent"
        title="Clear color"
        onClick={() => applyTextColor(editor, null)}
      ></button>
      <button
        className="h-4 w-4 rounded bg-red-400"
        title="Color 1"
        onClick={() => applyTextColor(editor, "red")}
      ></button>
      <button
        className="h-4 w-4 rounded bg-green-400"
        title="Color 2"
        onClick={() => applyTextColor(editor, "green")}
      ></button>
      <button
        className="h-4 w-4 rounded bg-blue-400"
        title="Color 3"
        onClick={() => applyTextColor(editor, "blue")}
      ></button>

      {separator}

      {/* Link */}
      <button
        className="rounded p-1 hover:bg-gray-200 dark:hover:bg-zinc-700"
        onClick={() => {
          const url = window.prompt("Enter the link URL"); // simple prompt for now
          if (url) {
            editor.dispatchCommand(TOGGLE_LINK_COMMAND, url);
          }
        }}
      >
        <Link size={16} />
      </button>
    </div>
  );
};

export default ToolbarPlugin;
