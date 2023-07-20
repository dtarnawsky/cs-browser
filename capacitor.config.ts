import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'cs.browser',
  appName: 'cs-browser',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
