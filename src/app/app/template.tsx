import Footer from "./components/Template/Footer";
import MobileHeader from "./components/Template/MobileHeader";
import SidebarMenu from "./components/Template/SidebarMenu";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row min-h-screen bg-gray-100 text-gray-800">
      <SidebarMenu />
      <main className="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
        <MobileHeader />
        {children}
        <Footer />
      </main>
    </div>
  );
}
