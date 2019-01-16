  document.getElementById("btn").addEventListener("click", getPoke);

  function getPoke(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/700/', true);

    xhr.onload = function(){
      if(this.status == 200){
        var pokemon = JSON.parse(this.responseText);

        document.getElementById('pknname').innerHTML = pokemon.name;
        document.getElementById('pknid').innerHTML = pokemon.id;
        document.getElementById('pknimg').src = pokemon.sprites.front_default;
        console.log(this.responseText)
      }
    }

    xhr.send();
  };
