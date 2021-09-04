import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import EditData from './components/EditData';
import Search from './components/Search'
import AddData from './components/AddData';
function App() {
  const [searchData, setSearchData] = useState([]);
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        {/* Routes */}
        <Route exact path="/">
          <Search setSearchData={setSearchData} />
          <div className="btn__div">
            <Link to='/add'>
              <button className="add__btn">
                Add Blog
              </button>
            </Link>
          </div>
          <Home searchData={searchData} />
        </Route>
        <Route path="/edit" component={EditData} />
        <Route path="/add" component={AddData} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
