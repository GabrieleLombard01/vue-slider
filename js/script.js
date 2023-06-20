//JS RESET
console.log('JS OK')

//Vue RESET
console.log('Vue OK', Vue);

const app = Vue.createApp({ 
  name: 'carousel', 
  data() {
    return {
      currentIndex: 0,
            images: [
                {
                  src: 'img/01.webp',
                  alt: 'Image1',
                  title: "Marvel's Spiderman Miles Morale",
                  text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                },
                {
                  src: 'img/02.webp',
                  alt: 'Image2',
                  title: 'Ratchet & Clank: Rift Apart',
                  text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                },
                {
                  src: 'img/03.webp',
                  alt: 'Image3',
                  title: 'Fortnite',
                  text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100-player face-off that combines looting, crafting, shootouts and chaos.',
                },
                {
                  src: 'img/04.webp',
                  alt: 'Image4',
                  title: 'Stray',
                  text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city.',
                },
                {
                  src: 'img/05.webp',
                  alt: 'Image5',
                  title: "Marvel's Avengers",
                  text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
                },
              ], 
    }
  },
})

app.mount('#root');