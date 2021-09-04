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
  console.log(searchData, "app")
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route exact path="/">
          <Search setSearchData={setSearchData} />
          <Link to='/add'>
            <button className="add__btn">
              Add Blog
            </button>
          </Link>
          <Home searchData={searchData} />
        </Route>
        <Route path="/edit" component={EditData} />
        <Route path="/add" component={AddData} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
