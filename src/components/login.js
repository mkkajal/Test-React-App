import React, { Component } from 'react'



class Login extends Component {

    constructor(props) {
        super(props);
        // window.rajniMode = true // enable rajniMode in console to see the MAGIC !!!
        this.domain = window.location.hostname
        this.state = {
            name: "",
            pass: "",
        
        }
    }

    handleUser = e => {
        this.setState({ name: e.target.value })
    }
    handlepassword = e => {
        this.setState({ pass: e.target.value })
    }

    goLogin = () => {
        const username= "hruday@gmail.com"
        const password = "hruday123"
       
        // let request = {
        //     module:"user",
        //     action:"login",
        //     query:{username:this.state.name, passowrd : this.state.pass}

        // } 
        if(username===this.state.name && password===this.state.pass)
        {
            this.props._authSuccess()   // it will not check db (direct authentication)
        }
        else{
            this.setState({"authError":true})
        }
       
    }

    render() {
        return (
            <div className="mainContainer">

                <div className="inputCon">

                    <div className="inputform">
                        <span className="login-label">
                            USERNAME
								    </span>
                        <input type="text" value={this.state.name} onChange={this.handleUser.bind(this)} name="" />
                    </div>
                    <div className="inputform">
                        <span className="login-label">
                            PASSWORD
								    </span>
                        <input type="PASSWORD" value={this.state.password} onChange={this.handlepassword.bind(this)} name="" />
                    </div>
                    <div className="inputform-btn">
                        <button onClick={this.goLogin.bind(this)}>Submit</button>
                    </div>
                    {this.state.authError && <div>
                            <div style={{textAlign:"center"}}>
                               <span style={{color:"red",fontWeight:"bold"}}>ERROR ! Authentication failed</span>
                            </div>
                     </div>
                    }
                </div>

            </div>
        )
    }
}

export default Login