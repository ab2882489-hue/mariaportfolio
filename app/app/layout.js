import './globals.css'

export const metadata = {
  title: 'Maria Bibi Portfolio',
  description: 'Personal Portfolio Website of Maria Bibi',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
