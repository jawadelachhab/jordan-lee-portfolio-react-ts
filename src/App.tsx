import { ThemeProvider } from "./ThemeContext";
import { Header, BackTop, Footer } from "./components/common";
import {
  Hero,
  Stats,
  About,
  Skills,
  Portfolio,
  Contact,
} from "./components/pages/home";

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
        <BackTop />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
