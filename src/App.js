import React from 'react';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import Footer from './components/Footer/Footer';
import Authorization from './components/Authorization/Authorization'
import { BrowserRouter, Route} from 'react-router-dom';
// import Authorization from './components/Authorization/Authorization'
function App (){
  return (
  <BrowserRouter>
  
  <Route path='//'>
<Authorization/>
  </Route>

  <Route path='/app'>
   <Header/>
    <MainContent/>
    <Footer/>
    </Route>
  </BrowserRouter>
   
  )
}
export default App;
