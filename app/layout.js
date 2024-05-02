import Header from '@/components/main-header/main-header.js';
import Background from '@/components/main-header/main-header-background.js';
import './globals.css';

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
       <Background />
        <Header />

        {children}
      </body>
    </html>
  );
}
