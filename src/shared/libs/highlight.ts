import hljs from "highlight.js";

const getMarkdownLanguage = (codeBlock: string) => {
  const language = codeBlock.match(/```(.*)\n/);
  if (language && language[1]) {
    return language[1];
  }
  return null;
};

const markdownCodeBlock = (codeBlock: string) => {
  let language = getMarkdownLanguage(codeBlock);
  if (language) {
    language = language === "ts" ? "typescript" : language;
    language = language === "bash" ? "shell" : language;
    return hljs.highlight(
      codeBlock.replace(/```(.*)\n/, "").replace(/\n```/, ""),
      {
        language,
      }
    ).value;
  }
  return hljs.highlight(codeBlock, { language: "html" }).value;
};

export const highlight = (code: string, lang?: string) => {
  if (lang && hljs.getLanguage(lang)) {
    return hljs.highlight(lang, code).value;
  }
  return markdownCodeBlock(code);
};
