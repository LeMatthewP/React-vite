const getImagen = async()=>{
    try{
        // const api_key = '10KVnQEbtQ6QUUarB2nQxTiDrPtauSgj';
        // `https://api.giphy.com/v1/gifs/random?api_key=${api_key}`
        const consumoApi = await fetch('https://pokeapi.co/api/v2/pokemon/torchic');
        const data = await consumoApi.json();
        return data;
    }catch(error){
        console.log(error);
    }
}

const data = await getImagen();

export function RandomGiff(){
    // const url = data.data.images.original.url;
    // console.log(url);
    const pokename=(data.species.name);
    const pokefront=(data.sprites.front_default);
    // const pokeback =(data.sprites.back_default);
    // const pokefrontshiny=(data.sprites.front_shiny);
    // const pokebackshiny=(data.sprites.back_shiny);
    const poketype = (data.types[0].type.name);
    // console.log(data.types[0].type.name)
    const pokestats1 =(data.stats[0].base_stat);    
    const habipo = (data.abilities[0].ability.name);
    const habipo1 = (data.abilities[1].ability.name);
    // console.log(habipo);



    const h1 = document.createElement('h1');
    const img = document.createElement('img');
    // const img2 = document.createElement('img');
    // const imgshiny = document.createElement('img');
    // const imgshiny2 = document.createElement('img');
    const tipoke = document.createElement('h1');
    const typepo = document.createElement('h2');
    const pokestatstext = document.createElement('h1');
    const pokestatn1 = document.createElement('h2');
    const habilidadespokemon = document.createElement('h1');
    const habipoke = document.createElement('h2');
    const habipoke1 = document.createElement('h2');

    h1.textContent = pokename;
    img.src = pokefront;
    // img2.src= pokeback;
    // imgshiny.src = pokefrontshiny;
    // imgshiny2.src = pokebackshiny;
    tipoke.textContent = "Tipo";
    typepo.textContent = poketype;
    pokestatstext.textContent="Base stat";
    pokestatn1.textContent = pokestats1;
    habilidadespokemon.textContent = "Habilidades";
    habipoke.textContent = habipo;
    habipoke1.textContent = habipo1;
    

    
    document.body.append(h1);
    document.body.append(img);
    // document.body.append(img2);
    // document.body.append(imgshiny);
    // document.body.append(imgshiny2);
    document.body.append(tipoke);
    document.body.append(typepo);
    document.body.append(pokestatstext);
    document.body.append(pokestatn1);
    document.body.append(habilidadespokemon);
    document.body.append(habipoke);
    document.body.append(habipoke1);
    
    return(<>

    </>)
}