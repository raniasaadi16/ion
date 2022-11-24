// INSTALL universal-cookie and body-scroll-lock
import React from 'react'
// ADD THE CSS LINES TO YOUR CSS FILE
import './App.css';
import Cookies from 'universal-cookie';
 import Popup from './components/Popup'
import { useEffect, useState } from 'react';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import Privacy from './components/pages/Privacy';

function App() {
  const [showPopup, setshowPopup] = useState(false);
  const cookies = new Cookies();
  const targetRef = React.createRef();
  let targetElement = null;

  useEffect(() => {
    targetElement = targetRef.current;
  }, []);
  useEffect(() => {
    if(!cookies.get('cookieBanner')){
      setshowPopup(true)
      if(targetElement){
        disableBodyScroll(targetElement)
      }
    }
    
  }, [cookies, targetElement]);
 
  const removePopup = () => {
    cookies.set('cookieBanner', 'closed')
    setshowPopup(false)
    clearAllBodyScrollLocks();
  }
  return (
    <div className="App" ref={targetRef}>
      {showPopup && <Popup removePopup={removePopup}/>}
      {/* replace <Privacy/> with 
      <Route exact path="/privacy">
        <Privacy />
      </Route>
      */}
      <Privacy/>
    </div>
  );
}

export default App;
