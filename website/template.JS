const content = function(name,desc,price,img){
return `
<div class="roW">
    <img src="${img}" alt="">
    <div class="menu-text">
        <div class="menu-left">
            <h4>${name}</h4>
        </div>
        <div class="menu-right">
            <h5>${price}</h5>
        </div>
    </div>
    <p>${desc}</p>
    <input type="hidden" id="price" value="${price}">
    <input type="hidden" id="produit" value="${name}">
    <input type="hidden" id="id" value="1">
    <div class="foteerPlat">
        <div class="start">
            <a href=""><i class='bx bxs-star'></i></a>
            <a href=""><i class='bx bxs-star'></i></a>
            <a href=""><i class='bx bxs-star'></i></a>
            <a href=""><i class='bx bxs-star'></i></a>
            <a href=""><i class='bx bxs-star'></i></a>
        </div>
        <div class="addPlat">
            <i class='bx bx-plus-circle bx-sm'></i>
        </div>
    </div>
</div>
</div>`
}



<div class="roW">
    <img src="${img}" alt="plat image">
    <div class="menu-text">
        <div class="menu-left">
            <h4>${name}</h4>
        </div>
        <div class="menu-right">
            <h5>${price}</h5>
        </div>
    </div>
    <p>${desc}</p>
    <input type="hidden" id="price" value="${price}">
    <input type="hidden" id="produit" value="${name}">
    <input type="hidden" id="id" value="1">
    <div class="foteerPlat">
        <div class="start">
            <a href=""><i class='bx bxs-star'></i></a>
            <a href=""><i class='bx bxs-star'></i></a>
            <a href=""><i class='bx bxs-star'></i></a>
            <a href=""><i class='bx bxs-star'></i></a>
            <a href=""><i class='bx bxs-star'></i></a>
        </div>
        <div class="addPlat">
            <i class='bx bx-plus-circle bx-sm'></i>
        </div>
    </div>
</div>

const platType = `
`<div class="mainText">
    <h2>plat write</h2>
    <p>Lorem ipsum dolor sit, Quaerat adipisicing elit.</p>
</div>`;

const content = function(name,desc,price,img){ return `
<div class="roW">
    <img src="${img}" alt="">
    <div class="menu-text">
        <div class="menu-left">
            <h4>${name}</h4>
        </div>
        <div class="menu-right">
            <h5>${price} DH</h5>
        </div>
    </div>
    <p>${desc}</p>
    <input type="hidden" id="price" value="${price}">
    <input type="hidden" id="produit" value="${name}">
    <input type="hidden" id="id" value="1">
    <div class="foteerPlat">
        <div class="start">
            <a href=""><i class='bx bxs-star'></i></a>
            <a href=""><i class='bx bxs-star'></i></a>
            <a href=""><i class='bx bxs-star'></i></a>
            <a href=""><i class='bx bxs-star'></i></a>
            <a href=""><i class='bx bxs-star'></i></a>
        </div>
        <div class="addPlat">
            <i class='bx bx-plus-circle bx-sm'></i>
        </div>
    </div>
