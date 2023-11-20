const container = document.querySelector("#cards");
const modal_container = document.querySelector(".body");
const modal = document.querySelector(".modal");
const close_modal = document.querySelector("#close-modal");
const open_modal = document.querySelector(".cart-button");
const more = document.querySelector("#more");
const all = document.querySelector("#umumiy")
const input = document.querySelector("input")
let items = [
  {
    id: 0,
    img: "./img/1.png",
    nomi: "fresh organic apricot",
    narx: 12,
    soni: 1,
    liked: false,
    bought: false,
    quantity: 7,
    total: this.soni * this.narx,
    type: "fruit",
  },
  {
    id: 1,
    img: "./img/2.png",
    nomi: "cucumber",
    narx: 12,
    soni: 1,
    liked: false,
    bought: false,
    quantity: 0,
    total: this.soni * this.narx,
    type: "vegetable",
  },
  {
    id: 2,
    img: "./img/3.png",
    nomi: "hazelnuts filbert nut",
    narx: 12,
    soni: 1,
    liked: false,
    bought: false,
    quantity: 14,
    total: this.soni * this.narx,
    type: "nut",
  },
  {
    id: 3,
    img: "./img/4.png",
    nomi: "raw broccoli",
    narx: 12,
    soni: 1,
    liked: false,
    bought: false,
    quantity: 11,
    total: this.soni * this.narx,
    type: "vegetable",
  },
  {
    id: 4,
    img: "./img/5.png",
    nomi: "organic quince",
    narx: 12,
    soni: 1,
    liked: false,
    bought: false,
    quantity: 0,
    total: this.soni * this.narx,
    type: "fruit",
  },
  {
    id: 5,
    img: "./img/6.png",
    nomi: "red apple",
    narx: 12,
    soni: 1,
    liked: false,
    bought: false,
    quantity: 16,
    total: this.soni * this.narx,
    type: "fruit",
  },
  {
    id: 6,
    img: "./img/7.png",
    nomi: "capsicum-green",
    narx: 12,
    soni: 1,
    liked: false,
    bought: false,
    quantity: 5,
    total: this.soni * this.narx,
    type: "vegetable",
  },
  {
    id: 7,
    img: "./img/8.png",
    nomi: "pear fruit",
    narx: 12,
    soni: 1,
    liked: false,
    bought: false,
    quantity: 8,
    total: this.soni * this.narx,
    type: "fruit",
  },
  {
    id: 8,
    img: "./img/9.png",
    nomi: "blueberry",
    narx: 12,
    soni: 1,
    liked: false,
    bought: false,
    quantity: 10,
    total: this.soni * this.narx,
    type: "fruit",
  },
  {
    id: 9,
    img: "./img/10.png",
    nomi: "fresh raspberry",
    narx: 12,
    soni: 1,
    liked: false,
    bought: false,
    quantity: 10,
    total: this.soni * this.narx,
    type: "fruit",
  },
  {
    id: 10,
    img: "./img/11.png",
    nomi: "ginger",
    narx: 12,
    soni: 1,
    liked: false,
    bought: false,
    quantity: 0,
    total: this.soni * this.narx,
    type: "nut",
  },
  {
    id: 11,
    img: "./img/12.png",
    nomi: "two fresh figs",
    narx: 12,
    soni: 1,
    liked: false,
    bought: false,
    quantity: 10,
    total: this.soni * this.narx,
    type: "fruit",
  },
  {
    id: 12,
    img: "./img/13.png",
    nomi: "strawberry",
    narx: 12,
    soni: 1,
    liked: false,
    bought: false,
    quantity: 10,
    total: this.soni * this.narx,
    type: "fruit",
  },
  {
    id: 13,
    img: "./img/14.png",
    nomi: "eggplant",
    narx: 12,
    soni: 1,
    liked: false,
    bought: false,
    quantity: 10,
    total: this.soni * this.narx,
    type: "vegetable",
  },
  {
    id: 14,
    img: "./img/15.png",
    nomi: "egg",
    narx: 12,
    soni: 1,
    liked: false,
    bought: false,
    quantity: 10,
    total: this.soni * this.narx,
    type: "nut",
  },
  {
    id: 15,
    img: "./img/16.png",
    nomi: "limon",
    narx: 7,
    soni: 1,
    liked: false,
    bought: false,
    quantity: 67,
    total: this.soni * this.narx,
    type: "nut",
  },
];
let products = [];
let cart = JSON.parse(localStorage.getItem("savat")) || [];

function setLocal(arr, key) {
  localStorage.setItem(key, JSON.stringify(arr));
}
function setLocal3(arr, key) {
  localStorage.setItem(key, JSON.stringify(arr));
}

function setData() {
  if (JSON.parse(localStorage.getItem("mahsulot"))) {
    products = JSON.parse(localStorage.getItem("mahsulot"));
  } else {
    localStorage.setItem("mahsulot", JSON.stringify(items));
    products = JSON.parse(localStorage.getItem("mahsulot"));
  }
}
setData();

open_modal.addEventListener("click", () => {
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
});

close_modal.addEventListener("click", () => {
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
});

