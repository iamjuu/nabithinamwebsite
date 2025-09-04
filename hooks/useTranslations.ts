import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/lib/translations';

export function useTranslations() {
  const { currentLanguage } = useLanguage();
  
  const translate = (key: string) => t(currentLanguage.code, key);
  
  return {
    t: translate,
    currentLanguage,
  };
}
