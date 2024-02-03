import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit{


  pokemonList:string[] = ['Moustillon', 'Salameche', 'Tortank'];


  ngOnInit(){


    console.table(this.pokemonList);



  }


}
