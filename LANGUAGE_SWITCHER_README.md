# Language Switcher Feature

This project now includes a comprehensive language switcher feature that supports multiple languages including Malayalam, English, Hindi, Tamil, and Kannada.

## Features

- **Multi-language Support**: Supports 5 languages with native names and flags
- **Persistent Storage**: Language preference is saved in localStorage
- **Responsive Design**: Works on both desktop and mobile devices
- **Context-based State Management**: Uses React Context for global language state
- **Translation System**: Centralized translation management

## Supported Languages

1. **English (en)** - 🇺🇸
2. **Malayalam (ml)** - 🇮🇳 - മലയാളം
3. **Hindi (hi)** - 🇮🇳 - हिन्दी
4. **Tamil (ta)** - 🇮🇳 - தமிழ்
5. **Kannada (kn)** - 🇮🇳 - ಕನ್ನಡ

## Implementation Details

### Components

- `LanguageSwitcher` (`components/ui/language-switcher.tsx`): Main language switcher component
- `LanguageProvider` (`contexts/LanguageContext.tsx`): Context provider for language state
- `useLanguage` hook: Hook to access language context
- `useTranslations` hook: Hook for easy translation access

### Files Structure

```
project/
├── components/
│   ├── ui/
│   │   └── language-switcher.tsx
│   └── layout/
│       └── Header.tsx (updated)
├── contexts/
│   └── LanguageContext.tsx
├── hooks/
│   └── useTranslations.ts
├── lib/
│   └── translations.ts
└── app/
    └── layout.tsx (updated)
```

### Usage

#### Basic Usage in Components

```tsx
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslations } from '@/hooks/useTranslations';

function MyComponent() {
  const { currentLanguage, setLanguage } = useLanguage();
  const { t } = useTranslations();
  
  return (
    <div>
      <h1>{t('navigation.home')}</h1>
      <LanguageSwitcher 
        currentLanguage={currentLanguage.code}
        onLanguageChange={setLanguage}
      />
    </div>
  );
}
```

#### Adding New Translations

1. Add translations to `lib/translations.ts`:
```tsx
const translations: Record<string, Translations> = {
  en: {
    navigation: {
      home: 'Home',
      // ... other translations
    },
  },
  ml: {
    navigation: {
      home: 'വീട്',
      // ... other translations
    },
  },
  // ... other languages
};
```

2. Use in components:
```tsx
const { t } = useTranslations();
<h1>{t('navigation.home')}</h1>
```

## How to Use

1. **Desktop**: Click the globe icon in the navbar to open the language dropdown
2. **Mobile**: Open the mobile menu and scroll to the language section
3. **Language Selection**: Click on any language to switch
4. **Persistence**: Your language choice is automatically saved and restored

## Future Enhancements

- Add more languages
- Implement server-side language detection
- Add RTL (Right-to-Left) support for Arabic
- Add language-specific fonts
- Implement dynamic content translation
- Add language-specific SEO meta tags

## Technical Notes

- Uses React Context for state management
- Implements localStorage for persistence
- Responsive design with Tailwind CSS
- TypeScript support with proper typing
- Follows Next.js 13+ app directory structure
