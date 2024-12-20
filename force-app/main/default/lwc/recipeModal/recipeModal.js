import { api, LightningElement } from 'lwc';

export default class RecipeModal extends LightningElement {
  @api selectedRecipe; //Variable que obtiene la receta seleccionada desde el padre

  clickHandler(){
    let myCustomEvernt = new CustomEvent('closemodal');
    this.dispatchEvent(myCustomEvernt);
  }

}