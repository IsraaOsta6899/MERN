const pokémon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);
    const bListPkmn = pokémon.filter( p => p.name[0] === "B" );
    const pkmnIds = pokémon.map( p => p.id )
    console.log("-----------------------------------------------------------------------------")

    const idDivBy3=pokémon.filter(value=>value.id%3===0)
    idDivBy3.forEach(element => {
        console.log(element)
    });

    console.log("-----------------------------------------------------------------------------")

    const fireTypesArray=pokémon.filter(v=>v.types.includes("fire"));
    fireTypesArray.forEach(element => {
        console.log(element)
    });
    console.log("-----------------------------------------------------------------------------")

    const moreThan2Type=pokémon.filter(v=>v.types.length>1);
    console.log(moreThan2Type);
    console.log("-----------------------------------------------------------------------------")

    const pkmnNames = pokémon.map( p => p.name )
    pkmnNames.forEach(element => {
        console.log(element)
    });
    console.log("-----------------------------------------------------------------------------")
    const pkmnNames2 = pokémon.filter( p => p.id>99 )
    const names=pkmnNames2.map(v=>v.name)
    names.forEach(element => {
        console.log(element)
    });
    console.log("-----------------------------------------------------------------------------")
    const pkmnPoison=pokémon.filter(v=>v.types.length===1 && v.types[0]==="poison");
    pkmnPoison.forEach(element => {
        console.log(element)
    });

    console.log("-----------------------------------------------------------------------------")

    const pkmn=pokémon.filter(v=>v.types.length> 1 && v.types[1]==="flying");
    const pkmntype=pkmn.map(v=>v.types[0])
    pkmntype.forEach(element => {
        console.log(element)
    });
    console.log("-----------------------------------------------------------------------------")
    const normalPkmn=pokémon.filter(v=>v.types.includes("normal"));
    console.log(normalPkmn.length)