import { defineStore } from "pinia";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import en from "element-plus/es/locale/lang/en";
import { useCache, CACHE_KEY } from "@/hooks/web/useCache";
import { LocaleDropdownType } from "@/types/localeDropdown";

const { wsCache } = useCache();
const elLocaleMap = {
  "zh-CN": zhCn,
  en: en,
};

interface LocaleState {
  currentLocale: LocaleDropdownType;
  localeMap: LocaleDropdownType[];
}

export const useLocaleStore = defineStore("locale", {
  state: (): LocaleState => {
    return {
      currentLocale: {
        lang: wsCache.get(CACHE_KEY.LANG) || "zh-CN",
        elLocale:
          elLocaleMap[
            (wsCache.get(CACHE_KEY.LANG) || "zh-CN") as keyof typeof elLocaleMap
          ],
      },
      localeMap: [
        {
          name: "中文",
          lang: "zh-CN",
        },
        {
          name: "英文",
          lang: "English",
        },
      ],
    };
  },
});
