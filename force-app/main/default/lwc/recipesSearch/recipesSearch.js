import { LightningElement } from 'lwc';
// import mealDB_background from '@salesforce/resourceUrl/mealDB_background';


export default class RecipesSearch extends LightningElement {
  searchRecipe; //variable para almacenar la receta a buscar

  //Método para capturar el valor del input
  changeHandler(event) {
    this.searchRecipe = event.target.value;
  }

  //Método para lanzar el evento de búsqueda
  clickHandler() {
    const searchEvent = new CustomEvent('searchrecipe', {
      detail: this.searchRecipe
    });
    this.dispatchEvent(searchEvent);
  }
}