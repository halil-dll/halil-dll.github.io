import { useTranslation } from 'next-i18next'
import Link from 'next/link'

export const LanguageSwitcher = () => {
    const { t, i18n } = useTranslation('common')

      const newLocale: string = i18n.language === 'en' ? 'de' : 'en'

    return (
        <Link href="/" locale={newLocale}>
            <button>{t('change-locale', { newLocale })}</button>
          </Link>
    )
}
