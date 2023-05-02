const filter = document.getElementById('filter').value
const plat = document.getElementById('plat')
const list = document.getElementById('platType')

const platType = function (type, descr) {
    return `
    <h2>${type}</h2>
    <p>${descr}</p>`
}
const Content = function (plat) {
    const Title = plat.name, Price = plat.price, Img = plat.img, Id = plat.id;
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
    <div class="addPlat" onclick="addToCart(${"'" + Title + "','" + Img + "'," + Price + ',' + Id})">
    <i class='bx bx-plus-circle bx-sm add-cart'>.</i>
    </div>
    </div>
    </div>
    </div>`
}

window.addEventListener('DOMContentLoaded', (e) => {
    fetch('../script/data.json')
        .then((response) => response.json())
        .then(function (data) {
            const soupPlat = data[0]
            const NemsPlat = data[1]
            const TempuraPlat = data[2]
            const PokesPlat = data[3]
            const YakitorisPlat = data[4]
            const SaladesPlat = data[5]
            const JusPlat = data[6]
            const DesertPlat = data[7]

            if (filter === 'all') {

                while (list.hasChildNodes()) {
                    list.removeChild(list.firstChild)
                }
                while (plat.hasChildNodes()) {
                    plat.removeChild(plat.firstChild)
                }

                list.innerHTML += platType('Nos plat', 'Le meilleure de meilleure sauf chez nous ! <br> bonn_a_pti',)

                for (let i = 0; i < soupPlat.length; i++) plat.innerHTML += Content(soupPlat[i])
                for (let i = 0; i < NemsPlat.length; i++) plat.innerHTML += Content(NemsPlat[i])
                for (let i = 0; i < TempuraPlat.length; i++) plat.innerHTML += Content(TempuraPlat[i])
                for (let i = 0; i < PokesPlat.length; i++) plat.innerHTML += Content(PokesPlat[i])
                for (let i = 0; i < YakitorisPlat.length; i++) plat.innerHTML += Content(YakitorisPlat[i])
                for (let i = 0; i < SaladesPlat.length; i++) plat.innerHTML += Content(SaladesPlat[i])
                for (let i = 0; i < JusPlat.length; i++) plat.innerHTML += Content(JusPlat[i])
                for (let i = 0; i < DesertPlat.length; i++) plat.innerHTML += Content(DesertPlat[i])
            }

            handlChange = () => {
                const filter = document.getElementById('filter').value

                setTimeout(() => {
                    document.getElementById('spineer').style.display = 'none'
                }, 1000)

                switch (filter) {

                    case 'ALL':
                        while (list.hasChildNodes()) {
                            list.removeChild(list.firstChild)
                        }
                        while (plat.hasChildNodes()) {
                            plat.removeChild(plat.firstChild)
                        }

                        list.innerHTML += platType('Nos plat', 'Le meilleure de meilleure sauf chez nous ! <br> bonn_a_pti',)

                        for (let i = 0; i < soupPlat.length; i++) plat.innerHTML += Content(soupPlat[i])
                        for (let i = 0; i < NemsPlat.length; i++) plat.innerHTML += Content(NemsPlat[i])
                        for (let i = 0; i < TempuraPlat.length; i++) plat.innerHTML += Content(TempuraPlat[i])
                        for (let i = 0; i < PokesPlat.length; i++) plat.innerHTML += Content(PokesPlat[i])
                        for (let i = 0; i < YakitorisPlat.length; i++) plat.innerHTML += Content(YakitorisPlat[i])
                        for (let i = 0; i < SaladesPlat.length; i++) plat.innerHTML += Content(SaladesPlat[i])
                        for (let i = 0; i < JusPlat.length; i++) plat.innerHTML += Content(JusPlat[i])
                        for (let i = 0; i < DesertPlat.length; i++) plat.innerHTML += Content(DesertPlat[i])

                        break;

                    case 'SOUPES':

                        while (list.hasChildNodes()) {
                            list.removeChild(list.firstChild)
                        }
                        while (plat.hasChildNodes()) {
                            plat.removeChild(plat.firstChild)
                        }

                        list.innerHTML += platType('Nos soupes', 'a7san 7rera fl3alam kayna 4er 3ndna ATAKLa',)
                        for (let i = 0; i < soupPlat.length; i++) plat.innerHTML += Content(soupPlat[i])

                        break

                    case 'NEMS':

                        while (list.hasChildNodes()) {
                            list.removeChild(list.firstChild)
                        }
                        while (plat.hasChildNodes()) {
                            plat.removeChild(plat.firstChild)
                        }

                        list.innerHTML += platType('Nos Nems', 'kay3jbeek ?  3ndna 4ayzid i3jbeek !',)
                        for (let i = 0; i < NemsPlat.length; i++) plat.innerHTML += Content(NemsPlat[i])

                        break

                    case 'TEMPURA':

                        while (list.hasChildNodes()) {
                            list.removeChild(list.firstChild)
                        }
                        while (plat.hasChildNodes()) {
                            plat.removeChild(plat.firstChild)
                        }

                        list.innerHTML += platType('Nos Tempura', 'tempura ra zwiina 3ndna matl9ach b7alha',)
                        for (let i = 0; i < TempuraPlat.length; i++) plat.innerHTML += Content(TempuraPlat[i])

                        break

                    case 'POKES':

                        while (list.hasChildNodes()) {
                            list.removeChild(list.firstChild)
                        }
                        while (plat.hasChildNodes()) {
                            plat.removeChild(plat.firstChild)
                        }

                        list.innerHTML += platType('Nos Pokes', "voulez vous du pokes, c'est onlie ches nous",)
                        for (let i = 0; i < PokesPlat.length; i++) plat.innerHTML += Content(PokesPlat[i])

                        break

                    case 'YAKITORIS':

                        while (list.hasChildNodes()) {
                            list.removeChild(list.firstChild)
                        }
                        while (plat.hasChildNodes()) {
                            plat.removeChild(plat.firstChild)
                        }

                        list.innerHTML += platType('Nos Yakitoris', 'Unique, juste chez nous !!',)
                        for (let i = 0; i < YakitorisPlat.length; i++) plat.innerHTML += Content(YakitorisPlat[i])

                        break

                    case 'SALADES':

                        while (list.hasChildNodes()) {
                            list.removeChild(list.firstChild)
                        }
                        while (plat.hasChildNodes()) {
                            plat.removeChild(plat.firstChild)
                        }

                        list.innerHTML += platType('Nos Salades', 'vou aimez les salades , chez chez nous !',)
                        for (let i = 0; i < SaladesPlat.length; i++) plat.innerHTML += Content(SaladesPlat[i])

                        break

                    case 'JUS':

                        while (list.hasChildNodes()) {
                            list.removeChild(list.firstChild)
                        }
                        while (plat.hasChildNodes()) {
                            plat.removeChild(plat.firstChild)
                        }

                        list.innerHTML += platType('Nos jus', "moun3ich, c'est comme ca comme sont notre jus",)
                        for (let i = 0; i < JusPlat.length; i++) plat.innerHTML += Content(JusPlat[i])

                        break

                    case 'DESERT':

                        while (list.hasChildNodes()) {
                            list.removeChild(list.firstChild)
                        }
                        while (plat.hasChildNodes()) {
                            plat.removeChild(plat.firstChild)
                        }

                        list.innerHTML += platType('Nos Desert', 'chbe3ti ? , 5oud leek chi deset !',)
                        for (let i = 0; i < DesertPlat.length; i++) plat.innerHTML += Content(DesertPlat[i])

                        break

                    default:

                        while (list.hasChildNodes()) {
                            list.removeChild(list.firstChild)
                        }
                        while (plat.hasChildNodes()) {
                            plat.removeChild(plat.firstChild)
                        }
                }
            }
        })
})