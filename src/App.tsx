import { Experts, Features, Footer, Healthcare, Hero, Navbar } from "./components";

function App() {
  return (
    <div className="w-full overflow-hidden">
      <div className="sm:px-16 px-6 flex justify-center items-center bg-[#FAFBFD]">
        <div className="xl:max-w-[1280px] w-full ">
          <Navbar />
        </div>
      </div>
      <div className="w-full bg-[#FAFBFD]  px-6 sm:px-16">
        <Hero />
      </div>
      <div className="sm:px-16 px-6 flex flex-col justify-center items-center">
        <div className="xl:max-w-[1280px] w-full ">
          <Features />
        </div>
      </div>
      <div className="w-full bg-[#FAFBFD]  px-6 sm:px-16">
        <Experts />
      </div>
      <div className="sm:px-16 px-6 flex flex-col justify-center items-center">
        <div className="xl:max-w-[1280px] w-full ">
          <Healthcare />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
