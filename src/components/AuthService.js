import React from "react";

class AuthService{

    login(username, password) {
        let data = {login:username, password:password}
        let options = {method: 'POST', headers: {
                'Access-Control-Allow-Origin': 'http://3.142.115.21',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Content-type': 'application/json'},
            body: JSON.stringify(data)}


        return fetch("http://3.142.115.21/auth", options)
            .then(res => res.json())
            .then(result => {
                if (result.token !== '') {
                    localStorage.setItem("token", result.token);
                    localStorage.setItem("isAuthorized", "true");
                } else {
                    localStorage.setItem("isAuthorized", "false");
                }
            });
    }

    logout() {
        localStorage.removeItem("token");
        localStorage.setItem("isAuthorized", "false");
    }

    register(username, password, timezone) {

        let data = {login:username, password:password, timeZone:timezone}
        let options = {method: 'POST', headers: {
                'Access-Control-Allow-Origin': 'http://3.142.115.21',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Content-type': 'application/json'},
            body: JSON.stringify(data)}


        return fetch("http://3.142.115.21/register", options)
            .then(res => {
                return res.ok;
            })
    }
}

export default new AuthService();