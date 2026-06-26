export interface Language {
  name: string;
  el: Recordable;
}

export interface LocaleDropdownType {
  lang: LocaleType;
  name?: string;
  elLocale?: Language;
}
