import { Navbar, Welcome, Footer, Services, Transactions, SearchBar } from './components/Index';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


const App = () => {

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <SearchBar />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Welcome}/>
          </Switch>     
        </BrowserRouter>
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
}

export default App;
