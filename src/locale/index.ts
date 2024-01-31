import { createI18n } from 'vue-i18n';
import en from './en-US';
import cn from './zh-CN';
import ko from './ko-KR';

export const LOCALE_OPTIONS = [
  { label: '中文', value: 'zh-CN' },
  { label: 'English', value: 'en-US' },
  { label: 'Korean', value: 'ko-KR' },
];
const defaultLocale = 'ko-KR';

const i18n = createI18n({
  locale: defaultLocale,
  fallbackLocale: 'ko-KR',
  legacy: false,
  allowComposition: true,
  messages: {
    'en-US': en,
    'zh-CN': cn,
    'ko-KR': ko,
  },
});

export default i18n;
