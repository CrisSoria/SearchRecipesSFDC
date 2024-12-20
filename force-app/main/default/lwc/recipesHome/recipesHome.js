import { LightningElement } from 'lwc';

export default class RecipesHome extends LightningElement {
  searchResults; //Variable para guardar los resultados de la API

  //Método que captura el evento de búsqueda de recetas
  async searchRecipeHendler(event){
    let searchRecipe = event.detail;
    console.log("searchRecipe: ", searchRecipe);

    //Llamamos a la API para buscar las recetas
    let response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + searchRecipe);
    let data = await response.json();
    console.log("searchResults: ", data.meals);
    
    this.searchResults = data.meals;
  }
}