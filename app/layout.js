import "./globals.css";

export const metadata = {
  title: "Dr.Muthu Karthikeyan | Advanced Ortho Care",
  description:
    "Consult Dr.Muthu Karthikeyan Advanced Ortho Care.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
