import { Component, OnInit } from '@angular/core';
import {Pet} from "../interfaces/pet";
import {PetsService} from "../services/pets.service";

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  nombre = "Coby";
  petsC : Pet[];
  verMensaje = false;
  constructor(private petsService: PetsService) {
    this.petsC = this.petsService.getPets();
  }

  ngOnInit() {
  }

  showMensaje(){
    this.verMensaje = !this.verMensaje;
  }
  
  emojiPet(tipo){
    switch (tipo) {
      case 'perro':{
        return '🐶';
      }
      case 'gato':{
        return '😺';
      }
      case 'conejo':{
        return '🐰';
      }
    }
    return '🤮';
  }

  personajes() {
    this.petsService.getPersonajes();
  }
}
