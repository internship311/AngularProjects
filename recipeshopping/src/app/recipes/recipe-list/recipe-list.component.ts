import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  //@Output() selectedWasRecipe = new EventEmitter<Recipe>();
  recipes : Recipe[];

  /* onSelect(recipe : Recipe){
    this.selectedWasRecipe.emit(recipe);
  } */
  /* recipes : Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://hips.hearstapps.com/del.h-cdn.co/assets/17/38/640x950/gallery-1506029014-screen-shot-2017-09-21-at-52152-pm.png?resize=768:*'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://hips.hearstapps.com/del.h-cdn.co/assets/17/38/640x950/gallery-1506029014-screen-shot-2017-09-21-at-52152-pm.png?resize=768:*')
  ]; */

  constructor(private recipeService : RecipeService) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

}
