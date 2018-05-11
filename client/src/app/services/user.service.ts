import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { map, filter, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { GLOBAL } from './global';


@Injectable()
export class UserService {
    public url: string;
    public identity;
    public token;

    constructor(
        private _http: Http
    ) {
        this.url = GLOBAL.url;
    }

    singup(user_to_login, gethash = null) {
        if (gethash != null) {
            user_to_login.gethash = gethash;
        }
        let json = JSON.stringify(user_to_login);
        let params = json;

        let headers = new Headers({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'login', params, { headers }).pipe(map(res => res.json()));
    }

    register(user_to_register) {
        let json = JSON.stringify(user_to_register);
        let params = json;

        let headers = new Headers({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'register', params, { headers }).pipe(map(res => res.json()));
    }

    getIdentity() {
        let identity = JSON.parse(localStorage.getItem('identity'));
        this.identity = null;

        if (identity != "undefined") {
            this.identity = identity;
        }

        return this.identity;
    }

    getToken() {
        let token = JSON.parse(localStorage.getItem('token'));
        this.token = null;

        if (token != "undefined") {
            this.token = token;
        }

        return this.token;
    }
}