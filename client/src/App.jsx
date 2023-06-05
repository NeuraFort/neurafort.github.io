import { Navbar, Welcome, Footer, Services, Transactions, SearchBar, About } from './components';
import { BrowserRouter,Routes, Route} from 'react-router-dom';

const App = () => {

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Welcome/>} />
            <Route path="/about" element={<About/>} />
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
