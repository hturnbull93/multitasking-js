var shops = {
  items: ["ham", "eggs", "spam"],
};

var home = {
  fridge: null,
};

var delivery = {
  fridge: {
    contents: [],
    installed: false,
  },
};

function groceryShopping() {
  console.log("Going to shops");
  let shoppingBags = [...shops.items];
  console.log("Going home");
  setTimeout(() => {
    home.fridge.contents = [...shoppingBags];
    console.log("Shopping is in the fridge");
  }, 0);
}

function receiveFridge() {
  console.log("Waiting for delivery");
  home.fridge = delivery.fridge;
  home.fridge.installed = true;
  console.log("Installed fridge");
}

groceryShopping();
receiveFridge();
