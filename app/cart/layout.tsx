import Footer from "../components/Footer/Footer";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full w-full">
      {children}
      <Footer />
    </div>
  );
}
