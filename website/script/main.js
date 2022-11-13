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

function cartMaker(img, title, price, id, quantite) { // function return item
  return `
<img src="../${img}" alt="hh" class="cart-img">
<div class="detail-box">
<div class="cart-product-title">${title}</div>
<div class="cart-price">${parseFloat(price)} DH</div>
<input type="hidden" class="idPlat" value="${id}">
<input type="number" value="${quantite}" class="cart-contity">
</div>
<!-- remove cart -->
<i class="bx bxs-trash-alt cart-remove"></i>
`}

// get item for local storage
// --------------------------------------------------------------- //

var QUANTITé = Number(localStorage.length) - 1
if (!QUANTITé || QUANTITé < 0) QUANTITé = 0
document.getElementsByClassName('QUantitéCart')[0].innerHTML = QUANTITé;

const cartTmp = JSON.parse(localStorage.getItem('cartLength'))

if (cartTmp) {

  var cartLength = cartTmp

  for (let i = 0; i < cartLength.length; i++) {
    // console.log(cartStorage[i])
    const cartTmp = JSON.parse(localStorage.getItem(`produit-${cartLength[i]}`))
    if (cartTmp) {
      var cartShopBox = document.createElement('div')
      cartShopBox.classList.add('cart-box')
      var cartItems = document.getElementsByClassName('cart-content')[0]
      var cartBox = cartItems.getElementsByClassName('cart-box')
      // console.log(cartBox)

      cartShopBox.innerHTML = cartMaker(cartTmp.img, cartTmp.title, cartTmp.price, cartTmp.id, cartTmp.quantite)
      cartItems.append(cartShopBox)
    }

    // addToCart(cartStorage[i].title,cartStorage[i].img,cartStorage[i].price,cartStorage[i].id)
  }
  uptadeTotale()
} else var cartLength = [];
// --------------------------------------------------------------- //


// cart section

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
  // remove cart
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

  var parentEle = buttonClicked.parentElement
  var childId = parentEle.getElementsByClassName('idPlat')[0].value


   // ----------------------------------------------------- //
  //          remove item from local storage cart         //
 // --------------------------------------------------- //
  localStorage.removeItem(`produit-${childId}`)

  cartLength = cartLength.filter(function (cart) {
    return cart != childId
  })

  localStorage.setItem('cartLength', JSON.stringify(cartLength))
  // ---------------------------------------------------- //

  QUANTITé--;
  document.getElementsByClassName('QUantitéCart')[0].innerHTML = QUANTITé;
  uptadeTotale()
}

function quantityChanged(event) {
  var input = event.target
  if (isNaN(input.value) || input.value <= 0) input.value = 1

  var parentQantite = input.parentElement
  var childId = parentQantite.getElementsByClassName('idPlat')[0].value

  // -------------------------------------------------------------- //
  //          update item quantité from local storage cart          //
  // -------------------------------------------------------------- //
  const cartTmp = JSON.parse(localStorage.getItem(`produit-${childId}`))

  cartTmp.quantite = input.value;

  localStorage.setItem(`produit-${childId}`, JSON.stringify(cartTmp))
  // --------------------------------------------------------------- //

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

  var cartShopBox = document.createElement('div')
  cartShopBox.classList.add('cart-box')

  var cartItems = document.getElementsByClassName('cart-content')[0]
  var cartBox = cartItems.getElementsByClassName('cart-box')
  // console.log(cartBox)

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

  cartShopBox.innerHTML = cartMaker(Img, Title, Price, Id, 1)
  cartItems.append(cartShopBox)

  cartShopBox
    .getElementsByClassName('cart-remove')[0]
    .addEventListener('click', removCartItem)

  cartShopBox
    .getElementsByClassName('cart-contity')[0]
    .addEventListener('change', quantityChanged)

  QUANTITé++;
  document.getElementsByClassName('QUantitéCart')[0].innerHTML = QUANTITé;


  let platStorage = {
    title: Title,
    img: Img,
    price: Price,
    id: Id,
    quantite: 1
  };

  cartLength.push(Id)
  localStorage.setItem('cartLength', JSON.stringify(cartLength))
  localStorage.setItem(`produit-${Id}`, JSON.stringify(platStorage))


  uptadeTotale()

}

function uptadeTotale() {
  let cartContent = document.getElementsByClassName('cart-content')[0]
  let cartBoxes = cartContent.getElementsByClassName('cart-box')

  var total = 0;
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
    // false !!!!!! 100%
  }
  document.getElementsByClassName('totale-price')[0].innerText = total + ' DH'
}


document.querySelector('.btn-buy').onclick = function () {
  localStorage.clear();
  location.reload();
}
