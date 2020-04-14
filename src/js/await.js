import { buscarHeroeAsync, buscarHeroe } from "./promesas";

const heroesIds = ["capi", "iron", "spider"];
const heroesPromesas = heroesIds.map(buscarHeroe);
// const heroesPromesas = heroesIds.map(id => buscarHeroe(id));

export const obtenerHeroesArr = async() => {
    // const heroesArr = [];

    // for(const id of heroesIds){
    //   heroesArr.push(buscarHeroe(id));
    // }
 
    // return await Promise.all(heroesArr);

    return await Promise.all(heroesIds.map(buscarHeroe));
}


export const obtenerHeroesAwait = async(id) =>{
    try{
        const heroe = await buscarHeroeAsync(id);
        return heroe;
    }catch(err){
        console.log('CATCH');
        return {
            nombre: 'Sin nombre',
            poder: 'sin poder'
        }
    }

}

export const heroesCiclo = async() =>{
    console.time('heroesCiclo');

    for await(const heroe of heroesPromesas){
        console.log(heroe);
    }

    console.timeEnd('heroesCiclo');

    // const heroes = await Promise.all(heroesPromesas);
    // heroes.forEach(heroe => console.log(heroe));
}

export const heroesIfAwait = async(id)=>{
    if((await buscarHeroeAsync(id)).nombre === 'Iroman'){
        console.log('Es el mejor de todos');
    }else{
        console.log('naaa');
    }
}