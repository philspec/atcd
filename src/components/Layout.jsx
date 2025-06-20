import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="flex flex-col max-w-screen bg-white">
      <Header />
      <main className="flex-grow">
        <Outlet /> {/* renders matched child route */}
      </main>
      <Footer />
    </div>
  );
}
