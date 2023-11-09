import { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import Banner from "./components/Banner";
import About from "./components/About";
import Services from "./components/Services";
import Expertise from "./components/Expertise";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page from "./components/Page";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>

          <Route path="/personal_website_yt/" exact element={<Page />} />
          <Route path="/personal_website_yt/about" element={<Header>
            <About />
          </Header>} />
          <Route path="/personal_website_yt/skills" element={<Header>
            <Expertise />
          </Header>} />
          <Route path="/personal_website_yt/portfolio" element={<Header>
            <Portfolio />
          </Header>} />
          <Route path="/personal_website_yt/contact" element={<Header>
            <Contact />
          </Header>} />

          {/* <Route path="/contact" component={Contact} /> */}
          {/* Add more routes as needed */}
        </Routes>
        {/* <Header />
        <Banner />
        <About />
        <Services />
        <Expertise />
        <Footer /> */}


      </Router>
    </>
  );
}

export default App;
