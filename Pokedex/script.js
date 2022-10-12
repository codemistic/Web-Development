$(window).on('unload', function() {
    $(window).scrollTop(0);
 });

 window.onunload = function(){ window.scrollTo(0,0); }

 if ('scrollRestoration' in history) {
   history.scrollRestoration = 'manual';
 }


let bg = document.querySelector('.container');
let loader = document.querySelector('.loader');

let load = 0;
let int = setInterval(count, 0);

function count() {
    load++;
    if (load > 99)
        clearInterval(int);
    bg.style.filter = `blur(${scale(load, 0, 100, 100, 0)}px)`;
    loader.innerHTML = `${load}%`;
    loader.style.opacity = scale(load, 0, 100, 100, 0);
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }

// API Call

let apiurl = 'https://pokeapi.co/api/v2/pokemon?limit=898&offset=0'

fetch(apiurl)
    .then((data) => data.json())
    .then((pokemons) => generateHtml(pokemons))

const generateHtml = (data) => {
    console.log(data)
    data.results.forEach(poke => {
        let node = create('div')
        let name = create('span')
        let img = create('img')
        node.className = 'pokemon'
        img.className = 'images'
        name.innerHTML = 'Name: ' + poke.name.charAt(0).toUpperCase() + poke.name.substring(1)

        fetch(poke.url)
            .then((dat) => dat.json())
            .then((pokemon) => {
                let ID = create('span')
                ID.className = 'id'
                ID.innerHTML = '#' + pokemon.id
                let type = create('span')
                type.className = 'type'
                let m = typeset(pokemon.types)
                type.innerHTML = m
                append(node, img)
                append(node, ID)
                append(node, name)
                append(node, type)
                img.src = pokemon.sprites.front_default
            })
        document.querySelector('.list').appendChild(node)

        //-----Add divs containing types to pokemon on call-----

        typeset = (x) => {
            // console.log(x)
            let p = ''
            for (let i = 0; i < x.length; i++) {
                p += ` 
                <div class= "types">${x[ i ].type.name.charAt(0).toUpperCase() + x[ i ].type.name.substring(1)}</div>
                `
            }
            // console.log(p)
            return p
        }
    })

    // ------------------to give proper colors to the 'types' divs---------------------

    setTimeout(() => {
        let t = document.querySelectorAll('.types')

        t.forEach(x => {
            // console.log(x.textContent)
            switch (x.textContent) {
                case 'Grass': {
                    x.style.backgroundColor = '#9bcc50'; break;
                }
                case 'Poison': {
                    x.style.backgroundColor = '#b97fc9';
                    x.style.color = '#fff';
                    break;
                }
                case 'Fire': {
                    x.style.backgroundColor = '#fd7d24';
                    x.style.color = '#fff';
                    break;
                }
                case 'Flying': {
                    x.style.background= `linear-gradient( #66c3f5 0%, #66c3f5 50%, rgb(189,185,184) 50%, rgb(189,185,184) 100%)`;
                    // x.style.color = '#fff;
                    break;
                }
                case 'Water': {
                    x.style.backgroundColor = '#5091ca';
                    x.style.color = '#fff';
                    break;
                }
                case 'Bug': {
                    x.style.backgroundColor = '#729f3f';
                    x.style.color = '#fff';
                    break;
                }
                case 'Normal': {
                    x.style.backgroundColor = '#a4acaf';
                    // x.style.color = '#fff';
                    break;
                }
                case 'Electric': {
                    x.style.backgroundColor = '#eed535';
                    // x.style.color = '#fff';
                    break;
                }
                case 'Ground': {
                    x.style.background = 'linear-gradient(#f7de3f 0%,#f7de3f 50%,#b3a12e 50%,#b3a12e 100%)';
                    // x.style.color = '#fff';
                    break;
                }
                case 'Fairy': {
                    x.style.backgroundColor ='#fdb8e9'
                    // x.style.color = '#fff';
                    break;
                }
                case 'Fighting': {
                    x.style.backgroundColor ='#d56723'
                    x.style.color = '#fff';
                    break;
                }
                case 'Psychic': {
                    x.style.backgroundColor ='#f366b9'
                    x.style.color = '#fff';
                    break;
                }
                case 'Dragon': {
                    x.style.background = 'linear-gradient(#53a4c4 0%,#53a4c4 50%,#f16e57 50%,#f16e57 100%)';
                    x.style.color = '#fff';
                    break;
                }
                case 'Psychic': {
                    x.style.backgroundColor ='#f366b9'
                    x.style.color = '#fff';
                    break;
                }
                case 'Ghost': {
                    x.style.backgroundColor ='#7b62a3'
                    x.style.color = '#fff';
                    break;
                }
                case 'Steel': {
                    x.style.backgroundColor ='#9eb7b8'
                    // x.style.color = '#fff';
                    break;
                }
                case 'Dark': {
                    x.style.backgroundColor ='#707070'
                    x.style.color = '#fff';
                    break;
                }
                case 'Ice': {
                    x.style.backgroundColor ='#51c4e7'
                    // x.style.color = '#fff';
                    break;
                }
                case 'Rock': {
                    x.style.backgroundColor ='#a38c21'
                    x.style.color = '#fff';
                    break;
                }
            }
    })},5000)
}

//----for creating element----

create = (val) => {
    return document.createElement(val)
}

//----for appending elements----
append = (node, element) => {
    node.appendChild(element)
}
