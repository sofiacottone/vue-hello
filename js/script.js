// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const { createApp } = Vue;

createApp({
    data() {
        return {
            message: 'Hello Vue!',
            // image: 'img/hello.jpg'
            image: 'https://c4.wallpaperflare.com/wallpaper/835/299/811/simple-background-quote-minimalism-text-wallpaper-preview.jpg'
        };
    }
}).mount('#app');