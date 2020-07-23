import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'; 

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  //defining type Recipe that holds an array from the model we created in recipe.model.ts 
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'http://1.bp.blogspot.com/-mlbm4Cm3WuU/UbixzaOJ6ZI/AAAAAAAAA4I/IhJKhhtkWYQ/s1600/dragon+boat+festival.jpg') //creating a new object based on the recipe blueprint
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
