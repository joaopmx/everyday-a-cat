import { getApi } from "./getApi.js";

const catImg = document.querySelector("[data-cat-image]");
const today = new Date().toISOString().split('T')[0];

async function pickCatImage () {
    try {
        const data = await getApi.connectApi();
        const imageUrl = data[0].url;

        
        localStorage.setItem('catImageUrl', imageUrl);
        localStorage.setItem('catData', today);

    } catch (error) {
        console.error('Erro ao buscar a imagem do gato', error);
    }
}

function getStoredCatImage () {
    const storedDate = localStorage.getItem('catData');
    
    if(storedDate === today) {
        return localStorage.getItem('catImageUrl');
    } else {
        return null;
    }
}

async function displayCatImage () {
    const storedImage = getStoredCatImage();

    const newImage = storedImage ? storedImage : await pickCatImage();

    if (newImage) {
        catImg.src = newImage;
      }

}

displayCatImage();
