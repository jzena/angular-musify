import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { map, filter, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { GLOBAL } from './global';
import { Song } from '../models/song';


@Injectable()
export class SongService {
    public url;

    constructor(
        private _http: Http
    ) {
        this.url = GLOBAL.url;
    }

    getSongs(token, albumId = null) {
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        let options = new RequestOptions({ headers });

        if (albumId == null) {
            return this._http.get(this.url + 'songs', options)
                .pipe(map(res => res.json()));
        } else {
            return this._http.get(this.url + 'songs/' + albumId, options)
                .pipe(map(res => res.json()));
        }
    }

    getSong(token, id: string) {
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        let options = new RequestOptions({ headers });
        return this._http.get(this.url + 'song/' + id, options)
            .pipe(map(res => res.json()));
    }

    addSong(token, song: Song) {
        let params = JSON.stringify(song);
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.post(this.url + 'song', params, { headers })
            .pipe(map(res => res.json()));
    }

    editSong(token, id: string, song: Song) {
        let params = JSON.stringify(song);
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.put(this.url + 'song/' + id, params, { headers })
            .pipe(map(res => res.json()));
    }

    deleteSong(token, id: string) {
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        let options = new RequestOptions({ headers });
        return this._http.delete(this.url + 'song/' + id, options)
            .pipe(map(res => res.json()));
    }

}