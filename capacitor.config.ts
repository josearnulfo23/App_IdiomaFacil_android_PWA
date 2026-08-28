import type { CapacitorConfig } from '@capacitor/cli';

/**
 * Capacitor config for IdiomaFácil – Android wrapper.
 * The web build (dist/) is the single source of truth, shared with PWA.
 * To generate APK/AAB:
 *   npm run build
 *   npx cap add android   (requires Android Studio + SDK)
 *   npx cap sync
 *   npx cap open android  (then Build > Generate Signed Bundle / APK)
 *
 * Alternative without native shell: Trusted Web Activity (TWA) via
 * PWABuilder/Bubblewrap — uses the same manifest.webmanifest + service worker.
 */
const config: CapacitorConfig = {
  appId: 'com.idiomafacil.app',
  appName: 'IdiomaFácil',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 1200,
      backgroundColor: '#4B35FF'
    }
  }
};

export default config;
