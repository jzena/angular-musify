import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { map, filter, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { GLOBAL } from './global';
import { Album } from '../models/album';


@Injectable()
export class AlbumService {
    public url;

    constructor(
        private _http: Http
    ) {
        this.url = GLOBAL.url;
    }

    addAlbum(token, album: Album) {
        let params = JSON.stringify(album);
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.post(this.url + 'album', params, { headers })
            .pipe(map(res => res.json()));
    }
}