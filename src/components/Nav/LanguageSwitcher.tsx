import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

export const LanguageSwitcher = () => {
    const { i18n } = useTranslation('common');
    const router = useRouter();

    // Define locales
    const oldLocale = i18n.language === 'en' ? 'en' : 'de';
    const newLocale = i18n.language === 'en' ? 'de' : 'en';

    const flagClass = oldLocale === 'en' ? 'fi fi-de' : 'fi fi-us';

    const handleLanguageSwitch = () => {
        // handle paths that don't include a locale
        const basePath = router.asPath.startsWith(`/${oldLocale}`)
            ? router.asPath.replace(`/${oldLocale}`, `/${newLocale}`)
            : `/${newLocale}${router.asPath}`;

        router.push(basePath, basePath, { locale: newLocale });
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
