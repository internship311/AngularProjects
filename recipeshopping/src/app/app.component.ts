import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes/recipe.model';
import { RecipeService } from './recipes/recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipeshopping';
  selectedRecipe : Recipe;
  loadedFeature = 'recipe';

  onNavigate(feature : string){
    this.loadedFeature = feature;
  }

}