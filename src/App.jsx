import React from 'react';
import Main from './pages/Main';
import Tv from './pages/Tv';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import New from './pages/New';
import Favorite from './pages/Favorite';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}

body{
  background-color: black;
}

a{
  text-decoration:none;
  color: white;
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/tv" exact>
          <Tv />
        </Route>
        <Route path="/new" exact>
          <New />
        </Route>
        <Route path="/favorite" exact>
          <Favorite />
        </Route>
        <Route path="/test" exact>
          <div style={{ color: 'white' }}>test</div>
        </Route>
      </Router>
    </>
  );
}
export default App;
