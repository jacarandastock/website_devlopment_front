import { createI18n } from 'vue-i18n'

const messages = Object.fromEntries(
    Object.entries(
        import.meta.glob<{ default: any }>('../locales/*.y(a)?ml', {
            eager: true,
        })
    ).map(([key, value]) => {
        const yaml = key.endsWith('.yml')
        return [key.slice(11, yaml ? -4 : -3), value.default]
    })
)

let browserLocale = window.navigator.language.split('-')[0] || 'en'
// Set the initial locale to the user's browser locale if it's available in our translations, or default to 'en'
const initialLocale = Object.keys(messages).includes(browserLocale) ? browserLocale : '中文'


const i18n = createI18n({
    legacy: false,
    locale: initialLocale,
    messages,
})

export default i18n
