/**
 * lexdownTheme.ts
 * ----------------
 * Defines the visual theme for the LexDown editor.
 * Each key maps a node or format type to a CSS class.
 * These classes are attached automatically by Lexical
 * when the corresponding node/format is active.
 */

const lexdownTheme = {
  paragraph: "lexdown-paragraph",
  heading: {
    h1: "lexdown-h1",
    h2: "lexdown-h2",
    h3: "lexdown-h3",
  },
  quote: "lexdown-quote",
  list: {
    ul: "lexdown-ul",
    ol: "lexdown-ol",
    listitem: "lexdown-li",
    nested: {
      listitem: "lexdown-nested-li",
    },
  },
  hr: "lexical-hr",
  text: {
    bold: "lexdown-bold",
    italic: "lexdown-italic",
    underline: "lexdown-underline",
    strikethrough: "lexdown-strikethrough",
    code: "lexdown-code",
  },
};

export default lexdownTheme;
