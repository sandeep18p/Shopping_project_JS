 const produtc = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  rating: { rate: 3.9, count: 120 },
};


let result;
let men;
let women;
let acc;
let jew;
 getproductslist()


async function getproductslist() {
    try{
      console.log('fetching')
 let response=await fetch('https://fakestoreapi.com/products');
 let apiresultarr=await response.json();
  result=addcolourandsizetoresult(apiresultarr);
console.log('this is result ', result)
console.log('rop')
const itemsContainer = document.getElementById('itemm');  
const itemsContainer3 = document.getElementById('iteme'); 
const itemsContainer4 = document.getElementById('itemj');   


    men = result.filter((item) => item.category === "men's clothing");
        console.log('Filtered men\'s clothing', men);

        women = result.filter((item) => item.category === "women's clothing");
        console.log('Filtered men\'s clothing', women);

        acc = result.filter((item) => item.category === "electronics");
        console.log('Filtered men\'s clothing', acc);

        jew = result.filter((item) => item.category === "jewelery");
        console.log('Filtered men\'s clothing', jew);

men.forEach(itemData => {
  const newItem = createItemElement(itemData);
  itemsContainer.appendChild(newItem);
});


const itemsContainerW = document.getElementById('itemw');  
women.forEach(itemData => {
  const newItem = createItemElement(itemData);
  itemsContainerW.appendChild(newItem);
});

acc.forEach(itemData => {
  const newItem = createItemElement(itemData);
  itemsContainer3.appendChild(newItem);
});

jew.forEach(itemData => {
  const newItem = createItemElement(itemData);
  itemsContainer4.appendChild(newItem);
});

     }
    catch(error) {
        console.log(error)
    }
}

function addcolourandsizetoresult (apiresultarr) {
  let colorsarr=['Blue','White','Black','Blue','White','White','White','Red','Black','Red','Blue','Blue','Green','Black','Blue','Black','Blue','White','Red','Blue'];
  let sizesarr=['S','M','XL','M','M','L','S','L','S','S','M','S','L','XL','L','M','L','M','XL','S'];
  console.log(colorsarr.length,sizesarr.length);
  let index=0;
  let apiresultarrmod=JSON.parse(JSON.stringify(apiresultarr));  //deep copy first stringfied the array and passing the string object not  reference to it and finally parsing the array 
  apiresultarrmod.forEach((element)=>{
    element.color=colorsarr[index];
    element.size=sizesarr[index];
    index++;
  })
  return apiresultarrmod;
}



//
function createItemElement(data) {
  // Create main elements
  const itemDiv = document.createElement('div');
  itemDiv.classList.add('item');

  const img = document.createElement('img');
  img.src = data.image;
  img.alt = 'Item';
  itemDiv.appendChild(img);

  const infoDiv = document.createElement('div');
  infoDiv.classList.add('info');
  itemDiv.appendChild(infoDiv);

  // Create price and sizes elements
  const priceSizesDiv = document.createElement('div');
  priceSizesDiv.classList.add('row');
  priceSizesDiv.innerHTML = `
    <div class="price">$${data.price}</div>
    <div class="sized">${data.size}</div>
  `;
  infoDiv.appendChild(priceSizesDiv);

  // Create colors element
  const colorsDiv = document.createElement('div');
  colorsDiv.classList.add('colors');
  console.log(data.color)
  colorsDiv.innerHTML = `
   Colors:
                  <div class="row">
                    <div class="circle" style="background-color: #000"></div>
                    <div class="circle" style="background-color: #4938af"></div>
                    <div class="circle" style="background-color: #203d3e"></div>
                  </div>
            ${data.color}      
  `;
  infoDiv.appendChild(colorsDiv);

  // Create rating element
  const ratingDiv = document.createElement('div');
  ratingDiv.classList.add('row');
  ratingDiv.textContent = `Rating: ${data.rating.rate}`;
  infoDiv.appendChild(ratingDiv);

  // Create button element
  const button = document.createElement('button');
  button.id = 'addBtn';
  button.textContent = 'Add to Cart';
  itemDiv.appendChild(button);

  return itemDiv;
}