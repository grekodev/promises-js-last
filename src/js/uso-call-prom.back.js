import './styles.css'
import { buscarHeroe as bucarHeroeCallback } from './js/callbacks';
import {buscarHeroe} from './js/promesas'

const heroeId = 'capi';
const heroeId2 = 'iron';

// buscarHeroe(heroeId, (err, heroe1) =>{
//     if (err){return console.error(err)};
//     buscarHeroe(heroeId2, (err, heroe2)=>{
//         if (err){return console.error(err)};
//         console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la mision`)
//     })
// });

// buscarHeroe(heroeId).then(heroe1 => {
//    console.log(`enviando a ${heroe.nombre} a mision`);
//     buscarHeroe(heroeId2).then((heroe2)=>{
//         console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la mision`)
//     })
// });

Promise.all([buscarHeroe(heroeId), buscarHeroe(heroeId2)])
    .then(([heroe1, heroe2]) => {
    console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la mision`)
}).catch(err => {
    alert(err);
}).finally(()=>{
    console.log('Se termino el promise.all')
});

console.log('fin del programa')