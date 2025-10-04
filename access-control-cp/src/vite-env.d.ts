/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL_USUARIOS: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
