import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  public resultado: String = 'Resultado'
  public precoAlcool: Number = 0
  public precoGasolina: Number = 0
  calcular(){
    if((this.precoAlcool && this.precoGasolina) &&  
    (this.precoAlcool.valueOf() !=  0 && this.precoGasolina.valueOf() != 0)){
      var pAlcool = parseFloat(this.precoAlcool.toString());
      var pGasolina = parseFloat(this.precoGasolina.toString());
  
      var res = pAlcool/pGasolina
      if(res >= 0.7){
        this.resultado = 'Melhor utilizar Gasolina' 
      }else{
        this.resultado = 'Melhor utilizar o Alcool' 
      }
    }
    else{
      this.resultado = 'Preencha ambos campos, não pode ser zero'
    }
  }
}
