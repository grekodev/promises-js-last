// import { promesaLenta, promesaMedia, promesaRapida } from "./js/promesas";
import {buscarHeroeAsync, buscarHeroe} from './js/promesas'

buscarHeroe('capi2')
    .then(heroe => console.log(heroe))
    .catch(console.warn)

buscarHeroeAsync('iron2')
    .then(heroe => console.log(heroe))
    .catch(console.warn)



// promesaLenta.then(console.log)
// promesaMedia.then(console.log)
// promesaRapida.then(console.log)

// Promise.race([promesaLenta,promesaMedia, promesaRapida])
// .then(mesaje => console.log(mesaje))
// .catch(console.warn)