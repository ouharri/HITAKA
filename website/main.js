const header = document.querySelector('header')
const Bar = document.querySelector('.nav-bar')
var QUANTITé = 0;

window.addEventListener('scroll', function () {
  header.classList.toggle('sticky', window.scrollY > 0)
  Bar.classList.toggle('stickY', window.scrollY > 0)
})

let menu = document.querySelector('#menU')
let navBar = document.querySelector('.nav-bar')

menu.onclick = () => {
  menu.classList.toggle('bx-x')
  navBar.classList.toggle('open')
}

// filter section

// handlChange = (e) => {
//   const filter = document.getElementById('filter').value
//   const plat = document.getElementById('plat')
//   // const spinner = document.getElementById("spinner")
//   const list = document.getElementById('platType')

//   const platType = function (type, descr) {
//     return `
//             <h2>${type}</h2>
//             <p>${descr}</p>`
//   }
//   const Content = function (plat) {
//     return `
// <div class="roW">
//     <img src="${plat.img}" alt="">
//    <div class="menu-text">
//        <div class="menu-left">
//            <h4>${plat.name}</h4>
//        </div>
//        <div class="menu-right">
//           <h5>${plat.price} DH</h5>
//       </div>
//   </div>
//   <p>${plat.desc}</p>
//  <input type="hidden" id="price" value="${plat.price}">
//    <input type="hidden" id="produit" value="${plat.name}">
//    <input type="hidden" id="id" value="${plat.id}">
//    <div class="foteerPlat">
//        <div class="start">
//           <a href=""><i class='bx bxs-star'></i></a>
//           <a href=""><i class='bx bxs-star'></i></a>
//           <a href=""><i class='bx bxs-star'></i></a>
//           <a href=""><i class='bx bxs-star'></i></a>
//           <a href=""><i class='bx bxs-star'></i></a>
//       </div>
//       <div class="addPlat">
//           <i class='bx bx-plus-circle bx-sm'></i>
//       </div>
//    </div>
// </div>
// </div>`
//   }

