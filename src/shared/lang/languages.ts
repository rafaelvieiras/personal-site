import { en } from "./en";
import { ptBR } from "./pt-BR";
export interface ITranslations {
  "pt-BR": typeof ptBR;
  en: typeof en;
}
export interface ITranslationsKeys {
  sidebar: {
    DESCRIPTION: string;
    SKILLS_DESC: string;
    SKILLS: string[];
    LINKS: {
      HOME: string;
      ABOUT: string;
      CONTACT: string;
      BLOG: string;
      SHOP: string;
    };
    ACTION: string;
  };
  cookiesModal: {
    DESCRIPTION: string;
    CLOSE: string;
    POLICY: string;
  };
  home: {
    TITLE: string;
  };
  about: {
    TITLE: string;
  };
  contact: {
    TITLE: string;
  };
  shop: {
    TITLE: string;
  };
}
export const translations: ITranslations = {
  "pt-BR": ptBR,
  en: en,
};

export function checkIfLanguageExists(language: string): boolean {
  return Object.keys(translations).includes(language);
}

export function getLanguage(language: string | undefined): ITranslationsKeys {
  if (!language) {
    return en;
  }
  if (!checkIfLanguageExists(language)) {
    console.error(`Language "${language}" not found`);
    return translations["pt-BR"];
  }
  return translations[language];
}
