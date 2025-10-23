/**
 * InitialValuePlugin.tsx
 * ----------------------
 * Lexical plugin to set the initial value of the LexDown editor.
 * Clears the current editor state and inserts the provided text or
 * Markdown when the editor mounts. Useful for controlled components
 * where `value` is passed as a prop.
 */

import { useEffect } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $getRoot } from "lexical";
import { $convertFromMarkdownString } from "@lexical/markdown";
import { EXTENDED_TRANSFORMERS } from "../utils/extended-transformers";

interface InitialValuePluginProps {
  value: string;
}

const InitialValuePlugin: React.FC<InitialValuePluginProps> = ({ value }) => {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    editor.update(() => {
      const root = $getRoot();
      root.clear();
      $convertFromMarkdownString(value, EXTENDED_TRANSFORMERS);
    });
  }, [editor, value]);

  return null;
};

export default InitialValuePlugin;
