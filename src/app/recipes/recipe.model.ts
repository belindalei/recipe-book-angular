
//created as a blueprint because there will be a lot of recipes used

import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
  public name: string; 
  public description: string; 
  public imagePath: string; //will hold a url
  public ingredients: Ingredient[]; 


  //executed once a new instance of the class is created
  constructor(name: string, desc: string, imagePath: string, ingredients: Ingredient[]){
    this.name = name; 
    this.description = desc;
    this.imagePath = imagePath; 
    this.ingredients = ingredients; 
  }
}