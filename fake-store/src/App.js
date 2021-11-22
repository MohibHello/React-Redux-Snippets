// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Electronics from './components/Electronics'
import jewelery from './components/jewelery'
import MensClothing from './components/MensClothing'
import WomensClothing from './components/WomensClothing'
import ProductDetails from './components/ProductDetails'

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/electronics'exact component={Electronics} />
          <Route path='/jewelery' exact component={jewelery} />
          <Route path='/mens-clothing'exact component={MensClothing} />
          <Route path='/womens-clothing' exact component={WomensClothing} />
          <Route path='/product-details/:id' exact component={ProductDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