//   // name, desc, price, img
//   var soupPlat = [
//     {
//       name: 'Soupe Fruit de mére',
//       desc:
//         " une soupe asiatique unique chez nous cuisinier par le chef cuisinier 'SIDATI' ",
//       price: 67,
//       img: 'image/SOUPE/1.jpg',
//       id: 1,
//     },
//     {
//       name: 'Soupe Fruit de mére',
//       desc:
//         " une soupe asiatique unique chez nous cuisinier par le chef cuisinier 'SIDATI' ",
//       price: 100,
//       img: 'image/SOUPE/2.jpg',
//       id: 2,
//     },
//     {
//       name: 'Soupe Fruit de mére',
//       desc:
//         " une soupe asiatique unique chez nous cuisinier par le chef cuisinier 'SIDATI' ",
//       price: 67,
//       img: 'image/SOUPE/3.jpg',
//       id: 3,
//     },
//     {
//       name: 'Soupe Fruit de mére',
//       desc:
//         " une soupe asiatique unique chez nous cuisinier par le chef cuisinier 'SIDATI' ",
//       price: 57,
//       img: 'image/SOUPE/4.jpg',
//       id: 4,
//     },
//     {
//       name: 'Soupe Fruit de mére',
//       desc:
//         " une soupe asiatique unique chez nous cuisinier par le chef cuisinier 'SIDATI' ",
//       price: 327,
//       img: 'image/SOUPE/5.jpg',
//       id: 5,
//     },
//     {
//       name: 'Soupe Fruit de mére',
//       desc:
//         " une soupe asiatique unique chez nous cuisinier par le chef cuisinier 'SIDATI' ",
//       price: 953,
//       img: 'image/SOUPE/6.jpg',
//       id: 6,
//     },
//     {
//       name: 'Soupe Fruit de mére',
//       desc:
//         " une soupe asiatique unique chez nous cuisinier par le chef cuisinier 'SIDATI' ",
//       price: 278,
//       img: 'image/SOUPE/7.jpg',
//       id: 7,
//     },
//     {
//       name: 'Soupe Fruit de mére',
//       desc:
//         " une soupe asiatique unique chez nous cuisinier par le chef cuisinier 'SIDATI' ",
//       price: 38,
//       img: 'image/SOUPE/8.jpg',
//       id: 8,
//     },
//   ]
//   var NemsPlat = [
//     {
//       name: 'Nems Tayeb Fl Fran',
//       desc:
//         'Nems Tayeb un de notre plas populaire originale concaténé de cinoie-marocain',
//       price: 67,
//       img: 'image/NEMS/1.jpg',
//       id: 9,
//     },
//     {
//       name: 'Nems Tayeb Fl Fran',
//       desc:
//         'Nems Tayeb un de notre plas populaire originale concaténé de cinoie-marocain',
//       price: 75,
//       img: 'image/NEMS/2.jpg',
//       id: 10,
//     },
//     {
//       name: 'Nems Tayeb Fl Fran',
//       desc:
//         'Nems Tayeb un de notre plas populaire originale concaténé de cinoie-marocain',
//       price: 266,
//       img: 'image/NEMS/3.jpg',
//       id: 11,
//     },
//     {
//       name: 'Nems Tayeb Fl Fran',
//       desc:
//         'Nems Tayeb un de notre plas populaire originale concaténé de cinoie-marocain',
//       price: 57,
//       img: 'image/NEMS/4.jpg',
//       id: 12,
//     },
//     {
//       name: 'Nems Tayeb Fl Fran',
//       desc:
//         'Nems Tayeb un de notre plas populaire originale concaténé de cinoie-marocain',
//       price: 206,
//       img: 'image/NEMS/5.jpg',
//       id: 13,
//     },
//     {
//       name: 'Nems Tayeb Fl Fran',
//       desc:
//         'Nems Tayeb un de notre plas populaire originale concaténé de cinoie-marocain',
//       price: 26,
//       img: 'image/NEMS/6.jpg',
//       id: 14,
//     },
//     {
//       name: 'Nems Tayeb Fl Fran',
//       desc:
//         'Nems Tayeb un de notre plas populaire originale concaténé de cinoie-marocain',
//       price: 86,
//       img: 'image/NEMS/7.jpg',
//       id: 15,
//     },
//     {
//       name: 'Nems Tayeb Fl Fran',
//       desc:
//         'Nems Tayeb un de notre plas populaire originale concaténé de cinoie-marocain',
//       price: 83,
//       img: 'image/NEMS/8.jpg',
//       id: 16,
//     },
//   ]
//   var TempuraPlat = [
//     {
//       name: 'Tempura msayeb f YouCode',
//       desc: 'Notre Tempura inventé a Youcode par ses exelent Lorea',
//       price: 78,
//       img: 'image/TEMPURA/1.jpg',
//       id: 17,
//     },
//     {
//       name: 'Tempura msayeb f YouCode',
//       desc: 'Notre Tempura inventé a Youcode par ses exelent Lorea',
//       price: 78,
//       img: 'image/TEMPURA/2.jpg',
//       id: 18,
//     },
//     {
//       name: 'Tempura msayeb f YouCode',
//       desc: 'Notre Tempura inventé a Youcode par ses exelent Lorea',
//       price: 97,
//       img: 'image/TEMPURA/3.jpg',
//       id: 19,
//     },
//     {
//       name: 'Tempura msayeb f YouCode',
//       desc: 'Notre Tempura inventé a Youcode par ses exelent Lorea',
//       price: 25,
//       img: 'image/TEMPURA/4.jpg',
//       id: 20,
//     },
//     {
//       name: 'Tempura msayeb f YouCode',
//       desc: 'Notre Tempura inventé a Youcode par ses exelent Lorea',
//       price: 89,
//       img: 'image/TEMPURA/5.jpg',
//       id: 21,
//     },
//     {
//       name: 'Tempura msayeb f YouCode',
//       desc: 'Notre Tempura inventé a Youcode par ses exelent Lorea',
//       price: 85,
//       img: 'image/TEMPURA/6.jpg',
//       id: 22,
//     },
//     {
//       name: 'Tempura msayeb f YouCode',
//       desc: 'Notre Tempura inventé a Youcode par ses exelent Lorea',
//       price: 735,
//       img: 'image/TEMPURA/7.jpg',
//       id: 23,
//     },
//     {
//       name: 'Tempura msayeb f YouCode',
//       desc: 'Notre Tempura inventé a Youcode par ses exelent Lorea',
//       price: 75,
//       img: 'image/TEMPURA/8.jpg',
//       id: 24,
//     },
//   ]
//   var PokesPlat = [
//     {
//       name: 'POKES LIKE POKEMON',
//       desc:
//         "notre chef 'el-bakoouri' fanne de pookemon nous a inventer le plat POKES",
//       price: 75,
//       img: 'image/POKES/1.jpg',
//       id: 25,
//     },
//     {
//       name: 'POKES LIKE POKEMON',
//       desc:
//         "notre chef 'el-bakoouri' fanne de pookemon nous a inventer le plat POKES",
//       price: 49,
//       img: 'image/POKES/2.jpg',
//       id: 26,
//     },
//     {
//       name: 'POKES LIKE POKEMON',
//       desc:
//         "notre chef 'el-bakoouri' fanne de pookemon nous a inventer le plat POKES",
//       price: 99,
//       img: 'image/POKES/3.jpg',
//       id: 27,
//     },
//     {
//       name: 'POKES LIKE POKEMON',
//       desc:
//         "notre chef 'el-bakoouri' fanne de pookemon nous a inventer le plat POKES",
//       price: 45,
//       img: 'image/POKES/4.jpg',
//       id: 28,
//     },
//     {
//       name: 'POKES LIKE POKEMON',
//       desc:
//         "notre chef 'el-bakoouri' fanne de pookemon nous a inventer le plat POKES",
//       price: 75,
//       img: 'image/POKES/5.jpg',
//       id: 29,
//     },
//     {
//       name: 'POKES LIKE POKEMON',
//       desc:
//         "notre chef 'el-bakoouri' fanne de pookemon nous a inventer le plat POKES",
//       price: 75,
//       img: 'image/POKES/6.jpg',
//       id: 30,
//     },
//     {
//       name: 'POKES LIKE POKEMON',
//       desc:
//         "notre chef 'el-bakoouri' fanne de pookemon nous a inventer le plat POKES",
//       price: 75,
//       img: 'image/POKES/7.jpg',
//       id: 31,
//     },
//     {
//       name: 'POKES LIKE POKEMON',
//       desc:
//         "notre chef 'el-bakoouri' fanne de pookemon nous a inventer le plat POKES",
//       price: 46,
//       img: 'image/POKES/8.jpg',
//       id: 32,
//     },
//   ]
//   var YakitorisPlat = [
//     {
//       name: 'Yakitoris dyal l3risse',
//       desc: 'boulfaf made in china make in morocco deo9 ou 7keem',
//       price: 27,
//       img: 'image/YAKITORIS/1.jpg',
//       id: 33,
//     },
//     {
//       name: 'Yakitoris dyal l3risse',
//       desc: 'boulfaf made in china make in morocco deo9 ou 7keem',
//       price: 27,
//       img: 'image/YAKITORIS/2.jpg',
//       id: 34,
//     },
//     {
//       name: 'Yakitoris dyal l3risse',
//       desc: 'boulfaf made in china make in morocco deo9 ou 7keem',
//       price: 27,
//       img: 'image/YAKITORIS/3.jpg',
//       id: 35,
//     },
//     {
//       name: 'Yakitoris dyal l3risse',
//       desc: 'boulfaf made in china make in morocco deo9 ou 7keem',
//       price: 27,
//       img: 'image/YAKITORIS/4.jpg',
//       id: 36,
//     },
//     {
//       name: 'Yakitoris dyal l3risse',
//       desc: 'boulfaf made in china make in morocco deo9 ou 7keem',
//       price: 27,
//       img: 'image/YAKITORIS/5.jpg',
//       id: 37,
//     },
//     {
//       name: 'Yakitoris dyal l3risse',
//       desc: 'boulfaf made in china make in morocco deo9 ou 7keem',
//       price: 27,
//       img: 'image/YAKITORIS/6.jpg',
//       id: 38,
//     },
//     {
//       name: 'Yakitoris dyal l3risse',
//       desc: 'boulfaf made in china make in morocco deo9 ou 7keem',
//       price: 27,
//       img: 'image/YAKITORIS/7.jpg',
//       id: 39,
//     },
//     {
//       name: 'Yakitoris dyal l3risse',
//       desc: 'boulfaf made in china make in morocco deo9 ou 7keem',
//       price: 27,
//       img: 'image/YAKITORIS/8.jpg',
//       id: 40,
//     },
//   ]
//   var SaladesPlat = [
//     {
//       name: 'slade machi chlada',
//       desc:
//         'une des plus meilleure entrer que pouver trouver dans le monde just chez nous',
//       price: 62,
//       img: 'image/SALADES/1.jpg',
//       id: 41,
//     },
//     {
//       name: 'slade machi chlada',
//       desc:
//         'une des plus meilleure entrer que pouver trouver dans le monde just chez nous',
//       price: 62,
//       img: 'image/SALADES/2.jpg',
//       id: 42,
//     },
//     {
//       name: 'slade machi chlada',
//       desc:
//         'une des plus meilleure entrer que pouver trouver dans le monde just chez nous',
//       price: 62,
//       img: 'image/SALADES/3.jpg',
//       id: 43,
//     },
//     {
//       name: 'slade machi chlada',
//       desc:
//         'une des plus meilleure entrer que pouver trouver dans le monde just chez nous',
//       price: 83,
//       img: 'image/SALADES/4.jpg',
//       id: 44,
//     },
//     {
//       name: 'slade machi chlada',
//       desc:
//         'une des plus meilleure entrer que pouver trouver dans le monde just chez nous',
//       price: 37,
//       img: 'image/SALADES/5.jpg',
//       id: 45,
//     },
//     {
//       name: 'slade machi chlada',
//       desc:
//         'une des plus meilleure entrer que pouver trouver dans le monde just chez nous',
//       price: 69,
//       img: 'image/SALADES/6.jpg',
//       id: 46,
//     },
//     {
//       name: 'slade machi chlada',
//       desc:
//         'une des plus meilleure entrer que pouver trouver dans le monde just chez nous',
//       price: 111,
//       img: 'image/SALADES/7.jpg',
//       id: 47,
//     },
//     {
//       name: 'slade machi chlada',
//       desc:
//         'une des plus meilleure entrer que pouver trouver dans le monde just chez nous',
//       price: 69,
//       img: 'image/SALADES/8.jpg',
//       id: 48,
//     },
//   ]
//   var JusPlat = [
//     {
//       name: 'Jus hitaka',
//       desc: 'taka-taka chreb 3asir hitaka ou la 3yiti 3ndna tka',
//       price: 27,
//       img: 'image/JUS/1.jpg',
//       id: 49,
//     },
//     {
//       name: 'Jus hitaka',
//       desc: 'taka-taka chreb 3asir hitaka ou la 3yiti 3ndna tka',
//       price: 15,
//       img: 'image/JUS/2.jpg',
//       id: 58,
//     },
//     {
//       name: 'Jus hitaka',
//       desc: 'taka-taka chreb 3asir hitaka ou la 3yiti 3ndna tka',
//       price: 55,
//       img: 'image/JUS/3.jpg',
//       id: 51,
//     },
//     {
//       name: 'Jus hitaka',
//       desc: 'taka-taka chreb 3asir hitaka ou la 3yiti 3ndna tka',
//       price: 43,
//       img: 'image/JUS/4.jpg',
//       id: 52,
//     },
//     {
//       name: 'Jus hitaka',
//       desc: 'taka-taka chreb 3asir hitaka ou la 3yiti 3ndna tka',
//       price: 32,
//       img: 'image/JUS/5.jpg',
//       id: 53,
//     },
//     {
//       name: 'Jus hitaka',
//       desc: 'taka-taka chreb 3asir hitaka ou la 3yiti 3ndna tka',
//       price: 58,
//       img: 'image/JUS/6.jpg',
//       id: 54,
//     },
//     {
//       name: 'Jus hitaka',
//       desc: 'taka-taka chreb 3asir hitaka ou la 3yiti 3ndna tka',
//       price: 13,
//       img: 'image/JUS/7.jpg',
//       id: 55,
//     },
//     {
//       name: 'Jus hitaka',
//       desc: 'taka-taka chreb 3asir hitaka ou la 3yiti 3ndna tka',
//       price: 17,
//       img: 'image/JUS/8.jpg',
//       id: 56,
//     },
//   ]
//   var DesertPlat = [
//     {
//       name: 'Desertito finito',
//       desc: 'finiTo finiTo la maklaaa Desirito to to',
//       price: 47,
//       img: 'image/DESERT/1.jpg',
//       id: 57,
//     },
//     {
//       name: 'Desertito finito',
//       desc: 'finiTo finiTo la maklaaa Desirito to to',
//       price: 47,
//       img: 'image/DESERT/2.jpg',
//       id: 58,
//     },
//     {
//       name: 'Desertito finito',
//       desc: 'finiTo finiTo la maklaaa Desirito to to',
//       price: 47,
//       img: 'image/DESERT/3.jpg',
//       id: 59,
//     },
//     {
//       name: 'Desertito finito',
//       desc: 'finiTo finiTo la maklaaa Desirito to to',
//       price: 47,
//       img: 'image/DESERT/4.jpg',
//       id: 60,
//     },
//     {
//       name: 'Desertito finito',
//       desc: 'finiTo finiTo la maklaaa Desirito to to',
//       price: 47,
//       img: 'image/DESERT/5.jpg',
//       id: 61,
//     },
//     {
//       name: 'Desertito finito',
//       desc: 'finiTo finiTo la maklaaa Desirito to to',
//       price: 47,
//       img: 'image/DESERT/6.jpg',
//       id: 62,
//     },
//     {
//       name: 'Desertito finito',
//       desc: 'finiTo finiTo la maklaaa Desirito to to',
//       price: 47,
//       img: 'image/DESERT/7.jpg',
//       id: 63,
//     },
//     {
//       name: 'Desertito finito',
//       desc: 'finiTo finiTo la maklaaa Desirito to to',
//       price: 47,
//       img: 'image/DESERT/8.jpg',
//       id: 64,
//     },
//   ]
//   switch (filter) {
//     case 'SOUPES':
//       // setTimeout(() => {
//       //     spinner.classList.toggle("none")
//       // }, 1000);

