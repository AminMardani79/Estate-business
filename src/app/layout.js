import Layout from "@/layout/Layout";
import "./globals.css";
import { yekan } from "@/utils/fonts";
import NextAuthProvider from "@/providers/NextAuthProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={yekan.className}>
        <NextAuthProvider>
          <Layout>{children}</Layout>
        </NextAuthProvider>
      </body>
    </html>
  );
}
