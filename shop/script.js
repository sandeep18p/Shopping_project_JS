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


//color chekboxes importing
let redto=document.getElementById('red');
let blueto =document.getElementById('blue');
let greento=document.getElementById('green');
let blackto=document.getElementById('black');
let whiteto=document.getElementById('white');

//size chekboxes importing
let sto=document.getElementById('s');
let mto =document.getElementById('m');
let lto=document.getElementById('l');
let xlto=document.getElementById('xl');

//Filter Buttons fucntionality
let ratinginput=document.getElementById('range');

//price range chekboxes importing
let zeroto=document.getElementById('0-25');
let twentyfiveto =document.getElementById('25-50');
let fiftyto=document.getElementById('50-100');
let hundredto=document.getElementById('100on');

let filterbutton=document.getElementById('bt_o');

filterbutton.addEventListener('click',filterfunction1);

function filterfunction1(event) {
  try {
let filteredarr=result.filter((element)=>{
      let ratingval=ratinginput.value;
          if(ratingelemboolean(ratingval,element) && elempricecheckingboolean(zeroto,twentyfiveto,fiftyto,hundredto,element)
          && elemcolorcheckingboolean (redto,blueto,greento,blackto,whiteto,element) && elemsizecheckingboolean (sto,mto,lto,xlto,element) )
      {
          // console.log("ans",element);
          return true;
      } else {
          // console.log('false',element)
          return false;
      }
  });
  console.log(filteredarr);
  if(filteredarr.length===0)
  {
      alert('No Item matches with the filters');
      console.log('exit');
      document.getElementsByClassName('items-container')[0].style.display='block';
      document.getElementsByClassName('searchcontainer')[0].style.display='none';
      return;
  }

document.getElementsByClassName('searchcontainer')[0].innerHTML=''
console.log('op')
document.querySelectorAll('.filter').forEach(button => {
  button.classList.remove('active');
});
allbtn.classList.add('category-selected');
searchaddcardstoui(filteredarr);
console.log("reached121")
  }catch(error) {console.log(error)}
}

function ratingelemboolean (ratingval,currelement){
  try {
 let ratingnum=parseInt(ratingval);
 if(currelement.rating.rate>=ratingnum)
 {
  // console.log('truerating',ratingnum,currelement.rating.rate)
  return true;
 }
 else {
  // console.log('falserating',ratingnum,currelement.rating.rate)
  return false;
 }
}catch(error) {console.log(error)}
}

//Price check of the element in range or not
function elempricecheckingboolean (zeroto,twentyfiveto,fiftyto,hundredto,currelement) {
  try {
let zerotoval=zeroto.checked;
let twentyfivetoval=twentyfiveto.checked;
let fiftytoval=fiftyto.checked;
let hundredtoval=hundredto.checked;
let validation='pending'

if(!zerotoval && !twentyfivetoval && !fiftytoval && !hundredtoval)
{
  return true;
}

if(zerotoval){ if(currelement.price>=0 && currelement.price<=25) {validation=true;return true;} else{} }
if(twentyfivetoval){ if(currelement.price>=25 && currelement.price<=50) {validation=true;return true} else{} }
if(fiftytoval){ if(currelement.price>=50 && currelement.price<=100) {validation=true;return true} else{} }
if(hundredtoval){ if(currelement.price>=100) {validation=true;return true} else{} }

if(validation='pending')
{
  return false;
}
}catch(error) {console.log(error)}
}

function elemsizecheckingboolean (sto,mto,lto,xlto,currelement) {
  try {
  let stoval=sto.checked;
  let mtoval=mto.checked;
  let ltoval=lto.checked;
  let xltoval=xlto.checked;
  let validation='pending';

  if(!stoval && !mtoval && !ltoval && !xltoval)
  {
      return true;
  }
  if(stoval){ if(currelement.size==='S') {validation=true;return true}  else{}} ;
  if(mtoval){ if(currelement.size==='M') {validation=true;return true} else{} }
  if(ltoval){ if(currelement.size==='L') {validation=true;return true} else{} }
  if(xltoval){ if(currelement.size==='XL') {validation=true;return true} else{} }

  if(validation=='pending')
  {
    return false;
  }

}catch(error) {console.log(error)}
}


