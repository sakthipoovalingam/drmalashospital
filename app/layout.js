import "./globals.css";

export const metadata = {
  title: "Dr. Arjun Kumar | Advanced Cardiac Care",
  description:
    "Consult Dr. Arjun Kumar for advanced cardiac care, preventive cardiology and minimally invasive heart treatments.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
