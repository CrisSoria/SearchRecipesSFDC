// loadRecipesResults.js
import { LightningElement, api } from 'lwc';

export default class LoadRecipesResults extends LightningElement {
    @api recipesResults; // Variable que obtiene los resultados de la API desde el padre
    selectedRecipe; // Variable para guardar la receta seleccionada
    showModal = false; // Variable para mostrar/ocultar el modal

    // Getter para verificar si hay recetas
    get hasRecipes() {
        return this.recipesResults?.length > 0;
    }

    // Getter para mostrar el mensaje de no resultados
    get showNoResults() {
      if(this.recipesResults === null) return true;
        return this.recipesResults?.length === 0;
    }

    // Manejador para cuando se selecciona una receta
    recipeHandler(e) {
        const selectedRecipeId = e.detail;
        
        // Obtenemos los datos de la receta seleccionada
        this.selectedRecipe = this.recipesResults.find(recipe => recipe.idMeal === selectedRecipeId);
        this.showModal = true;
    }

    // Manejador para cerrar el modal
    closeModalHandler() {
        this.showModal = false;
    }
}