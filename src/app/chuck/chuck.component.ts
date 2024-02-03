import {Component, OnInit} from '@angular/core';
import {ChuckInterface} from "../chuck.interface";
import {ChuckService} from "../chuck.service";

@Component({
  selector: 'app-chuck',
  templateUrl: './chuck.component.html',
  styleUrls: ['./chuck.component.css']
})
export class ChuckComponent implements OnInit{

  chuck: ChuckInterface|undefined;


  constructor(private chuckService: ChuckService) {
  }

  ngOnInit(){
    this.chuckService.getChunks().subscribe(chucks => {
      this.chuck = chucks;

      console.table("Joke : " + this.chuck.value);
    });

  }

}
