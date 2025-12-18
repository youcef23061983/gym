import "./globals.css";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import AuthProvider from "./(components)/AuthProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="google-site-verification"
          content="Cy5rjd1m-zIPtwTUewsO5M53Fse1lD9a9-FB2UFG6Dg"
        />
      </head>

      <body className="site-wrapper">
        <AuthProvider>
          <Navbar />

          <div>{children}</div>
        </AuthProvider>
        <Footer />
      </body>
    </html>
  );
}