//       while (list.hasChildNodes()) {
//         list.removeChild(list.firstChild)
//       }
//       while (plat.hasChildNodes()) {
//         plat.removeChild(plat.firstChild)
//       }

//       list.innerHTML += platType(
//         'Nos soupes',
//         'a7san 7rera fl3alam kayna 4er 3ndna ATAKLa',
//       )
//       for (let i = 0; i < soupPlat.length; i++)
//         plat.innerHTML += Content(soupPlat[i])
//       cart.write('outman')

//       break

//     case 'NEMS':
//       while (list.hasChildNodes()) {
//         list.removeChild(list.firstChild)
//       }
//       while (plat.hasChildNodes()) {
//         plat.removeChild(plat.firstChild)
//       }

//       list.innerHTML += platType(
//         'Nos Nems',
//         'kay3jbeek ?  3ndna 4ayzid i3jbeek !',
//       )

//       for (let i = 0; i < NemsPlat.length; i++)
//         plat.innerHTML += Content(NemsPlat[i])

//       break

//     case 'TEMPURA':
//       while (list.hasChildNodes()) {
//         list.removeChild(list.firstChild)
//       }
//       while (plat.hasChildNodes()) {
//         plat.removeChild(plat.firstChild)
//       }

//       list.innerHTML += platType(
//         'Nos Tempura',
//         'tempura ra zwiina 3ndna matl9ach b7alha',
//       )

