
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.6fd4c5dd880d4e928aee3269588b9d49',
  appName: 'curious-ai-conversations-counter',
  webDir: 'dist',
  server: {
    url: 'https://6fd4c5dd-880d-4e92-8aee-3269588b9d49.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  ios: {
    contentInset: 'automatic'
  }
};

export default config;
