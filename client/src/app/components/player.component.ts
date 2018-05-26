import { Component, OnInit } from '@angular/core';
import { GLOBAL } from './../services/global';
import { Song } from '../models/song';


@Component({
    selector: 'player',
    template: `
    <div class="album-image">
        <span *ngIf="song.album">
            <img id="play-image-album" src="{{ url + 'get-image-album/' + song.album.image }}"/>        
        </span>

        <span *ngIf="!song.album">
            <img id="play-image-album" src="assets/images/play.png" />
        </span>
    </div>
    <div class="audio-file">
        <p>Reproduciendo</p>
        <span id="play-song-title">
            {{song.name}}
        </span>
        |
        <span id="play-song-artist">
            <span *ngIf="song.album.artist">
                {{song.album.artist.name}}
            </span>
        </span>
        <audio controls id="player">
            <source id="mp3-source" src="{{ url + 'get-song-file/' + song.file }}" type="audio/mpeg" />
            Tu navegador no es compatible
        </audio>
    </div>
    `
})
export class PlayerComponent implements OnInit {
    public song: Song;
    public identity;
    public token;
    public url;
    public alertMessage;

    constructor() {
        this.url = GLOBAL.url;
        this.song = new Song(1, "", "", "", "");
    }

    ngOnInit() {
        console.log('player component loaded');

        const song = JSON.parse(localStorage.getItem('sound_song'));
        if (song) {
            this.song = song;
        } else {
            this.song = new Song(1, "", "", "", "");
        }
    }

}