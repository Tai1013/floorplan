interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_APP_VERSION: string
  readonly VITE_APP_BASE: string
  readonly VITE_DEFAULT_LOCALE: string
  readonly VITE_AXIOS_MOCK?: string
  readonly VITE_AXIOS_MOCK_DELAY?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
