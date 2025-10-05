import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MasterLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MasterLayout;
