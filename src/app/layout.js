import Layout from "@/layout/Layout";
import "./globals.css";
import { yekan } from "@/utils/fonts";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={yekan.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
