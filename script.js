document.getElementById("btn").addEventListener("click", getPoke);

function getPoke(){
    //Searchvalue to xhr
    PknSearch=document.getElementById("SearchName").value.toLowerCase();
    var xhr = new XMLHttpRequest();
    var xhr2 = new XMLHttpRequest();

    // xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/'+SearchName+"/, true);
    xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/'+PknSearch+'/', true);
    xhr2.open('GET', 'https://pokeapi.co/api/v2/pokemon-species/'+PknSearch+'/', true);

    xhr2.onload=function(){
        if(this.status == 200){
            var pokemonPre = JSON.parse(this.responseText);
            if (pokemonPre.evolves_from_species!=null){
            }
        }
    };

    xhr.onload = function(){
        if(this.status == 200){
            var pokemon = JSON.parse(this.responseText);

            document.getElementById('pknname').innerHTML = pokemon.name;
            document.getElementById('pknid').innerHTML = pokemon.id;
            document.getElementById('pknimg').src = pokemon.sprites.front_default;
            //Moves with check
            document.getElementById('move1').innerHTML = pokemon.moves[0].move.name;
            if (pokemon.moves[1]!=null) {
                document.getElementById('move2').innerHTML = pokemon.moves[1].move.name;
            }else{
                document.getElementById('move2').innerHTML = "no more moves";
            }
            if (pokemon.moves[2]!=null) {
                document.getElementById('move3').innerHTML = pokemon.moves[2].move.name;
            }else{
                document.getElementById('move3').innerHTML = "no more moves";
            }

            if (pokemon.moves[3]!=null) {
                document.getElementById('move4').innerHTML = pokemon.moves[3].move.name;
            }else{
                document.getElementById('move4').innerHTML = "no more moves";
            }


        }
    }

    xhr.send();
};