//Colors check of the element 
function elemcolorcheckingboolean (redto,blueto,greento,blackto,whiteto,currelement) {
  try {
  let redtoval=redto.checked;
  let bluetoval=blueto.checked;
  let greentoval=greento.checked;
  let blacktoval=blackto.checked;
  let whitetoval=whiteto.checked;
  let validation='pending'
  if (!redtoval && !bluetoval && !greentoval && !blacktoval && !whitetoval) {
      // No color filters selected, so return true
      return true;
    }
  // console.log(redtoval)

  // if (redtoval && currelement.color === 'Red') {
  //     return true;
  //   }
  //   if (bluetoval && currelement.color === 'Blue') {
  //     return true;
  //   }
  //   if (greentoval && currelement.color === 'Green') {
  //     return true;
  //   }
  //   if (blacktoval && currelement.color === 'Black') {
  //     return true;
  //   }
  //   if (whitetoval && currelement.color === 'White') {
  //     return true;
  //   }

  //   return false;

//When multiple colours selected
// let arr=[redtoval,bluetoval,greentoval,blacktoval,whitetoval];

// let filteredarr=arr.filter((element)=>{if(!element){return false}else{return true}});

//When single colour selected
  if(redtoval){ if(currelement.color==='Red') {validation=true;return true;}  else{} }
  if(bluetoval){ if(currelement.color==='Blue') {validation=true;return true;} else{} }
  if(greentoval){ if(currelement.color==='Green') {validation=true;return true;} else{} }
  if(blacktoval){ if(currelement.color==='Black') {validation=true;return true;} else{} }
  if(whitetoval){ if(currelement.color==='White') {validation=true;return true;} else{} }

  if(validation=='pending')
  {
    return false;
  }

}catch(error) {console.log(error)}
}

let sidebar = document.getElementsByClassName("sidebar")[0];
let sidebar_content = document.getElementsByClassName("content-wrapper")[0];

window.onscroll = () => {
  
  let scrollTop = window.scrollY; // current scroll position
  let viewportHeight = window.innerHeight; //viewport height
  let contentHeight = sidebar_content.getBoundingClientRect().height; // current content height
  console.log(contentHeight+10)
  contentHeight=contentHeight+20;
  let sidebarTop = sidebar.getBoundingClientRect().top + window.pageYOffset; //distance from top to sidebar
  
  if(scrollTop >= contentHeight - viewportHeight + sidebarTop) {
    sidebar_content.style.transform = `translateY(-${contentHeight - viewportHeight + sidebarTop}px)`;
    sidebar_content.style.position = "fixed";
    sidebar_content.style.backgroundColor = "black";
    sidebar_content.style.paddingBottom = "10px"; 
    sidebar_content.style.margingBottom = "0px"; 
    
  }
  else {
    sidebar_content.style.transform = "";
    sidebar_content.style.position = "";
  }

}


let result;
let men;
let women;
let acc;
let jew;
 getproductslist()

 let mensdiv=document.getElementById("men_section");
 let womensdiv=document.getElementById("women_section");
let jewelrydiv=document.getElementById("Jewellery_section");
let electronicsdiv=document.getElementById("electronics_section");


//Search Bar Below Buttons fucntionality

let allbtn=document.getElementById('all');
let mensbtn=document.getElementById('mens');
let womensbtn=document.getElementById('womens');
let jewelerybtn=document.getElementById('jewellery');
let electronicsbtn=document.getElementById('electronics');

allbtn.addEventListener('click',btnfucntionality);
mensbtn.addEventListener('click',btnfucntionality);
womensbtn.addEventListener('click',btnfucntionality);
jewelerybtn.addEventListener('click',btnfucntionality);
electronicsbtn.addEventListener('click',btnfucntionality);

