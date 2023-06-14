import Footer from "@/app/components/Footer/Footer"; 

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full">
      {children}
      <Footer />
    </div>
  );
}
