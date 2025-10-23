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
  quote: "lexdown-quote",
  heading: {
    h1: "lexdown-h1",
    h2: "lexdown-h2",
    h3: "lexdown-h3",
  },
  list: {
    nested: {
      listitem: "lexdown-nested-li",
    },
    ul: "lexdown-ul",
    ol: "lexdown-ol",
    listitem: "lexdown-li",
  },
  link: "lexdown-link",
  hr: "lexdown-hr",
  text: {
    bold: "lexdown-bold",
    italic: "lexdown-italic",
    underline: "lexdown-underline",
    strikethrough: "lexdown-strikethrough",
    code: "lexdown-code",
  },
  code: "lexdown-code-block",
};

export default lexdownTheme;
