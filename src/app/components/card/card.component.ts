import { Component } from '@angular/core';
import { Character } from '../../../tipado/Character'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  character: Character = {id: "",
    name: "",
    status: "",
    species: "",
    type: "",
    gender: "",
    origin: {
        name: "",
        url: ""
    },
    location: {
        name: "",
        url: ""
        },
    image: "",
    episode: [],
    url: "",
    created: ""
  };
  

}
