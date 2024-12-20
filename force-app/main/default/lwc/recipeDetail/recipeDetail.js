// recipeDetail.js
import { LightningElement, api } from 'lwc';

export default class RecipeDetail extends LightningElement {
    @api recipe;

    get ingredients() {
        if (!this.recipe) return [];
        
        const ingredients = [];
        for (let i = 1; i <= 20; i++) {
            const ingredient = this.recipe[`strIngredient${i}`];
            const measure = this.recipe[`strMeasure${i}`];
            if (ingredient && ingredient.trim() !== '') {
                ingredients.push({
                    id: i,
                    measure: measure || '',
                    name: ingredient
                });
            }
        }
        return ingredients;
    }

    get formattedInstructions() {
        if (!this.recipe?.strInstructions) return [];
        return this.recipe.strInstructions
            .split(/\r\n|\n/)
            .filter(instruction => instruction.trim() !== '')
            .map((instruction, index) => ({
                id: `step-${index + 1}`,
                number: index + 1,
                text: instruction.trim()
            }));
    }

    get tags() {
        if (!this.recipe?.strTags) return [];
        return this.recipe.strTags.split(',').map(tag => tag.trim());
    }

    get hasYoutubeLink() {
        return this.recipe?.strYoutube && this.recipe.strYoutube.trim() !== '';
    }

    get youtubeId() {
      if (!this.hasYoutubeLink) return '';
      try {
          const url = new URL(this.recipe.strYoutube);
          return url.searchParams.get('v') || '';
      } catch (error) {
          console.error('Error parsing YouTube URL:', error);
          return '';
      }
  }

  get youtubeEmbedUrl() {
      const videoId = this.youtubeId;
      return videoId ? `https://www.youtube.com/embed/${videoId}` : '';
  }
}