import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
    providedIn : 'root'
})
export class ShoppingListService{
    ingchanged = new EventEmitter<Ingredient[]>();
    private ingredients : Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ]

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient(ing : Ingredient){
        this.ingredients.push(ing);
        this.ingchanged.emit(this.ingredients.slice());
    }

    deleteIngredient(){
        this.ingredients.pop();
        this.ingchanged.emit(this.ingredients.slice());
    }

    clearIngredient(){
        this.ingredients.splice(0);
        this.ingchanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients : Ingredient[]){
        /* for(let ing of ingredients){
            this.addIngredient(ing);
        } */

        this.ingredients.push(...ingredients);
        this.ingchanged.emit(this.ingredients.slice());
    }
}