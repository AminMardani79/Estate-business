import './globals.css'
import { yekan } from '@/utilsfonts'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={yekan.className}>{children}</body>
    </html>
  )
}