//       for (let i = 0; i < TempuraPlat.length; i++)
//         plat.innerHTML += Content(TempuraPlat[i])

//       break

//     case 'POKES':
//       while (list.hasChildNodes()) {
//         list.removeChild(list.firstChild)
//       }
//       while (plat.hasChildNodes()) {
//         plat.removeChild(plat.firstChild)
//       }

//       list.innerHTML += platType(
//         'Nos Pokes',
//         "voulez vous du pokes, c'est onlie ches nous",
//       )

//       for (let i = 0; i < PokesPlat.length; i++)
//         plat.innerHTML += Content(PokesPlat[i])

//       break

//     case 'YAKITORIS':
//       while (list.hasChildNodes()) {
//         list.removeChild(list.firstChild)
//       }
//       while (plat.hasChildNodes()) {
//         plat.removeChild(plat.firstChild)
//       }

//       list.innerHTML += platType('Nos Yakitoris', 'Unique, juste chez nous !!')

//       for (let i = 0; i < YakitorisPlat.length; i++)
//         plat.innerHTML += Content(YakitorisPlat[i])

//       break

//     case 'SALADES':
//       while (list.hasChildNodes()) {
//         list.removeChild(list.firstChild)
//       }
//       while (plat.hasChildNodes()) {
//         plat.removeChild(plat.firstChild)
//       }

