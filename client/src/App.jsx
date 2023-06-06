import { Navbar, Welcome, Footer, Services, Transactions, SearchBar, About } from './components/Index.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <SearchBar />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Welcome />} />
            <Route exact path="/about" element={<About />} />
          </Routes>     
        </BrowserRouter>
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
}

export default App;
