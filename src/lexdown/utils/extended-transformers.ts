/**
 * hrTransformer.ts
 * -------------------------
 * Adds Markdown ↔ Lexical support for horizontal rules (`---` or `***`).
 */

import {
  TRANSFORMERS,
  type ElementTransformer,
  type Transformer,
} from "@lexical/markdown";
import {
  $createHorizontalRuleNode,
  HorizontalRuleNode,
} from "@lexical/extension";
import { $isHorizontalRuleNode } from "@lexical/extension";
import { $isParagraphNode } from "lexical";

export const HR_TRANSFORMER: Transformer = {
  dependencies: [HorizontalRuleNode],
  export: (node) => ($isHorizontalRuleNode(node) ? "---" : null),
  regExp: /^(---|\*\*\*)$/gm,
  replace: (textNode) => {
    const parent = textNode.getParentOrThrow();
    if ($isParagraphNode(parent)) {
      parent.replace($createHorizontalRuleNode());
    } else {
      textNode.replace($createHorizontalRuleNode());
    }
  },
  type: "element",
} as ElementTransformer;

export const EXTENDED_TRANSFORMERS = [...TRANSFORMERS, HR_TRANSFORMER];
