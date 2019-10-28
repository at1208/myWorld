import React, { Component } from 'react';
import './login.css'
import { Input } from 'antd';
import { Icon } from 'antd'
import Fade from 'react-reveal/Fade';

class Login extends Component{

 state = {
   email: '',
   password: ''
 }

OnSubmitClick = (e) => {
      e.preventDefault()

}


  render(){
    return <div>
            <Fade bottom>
         <div className='container-fluid shadow col-md-4 a1 text-center'>


            <h1  className='a2'>Login</h1>

                <form className='text-center'>
                    <label className='a3  '>Email ID</label>
                    <Input className='a5 ' onChange={(e) => this.setState({ email: e.target.value })} value={this.state.email} placeholder='Enter Email'/><Icon type="mail" className='a6  ' />
                  <br />
                    <label className='a3 '>Password</label>
                    <Input className='a5' onChange={(e) => this.setState({ password: e.target.value })} value={this.state.password} placeholder='Enter Password'/><Icon type="eye-invisible" className='a6  '/>
                  <br />
                    <button className='btn btn-danger' onClick={this.OnSubmitClick}>LOGIN</button>
                </form>
         </div>
                 </Fade>
    </div>
  }
}

export default Login;
