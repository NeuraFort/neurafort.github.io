import { Navbar, Welcome, Footer, Services, Transactions, SearchBar, About, RegisterProduct } from './components/Index.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {

  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <div className="gradient-bg-welcome">
          <Navbar />
          <SearchBar />

            <Routes>
              <Route exact path="/" element={<Welcome />} />
              <Route exact path="/About" element={<About />} />
              <Route exact path="/Welcome" element={<Welcome />} />
              <Route exact path="/Authenticate" element={<RegisterProduct />} />
            </Routes> 
        </div>
        <Services />
        <Transactions />
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