function renderQil() {
  container.innerHTML = "";
  products.map((item, index) => {
    container.innerHTML += `
        <div class="card">
          <picture>
            <img src="${item.img}" />
            ${
              item.liked
                ? `<i onclick="like(${index})" class="fa-solid fa-heart"></i>`
                : ` <i onclick="like(${index})" class="fa-regular fa-heart"></i>`
            }
          </picture>
          <div class="text-field">
            <h3>${item.nomi}</h3>
            <div class="flex">
              <p>$ ${item.narx}</p>
              <h4 class="${item.quantity > 0 ? "green" : "red"}"
              >${
                item.quantity > 0
                  ? `Mahsulot bor (${item.quantity})`
                  : "Mahsulot qolmadi"
              }</h4>
            </div>
            <hr />
            <div class="flex">
              <div class="btn">
                <button  onClick=decrement(${index})>-</button>
                <h4>${item.soni}</h4>
                <button onClick=increment(${index})>+</button>
              </div>
              ${
                item.bought
                  ? `<i class="fa-solid fa-check"></i>`
                  : `<button ${item.quantity > 0 ? "": "disabled"} onclick="buy(${index})" class="shop">
                <i class="fa-solid fa-cart-shopping"></i>
              </button>`
              }
            </div>
          </div>
        </div>
        `;
  });
}
renderQil();

function setRender() {
  modal_container.innerHTML = "";
  cart.map((item, index) => {
    modal_container.innerHTML += `
    <div class="card">
            <picture>
              <img src="${item.img}" alt="" />
            </picture>
            <div class="text-field">
              <h3>${item.nomi}</h3>
              <div class="flex">
                <p>$ ${item.narx}</p>
                <div class="btn">
                  <button onClick=decret(${index})>-</button>
                  <p>${item.soni}</p>
                  <button onClick=incret(${index})>+</button>
                </div>
              </div>
              <hr />
              <div class="flex">
                <h4>Total: $ ${item.soni * item.narx}</h4>
                <i onclick="cartDelete(${
                  item.id
                })"class="fa-solid fa-trash"></i>
              </div>
            </div>
          </div>
    `;
  });
}
setRender();

const increment = (elem) => {
  products = products.map((i) => {
    return i.id === products[elem].id &&
      products[elem].soni < products[elem].quantity &&
      products[elem].bought == false
      ? { ...i, soni: i.soni + 1 }
      : i;
  });
  setLocal(products, "mahsulot");
  renderQil();
};

const decrement = (elem) => {
  products = products.map((i) => {
    return i.id === products[elem].id &&
    products[elem].soni > 1 &&
    products[elem].bought ==false
      ? { ...i, soni: i.soni - 1 }
      : i;
  });
  setLocal(products, "mahsulot");
  renderQil();
};

const like = (elem) => {
  products = products.map((i) =>
    i.id == products[elem].id ? { ...i, liked: i.liked ? false : true } : i
  );
  setLocal(products, "mahsulot");
  renderQil();
};

const buy = (param) => {
  if (
    cart.filter(
      (i) => i.id === products[param].id && products[param].quantity > 0
    ).length === 0
  ) {
    cart.push(products[param]);
    if (cart.find((el) => el.id === products[param].id)) {
      products = products.map((item) => {
        return item.id === products[param].id
          ? { ...item, bought: (item.bought = true) }
          : item;
      });
    }
  }
  setLocal(products, "mahsulot");
  setLocal(cart, "savat");
  setRender();
  renderQil();
  clicker();
};

function clicker() {
  more.innerHTML = cart.length;
}
clicker();



function xisobla() {
  let sum = 0;
  cart.map((item) => {
      sum += item.narx * item.soni;
      return sum;
  })
  all.innerHTML = sum;
  setRender();
}
xisobla();

let cartDelete = (id) => {
  cart = cart.filter((it) => it.id !== id);
  products = products.map((el) => {
      return el.id == id ? { ...el, bought: (el.bought = false) } : el;

  });
  if (cart.length <= 0) {
      modal.classList.remove("active");
      document.body.style.overflow = "auto"
  }
  setLocal(cart, "savat");
  setLocal(products, "mahsulot");
  setRender();
  renderQil();
  clicker();
  xisobla();
};
const incret = (id) => {
  cart = cart.map((i) => {
      return i.id === cart[id].id && cart[id].soni < cart[id].quantity
          ? { ...i, soni: i.soni + 1 } : i;
  })
  setLocal(cart, "savat");
  setRender();
  xisobla();
};

const decret = (id) => {
  cart = cart.map((i) => {
      return i.id === cart[id].id && cart[id].soni > 1
          ? { ...i, soni: i.soni - 1 } : i;
  })
  setLocal(cart, "savat");
  setRender();
  xisobla();
};
input.addEventListener("input", (e) => {
  if (e.target.value == "") {
      renderQil();
  }
  else {
      container.innerHTML = "";
      products
          .filter((fil) => fil.nomi.includes(e.target.value))
          .map((item, index) => {
              container.innerHTML += `
          <div class="card">
            <picture>
              <img src="${item.img}" />
              ${item.liked
                      ? `<i onclick="like(${index})" class="fa-solid fa-heart"></i>`
                      : ` <i onclick="like(${index})" class="fa-regular fa-heart"></i>`
                  }
            </picture>
            <div class="text-field">
              <h3>${item.nomi}</h3>
              <div class="flex">
                <p>$ ${item.narx}</p>
                <h4 class="${item.quantity > 0 ? "green" : "red"}"
                >${item.quantity > 0
                      ? `Mahsulot bizda bor (${item.quantity})`
                      : "Mahsulot bizda qolmadi"
                  }</h4>
              </div>
              <hr />
              <div class="flex">
                <div class="btn">
                  <button  onClick=decrement(${index})>-</button>
                  <h4>${item.soni}</h4>
                  <button onClick=increment(${index})>+</button>
                </div>
                ${item.bought
                      ? `<i class="fa-solid fa-check"></i>`
                      : `<button ${item.quantity > 0 ? "" : "disabled"} onclick="buy(${index})" class="shop">
                  <i class="fa-solid fa-cart-shopping"></i>
                </button>`
                  }
              </div>
            </div>
          </div>
          `;
          })
  }
})
