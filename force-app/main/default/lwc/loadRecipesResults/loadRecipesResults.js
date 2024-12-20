import { api, LightningElement } from 'lwc';

export default class LoadRecipesResults extends LightningElement {
  @api recipesResults; //Variable que obtiene los resultados de la API desde el padre
  selectedRecipe; //Variable para guardar la receta seleccionada
  showModal = false; //Variable para mostrar/ocultar el modal

  get checkRecipesResults(){
    return this.recipesResults?.length > 0;
  }

  recipeHandler(e){
    let selectedRecipeId = e.detail;
    console.log("selectedRecipeId: ", selectedRecipeId);
    
    //obtenemos los datos de la receta seleccionada
    this.selectedRecipe = this.recipesResults.find(currRec => currRec.idMeal === selectedRecipeId);
    this.showModal = true;
  }

  closeModalHandler(){
    this.showModal = false;
  }
}