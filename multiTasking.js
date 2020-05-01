// Some variables to handle

var shops = {
  items: ["ham", "eggs", "spam"]
}

var home = {
  fridge: null
}

var delivery = {
  fridge: {
    contents: [],
    installed: false
  }
}

// A function that takes some time, and blocks the main thread

function takeTime(length) {
  let seconds = length * 1000000000
  let start = new Date()
  for (let i = 0; i < seconds; i++) {}
  let end = new Date()
  let timeTaken = end - start
  console.log(`That took: ${timeTaken} ms`)
}

// Functions that take some time

function goToShops() {
  console.log("Going to shops")
  takeTime(1)
}

function goHome() {
  console.log("Finished shopping, going home")
  takeTime(1)
}

function waitForDelivery() {
  console.log("Waiting for delivery")
  takeTime(5)
}

// Functions representing items on the todo list

function groceryShopping() {
  goToShops()
  let shoppingBags = [...shops.items]
  goHome()
  setTimeout(() => {
    home.fridge.contents = [...shoppingBags]
    console.log("Shopping is in the fridge")
  }, 0);
}

function receiveFridge() {
  waitForDelivery()
  home.fridge = delivery.fridge
  home.fridge.installed = true
  console.log("Installed fridge")
}

// Calling the functions in this order will now work
groceryShopping()
receiveFridge()
