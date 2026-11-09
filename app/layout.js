import "./globals.css";

export const metadata = {
  title: "Dr.Malas Hospital | Orthopaedic Care in Manapparai",
  description:
    "Dr.Malas Hospital in Manapparai provides orthopaedic care, knee replacement surgery, spine and back pain treatment, sports injury and ligament care, fracture care and arthritis treatment.",
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
