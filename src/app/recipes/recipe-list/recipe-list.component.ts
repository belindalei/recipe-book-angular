import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {

  //defining type Recipe that holds an array from the model we created in recipe.model.ts
  recipes: Recipe[]

  //inject service (currently available through recipe parent component)
  constructor(private recipeService: RecipeService) {
  }

  ngOnInit(): void {
    //fill recipe array through the getRecipes service
    this.recipes = this.recipeService.getRecipes(); 
  }

}