//       list.innerHTML += platType(
//         'Nos Salades',
//         'vou aimez les salades , chez chez nous !',
//       )

//       for (let i = 0; i < SaladesPlat.length; i++)
//         plat.innerHTML += Content(SaladesPlat[i])

//       break

//     case 'JUS':
//       while (list.hasChildNodes()) {
//         list.removeChild(list.firstChild)
//       }
//       while (plat.hasChildNodes()) {
//         plat.removeChild(plat.firstChild)
//       }

//       list.innerHTML += platType(
//         'Nos jus',
//         "moun3ich, c'est comme ca comme sont notre jus",
//       )

//       for (let i = 0; i < JusPlat.length; i++)
//         plat.innerHTML += Content(JusPlat[i])

//       break

//     case 'DESERT':
//       while (list.hasChildNodes()) {
//         list.removeChild(list.firstChild)
//       }
//       while (plat.hasChildNodes()) {
//         plat.removeChild(plat.firstChild)
//       }

//       list.innerHTML += platType(
//         'Nos Desert',
//         'chbe3ti ? , 5oud leek chi deset !',
//       )

//       for (let i = 0; i < DesertPlat.length; i++)
//         plat.innerHTML += Content(DesertPlat[i])

//       break

//     case 'all':
//       while (list.hasChildNodes()) {
//         list.removeChild(list.firstChild)
//       }
//       while (plat.hasChildNodes()) {
//         plat.removeChild(plat.firstChild)
//       }

