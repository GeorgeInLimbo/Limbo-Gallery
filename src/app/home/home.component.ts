import { Component } from '@angular/core';
import { ARTISTS } from '../mock-artist';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  artist = ARTISTS.find(artist => artist.id == 2);

}
