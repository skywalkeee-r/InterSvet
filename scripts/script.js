let newelem = document.createElement("div");
let cart = document.querySelector(".shopingcart");
let productlist =
    [makeproduct("Потолочный светильник Maytoni MOD080CL-08CH", 38790, "Img/MaytoniMOD.jpg", 1, 0),
    makeproduct("Подвесной светильник Maytoni MOD058PL-L100B4K", 37290, "Img/Maytoni.jpg", 1, 1),
    makeproduct("Подвесная люстра Favourite Assembly 2060-7P", 50900, "Img/Favorite Assembly.jpeg", 1, 2),
    makeproduct("Подвесная люстра Kink Light Криста 08476-19,20", 12950, "Img/King Light.jpeg", 1, 3)];
let cartlist = [];
let sum = 0;
let productcouns = 0;
let sumtext = document.querySelector(".price h1");
let prodtext = document.querySelector(".numproducts h1");
let expenproduct;
let cheapproduct;
let cart_empty = document.querySelector(".cart_empty");
newelem.className = "newblock";
document.body.append(newelem);
function makeproduct(name, Price, img_url, quantity, id) {
    return {
        name: name,
        Price: Price,
        img_url: img_url,
        quantity: quantity,
        id: id
    }
}
function deleteproduct(id) {
    for (let i = 0; i < cartlist.length; i++) {
        if (id == cartlist[i].id) {
            let product = cartlist.splice(i, 1);
            let item = cart.childNodes[i];
            cart.removeChild(item);
            sum -= product[0].Price * product[0].quantity;
            sumtext.innerText = sum + " руб.";
            productcouns -= product[0].quantity;
            prodtext.innerText = productcouns + " шт.";
            productlist[i].quantity = 1;
            if (cartlist < 1) {
                cart_empty.classList.add("cart_empty");
                cart_empty.classList.remove("cart_empty_none");
            }
            return;
        }
    }
}
function stacking(product) {
    if (cartlist.length > 0) {
        for (let i = 0; i < cartlist.length; i++) {
            if (product.name == cartlist[i].name) {
                cartlist[i].quantity++;
                sum += product.Price;
                sumtext.innerText = sum + " руб.";
                productcouns++;
                prodtext.innerText = productcouns + " шт.";
                let inputlist = document.querySelectorAll('.cartelement input');
                inputlist[i].value = cartlist[i].quantity;
                return;
            }
        }
    }
    cart_empty.classList.remove("cart_empty");
    cart_empty.classList.add("cart_empty_none");
    cartlist.push(product);
    productcouns++;
    prodtext.innerText = productcouns + " шт.";
    sum += product.Price;
    prodtext.innerText = cartlist.length + " шт.";
    sumtext.innerText = sum + " руб.";
    let newelem = document.createElement("div");
    newelem.className = "cartelement";
    newelem.innerHTML =
        `<div class="elementinfo">
                <img src="`+ product.img_url + `" alt="">
                <h3>`+ product.name + `</h3>
            </div>
            <div class="elementbutton">
                <div>
                    <button onclick = "removefromstack(`+ product.id + `)">-</button>
                    <input type="text" placeholder = "1" onchange = "updatevalue(this.value,`+ product.id + `)"> 
                    <button onclick = "addforstack(`+ product.id + `)">+</button>
                </div>
                <p>шт</p>
            </div>
            <p>`+ product.Price + ` руб.</p>
            <div>
                <h5 onclick = "deleteproduct(`+ product.id + `)">x</h5>
            </div>`;
    cart.append(newelem);
}
function removefromstack(id) {
    for (let i = 0; i < cartlist.length; i++) {
        if (id == cartlist[i].id) {
            if (cartlist[i].quantity > 1) {
                cartlist[i].quantity -= 1;
                sum -= cartlist[i].Price;
                sumtext.innerText = sum + " руб.";
                productcouns--;
                prodtext.innerText = productcouns + " шт.";
                let inputlist = document.querySelectorAll('.cartelement input');
                inputlist[i].value = cartlist[i].quantity;
            }
        }
    }
}
function addforstack(id) {
    for (let i = 0; i < cartlist.length; i++) {
        if (id == cartlist[i].id) {
            cartlist[i].quantity += 1;
            sum += cartlist[i].Price;
            sumtext.innerText = sum + " руб.";
            productcouns++;
            prodtext.innerText = productcouns + " шт.";
            let inputlist = document.querySelectorAll('.cartelement input');
            inputlist[i].value = cartlist[i].quantity;
        }
    }
}
function clearcartlist() {
    cartlist = [];
    sum = 0;
    sumtext.innerText = sum + " руб.";
    productcouns = 0;
    for (let i = 0; i < productlist.length; i++) {
        productlist[i].quantity = 1;
    }
    prodtext.innerText = productcouns + " шт.";
    cart.innerHTML = '';
    cart_empty.classList.add("cart_empty");
    cart_empty.classList.remove("cart_empty_none");
}
function updatevalue(value, id) {
    for (let i = 0; i < cartlist.length; i++) {
        if (id == cartlist[i].id) {
            let dif = cartlist.quantity - Number(value);
            sum += cartlist.Price * dif;
            sumtext.innerText = sum + " руб.";
            productcouns += dif;
            prodtext.innerText = productcouns + " шт.";
            cartlist.quantity = value;
            let inputlist = document.querySelectorAll('.cartelement input');
            inputlist[i].value = cartlist[i].quantity;
        }
    }
}
function showexpenproduct() {
    expenproduct = cartlist[0].Price;
    for (let i = 0; i < cartlist.length; i++) {
        if (cartlist[i].Price > expenproduct) {
            expenproduct = cartlist[i].Price;
        }
    }
    alert(expenproduct);
}
function maxvalue() {
    let number = [1, 2, 94, 37, 51, 76, 42];
    let max = number[0];
    for (let i = 0; i < number.length; i++) {
        if (number[i] > max) {
            max = number[i];
        }
    }
    alert(max);
}
function showcheapproduct() {
    cheapproduct = cartlist[0].Price;
    for (let i = 0; i < cartlist.length; i++) {
        if (cartlist[i].Price < cheapproduct) {
            cheapproduct = cartlist[i].Price;
        }
    }
    alert(cheapproduct);
}