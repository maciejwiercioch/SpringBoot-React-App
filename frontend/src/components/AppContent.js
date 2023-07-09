import * as React from 'react'
import WelcomeContent from './WelcomeContent'
import AuthContent from './AuthContent'
import LoginForm from './LoginForm'
import { request, setAuthToken } from '../axios_helper'
import Buttons from './Buttons'

export default class AppContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            componentToShow: "welcome"
        }
    }

    login = () => {
        this.setState({ componentToShow: "login" });
    }

    logout = () => {
        this.setState({ componentToShow: "welcome" });
    }

    onLogin = (e, email, password) => {
        e.preventDefault();
        request("POST",
            "api/v1/auth/authenticate",
            { email: email, password: password }
        ).then((response) => {
            this.setState({ componentToShow: "items" });
            setAuthToken(response.data.token)
        }).catch((error) => {
            this.setState({ componentToShow: "welcome" });
        });
    };

    onRegister = (e, firstname, lastname, email, password) => {
        e.preventDefault();
        request("POST",
            "api/v1/auth/register",
            {
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: password
            })
            .then((response) => {
                this.setState({ componentToShow: "items" });
                setAuthToken(response.data.token);
            }).catch((error) => {
                this.setState({ componentToShow: "welcome" });
            })
    }


    render() {
        return (
            <div>
                <Buttons login={this.login} logout={this.logout} />


                {this.state.componentToShow === "welcome" && <WelcomeContent />}
                {this.state.componentToShow === "items" && <AuthContent />}
                {this.state.componentToShow === "login" && <LoginForm onLogin={this.onLogin} onRegister={this.onRegister} />}
            </div>
        )
    }
}