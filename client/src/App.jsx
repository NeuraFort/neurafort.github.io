import { Navbar, Welcome, Footer, Services, Transactions, SearchBar } from './components/Index.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <SearchBar />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" component={Welcome}/>
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
