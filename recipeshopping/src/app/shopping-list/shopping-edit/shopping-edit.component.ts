import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef : ElementRef;
  @ViewChild('amountInput') amountInputRef : ElementRef;
  //@Output() addProduct = new EventEmitter<Ingredient>();
  //@Output() deleteProduct = new EventEmitter<void>();
  //@Output() clearProduct = new EventEmitter<void>();
  addProductfunc(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newing = new Ingredient(ingName, ingAmount);
    this.shoppingListService.addIngredient(newing);
    //this.addProduct.emit(newing);
  }

  deleteProductfunc(){
    this.shoppingListService.deleteIngredient();
  }

  clearProductfunc(){
    this.shoppingListService.clearIngredient();
  }
  constructor(private shoppingListService : ShoppingListService) { }

  ngOnInit(): void {
  }

}
