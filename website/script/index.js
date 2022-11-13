const filter = document.getElementById('filter').value;
const plat = document.getElementById('plat')
const list = document.getElementById("platType");


// console.log(data)
const platType = function (type, descr) {
    return `
    <h2>${type}</h2>
    <p>${descr}</p>`;
}
const Content = function (plat) {
    var Title = plat.name,
    Price = plat.price,
    Img = plat.img,
    Id = plat.id;
    return `
    <div class="roW" id="${plat.id}">
    <img src="../${plat.img}" alt="">
    <div class="menu-text">
    <div class="menu-left">
    <h4>${plat.name}</h4>
    </div>
    <div class="menu-right">
    <h5>${plat.price} DH</h5>
    </div>
    </div>
    <p>${plat.desc}</p>
    <input type="hidden" id="price" value="${plat.price}">
    <input type="hidden" id="produitName" value="${plat.name}">
    <input type="hidden" class="idPlat" value="${plat.id}">
    <div class="foteerPlat">
    <div class="start">
    <a href=""><i class='bx bxs-star'></i></a>
    <a href=""><i class='bx bxs-star'></i></a>
    <a href=""><i class='bx bxs-star'></i></a>
    <a href=""><i class='bx bxs-star'></i></a>
    <a href=""><i class='bx bxs-star'></i></a>
    </div>
    <div class="addPlat" onclick="addToCart(${"'" + Title + "','" + Img + "'," + Price + "," + Id})">
    <i class='bx bx-plus-circle bx-sm add-cart'>.</i>
    </div>
    </div>
    </div>
    </div>`
}
// import data from './test';
// fetch('./data.json')
//     .then((response) => response.json())
//     .then((json) => console.log(json));
// console.log(data);
// import data from './data.json' assert { type: 'JSON' };
// console.log(data);
// import data from './data.json' assert { type: 'json' };
// console.log(data);
// const soupPlat = data[0];
// const NemsPlat = data[1];
// const TempuraPlat = data[2];
// const PokesPlat = data[3];
// const YakitorisPlat = data[4];
// const SaladesPlat = data[5];
// const JusPlat = data[6];
// const DesertPlat = data[7];

