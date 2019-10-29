import React, { Component } from 'react';
import Login from './login';
import Signup from './signup'
import './app.css'

class App extends Component {

  state = {
    switch: false,
  }

  render(){

    if(this.state.switch){
      return <div className='b1 container-fluid'>
            <button onClick ={() => this.setState({ switch: false})} className='btn btn-primary '>Sign up</button>
            <Login />

            </div>
    }return  <div className='b1 container-fluid'>
            <button onClick ={() => this.setState({ switch: true})} className='btn btn-primary'>Login</button>
            <Signup />

            </div>

  }
}
export default App;
