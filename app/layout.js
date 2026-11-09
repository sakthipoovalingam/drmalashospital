import "./globals.css";

export const metadata = {
  title: "Dr Mala Hospital | Orthopaedic Care in Manapparai",
  description: "Dr. Mala Hospital in Manapparai offers orthopaedic care, knee replacement, spine and back pain treatment, fracture care, sports injury treatment and arthritis care.",
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
