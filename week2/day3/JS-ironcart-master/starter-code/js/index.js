// Sandra

function deleteItem(e){

  e.currentTarget.parentNode.parentNode.remove();

  // updates the total price in case the whole row was removed and we already added the value from that
  // row to the total amount
  getTotalPrice();
}

// help us to limit decimals to 2
function toTwoDecimals(rawValue){
  var twoDecimalsValue = parseFloat(Math.round(rawValue * 100)/100).toFixed(2);
  return twoDecimalsValue;
}

// all the prices
var productPrices = document.getElementsByClassName('single-item-price');
console.log("blah: ====", productPrices)

// all the products
var allTheProducts = document.getElementsByClassName('product-name'); 

// all product quantities
var allQuantities = document.getElementsByClassName('quantity-input');

var updatedPricesArray = []

function getPriceByProduct(){
  for(i = 0; i<allTheProducts.length; i++ ){
    var totalIndividualPrice = Number(productPrices[i].innerHTML) * allQuantities[i].value;
    document.getElementsByClassName('total-individual-price')[i].innerHTML = totalIndividualPrice;
  }

}

// all total individual prices (after we multiply price of single product and quantity that user inserted)
updatedPricesArray = document.getElementsByClassName('total-individual-price');

// just regular function for adding any two numbers
function addTotalProductPrice(a, b) {
  return a + b;
}
 
function getTotalPrice() {
  getPriceByProduct();

  var pricesArray = [];
  for(i = 0; i < allTheProducts.length; i++) {
    var singleProductPriceValue = Number(updatedPricesArray[i].innerHTML);
    // singleProductPriceValue = toTwoDecimals(singleProductPriceValue)
    pricesArray.push(singleProductPriceValue);
  }
var total = pricesArray.reduce(addTotalProductPrice, 0);

// make sure your total is always to 2 decimals
total = toTwoDecimals(total);
console.log("two decimal: ", total)
document.getElementById('theTotal').innerHTML = total

}


// 1st => create name
function createNameNode(newName){
  // this "newName" that we pass as a parameter is just placeholder that represents 
  // any value that user inputs through input field and that we capture through .value

  // first we create "wrapper div"
  var nameDiv = document.createElement("div");
  // we give it attribute "class" with value "col-lg-2"
  nameDiv.setAttribute("class", "col-lg-2")
  // then we create span element
  var nameSpan = document.createElement("span");
  nameSpan.setAttribute("class", "product-name");
  // we attach to this span whichever value user inputed, that we previously called ""newName
  // so in order to stay consistent we keep that word
  nameSpan.innerHTML = newName;
  // this is how we append element as a child dom element
  // this literally means "nameSpan" is a child element of "nameDiv" element
  nameDiv.appendChild(nameSpan);
  // make sure all these functions have return
  return nameDiv;
}

// 2nd => create price
function createSinglePriceNode(newPrice){
  var singlePriceDiv = document.createElement('div');
  singlePriceDiv.setAttribute("class", "col-lg-2")

  var dollarSignSpan = document.createElement("span");
  dollarSignSpan.setAttribute("class", "dollar-sign");
  dollarSignSpan.innerHTML = "$";

  var singlePrice = document.createElement("span");
  singlePrice.setAttribute("class", "single-item-price");
  singlePrice.innerHTML = newPrice;

  singlePriceDiv.appendChild(dollarSignSpan);
  singlePriceDiv.appendChild(singlePrice);

  return singlePriceDiv;
}

// 3rd => create quantity input
function createQuantityInput(){
  // create quantity input field
  var quantityInputField = document.createElement("input");
  quantityInputField.setAttribute("type", "text");
  quantityInputField.setAttribute("class", "quantity-input");
  quantityInputField.setAttribute("placeholder", "0");

  // return quantity input
  return quantityInputField;
}

// 4th => create the whole quantity node
function createQuantityNode(){
  var quantityNode = document.createElement('div');
  quantityNode.setAttribute("class", "col-lg-4")
  var label = document.createElement("label");
  label.innerHTML = "QTY";

  var quantity = createQuantityInput();

  quantityNode.appendChild(label);
  quantityNode.appendChild(quantity);

  // console.log("quantity node is: ", quantityNode)
  return quantityNode
}

// 5th => create the individual total price
function createIndividualPrice(){
  var priceDiv = document.createElement('div');
  priceDiv.setAttribute("class", "col-lg-2")
  var dollarSignSpan = document.createElement("span");
  dollarSignSpan.setAttribute("class", "dollar-sign");
  dollarSignSpan.innerHTML = "$";
  var totalIndPrice = document.createElement("span");
  totalIndPrice.setAttribute("class", "total-individual-price");
  totalIndPrice.innerHTML = "0";

  // insert spans on DOM
  priceDiv.appendChild(dollarSignSpan);
  priceDiv.appendChild(totalIndPrice);
  return priceDiv;
}

// 6th => create delete button
function createDeleteButton(){
  var deleteButtonDiv = document.createElement('div');
  deleteButtonDiv.setAttribute("class", "col-lg-2");
  var deleteButton = document.createElement('button');
  deleteButton.setAttribute("class", "btn btn-delete");
  deleteButton.setAttribute("type", "button");
  deleteButton.innerHTML = "Delete";
  deleteButton.onclick = deleteItem;

  // append delete button as a child to deleteButtonDiv
  deleteButtonDiv.appendChild(deleteButton);

  // return deleteButtonDiv
  return deleteButtonDiv;
}

// 7th => creates the whole row
function createNewItemRow(itemName, itemPrice){
  var productRow = document.createElement('div');
  var productName = createNameNode(itemName);
  var productPrice = createSinglePriceNode(itemPrice);
  var quantityNode = createQuantityNode();
  var indvidualTotalPrice = createIndividualPrice();
  var deleteButtonNode = createDeleteButton();
  console.log("deleteButtonNode: ", deleteButtonNode)

  // console.log("quantityNode is: ====", quantityNode)
  productRow.append(productName);
  productRow.append(productPrice);
  productRow.append(quantityNode);
  productRow.append(indvidualTotalPrice);
  productRow.append(deleteButtonNode);

  // console.log("product row: ", productRow)
  return productRow;
} 

// 8th => sets the row on the DOM, positioning it above input fields to create new products
function createNewItem(){
  var newProductName = document.getElementById('new-product-name').value;
  var newProductPrice = document.getElementById('new-product-price').value;

  // call the function we created before and make sure we pass two arguments
  // in the function above we used "itemName" and  "itemPrice" as placeholders and now we are replacing it 
  // with realtime data, whatever user inserts in these two input fields
  var newItem = createNewItemRow(newProductName, newProductPrice);
  // console.log("new item is: ", newItem);
  var newDiv = document.getElementById('create');
  // console.log("new div is: ", newDiv);

  //                   what we are placing    |-------> where we are placing (insertBefore this)
  //                               |          | 
  //                               V          V
  newDiv.parentNode.insertBefore(newItem, newDiv)

  // clear the fields after submitting
  document.getElementById('new-product-name').value = "";
  document.getElementById('new-product-price').value = "";
}

// runs all the times
window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');
  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
     deleteButtons[i].onclick = deleteItem;
   }
};
