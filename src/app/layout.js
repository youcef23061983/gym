import "./globals.css";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import AuthProvider from "./(components)/AuthProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
