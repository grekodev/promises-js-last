import {obtenerHeroesArr, obtenerHeroesAwait, heroesCiclo, heroesIfAwait} from './js/await';
// console.time('await')
// obtenerHeroesArr().then(heroes => {
//     console.table(heroes)
//     console.timeEnd('await')
// });

// console.time('await')
// obtenerHeroesAwait('capi2').then(heroe => {
//         console.log(heroe)
//         console.timeEnd('await')
//     }).catch(console.warn);

heroesCiclo();
heroesIfAwait('iron');