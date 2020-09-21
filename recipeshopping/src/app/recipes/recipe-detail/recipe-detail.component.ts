import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipeEl : Recipe;

  constructor(private recipeService : RecipeService) { }

  ngOnInit(): void {
  }

  addToShoppingList(){
    this.recipeService.addIngredientstoShoppingList(this.selectedRecipeEl.ingredients);
  }

}
