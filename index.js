const domBody = document.getElementsByTagName("body")[0];

const clicked_elements = {};

const contarClicks = ($event) => {
    const clicked = $event.target; // Obtiene el elemento clickeado
    const uniqueId = clicked.id; // obtiene el id del elemento (deben de existir en la vista)

    if (clicked_elements.hasOwnProperty(uniqueId)){
        clicked_elements[uniqueId]++;
    } else {
        clicked_elements[uniqueId] = 1;
    }

    console.log(`Has clickeado el elemento: ${uniqueId}, ${clicked_elements[uniqueId]} veces`);
}

// Seteamos un event listener en el body para capturar los clicks
domBody.addEventListener('click', contarClicks);
