import React, { Component } from 'react';
import axios from 'axios'
import MAIL_ENDPOINT from '../config'


const initState= {firstName:'',lastName:'',email:'',title:'',message:''}

class Contact extends Component {

  constructor(){
    super()
    this.state={...initState,sent:false}
  }

  onChange = (e)=>{
    this.setState({
      ...this.state,
      [e.currentTarget.name]:e.currentTarget.value
    })
  }

  onSubmit = (e)=>{
    e.preventDefault()
    let {firstName,lastName,email,title,message} = this.state
    let body ={
      firstName,
      lastName,
      email,
      title,
      message
    }
    axios.post(MAIL_ENDPOINT,body)
    .then(res=>{ 
      this.setState({...initState,sent:true})
      
    })
    .catch(err=>console.error(err))
  }




  render() {
    return(
      <div className="contact-body">
        
        <div className="container">
        <div hidden={!this.state.sent}>
            <h3 style={{color:'#7FFF00'}}>Message Sent!</h3>
          </div>
        <h3>Contact Me</h3>
        <form onSubmit={this.onSubmit}>
        <div className="row100">
          <div className="col">
              <div className="inputBox">
                <input type="text" name="firstName" value={this.state.firstName} onChange={this.onChange} required="required"/>
                <span className="text">First Name</span>
                <span className="line"></span>
              </div>
            </div>
            <div className="col">
              <div className="inputBox">
                <input type="text" name="lastName" value={this.state.lastName} onChange={this.onChange} required="required"/>
                <span className="text">Last Name</span>
                <span className="line"></span>
              </div>
            </div>
          </div>
          <div className="row100">
            <div className="col">
                <div className="inputBox">
                  <input type="email" name="email" value={this.state.email} onChange={this.onChange} required="required"/>
                  <span className="text">Email</span>
                  <span className="line"></span>
                </div>
              </div>
              <div className="col">
                <div className="inputBox">
                  <input type="text" name="title" value={this.state.title} onChange={this.onChange} required="required"/>
                  <span className="text">Title</span>
                  <span className="line"></span>
                </div>
              </div>
            </div>
          <div className="row100">
            <div className="col">
              <div className="inputBox textarea">
                <textarea required="required" name="message" value={this.state.message} onChange={this.onChange} ></textarea>
                <span className="text">Put Your Message here:</span>
                <span className="line"></span>
              </div>
            </div>
          </div>
          <div className="row100">
            <div className="col">
              <input type="submit" value="send"/>
            </div>
          </div>
          
          </form>
          </div>
          
      </div>
    )
  }
}

export default Contact;
