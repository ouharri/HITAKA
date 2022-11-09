const header = document.querySelector('header')
const Bar = document.querySelector('.nav-bar')

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

// cart section

var QUANTITé = Number(localStorage.getItem('quantité'))
if (!QUANTITé) QUANTITé = 0
document.getElementsByClassName('QUantitéCart')[0].innerHTML = QUANTITé;

const cartTmp = JSON.parse(localStorage.getItem('cartTStorage'))

if (cartTmp) {

  var cartStorage = cartTmp

  for (let i = 0; i < cartStorage.length; i++) {
    // console.log(cartStorage[i])

    var cartShopBox = document.createElement('div')
    cartShopBox.classList.add('cart-box')

    var cartItems = document.getElementsByClassName('cart-content')[0]
    var cartBox = cartItems.getElementsByClassName('cart-box')
    // console.log(cartBox)
    var cartMaker = `
    <img src="../${cartStorage[i].img}" alt="hh" class="cart-img">
    <div class="detail-box">
    <div class="cart-product-title">${cartStorage[i].title}</div>
    <div class="cart-price">${parseFloat(cartStorage[i].price)} DH</div>
    <input type="hidden" class="idPlat" value="${cartStorage[i].id}">
    <input type="number" value="1" class="cart-contity">
    </div>
    <!-- remove cart -->
    <i class="bx bxs-trash-alt cart-remove"></i>
    `

    cartShopBox.innerHTML = cartMaker
    cartItems.append(cartShopBox)

    // addToCart(cartStorage[i].title,cartStorage[i].img,cartStorage[i].price,cartStorage[i].id)
  }
  uptadeTotale()
} else var cartStorage = []




// var CartTmp = localStorage.getItem('cartBox')?.toString()
// console.log(JSON.parse(CartTmp))


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
  // console.log(removCartButtons)
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
  // var addCArt = document.getElementsByClassName('add-cart')
  // // console.log(addCArt)
  // for (var i = 0; i < addCArt.length; i++) {
  //   var button = addCArt[i]
  //   button.addEventListener('click', addCartClicked)
  // }
}

function removCartItem(event) {
  var buttonClicked = event.target
  buttonClicked.parentElement.remove()
  QUANTITé--;
  uptadeTotale()
  // alert(QUANTITé)
  document.getElementsByClassName('QUantitéCart')[0].innerHTML = QUANTITé;
  // uptadeTotale()
}

function quantityChanged(event) {
  var input = event.target
  if (isNaN(input.value) || input.value <= 0) input.value = 1
  uptadeTotale()
}
// function addCartClicked(event) {
//   // alert('gg')

//   var button = event.target
//   var shopProducts = button.parentElement
//   // var title = shopProducts.getElementById('produitName')
//   uptadeTotale()
//   // console.log(title.value)
// }

function addToCart(Title, Img, Price, Id) {

  let platStorage = {
    title: Title,
    img: Img,
    price: Price,
    id: Id
  }
  cartStorage.push(platStorage)
  localStorage.setItem('cartTStorage', JSON.stringify(cartStorage))

  var cartShopBox = document.createElement('div')
  cartShopBox.classList.add('cart-box')

  var cartItems = document.getElementsByClassName('cart-content')[0]
  var cartBox = cartItems.getElementsByClassName('cart-box')
  console.log(cartBox)

  for (var i = 0; i < cartBox.length; i++) {
    var cartItemsId = cartBox[i].getElementsByClassName('idPlat')[0].value
    // alert("te")
    // console.log(id)
    // console.log(cartItemsId)
    if (Id == cartItemsId) {
      alert(" ------- Vous aver deja choisie ce plat ! ------- \n vous pouver ajouter la quantiter dans votre cart")
      return;
    }
  }

  var cartMaker = `
    <img src="../${Img}" alt="hh" class="cart-img">
    <div class="detail-box">
    <div class="cart-product-title">${Ttitle}</div>
    <div class="cart-price">${parseFloat(Price)} DH</div>
    <input type="hidden" class="idPlat" value="${Id}">
    <input type="number" value="1" class="cart-contity">
    </div>
    <!-- remove cart -->
    <i class="bx bxs-trash-alt cart-remove">re</i>
    `

  // cartTmp.push(cartMaker)
  // localStorage.setItem('cartBox',cartTmp)

  cartShopBox.innerHTML = cartMaker
  cartItems.append(cartShopBox)

  cartShopBox
    .getElementsByClassName('cart-remove')[0]
    .addEventListener('click', removCartItem)

  cartShopBox
    .getElementsByClassName('cart-contity')[0]
    .addEventListener('change', quantityChanged)

  QUANTITé++;
  // alert(QUANTITé)
  document.getElementsByClassName('QUantitéCart')[0].innerHTML = QUANTITé;
  localStorage.setItem('quantité', QUANTITé)
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

  // let total = Number(localStorage.getItem('total'))
  // if (!total) 
  let total = 0
  // alert(total)

  // console.log(cartBoxes)

  for (let i = 0; i < cartBoxes.length; i++) {
    let cartBox = cartBoxes[i]
    let priceElement = cartBox.getElementsByClassName('cart-price')[0]
    let quantityElement = cartBox.getElementsByClassName('cart-contity')[0]
    let price = parseFloat(priceElement.innerText.replace(' DH', ''))
    let quantity = quantityElement.value
    total += price * quantity
    total = Math.round(total * 100) / 100
    // localStorage.setItem('total', total)

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
  // alert(total)
}
document.querySelector('.btn-buy').onclick = function(){
  localStorage.clear();
  location.reload();

}