async function getproductslist() {
    try{
      console.log('fetching')
 let response=await fetch('https://fakestoreapi.com/products');
 let apiresultarr=await response.json();
  result=addcolourandsizetoresult(apiresultarr);
console.log('this is result ', result)
console.log('rop')
// const itemsContainer = document.getElementById('itemm');  
// const itemsContainer3 = document.getElementById('iteme'); 
// const itemsContainer4 = document.getElementById('itemj');   


//     men = result.filter((item) => item.category === "men's clothing");
//         console.log('Filtered men\'s clothing', men);

//         women = result.filter((item) => item.category === "women's clothing");
//         console.log('Filtered men\'s clothing', women);

//         acc = result.filter((item) => item.category === "electronics");
//         console.log('Filtered men\'s clothing', acc);

//         jew = result.filter((item) => item.category === "jewelery");
//         console.log('Filtered men\'s clothing', jew);

// men.forEach((itemData,i)=> {
//   const newItem = createItemElement(itemData,i);
//   itemsContainer.appendChild(newItem);
// });


// const itemsContainerW = document.getElementById('itemw');  
// women.forEach((itemData,i) => {
//   const newItem = createItemElement(itemData,i);
//   itemsContainerW.appendChild(newItem);
// });

// acc.forEach((itemData,i) => {
//   const newItem = createItemElement(itemData,i);
//   itemsContainer3.appendChild(newItem);
// });

// jew.forEach((itemData,i) => {
//   console.log("jew ",i);
//   const newItem = createItemElement(itemData,i);
//   itemsContainer4.appendChild(newItem);
// });

createItemElement(result);

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
  for(let i=0;i<data.length;i++){
       
    console.log(i)
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');
  
    const img = document.createElement('img');
    img.src = data[i].image;
    img.alt = 'Item';
    itemDiv.appendChild(img);
  
    const infoDiv = document.createElement('div');
    infoDiv.classList.add('info');
    itemDiv.appendChild(infoDiv);
  
    const title = document.createElement('div');
    title.classList.add('title');
    title.innerText =`${(data[i].title).substring(0,22)}`;
  
    infoDiv.appendChild(title)
    
  
    // Create price and sizes elements
    const priceSizesDiv = document.createElement('div');
    priceSizesDiv.classList.add('row');
    priceSizesDiv.innerHTML = `
      <div class="price">$${data[i].price}</div>
      <div class="sized">${data[i].size}</div>
    `;
    infoDiv.appendChild(priceSizesDiv);
  
  
  
    // Create colors element
    const colorsDiv = document.createElement('div');
    colorsDiv.classList.add('colors');
    console.log(data[i].color)
    colorsDiv.innerHTML = `
     Colors:
                    <div class="row">
                      <div class="circle" style="background-color: #000"></div>
                      <div class="circle" style="background-color: #4938af"></div>
                      <div class="circle" style="background-color: #203d3e"></div>
                    </div>
              ${data[i].color}      
    `;
    infoDiv.appendChild(colorsDiv);
  
    // Create rating element
    const ratingDiv = document.createElement('div');
    ratingDiv.classList.add('row');
    ratingDiv.textContent = `Rating: ${data[i].rating.rate}`;
    infoDiv.appendChild(ratingDiv);
  
    // Create button element
    const button = document.createElement('button');
    button.id = 'addBtn';
    button.textContent = 'Add to Cart';
    button.addEventListener('click',(event,i)=>{addcartfunctionality(event,itemDiv,i)});
    button.classList.add('addcart-btn')
    itemDiv.appendChild(button);
    // Create changeitems-div
    const changeItemsDiv = document.createElement('div');
    changeItemsDiv.classList.add('changeitems-div');
    changeItemsDiv.style.display = 'none';
  
    const minusBtn = document.createElement('button');
    minusBtn.classList.add('minusbtn');
    minusBtn.style.display = 'inline';
    minusBtn.style.padding = '0';
    minusBtn.innerHTML = '➖';
  
    const itemCount = document.createElement('span');
    itemCount.classList.add('itemcount');
    itemCount.innerHTML = '1';
  
    const plusBtn = document.createElement('button');
    plusBtn.classList.add('plusbtn');
    plusBtn.style.display = 'inline';
    plusBtn.style.padding = '0';
    plusBtn.innerHTML = '➕';
  
    // Append the buttons and span to the changeItemsDiv
    changeItemsDiv.appendChild(minusBtn);
    changeItemsDiv.appendChild(itemCount);
    changeItemsDiv.appendChild(plusBtn);
  
    // Append changeItemsDiv just after the button
    itemDiv.appendChild(changeItemsDiv);
    
    let name1=data[i].category.split(' ')[0];

    console.log(name1)
    document.getElementsByClassName(name1)[0].append(itemDiv); //code to render
    // let addcartbtn=card.querySelectorAll('button')[3];
    // console.log(addcartbtn)
    
    // addcartbtn.addEventListener('click',(event)=>{addcartfunctionality(event,card,i)});
    
  }
}


function btnfucntionality (event) {
  console.log('btn')
  document.querySelectorAll('.filter').forEach(button => {
    button.classList.remove('active');
});
event.target.classList.add('active');
if(event.target.id==='all'){mensdiv.style.display="block";womensdiv.style.display="block";jewelrydiv.style.display="block";electronicsdiv.style.display="block"}
else if(event.target.id==='mens') {mensdiv.style.display="block";womensdiv.style.display="none";jewelrydiv.style.display="none";electronicsdiv.style.display="none"}
else if(event.target.id==='womens') {mensdiv.style.display="none";womensdiv.style.display="block";jewelrydiv.style.display="none";electronicsdiv.style.display="none"}
else if(event.target.id==='jewellery') {mensdiv.style.display="none";womensdiv.style.display="none";jewelrydiv.style.display="block";electronicsdiv.style.display="none"}
else if(event.target.id==='electronics') {mensdiv.style.display="none";womensdiv.style.display="none";jewelrydiv.style.display="none";electronicsdiv.style.display="block"}

}


function searchaddcardstoui(searchedarr) {
  try {
  // console.log(searchedarr[0].image);
  for(let i=0;i<searchedarr.length;i++)
  {
      try{
  let card=document.createElement('div');
  card.className='card';
  card.innerHTML = `
  <div class="item">
    <img src="${searchedarr[i].image}" alt="Item" style="width:250px;height:260px">
    <div class="info">
     <div class='title'>${(searchedarr[i].title).substring(0,22)}</div>
      <div class="row">
        <div class="price">$${searchedarr[i].price}</div>
        <div class="sized">${searchedarr[i].size}</div>
      </div>
      <div class="colors"> 
        Colors:
        <div class="row">
          <div class="circle" style="background-color: blue"></div>
          <div class="circle" style="background-color: green"></div>
          <div class="circle" style="background-color: orange"></div>
        </div>
      </div>
      <div class="row">Rating: ${ratingstring(searchedarr[i].rating.rate)}</div>
    </div>
    <button id="addBtn" class="addcart-btn">Add to Cart</button>
      <div style="display:none" class="changeitems-div">Items Added:<button class="minusbtn" style="display:inline;padding:0;">➖</button> <span class="itemcount">1</span> <button class="plusbtn" style="display:inline;padding:0;">➕</button> </div>
  </div>`;

  let name1=searchedarr[i].category.split(' ')[0];
  // console.log(name1);
  document.querySelectorAll('.items-container').forEach(item => {
    item.style.display = 'none';
  });
  let searchcontainer=document.getElementsByClassName('searchcontainer')[0];
 
  searchcontainer.style.display='flex';
  searchcontainer.style.justifyContent = 'center';

  console.log('op')
  searchcontainer.append(card);
  let addcartbtn=card.querySelectorAll('button')[0];
  // console.log(addcartbtn)
  
  addcartbtn.addEventListener('click',(event)=>{addcartfunctionality(event,card,i)});
  // console.log(i);
  }catch(error) {console.log(error);}
  }
}catch(error) {console.log(error)}
}

function ratingstring(rating) {
  let string='';
  for(let i=0;i<rating;i++)
  {
      string=string+'⭐';
  }
  if(rating%parseInt(rating)!==0)
  {
      string=string+'✰';
  }
  return string+' '+rating;
}


//Add to cart button fucntion

function addcartfunctionality(event,currentcard,i) {
  try{
    // alert('Item added in cart')
      console.log(event.target);
      let k;
  let addcartbtnlist=document.getElementsByClassName('addcart-btn');
  let changeitemsdivlist=document.getElementsByClassName('changeitems-div');
  for(let j=0;j<addcartbtnlist.length;j++)
  {
      if(event.target==addcartbtnlist[j])
      {  
          k=j;
      }
  }
  let changeitemsdiv=changeitemsdivlist[k];
   console.log("this is the ",changeitemsdiv)
  event.target.style.display="none";
 
  changeitemsdiv.style.display="flex"; //problem

 
  let currelem=event.target;
  let spanelem=document.getElementsByClassName('itemcount')[k];
  spanelem.innerText=1;
  let itemcount=parseInt(spanelem.innerText);
  
  cartitemstolocalstorage(currentcard,i);

  let minusbtn=document.getElementsByClassName('minusbtn')[k];
  let plusbtn=document.getElementsByClassName('plusbtn')[k];
  
 
  minusbtn.addEventListener('click',(event)=>{itemcount--;  //minusbutton fucntionality
  if(itemcount<0) {return}
  
  if(itemcount==0) {
    currelem.style.display="block";
  changeitemsdiv.style.display="none";
}

 
  spanelem.innerText=itemcount;
  cartitemstolocalstorage (currentcard,i);
  })
  
  plusbtn.addEventListener('click',(event)=>{itemcount++;   //plusbutton fucntionality
      if(itemcount==0)
      {currelem.style.display="block";
      changeitemsdiv.style.display="none";}
      spanelem.innerText=itemcount;
      cartitemstolocalstorage (currentcard,i); //problem with plus
      })
  } 
  catch(error) {
      console.log(error);
  }
  }


  //Adding items to local storage for cart items list

function cartitemstolocalstorage (currentcard,i) {
  if(localStorage.getItem('cartelems'))
 { 
  console.log('box')
  document.getElementsByClassName('cart-btn')[0].style.backgroundColor='skyblue'
  document.getElementsByClassName('cart-btn')[0].classList.add('blink');  
  let updated=0;
  let cartelemsarr=JSON.parse(localStorage.getItem('cartelems'));
  
  for(let index=0;index<cartelemsarr.length;index++)
  {
      if(JSON.parse(cartelemsarr[index]).id===(i+1))
      {  let id2=i+1;
         let obj2={'id':id2,
          'elem':JSON.stringify(currentcard.innerHTML),}
          cartelemsarr[index]=JSON.stringify(obj2)
          updated=1;
          console.log('elem',currentcard.innerHTML)
      }
  }
  if(updated===0){
      let id1=i+1;
       let obj1={'id':id1,
            'elem':JSON.stringify(currentcard.innerHTML)};
  cartelemsarr.push(JSON.stringify(obj1));
  console.log('upd',currentcard.innerHTML)
  console.log(currentcard);
  }
  localStorage.setItem('cartelems',JSON.stringify(cartelemsarr));
}
else {
  let elemsarr=[];
  // let strcard=JSON.stringify(currentcard);
  let id=i+1;
  let obj={'id':id,
            'elem':JSON.stringify(currentcard.innerHTML)};
  elemsarr.push(JSON.stringify(obj));
  let elemsarrstr=JSON.stringify(elemsarr);
  console.log(elemsarrstr,currentcard)
  localStorage.setItem('cartelems',elemsarrstr);
  console.log('ccoming')
  document.getElementsByClassName('cart-btn')[0].style.backgroundColor='skyblue'
  document.getElementsByClassName('cart-btn')[0].classList.add('blink');
  document.getElementsByClassName('cart-btn')[0].style.padding='10px';
  document.getElementsByClassName('cart-btn')[0].style.color='black';
}
}