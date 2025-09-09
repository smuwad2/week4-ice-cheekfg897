const supermarketItems = [
  // Fruit category
  {
    name: "Apple",
    category: "Fruit",
    quantity: 10,
    price: 0.5
  },
  {
    name: "Banana",
    category: "Fruit",
    quantity: 15,
    price: 0.3
  },
  {
    name: "Orange",
    category: "Fruit",
    quantity: 12,
    price: 0.6
  },
  // Dairy category
  {
    name: "Milk",
    category: "Dairy",
    quantity: 5,
    price: 1.2
  },
  {
    name: "Cheddar Cheese",
    category: "Dairy",
    quantity: 4,
    price: 3.8
  },
  {
    name: "Yogurt",
    category: "Dairy",
    quantity: 8,
    price: 0.9
  },
  // Bakery category
  {
    name: "Bread",
    category: "Bakery",
    quantity: 3,
    price: 2.5
  },
  {
    name: "Croissant",
    category: "Bakery",
    quantity: 7,
    price: 1.5
  },
  {
    name: "Bagel",
    category: "Bakery",
    quantity: 6,
    price: 1.0
  },
  // Vegetable category
  {
    name: "Broccoli",
    category: "Vegetable",
    quantity: 7,
    price: 1.3
  },
  {
    name: "Carrot",
    category: "Vegetable",
    quantity: 9,
    price: 0.8
  },
  {
    name: "Spinach",
    category: "Vegetable",
    quantity: 5,
    price: 1.5
  }
];

const cart = [
  {
    name: "Apple",
    quantity: 2
  },
  {
    name: "Spinach",
    quantity: 3
  },
  {
    name: "Croissant",
    quantity: 4
  }
]

// Get unique categories from supermarket items
let categories = []
// Iterate through each item of supermarket item array
for (item of supermarketItems){
    // Take out the category and add it to categories array
    const currCategory = item["category"];
    if (!categories.includes(currCategory)){
        categories.push(currCategory);

    }

}
console.log(categories);

// Take out the category and add it to categories array
// Get total price of items in cart

//Retrieve unit price of item with name of itemName
function getPrice(itemName){
    for (let item of supermarketItems){
        if (item["name"] === itemName){
            return item["price"]
        }
    }
    return 0;
}


let grandTotal = 0.0;
for (let item of cart){
    const unitPrice = getPrice(item["name"]);
    console.log(item["name"] + " " + item["quantity"] + " X " + unitPrice)
    const itemPrice = unitPrice * item["quantity"];
    grandTotal += itemPrice;

}
console.log("Grand Total: " + grandTotal);