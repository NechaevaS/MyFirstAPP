import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import history from './../history';
import "./Home.css";
// import { Link } from 'react-router-dom';
import StoreView from './../components/StoresView/StoresView'
import { useHistory } from 'react-router-dom'


const items = [...Array(100)].map((val, i) => `Item ${i}`);

function Home(props) {
  let history = useHistory()
  function Handle() {
   history.push({
      pathname:'/Stores',
      state: {stores: items}

   })
  }
  return (
    <div className="Home">
      <div className="lander">


        <StoreView />

        <form>
          <Button variant="btn btn-light" onClick={Handle}>ADD STORE</Button>
        </form>
      </div>
    
    </div>

  );
}

export default Home