var soupPlat = [
    {
        name: 'Soupe Fruit de mére',
        desc: ' une soupe asiatique unique chez nous cuisinier par le chef cuisinier \'SIDATI\' ',
        price: 67,
        img: 'image/SOUPE/1.jpg',
        id: 1,
    },
    {
        name: 'Soupe Fruit de mére',
        desc: ' une soupe asiatique unique chez nous cuisinier par le chef cuisinier \'SIDATI\' ',
        price: 100,
        img: 'image/SOUPE/2.jpg',
        id: 2,
    },
    {
        name: 'Soupe Fruit de mére',
        desc: ' une soupe asiatique unique chez nous cuisinier par le chef cuisinier \'SIDATI\' ',
        price: 67,
        img: 'image/SOUPE/3.jpg',
        id: 3,
    },
    {
        name: 'Soupe Fruit de mére',
        desc: ' une soupe asiatique unique chez nous cuisinier par le chef cuisinier \'SIDATI\' ',
        price: 57,
        img: 'image/SOUPE/4.jpg',
        id: 4,
    },
    {
        name: 'Soupe Fruit de mére',
        desc: ' une soupe asiatique unique chez nous cuisinier par le chef cuisinier \'SIDATI\' ',
        price: 327,
        img: 'image/SOUPE/5.jpg',
        id: 5,
    },
    {
        name: 'Soupe Fruit de mére',
        desc: ' une soupe asiatique unique chez nous cuisinier par le chef cuisinier \'SIDATI\' ',
        price: 953,
        img: 'image/SOUPE/6.jpg',
        id: 6,
    },
    {
        name: 'Soupe Fruit de mére',
        desc: ' une soupe asiatique unique chez nous cuisinier par le chef cuisinier \'SIDATI\' ',
        price: 278,
        img: 'image/SOUPE/7.jpg',
        id: 7,
    },
    {
        name: 'Soupe Fruit de mére',
        desc: ' une soupe asiatique unique chez nous cuisinier par le chef cuisinier \'SIDATI\' ',
        price: 38,
        img: 'image/SOUPE/8.jpg',
        id: 8,
    },
]
var NemsPlat = [
    {
        name: 'Nems Tayeb Fl Fran',
        desc: 'Nems Tayeb un de notre plas populaire originale concaténé de cinoie-marocain',
        price: 67,
        img: 'image/NEMS/1.jpg',
        id: 9,
    },
    {
        name: 'Nems Tayeb Fl Fran',
        desc: 'Nems Tayeb un de notre plas populaire originale concaténé de cinoie-marocain',
        price: 75,
        img: 'image/NEMS/2.jpg',
        id: 10,
    },
    {
        name: 'Nems Tayeb Fl Fran',
        desc: 'Nems Tayeb un de notre plas populaire originale concaténé de cinoie-marocain',
        price: 266,
        img: 'image/NEMS/3.jpg',
        id: 11,
    },
    {
        name: 'Nems Tayeb Fl Fran',
        desc: 'Nems Tayeb un de notre plas populaire originale concaténé de cinoie-marocain',
        price: 57,
        img: 'image/NEMS/4.jpg',
        id: 12,
    },
    {
        name: 'Nems Tayeb Fl Fran',
        desc: 'Nems Tayeb un de notre plas populaire originale concaténé de cinoie-marocain',
        price: 206,
        img: 'image/NEMS/5.jpg',
        id: 13,
    },
    {
        name: 'Nems Tayeb Fl Fran',
        desc: 'Nems Tayeb un de notre plas populaire originale concaténé de cinoie-marocain',
        price: 26,
        img: 'image/NEMS/6.jpg',
        id: 14,
    },
    {
        name: 'Nems Tayeb Fl Fran',
        desc: 'Nems Tayeb un de notre plas populaire originale concaténé de cinoie-marocain',
        price: 86,
        img: 'image/NEMS/7.jpg',
        id: 15,
    },
    {
        name: 'Nems Tayeb Fl Fran',
        desc: 'Nems Tayeb un de notre plas populaire originale concaténé de cinoie-marocain',
        price: 83,
        img: 'image/NEMS/8.jpg',
        id: 16,
    }

]
var TempuraPlat = [
    {
        name: 'Tempura msayeb f YouCode',
        desc: 'Notre Tempura inventé a Youcode par ses exelent Lorea',
        price: 78,
        img: 'image/TEMPURA/1.jpg',
        id: 17,
    },
    {
        name: 'Tempura msayeb f YouCode',
        desc: 'Notre Tempura inventé a Youcode par ses exelent Lorea',
        price: 78,
        img: 'image/TEMPURA/2.jpg',
        id: 18,
    },
    {
        name: 'Tempura msayeb f YouCode',
        desc: 'Notre Tempura inventé a Youcode par ses exelent Lorea',
        price: 97,
        img: 'image/TEMPURA/3.jpg',
        id: 19,
    },
    {
        name: 'Tempura msayeb f YouCode',
        desc: 'Notre Tempura inventé a Youcode par ses exelent Lorea',
        price: 25,
        img: 'image/TEMPURA/4.jpg',
        id: 20,
    },
    {
        name: 'Tempura msayeb f YouCode',
        desc: 'Notre Tempura inventé a Youcode par ses exelent Lorea',
        price: 89,
        img: 'image/TEMPURA/5.jpg',
        id: 21,
    },
    {
        name: 'Tempura msayeb f YouCode',
        desc: 'Notre Tempura inventé a Youcode par ses exelent Lorea',
        price: 85,
        img: 'image/TEMPURA/6.jpg',
        id: 22,
    },
    {
        name: 'Tempura msayeb f YouCode',
        desc: 'Notre Tempura inventé a Youcode par ses exelent Lorea',
        price: 735,
        img: 'image/TEMPURA/7.jpg',
        id: 23,
    },
    {
        name: 'Tempura msayeb f YouCode',
        desc: 'Notre Tempura inventé a Youcode par ses exelent Lorea',
        price: 75,
        img: 'image/TEMPURA/8.jpg',
        id: 24,
    },

]
var PokesPlat = [
    {
        name: 'POKES LIKE POKEMON',
        desc: 'notre chef \'el-bakoouri\' fanne de pookemon nous a inventer le plat POKES',
        price: 75,
        img: 'image/POKES/1.jpg',
        id: 25,
    },
    {
        name: 'POKES LIKE POKEMON',
        desc: 'notre chef \'el-bakoouri\' fanne de pookemon nous a inventer le plat POKES',
        price: 49,
        img: 'image/POKES/2.jpg',
        id: 26,
    },
    {
        name: 'POKES LIKE POKEMON',
        desc: 'notre chef \'el-bakoouri\' fanne de pookemon nous a inventer le plat POKES',
        price: 99,
        img: 'image/POKES/3.jpg',
        id: 27,
    },
    {
        name: 'POKES LIKE POKEMON',
        desc: 'notre chef \'el-bakoouri\' fanne de pookemon nous a inventer le plat POKES',
        price: 45,
        img: 'image/POKES/4.jpg',
        id: 28,
    },
    {
        name: 'POKES LIKE POKEMON',
        desc: 'notre chef \'el-bakoouri\' fanne de pookemon nous a inventer le plat POKES',
        price: 75,
        img: 'image/POKES/5.jpg',
        id: 29,
    },
    {
        name: 'POKES LIKE POKEMON',
        desc: 'notre chef \'el-bakoouri\' fanne de pookemon nous a inventer le plat POKES',
        price: 75,
        img: 'image/POKES/6.jpg',
        id: 30,
    },
    {
        name: 'POKES LIKE POKEMON',
        desc: 'notre chef \'el-bakoouri\' fanne de pookemon nous a inventer le plat POKES',
        price: 75,
        img: 'image/POKES/7.jpg',
        id: 31,
    },
    {
        name: 'POKES LIKE POKEMON',
        desc: 'notre chef \'el-bakoouri\' fanne de pookemon nous a inventer le plat POKES',
        price: 46,
        img: 'image/POKES/8.jpg',
        id: 32,
    },


]
var YakitorisPlat = [
    {
        name: 'Yakitoris dyal l3risse',
        desc: 'boulfaf made in china make in morocco deo9 ou 7keem',
        price: 27,
        img: 'image/YAKITORIS/1.jpg',
        id: 33,
    },
    {
        name: 'Yakitoris dyal l3risse',
        desc: 'boulfaf made in china make in morocco deo9 ou 7keem',
        price: 27,
        img: 'image/YAKITORIS/2.jpg',
        id: 34,
    },
    {
        name: 'Yakitoris dyal l3risse',
        desc: 'boulfaf made in china make in morocco deo9 ou 7keem',
        price: 27,
        img: 'image/YAKITORIS/3.jpg',
        id: 35,
    },
    {
        name: 'Yakitoris dyal l3risse',
        desc: 'boulfaf made in china make in morocco deo9 ou 7keem',
        price: 27,
        img: 'image/YAKITORIS/4.jpg',
        id: 36,
    },
    {
        name: 'Yakitoris dyal l3risse',
        desc: 'boulfaf made in china make in morocco deo9 ou 7keem',
        price: 27,
        img: 'image/YAKITORIS/5.jpg',
        id: 37,
    },
    {
        name: 'Yakitoris dyal l3risse',
        desc: 'boulfaf made in china make in morocco deo9 ou 7keem',
        price: 27,
        img: 'image/YAKITORIS/6.jpg',
        id: 38,
    },
    {
        name: 'Yakitoris dyal l3risse',
        desc: 'boulfaf made in china make in morocco deo9 ou 7keem',
        price: 27,
        img: 'image/YAKITORIS/7.jpg',
        id: 39,
    },
    {
        name: 'Yakitoris dyal l3risse',
        desc: 'boulfaf made in china make in morocco deo9 ou 7keem',
        price: 27,
        img: 'image/YAKITORIS/8.jpg',
        id: 40,
    },
]
var SaladesPlat = [
    {
        name: 'slade machi chlada',
        desc: 'une des plus meilleure entrer que pouver trouver dans le monde just chez nous',
        price: 62,
        img: 'image/SALADES/1.jpg',
        id: 41,
    },
    {
        name: 'slade machi chlada',
        desc: 'une des plus meilleure entrer que pouver trouver dans le monde just chez nous',
        price: 62,
        img: 'image/SALADES/2.jpg',
        id: 42,
    },
    {
        name: 'slade machi chlada',
        desc: 'une des plus meilleure entrer que pouver trouver dans le monde just chez nous',
        price: 62,
        img: 'image/SALADES/3.jpg',
        id: 43,
    },
    {
        name: 'slade machi chlada',
        desc: 'une des plus meilleure entrer que pouver trouver dans le monde just chez nous',
        price: 83,
        img: 'image/SALADES/4.jpg',
        id: 44,
    },
    {
        name: 'slade machi chlada',
        desc: 'une des plus meilleure entrer que pouver trouver dans le monde just chez nous',
        price: 37,
        img: 'image/SALADES/5.jpg',
        id: 45,
    },
    {
        name: 'slade machi chlada',
        desc: 'une des plus meilleure entrer que pouver trouver dans le monde just chez nous',
        price: 69,
        img: 'image/SALADES/6.jpg',
        id: 46,
    },
    {
        name: 'slade machi chlada',
        desc: 'une des plus meilleure entrer que pouver trouver dans le monde just chez nous',
        price: 111,
        img: 'image/SALADES/7.jpg',
        id: 47,
    },
    {
        name: 'slade machi chlada',
        desc: 'une des plus meilleure entrer que pouver trouver dans le monde just chez nous',
        price: 69,
        img: 'image/SALADES/8.jpg',
        id: 48,
    },

]
var JusPlat = [
    {
        name: 'Jus hitaka',
        desc: 'taka-taka chreb 3asir hitaka ou la 3yiti 3ndna tka',
        price: 27,
        img: 'image/JUS/1.jpg',
        id: 49,
    },
    {
        name: 'Jus hitaka',
        desc: 'taka-taka chreb 3asir hitaka ou la 3yiti 3ndna tka',
        price: 15,
        img: 'image/JUS/2.jpg',
        id: 58,
    },
    {
        name: 'Jus hitaka',
        desc: 'taka-taka chreb 3asir hitaka ou la 3yiti 3ndna tka',
        price: 55,
        img: 'image/JUS/3.jpg',
        id: 51,
    },
    {
        name: 'Jus hitaka',
        desc: 'taka-taka chreb 3asir hitaka ou la 3yiti 3ndna tka',
        price: 43,
        img: 'image/JUS/4.jpg',
        id: 52,
    },
    {
        name: 'Jus hitaka',
        desc: 'taka-taka chreb 3asir hitaka ou la 3yiti 3ndna tka',
        price: 32,
        img: 'image/JUS/5.jpg',
        id: 53,
    },
    {
        name: 'Jus hitaka',
        desc: 'taka-taka chreb 3asir hitaka ou la 3yiti 3ndna tka',
        price: 58,
        img: 'image/JUS/6.jpg',
        id: 54,
    },
    {
        name: 'Jus hitaka',
        desc: 'taka-taka chreb 3asir hitaka ou la 3yiti 3ndna tka',
        price: 13,
        img: 'image/JUS/7.jpg',
        id: 55,
    },
    {
        name: 'Jus hitaka',
        desc: 'taka-taka chreb 3asir hitaka ou la 3yiti 3ndna tka',
        price: 17,
        img: 'image/JUS/8.jpg',
        id: 56,
    },
]
var DesertPlat = [
    {
        name: 'Desertito finito',
        desc: 'finiTo finiTo la maklaaa Desirito to to',
        price: 47,
        img: 'image/DESERT/1.jpg',
        id: 57,
    },
    {
        name: 'Desertito finito',
        desc: 'finiTo finiTo la maklaaa Desirito to to',
        price: 47,
        img: 'image/DESERT/2.jpg',
        id: 58,
    },
    {
        name: 'Desertito finito',
        desc: 'finiTo finiTo la maklaaa Desirito to to',
        price: 47,
        img: 'image/DESERT/3.jpg',
        id: 59,
    },
    {
        name: 'Desertito finito',
        desc: 'finiTo finiTo la maklaaa Desirito to to',
        price: 47,
        img: 'image/DESERT/4.jpg',
        id: 60,
    },
    {
        name: 'Desertito finito',
        desc: 'finiTo finiTo la maklaaa Desirito to to',
        price: 47,
        img: 'image/DESERT/5.jpg',
        id: 61,
    },
    {
        name: 'Desertito finito',
        desc: 'finiTo finiTo la maklaaa Desirito to to',
        price: 47,
        img: 'image/DESERT/6.jpg',
        id: 62,
    },
    {
        name: 'Desertito finito',
        desc: 'finiTo finiTo la maklaaa Desirito to to',
        price: 47,
        img: 'image/DESERT/7.jpg',
        id: 63,
    },
    {
        name: 'Desertito finito',
        desc: 'finiTo finiTo la maklaaa Desirito to to',
        price: 47,
        img: 'image/DESERT/8.jpg',
        id: 64,
    },
]


