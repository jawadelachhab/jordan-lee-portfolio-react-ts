import { ThemeProvider } from "./ThemeContext";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import ScrollTop from "./components/common/ScrollTop";
import Hero from "./components/pages/home/Hero";
import Stats from "./components/pages/home/Stats";
import About from "./components/pages/home/About";
import Skills from "./components/pages/home/Skills";
import Portfolio from "./components/pages/home/Portfolio";
import Contact from "./components/pages/home/Contact";

const App = () => {
  return (
    <ThemeProvider>
      <div className="app-container">
        <Header />
        <main>
          <div className="container">
            <Hero />
            <Stats />
            <About />
            <Skills />
            <Portfolio />
            <Contact />
          </div>
        </main>
        <ScrollTop />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
