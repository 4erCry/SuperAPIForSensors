import React, {Component} from "react";
import {withRouter} from "react-router-dom";

const {Provider, Consumer: AuthConsumer}=React.createContext({
    isAuthorized: false
});

const token = localStorage.getItem('token');
const AuthStr = 'Bearer '.concat(token);

class AuthProvider extends Component{
    constructor(props) {
        super(props);
        this.state ={
            error: null,
            isAuthorized: false,
            items:[]
        };
    }

    componentDidMount() {
        fetch("http://3.142.115.21/auth")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isAuthorized: true,
                        items: result.token
                    });
                },
                (error)=>{
                    this.setState({
                        isAuthorized: false,
                        error
                    });
                }
            )
    }

    state={isAuthorized:false}
    authorized=()=>{
        this.setState({isAuthorized: true}, ()=>{
            this.props.history.push("/table")
        })
    }
    render() {
        const {isAuthorized}=this.state;
        return(
            <Provider value={{isAuthorized, authorize: this.authorized}}>
                {this.props.children}
            </Provider>
        );
    }
}

export function withAuth(WrappedComponent){
    return class AuthHOC extends Component{
        render() {
            return(
                <AuthConsumer>
                    {contextProps => (
                        <WrappedComponent {...contextProps} {...this.props}/>
                    )}
                </AuthConsumer>
            )
        }
    }
}

const AuthProviderWithRouter = withRouter(AuthProvider)
export {AuthProviderWithRouter as AuthProvider}