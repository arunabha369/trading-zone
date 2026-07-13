import './globals.css';

export const metadata = {
  title: 'Trading Zone — Your Trusted Trading Partner in Kalna | Nirmal Bang Associate',
  description:
    'Trading Zone — Your trusted trading and investment partner in Kalna, Purba Bardhaman. An authorized associate of Nirmal Bang. Open Demat accounts, trade equities, invest in mutual funds, and more.',
  keywords:
    'Trading Zone, Kalna, stock trading, Nirmal Bang, demat account, mutual funds, IPO, investment, Purba Bardhaman, Ritupon Bhattacharyaa',
  authors: [{ name: 'Trading Zone — Ritupon Bhattacharyaa (Proprietor)' }],
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts: Inter (body) + Space Grotesk (headings) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-dark-bg text-text-primary font-body antialiased">
        {children}
      </body>
    </html>
  );
}
