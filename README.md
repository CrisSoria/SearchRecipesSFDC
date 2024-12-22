### [Live Site](https://labsxd-23e-dev-ed.develop.my.site.com/SearchRecipes/)
# Integración de Salesforce LWC con The Meal DB
<img src="https://i.ibb.co/GF4B4sP/Recipe-Search.png" align="right" alt="img" width="50%" height="auto" border="0">

Este proyecto demuestra una aplicación de Salesforce Lightning Web Components (LWC) integrada con la API de The Meal DB para buscar y mostrar recetas de comida. La aplicación aprovecha capacidades clave de Salesforce y las mejores prácticas de desarrollo frontend.

## Características

- **Búsqueda y visualización de recetas:** Permite a los usuarios buscar recetas por palabras clave y ver información detallada sobre recetas seleccionadas.
- **Comunicación entre componentes:** Demuestra una comunicación efectiva entre componentes LWC.
- **Llamadas a APIs:** Utiliza la API de The Meal DB para obtener datos de recetas dinámicamente.
- **Diseño responsivo:** Incluye componentes diseñados para adaptarse perfectamente a diferentes tamaños de pantalla.
- **Salesforce Lightning Design System (SLDS):** Estilizado con SLDS para proporcionar una interfaz de usuario coherente y elegante.
- **Integración con Experiencia Digital:** Expone componentes LWC en Salesforce Digital Experience (anteriormente Community Cloud).

## Componentes

### Lightning Web Components (LWC):

- **RecipeModal:** Muestra información detallada de recetas en una vista modal.
- **LoadRecipesResults:** Gestiona y renderiza una lista de recetas obtenidas de The Meal DB.
- **RecipesSearch:** Un componente contenedor para la funcionalidad de búsqueda.
- **LoadRecipesResults:** Maneja la representación de los resultados de búsqueda.
- **RecipesHome:** El componente de entrada que organiza e integra otros componentes.

### Configuración en Salesforce:

- **Remote Site Settings:**
  - **Nombre:** mealDB
  - **URL:** URL base de la API de The Meal DB

- **Trusted URLs:**
  - **Nombre:** mealDB
  - **URL:** URL base de la API de The Meal DB

- **Configuración CORS:**
  - Agregar la URL de la API de The Meal DB para permitir solicitudes cross-origin.
- **Recipes_Search:**
  - Lightning Component Tab para mostrar la aplicación.

## Requisitos previos

- Una organización de Salesforce Developer o Sandbox con Lightning Experience habilitado.
- Acceso a la API de The Meal DB (https://www.themealdb.com/api.php).

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/your-repo/salesforce-lwc-mealdb.git
   ```

2. Despliega los componentes LWC en tu organización de Salesforce:
   ```bash
   sfdx force:source:push
   ```

3. Configura Remote Site Settings:
   - Ve a **Configuración > Remote Site Settings**.
   - Agrega un nuevo Remote Site con la URL de la API de The Meal DB.

4. Agrega la URL de The Meal DB a la configuración CORS:
   - Ve a **Configuración > CORS**.
   - Agrega la URL base de la API de The Meal DB.

5. Agrega los componentes a tu Experiencia Digital:
   - Ve a tu sitio de Experiencia Digital.
   - Arrastra y suelta los componentes en el diseño de página deseado.

## Uso

1. Accede al sitio de Experiencia Digital o a la aplicación de Salesforce que contiene los componentes LWC.
2. Usa la barra de búsqueda para encontrar recetas por palabra clave.
3. Visualiza información detallada de una receta seleccionándola en los resultados.
4. Explora el diseño responsivo en varios dispositivos.

## Tecnologías utilizadas

- **Salesforce LWC**
- **API de The Meal DB**
- **Salesforce Lightning Design System (SLDS)**
- **Digital Experience Builder**

## Objetivos de aprendizaje

En este proyecto se aplican las siguientes habilidades de desarrollo en Salesforce:

- Comunicación entre componentes LWC
- Realización de llamadas a APIs desde LWC
- Estilizado de componentes usando SLDS
- Construcción de componentes responsivos para móviles
- Exposición de componentes LWC en Digital Experience

## Contribución

¡Las contribuciones son bienvenidas! Por favor, envía un pull request o abre un issue para discutir cualquier cambio que desees hacer.

## 🤝 Contacto
Cristian Soria - soriacristian.dev@gmail.com

Portafolio: https://crissoria.netlify.app/

Link del proyecto: https://labsxd-23e-dev-ed.develop.my.site.com/SearchRecipes/


---
⭐️ Si este proyecto te gustó, no olvides darle una estrella en GitHub!
