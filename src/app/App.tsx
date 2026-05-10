import { RouterProvider } from 'react-router';
import { router } from './routes';
import { LanguageProvider } from './i18n/LanguageContext';

import { ThemeProvider } from 'next-themes';

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <LanguageProvider>
        <RouterProvider router={router} />
      </LanguageProvider>
    </ThemeProvider>
  );
}
