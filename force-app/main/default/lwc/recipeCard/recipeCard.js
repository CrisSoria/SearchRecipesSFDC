import { api, LightningElement } from 'lwc';

export default class RecipeCard extends LightningElement {
  @api recipe;

  recipeHandler(){
    let myCustomEvent = new CustomEvent('recipe',{
      detail : this.recipe.idMeal
    })

    this.dispatchEvent(myCustomEvent);
  }
}