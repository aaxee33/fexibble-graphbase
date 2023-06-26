import "./globals.css";

export const metadata = {
  title: "Flexibble",
  description: "Showcase and discover ramarkable developer projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      Navbar
      <main>
        <body>{children}</body>
      </main>
      Footer
    </html>
  );
}
