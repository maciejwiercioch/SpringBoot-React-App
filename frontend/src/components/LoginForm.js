import classNames from 'classnames';
import * as React from 'react'

export default class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            active: "login",
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            onLogin: props.onLogin,
            onRegister: props.onRegister
        }
    }

    changeFieldHandler = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value });

    }

    submitLogin = (e) => {
        console.log('submitting login')
        this.state.onLogin(e, this.state.email, this.state.password);
    }

    submitRegister = (e) => {
        console.log('submitting register')
        this.state.onRegister(e,
            this.state.firstName,
            this.state.lastName,
            this.state.email,
            this.state.password);
    }

    render() {
        return (
            <div className='row justify-content-center'>
                <div className='col-4'>
                    <ul className='nav nav-pills nav-justified mb-3' id='ex1' rol='tablist'>
                        <li className='nav-item' role='presentation'>
                            <button className={classNames("nav-link", this.state.active === "login" ? "active" : "")}
                                id="tab-login" onClick={() => this.setState({ active: "login" })}>Login</button>
                        </li>
                        <li className='nav-item' role='presentation'>
                            <button className={classNames("nav-link", this.state.active === "register" ? "active" : "")}
                                id="tab-register" onClick={() => this.setState({ active: "register" })}>Register</button>
                        </li>
                    </ul>

                    <div className='tab-content'>
                        <div className={classNames("tab-pane", "fade", this.state.active === "login" ? "show active" : "")} id='pills-login'>
                            <form onSubmit={this.submitLogin}>
                                <div className='form-outline mb-4'>
                                    <input type="email" id="email" name="email" className='form-control' onChange={this.changeFieldHandler} />
                                    <label className='form-label' htmlFor='email'>Email</label>
                                </div>
                                <div className='form-outline mb-4'>
                                    <input type="password" id="emailPassword" name="password" className='form-control' onChange={this.changeFieldHandler} />
                                    <label className='form-label' htmlFor='emailPassword'>Password</label>
                                </div>
                                <button type="submit" className='btn btn-primary btn-block mb-4'>Sign In</button>
                            </form>
                        </div>
                    </div>

                    <div className='tab-content'>
                        <div className={classNames("tab-pane", "fade", this.state.active === "register" ? "show active" : "")} id='pills-register'>
                            <form onSubmit={this.submitRegister}>
                                <div className='form-outline mb-4'>
                                    <input type="text" id="firstName" name="firstName" className='form-control' onChange={this.changeFieldHandler} />
                                    <label className='form-label' htmlFor='firstName'>First Name</label>
                                </div>
                                <div className='form-outline mb-4'>
                                    <input type="text" id="lastName" name="lastName" className='form-control' onChange={this.changeFieldHandler} />
                                    <label className='form-label' htmlFor='lastName'>Last Name</label>
                                </div>
                                <div className='form-outline mb-4'>
                                    <input type="email" id="email" name="email" className='form-control' onChange={this.changeFieldHandler} />
                                    <label className='form-label' htmlFor='email'>Email</label>
                                </div>
                                <div className='form-outline mb-4'>
                                    <input type="password" id="emailPassword" name="password" className='form-control' onChange={this.changeFieldHandler} />
                                    <label className='form-label' htmlFor='emailPassword'>Password</label>
                                </div>
                                <button type="submit" className='btn btn-primary btn-block mb-3'>Sign In</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div >);
    }
}