import React, { Component }  from 'react';
import logo from './logo.svg';
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css'; 
import './App.css';
import {Map} from './component/Map';


class App extends Component {
  render(){
    return (
      <div className="App">
        <Button type="primary">Button</Button>
        <Button type="warning">warning</Button><WhiteSpace />
        <Button type="warning" disabled>warning disabled</Button><WhiteSpace />
  
        <div>
          <Map></Map>
        </div>
      </div>
    );
  }
}

export default App;
