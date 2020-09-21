import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Ingredient } from '../shared/ingredient.model'
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients : Ingredient[];
  constructor(private shoppingListService : ShoppingListService, recipeService : RecipeService) { }

  /* onAdded(ing : Ingredient){
    this.shoppingListService.addIngredients(ing);
  }

  onDelete(){
    this.shoppingListService.deleteIngredients();
  }

  onClear(){
    this.shoppingListService.clearIngredients();
  }
 */
  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingchanged.subscribe((ingredients : Ingredient[]) => this.ingredients = ingredients);
  }

}
