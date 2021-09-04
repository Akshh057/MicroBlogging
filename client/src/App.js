import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import EditData from './components/EditData';
function App() {

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/edit" component={EditData} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
