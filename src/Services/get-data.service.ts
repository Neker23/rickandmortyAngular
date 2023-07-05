import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from '../tipado/Character'

@Injectable({
  providedIn: 'root'
})
export class GetDataService  {

  constructor(private http: HttpClient) { }
  // `https://rickandmortyapi.com/api/character/${id}`
  getCharacters(id:string) {
    const url = `https://rickandmortyapi.com/api/character/${id}`; 
    return this.http.get<Character>(url);
  }

}
