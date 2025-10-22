import {
  $createParagraphNode,
  $getSelection,
  $isRangeSelection,
  TextNode,
  type LexicalEditor,
} from "lexical";
import {
  $createHeadingNode,
  $createQuoteNode,
  type HeadingTagType,
} from "@lexical/rich-text";
import { $setBlocksType } from "@lexical/selection";
import {
  INSERT_ORDERED_LIST_COMMAND,
  INSERT_UNORDERED_LIST_COMMAND,
} from "@lexical/list";

/**
 * lexical.ts
 * ----------
 * Helper functions for Lexical editor.
 * Contains reusable commands, node manipulation helpers,
 * and common editor operations.
 */
export const applyBlockType = (
  editor: LexicalEditor,
  type: "paragraph" | "quote" | HeadingTagType,
): void => {
  editor.update(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      if (type === "paragraph") {
        $setBlocksType(selection, () => $createParagraphNode());
      } else if (type === "quote") {
        $setBlocksType(selection, () => $createQuoteNode());
      } else {
        $setBlocksType(selection, () => $createHeadingNode(type));
      }
    }
  });
};

/**
 * Inserts a list of a specific type or toggles it off if already active.
 */
export const toggleList = (
  editor: LexicalEditor,
  type: "ordered" | "unordered",
) => {
  if (type === "ordered") {
    editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined);
  } else if (type === "unordered") {
    editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);
  }
};

/**
 * Handles text color formatting in LexDown.
 * Supports applying a color to the selection and clearing it.
 */
export const applyTextColor = (
  editor: LexicalEditor,
  color: "red" | "green" | "blue" | null,
) => {
  const colorMap = {
    red: "oklch(70.4% 0.191 22.216)",
    green: "oklch(79.2% 0.209 151.711)",
    blue: "oklch(70.7% 0.165 254.624)",
  };

  editor.update(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      selection.getNodes().forEach((node) => {
        if (node instanceof TextNode) {
          if (color) {
            node.setStyle(`color: ${colorMap[color]}`);
          } else {
            node.setStyle("");
          }
        }
      });
    }
  });
};