//       list.innerHTML += platType(
//         'Nos soupes',
//         'a7san 7rera fl3alam kayna 4er 3ndna ATAKLa',
//       )
//       for (let i = 0; i < soupPlat.length; i++)
//         plat.innerHTML += Content(soupPlat[i])

//       list.innerHTML += platType(
//         'Nos Nems',
//         'kay3jbeek ?  3ndna 4ayzid i3jbeek !',
//       )
//       for (let i = 0; i < NemsPlat.length; i++)
//         plat.innerHTML += Content(NemsPlat[i])

//       list.innerHTML += platType(
//         'Nos Tempura',
//         'tempura ra zwiina 3ndna matl9ach b7alha',
//       )
//       for (let i = 0; i < TempuraPlat.length; i++)
//         plat.innerHTML += Content(TempuraPlat[i])

//       list.innerHTML += platType(
//         'Nos Pokes',
//         "voulez vous du pokes, c'est onlie ches nous",
//       )
//       for (let i = 0; i < PokesPlat.length; i++)
//         plat.innerHTML += Content(PokesPlat[i])

//       list.innerHTML += platType('Nos Yakitoris', 'Unique, juste chez nous !!')
//       for (let i = 0; i < YakitorisPlat.length; i++)
//         plat.innerHTML += Content(YakitorisPlat[i])

