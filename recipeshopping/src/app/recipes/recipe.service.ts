import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
    providedIn : 'root'
})
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    private recipes : Recipe[] = [
        new Recipe('Italian Pasta', 'Splendid Roman Taste', 'https://hips.hearstapps.com/del.h-cdn.co/assets/17/38/640x950/gallery-1506029014-screen-shot-2017-09-21-at-52152-pm.png?resize=768:*',
        [
            new Ingredient('Tomatoes', 5)
        ]),
        new Recipe('Garlic Bread', 'Yummy Bread', 'https://www.indianveggiedelight.com/wp-content/uploads/2017/03/dominos_stuffed_garlic_bread_final-500x500.jpg',
        [
            new Ingredient('MultiGrain Bread', 5)
        ])
    ]

    getRecipes(){
        return this.recipes.slice();
    }

    constructor(private shoppingListService : ShoppingListService){

    }

    addIngredientstoShoppingList(ingredients : Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }
}