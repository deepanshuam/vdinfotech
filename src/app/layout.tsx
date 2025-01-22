
export const metadata = {
    title: 'VD INFOTECH',
    description: 'Generated by Next.js',
  }
  
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <head>
        
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
          <meta name="google-site-verification" content="VrovSJEAe6IgpQPce4HfroSZ-04RQNmgBdC5cAaAo-c" />
        </head>
        <body>{children}</body>
      </html>
    )
  }
  