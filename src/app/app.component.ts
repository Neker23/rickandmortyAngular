import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../Services/get-data.service'
import { Character } from '../tipado/Character'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  showRickAndMorty = false;

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


  constructor(private myService: GetDataService){ }

  

  onSearch (id: string) {
    this.myService.getCharacters(id).subscribe((response)=>{
      console.log(response)
      this.character = response
    })
  }

}
