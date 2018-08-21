import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitForm(title: string, artist: string, description: string) {
    const newAlbum: Album = new Album(title, artist, description);
    console.log(newAlbum);
  }

}
