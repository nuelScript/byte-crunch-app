import Footer from "../components/Footer/Footer";

export default async function RootLayout ({
    children
}: {
    children: React.ReactNode;
}) {
    return (
      <div className="w-full h-full">
        {children}
        <Footer />
      </div>
    );
}