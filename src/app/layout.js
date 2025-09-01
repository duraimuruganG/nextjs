import "./globals.css";

// Optional metadata
export const metadata = {
  title: "Fronseye Perpetual Innovation",
  description: "FronsEye &#8211; Perpetual Innovation &#8211; Custom Software Development | Product Development | Mobile App Development | Algo Trading | Real Estate App | Contractor App",
  icons: {
    icon: [
      { url: "/images/fronseye_logo_favicon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    apple: "/images/fronseye_logo_apple.png",
}
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          fontFamily: "var(--font-paragraph)", // Fallback for paragraphs
        }}
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
