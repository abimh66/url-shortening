import Header from './components/Header';
import NavBar from './components/NavBar';
import Main from './components/Main';
import Hero from './components/Hero';
import Shortening from './components/Shortening';
import Statistics from './components/Statistics';
import Boost from './components/Boost';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header>
        <NavBar />
      </Header>
      <Main>
        <Hero />
        <Statistics>
          <Shortening />
        </Statistics>
        <Boost />
      </Main>
      <Footer />
    </div>
  );
}

export default App;

/*

  Boost your links today

  Get Started

  Features

  Link Shortening
  Branded Links
  Analytics

  Resources

  Blog
  Developers
  Support

  Company

  About
  Our Team
  Careers
  Contact

*/