//       list.innerHTML += platType(
//         'Nos Salades',
//         'vou aimez les salades , chez chez nous !',
//       )
//       for (let i = 0; i < SaladesPlat.length; i++)
//         plat.innerHTML += Content(SaladesPlat[i])

//       list.innerHTML += platType(
//         'Nos jus',
//         "moun3ich, c'est comme ca comme sont notre jus",
//       )
//       for (let i = 0; i < JusPlat.length; i++)
//         plat.innerHTML += Content(JusPlat[i])

//       list.innerHTML += platType(
//         'Nos Desert',
//         'chbe3ti ? , 5oud leek chi deset !',
//       )
//       for (let i = 0; i < DesertPlat.length; i++)
//         plat.innerHTML += Content(DesertPlat[i])

//       break
//     default:
//       // while (list.hasChildNodes()) {
//       //     list.removeChild(list.firstChild);
//       // }
//       // while (plat.hasChildNodes()) {
//       //     plat.removeChild(plat.firstChild);
//       // }
//       list.innerHTML += platType(
//         'Nos Desert',
//         'chbe3ti ? , 5oud leek chi deset !',
//       )
//       for (let i = 0; i < DesertPlat.length; i++)
//         plat.innerHTML += Content(DesertPlat[i])
//   }
// }

// cart section

let cartIcon = document.querySelector('#shoP')
let cart = document.querySelector('.cart')
let closeCart = document.querySelector('#close-cart')

// open cart
cartIcon.onclick = () => {
  cart.classList.add('Active')
  quantityChanged()
}
// close cart
closeCart.onclick = () => {
  cart.classList.remove('Active')
  quantityChanged()
}

if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else ready()



function ready() {
  var removCartButtons = document.getElementsByClassName('cart-remove')
  console.log(removCartButtons)
  for (var i = 0; i < removCartButtons.length; i++) {
    var button = removCartButtons[i]
    button.addEventListener('click', removCartItem)
  }
  //   quantité change
  var quantiteInputs = document.getElementsByClassName('cart-contity')
  for (var i = 0; i < quantiteInputs.length; i++) {
    var input = quantiteInputs[i]
    input.addEventListener('change', quantityChanged)
  }
  //   add to cart
  var addCArt = document.getElementsByClassName('add-cart')
  console.log(addCArt)
  for (var i = 0; i < addCArt.length; i++) {
    // alert('hhh')
    var button = addCArt[i]
    button.addEventListener('click', addCartClicked)
  }
}

function removCartItem(event) {
  var buttonClicked = event.target
  buttonClicked.parentElement.remove()
  QUANTITé--;
  uptadeTotale()
  // alert(QUANTITé)
  document.getElementsByClassName('QUantitéCart')[0].innerHTML = QUANTITé;
  uptadeTotale()
}

function quantityChanged(event) {
  var input = event.target
  if (isNaN(input.value) || input.value <= 0) input.value = 1
  uptadeTotale()
}
function addCartClicked(event) {
  // alert('gg')

  var button = event.target
  var shopProducts = button.parentElement
  // var title = shopProducts.getElementById('produitName')
  uptadeTotale()
  // console.log(title.value)
}

