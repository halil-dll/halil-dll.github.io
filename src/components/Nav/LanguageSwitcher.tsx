import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

export const LanguageSwitcher = () => {
    const { i18n } = useTranslation('common');
    const router = useRouter();

    const newLocale = i18n.language === 'en' ? 'de' : 'en';

    // Determine the flag class based on the current language
    const flagClass = i18n.language === 'en' ? 'fi fi-de' : 'fi fi-us';

    const handleLanguageSwitch = () => {
        // Use router.push to change locale and maintain the current path
        router.push(router.asPath, router.asPath, { locale: newLocale });
    };

    return (
        <button
            aria-label="Toggle Language"
            type="button"
            onClick={handleLanguageSwitch}
            className="focus:outline-none bg-none xs:bg-gray-200 xs:dark:bg-gray-800 rounded-lg p-3 h-10 w-10 flex items-center justify-center"
        >
            <span className={flagClass} style={{ fontSize: '24px' }}></span>
        </button>
    );
};