if (filter == "all") {
    
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }
    while (plat.hasChildNodes()) {
        plat.removeChild(plat.firstChild);
    }
    
    list.innerHTML += platType("Nos plat", "Le meilleure de meilleure sauf chez nous ! <br> bonn_a_pti")
    
    
    for (let i = 0; i < soupPlat.length; i++) plat.innerHTML += Content(soupPlat[i]);
    for (let i = 0; i < NemsPlat.length; i++) plat.innerHTML += Content(NemsPlat[i]);
    for (let i = 0; i < TempuraPlat.length; i++) plat.innerHTML += Content(TempuraPlat[i]);
    for (let i = 0; i < PokesPlat.length; i++) plat.innerHTML += Content(PokesPlat[i]);
    for (let i = 0; i < YakitorisPlat.length; i++) plat.innerHTML += Content(YakitorisPlat[i]);
    for (let i = 0; i < SaladesPlat.length; i++) plat.innerHTML += Content(SaladesPlat[i]);
    for (let i = 0; i < JusPlat.length; i++) plat.innerHTML += Content(JusPlat[i]);
    for (let i = 0; i < DesertPlat.length; i++) plat.innerHTML += Content(DesertPlat[i]);
}

handlChange = () => {
    // alert("5dama")
    const filter = document.getElementById('filter').value;

    setTimeout(() => {
        document.getElementById('spineer').style.display = "none"
        // spinner.classList.toggle("none")
    }, 1000);

    switch (filter) {

        case "ALL":

            while (list.hasChildNodes()) {
                list.removeChild(list.firstChild);
            }
            while (plat.hasChildNodes()) {
                plat.removeChild(plat.firstChild);
            }

            list.innerHTML += platType("Nos plat", "Le meilleure de meilleure sauf chez nous ! <br> bonn_a_pti")


            for (let i = 0; i < soupPlat.length; i++) plat.innerHTML += Content(soupPlat[i]);
            for (let i = 0; i < NemsPlat.length; i++) plat.innerHTML += Content(NemsPlat[i]);
            for (let i = 0; i < TempuraPlat.length; i++) plat.innerHTML += Content(TempuraPlat[i]);
            for (let i = 0; i < PokesPlat.length; i++) plat.innerHTML += Content(PokesPlat[i]);
            for (let i = 0; i < YakitorisPlat.length; i++) plat.innerHTML += Content(YakitorisPlat[i]);
            for (let i = 0; i < SaladesPlat.length; i++) plat.innerHTML += Content(SaladesPlat[i]);
            for (let i = 0; i < JusPlat.length; i++) plat.innerHTML += Content(JusPlat[i]);
            for (let i = 0; i < DesertPlat.length; i++) plat.innerHTML += Content(DesertPlat[i]);

            break;

        case "SOUPES":
            
            while (list.hasChildNodes()) {
                list.removeChild(list.firstChild);
            }
            while (plat.hasChildNodes()) {
                plat.removeChild(plat.firstChild);
            }

            list.innerHTML += platType("Nos soupes", "a7san 7rera fl3alam kayna 4er 3ndna ATAKLa")
            for (let i = 0; i < soupPlat.length; i++) plat.innerHTML += Content(soupPlat[i]);

            break;

        case "NEMS":

            while (list.hasChildNodes()) {
                list.removeChild(list.firstChild);
            }
            while (plat.hasChildNodes()) {
                plat.removeChild(plat.firstChild);
            }

            list.innerHTML += platType("Nos Nems", "kay3jbeek ?  3ndna 4ayzid i3jbeek !")
            for (let i = 0; i < NemsPlat.length; i++) plat.innerHTML += Content(NemsPlat[i]);

            break;

        case "TEMPURA":

            while (list.hasChildNodes()) {
                list.removeChild(list.firstChild);
            }
            while (plat.hasChildNodes()) {
                plat.removeChild(plat.firstChild);
            }

            list.innerHTML += platType("Nos Tempura", "tempura ra zwiina 3ndna matl9ach b7alha")
            for (let i = 0; i < TempuraPlat.length; i++) plat.innerHTML += Content(TempuraPlat[i]);

            break;

        case "POKES":

            while (list.hasChildNodes()) {
                list.removeChild(list.firstChild);
            }
            while (plat.hasChildNodes()) {
                plat.removeChild(plat.firstChild);
            }

            list.innerHTML += platType("Nos Pokes", "voulez vous du pokes, c'est onlie ches nous")
            for (let i = 0; i < PokesPlat.length; i++) plat.innerHTML += Content(PokesPlat[i]);

            break;

        case "YAKITORIS":

            while (list.hasChildNodes()) {
                list.removeChild(list.firstChild);
            }
            while (plat.hasChildNodes()) {
                plat.removeChild(plat.firstChild);
            }

            list.innerHTML += platType("Nos Yakitoris", "Unique, juste chez nous !!")
            for (let i = 0; i < YakitorisPlat.length; i++) plat.innerHTML += Content(YakitorisPlat[i]);

            break;

        case "SALADES":

            while (list.hasChildNodes()) {
                list.removeChild(list.firstChild);
            }
            while (plat.hasChildNodes()) {
                plat.removeChild(plat.firstChild);
            }

            list.innerHTML += platType("Nos Salades", "vou aimez les salades , chez chez nous !")
            for (let i = 0; i < SaladesPlat.length; i++) plat.innerHTML += Content(SaladesPlat[i]);

            break;

        case "JUS":

            while (list.hasChildNodes()) {
                list.removeChild(list.firstChild);
            }
            while (plat.hasChildNodes()) {
                plat.removeChild(plat.firstChild);
            }

            list.innerHTML += platType("Nos jus", "moun3ich, c'est comme ca comme sont notre jus")
            for (let i = 0; i < JusPlat.length; i++) plat.innerHTML += Content(JusPlat[i]);

            break;

        case "DESERT":

            while (list.hasChildNodes()) {
                list.removeChild(list.firstChild);
            }
            while (plat.hasChildNodes()) {
                plat.removeChild(plat.firstChild);
            }

            list.innerHTML += platType("Nos Desert", "chbe3ti ? , 5oud leek chi deset !")
            for (let i = 0; i < DesertPlat.length; i++) plat.innerHTML += Content(DesertPlat[i]);

            break;

        default:

            while (list.hasChildNodes()) {
                list.removeChild(list.firstChild);
            }
            while (plat.hasChildNodes()) {
                plat.removeChild(plat.firstChild);
            }
    }

}