var addToCart = function (title, img, price, id) {
  var cartShopBox = document.createElement('div')
  cartShopBox.classList.add('cart-box')

  var cartItems = document.getElementsByClassName('cart-content')[0]
  var cartBox = cartItems.getElementsByClassName('cart-box')
  console.log(cartBox)
  
  for (var i = 0; i < cartBox.length; i++) {
    var cartItemsId = cartBox[i].getElementsByClassName('idPlat')[0].value
    // alert("te")
    console.log(id)
    console.log(cartItemsId)
    if ( id == cartItemsId ) {
      alert(" ------- Vous aver deja choisie ce plat ! ------- \n vous pouver ajouter la quantiter dans votre cart")
      return;
    }
  }

  var cartMaker = `
    <img src="${img}" alt="hh" class="cart-img">
    <div class="detail-box">
    <div class="cart-product-title">${title}</div>
    <div class="cart-price">${parseFloat(price)} DH</div>
    <input type="hidden" class="idPlat" value="${id}">
    <input type="number" value="1" class="cart-contity">
    </div>
    <!-- remove cart -->
    <i class="bx bxs-trash-alt cart-remove">re</i>
    `

  // alert("tt")
  uptadeTotale()
  cartShopBox.innerHTML = cartMaker
  cartItems.append(cartShopBox)

  cartShopBox
    .getElementsByClassName('cart-remove')[0]
    .addEventListener('click', removCartItem)

  cartShopBox
    .getElementsByClassName('cart-contity')[0]
    .addEventListener('change', quantityChanged)
  QUANTITé++;
  uptadeTotale()
  // alert(QUANTITé)
  document.getElementsByClassName('QUantitéCart')[0].innerHTML = QUANTITé;
  uptadeTotale()

}

//     const cart = document.getElementById('adder')
//     cart.innerHTML+=cartMaker(plat);
//     // ready()*
//     var removCartButtons = document.getElementsByClassName('cart-remove')
//   console.log(removCartButtons)
//   for (var i = 0; i < removCartButtons.length; i++) {
//     var button = removCartButtons[i]
//     button.addEventListener('click', removCartItem)
//   }
//     alert("hh")

// function clickOne(price,name){
//     console.log(sum);
//     if(document.getElementById("not")!=undefined){
//         document.getElementById("not").remove()
//     }

//     const cont = document.getElementsByClassName("cart-content")
//     var p = document.createElement("p")
//     text[i]=document.createTextNode(name)
//         p.appendChild(text[i])
//     cont.innerHTML += Content(soupPlat[1])
//     i++;
// }

// function uptadeTotale() {
//   var cartContent = document.getElementsByClassName('cart-content')
//   var cartBoxes = document.getElementsByClassName('cart-box')
// //   console.log(cartBoxes)
//   var total = 0
//   // alert(total)
//   for (var i = 0; i < cartBoxes.length; i++) {
//       alert(total)
//     var cartBox = cartBoxes[i]
//     var priceElement = document.getElementsByClassName('cart-price')[0]
//     var quantityElement = cartBox.getElementsByClassName('cart-contity')[0]

//     var price = parseFloat(priceElement.innerText)
//     var quantity = quantityElement.value
//     total = total + price * quantity
//     alert(total)
//     document.getElementsByClassName('totale-price')[0].innerText = 'bb'
//   }
// }
function uptadeTotale() {
  let cartContent = document.getElementsByClassName('cart-content')[0]
  let cartBoxes = cartContent.getElementsByClassName('cart-box')
  let total = 0

  console.log(cartBoxes)

  for (let i = 0; i < cartBoxes.length; i++) {
    let cartBox = cartBoxes[i]
    let priceElement = cartBox.getElementsByClassName('cart-price')[0]
    let quantityElement = cartBox.getElementsByClassName('cart-contity')[0]
    let price = parseFloat(priceElement.innerText.replace(' DH', ''))
    let quantity = quantityElement.value
    total += price * quantity
    total = Math.round(total * 100) / 100

    //alert(total);
    //true;
    //true;
    //true;
    //true;
    //true;
    //true;
    //true;
    //true;
    //true;
    // T.lenght = 0 !

    document.getElementsByClassName('totale-price')[0].innerText = total + ' DH'

  }
}