</div>
</div>`
}








switch (filter) {
    case "SOUPES":
        // setTimeout(() => {
        //     spinner.classList.toggle("none")
        // }, 1000);
        while (list.hasChildNodes()) {
            lisT.removeChild(list.firstChild);
        }
        while (t.hasChildNodes()) {
            t.removeChild(t.firstChild);
        }
        // parent.removeChild(remov1);
        // v.removeChild(h2);
        // v.remove();
        // v.appendChild(platType("7rerea","a7san 7rera fl3alam kayna 4er 3ndna"))
        // v.innerHTML += platType("Nos soupes", "a7san 7rera fl3alam kayna 4er 3ndna ATAKLa")
        for (let i = 0; i < soupPlat.length; i++) t.innerHTML += Content(soupPlat[i]);
        t.innerHTML += Content(soupPlat[0]);
        // t.innerHTML += content("kkhghg", "gg", "gg", "img/nems/3.jpg");
        // t.innerHTML += content("kk", `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil totam non corporis est dicta culpa
        // magnam dolores necessitatibus vitae ipsum quaerat, delectus inventore minima tenetur accusantium
        // voluptatem similique aspernatur voluptatibus!`, "ggh", "img/1645185239037.jpg");
        break;
    // h.innerHTML += content("kk","gg","gg","ggg");
    // t.innerHTML = ''
    case "NEMS":

        while (list.hasChildNodes()) {
            lisT.removeChild(list.firstChild);
        }
        while (t.hasChildNodes()) {
            t.removeChild(t.firstChild);
        }
        for (let i = 0; i <NemsPlat.length; i++) t.innerHTML += Content(NemsPlat[i]);

        break;
    case "TEMPURA":
        while (list.hasChildNodes()) {
            lisT.removeChild(list.firstChild);
        }
        while (t.hasChildNodes()) {
            t.removeChild(t.firstChild);
        }
        for (let i = 0; i < soupPlat.length; i++) t.innerHTML += Content(soupPlat[i]);

        break;
    case "POKES":
        while (list.hasChildNodes()) {
            lisT.removeChild(list.firstChild);
        }
        while (t.hasChildNodes()) {
            t.removeChild(t.firstChild);
        }

        break;
    case "YAKITORIS":
        while (list.hasChildNodes()) {
            lisT.removeChild(list.firstChild);
        }
        while (t.hasChildNodes()) {
            t.removeChild(t.firstChild);
        }

        break;
    case "SALADES":
        while (list.hasChildNodes()) {
            lisT.removeChild(list.firstChild);
        }
        while (t.hasChildNodes()) {
            t.removeChild(t.firstChild);
        }

        break;
    case "NEMS":
        while (list.hasChildNodes()) {
            lisT.removeChild(list.firstChild);
        }
        while (t.hasChildNodes()) {
            t.removeChild(t.firstChild);
        }

        break;
    case "NEMS":
        while (list.hasChildNodes()) {
            lisT.removeChild(list.firstChild);
        }
        while (t.hasChildNodes()) {
            t.removeChild(t.firstChild);
        }

        break;
    case "DESERT":
        while (list.hasChildNodes()) {
            lisT.removeChild(list.firstChild);
        }
        while (t.hasChildNodes()) {
            t.removeChild(t.firstChild);
        }

        break;
    case "jUS":
        while (list.hasChildNodes()) {
            lisT.removeChild(list.firstChild);
        }
        while (t.hasChildNodes()) {
            t.removeChild(t.firstChild);
        }

        break;


    default:
        while (list.hasChildNodes()) {
            list.removeChild(list.firstChild);
        }
        while (t.hasChildNodes()) {
            t.removeChild(lisT.firstChild);
        }
        break;
}




// name, desc, price, img
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
                    id: 1,
                },
                {
                    name: 'Nems Tayeb Fl Fran',
                    desc: 'Nems Tayeb un de notre plas populaire originale concaténé de cinoie-marocain',
                    price: 75,
                    img: 'image/NEMS/2.jpg',
                    id: 2,
                },
                {
                    name: 'Nems Tayeb Fl Fran',
                    desc: 'Nems Tayeb un de notre plas populaire originale concaténé de cinoie-marocain',
                    price: 266,
                    img: 'image/NEMS/3.jpg',
                    id: 3,
                },
                {
                    name: 'Nems Tayeb Fl Fran',
                    desc: 'Nems Tayeb un de notre plas populaire originale concaténé de cinoie-marocain',
                    price: 57,
                    img: 'image/NEMS/4.jpg',
                    id: 4,
                },
                {
                    name: 'Nems Tayeb Fl Fran',
                    desc: 'Nems Tayeb un de notre plas populaire originale concaténé de cinoie-marocain',
                    price: 206,
                    img: 'image/NEMS/5.jpg',
                    id: 5,
                },
                {
                    name: 'Nems Tayeb Fl Fran',
                    desc: 'Nems Tayeb un de notre plas populaire originale concaténé de cinoie-marocain',
                    price: 26,
                    img: 'image/NEMS/6.jpg',
                    id: 6,
                },
                {
                    name: 'Nems Tayeb Fl Fran',
                    desc: 'Nems Tayeb un de notre plas populaire originale concaténé de cinoie-marocain',
                    price: 86,
                    img: 'image/NEMS/7.jpg',
                    id: 7,
                },
                {
                    name: 'Nems Tayeb Fl Fran',
                    desc: 'Nems Tayeb un de notre plas populaire originale concaténé de cinoie-marocain',
                    price: 83,
                    img: 'image/NEMS/8.jpg',
                    id: 8,
                }

            ]










