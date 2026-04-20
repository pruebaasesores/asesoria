export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{background:'#0a0a0a',color:'#fff',fontFamily:'sans-serif'}}>
        {children}
      </body>
    </html>
  );
}