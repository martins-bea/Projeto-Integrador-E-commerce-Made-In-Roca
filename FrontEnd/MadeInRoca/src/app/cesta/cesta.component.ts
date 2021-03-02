import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cesta',
  templateUrl: './cesta.component.html',
  styleUrls: ['./cesta.component.css']
})
export class CestaComponent implements OnInit {

  nLegumes = 0
  nFrutas = 0
  nVerduras = 0
  
  constructor() { }

  ngOnInit(): void {
    window.scroll(0,0)
  }

  maxItens(){
    if((this.nLegumes + this.nFrutas + this.nVerduras) > 12){
      alert('Escolha no maximo 12 itens para compor sua cesta'),
      this.nLegumes = 0 
      this.nFrutas = 0 
      this.nVerduras = 0
    }
    
  }

}
