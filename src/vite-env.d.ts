/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly LAUNCHDARKLY_CLIENT_ID: string
  // Add more env variables here as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}