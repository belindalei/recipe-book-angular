export class Ingredient{
  // public name: string; 
  // public amount: number; 
  
  // typescript shortcut that allows you to both define and assign within the constructor 
  constructor(public name: string, public amount: number){
    // this.name = name;
    // this.amount = amount; 
  }
}