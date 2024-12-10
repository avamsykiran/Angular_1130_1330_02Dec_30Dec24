import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inWords',
  standalone: true
})
export class InWordsPipe implements PipeTransform {

  digits:string[];

  constructor(){
    this.digits = [
      "ZERO","ONE","TWO","THREE","FOUR",
      "FIVE","SIX","SEVEN","EIGHT","NINE"
    ];
  }

  transform(value: number) : string {
    var result="";

    var valueStr = String(value);

    for(let i=0;i<valueStr.length;i++){
      let ch = valueStr.charAt(i);

      if(ch==='.'){
        result = `${result} dot`;
      }else{
        result = `${result} ${this.digits[Number(ch)]}`;
      }
    }

    return result;
  }

}
