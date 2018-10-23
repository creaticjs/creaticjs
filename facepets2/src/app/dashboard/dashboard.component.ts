import { Component, OnInit } from '@angular/core';
import {Pet} from '../interfaces/pet';
import {PetsService} from '../services/pets.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  pets: Pet[];
  action = 'list';
  pet: Pet = {nombre: '', tipo: ''};
  constructor(private servicioPets: PetsService) {
    this.servicioPets.getPets().valueChanges().subscribe((data: Pet[]) => {
      console.log('Traer datos');
      console.log(data);
      this.pets = data;
    }, (error) => {
      console.log('🤮');
    });
  }

  ngOnInit() {
  }

  emojiPet(tipo){
    switch (tipo) {
      case 'perro':{
        return '🐶';
      }
      case 'gato':{
        return '🐱';
      }
      case 'conejo':{
        return '🐰';
      }
    }
    return '🌵';
  }

  guardarMascota() {
    this.servicioPets.savePet(this.pet).then((data) => {
      console.log('Mascota Creada');
      this.action = 'list';
    });
  }
}
