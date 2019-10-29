import React, { Component } from 'react';
import './signup.css'
import { Input } from 'antd';
import { Icon } from 'antd'
import Bounce from 'react-reveal/Bounce';

class Signup extends Component{

 state = {
   name: '',
   email: '',
   password: ''
 }

OnSubmitClick = (e) => {
      e.preventDefault()

}


  render(){
    return <div>
                    <Bounce bottom>
         <div className='container-fluid shadow col-md-4 c1 text-center'>


            <h1  className='c2'>Sign up</h1>

                <form className='text-center'>
                    <label className='c3  '>Name</label>
                    <Input className='c5 ' onChange={(e) => this.setState({ name: e.target.value })} value={this.state.name} placeholder='Enter Name'/><Icon type="user" className='c6  '/>
                  <br />

                    <label className='c3  '>Email ID</label>
                    <Input className='c5 ' onChange={(e) => this.setState({ email: e.target.value })} value={this.state.email} placeholder='Enter Email'/><Icon type="mail" className='c6  ' />
                  <br />
                    <label className='c3 '>Password</label>
                    <Input className='c5' onChange={(e) => this.setState({ password: e.target.value })} value={this.state.password} placeholder='Enter Password'/><Icon type="eye-invisible" className='c6  '/>
                  <br />
                    <button className='btn btn-success' onClick={this.OnSubmitClick}>SIGN UP</button>
                </form>
         </div>
                   </Bounce>
    </div>
  }
}

export default Signup;
