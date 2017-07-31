// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1 () {
  let total = 0
  let avg

  for (let i = 0; i < data.length; i++) {
    total = total + data[i].price
  }
  avg = total/data.length
  console.log("The average price is $" + avg)
}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  // Answer:
  let item = [];

    for (let i = 0; i < data.length; i++) {
      if (data[i].price >= 14 && data[i].price <= 18){
      item.push(data[i].title)
      }
  }
  console.log(item);
}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  // Answer:
  for (let i = 0; i < data.length; i++) {
    if (data[i].currency_code === "GBP"){

      console.log(data[i].title + " cost " + data[i].price + " pounds.")
    }
  }
}


// 4: Display a list of all items who are made of wood.
function question4 () {
  // Answer:
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].materials.length; j++) {
      if(data[i].materials[j] == "wood"){

        console.log(data[i].title);
      }
    }
  }
}


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
  // Answer:
  for (let i = 0; i < data.length; i++) {
    if (data[i].materials.length > 8){
      console.log(data[i].title, data[i].materials.length, data[i].materials)
    }
  }
}


// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  // Answer:
  let counter = 0
  for (let i = 0; i < data.length; i++) {
    if(data[i].who_made === "i_did"){
      counter += 1
    }
  }
  console.log(counter)
}
