import "./globals.css";

export const metadata = {
  title: "Portfolio | Muhammad Putra",
  description: "Portfolio of Muhammad Putra Harifin Pane",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}