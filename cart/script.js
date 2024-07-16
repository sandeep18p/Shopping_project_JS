let grandtotal=0;
// const data = JSON.parse(localStorage.getItem('cartelems'));
// console.log(data);
// document.getElementById('op').append


let cartelemsarr=JSON.parse(localStorage.getItem('cartelems'));

let sum;

if(cartelemsarr) {
for(let i=0;i<cartelemsarr.length;i++)
{
    let currentobj=JSON.parse(cartelemsarr[i]);
    // console.log(currentobj)
    let div=document.createElement('div');
    div.classList.add('card')
    div.innerHTML=JSON.parse(currentobj.elem);
    document.getElementById('op').append(div);
    // console.log(div);
   


}

const got =document.getElementsByClassName('item')[0];


}


if(cartelemsarr) {setTimeout(ordersummary,500);}

function ordersummary() {
let itemnamelist=document.getElementsByClassName('title');
let itempricelist=document.getElementsByClassName('price');
let itemcountlist=document.getElementsByClassName('itemcount');
// console.log(itemcountlist)
let pricelistdiv=document.getElementsByClassName('cart')[0];  



for(let i=0;i<cartelemsarr.length;i++)
    {
        let currentobj=JSON.parse(cartelemsarr[i]);
    // console.log(currentobj)
        let div=document.createElement('div');
        div.classList.add('card')
        div.innerHTML=JSON.parse(currentobj.elem);
        let currentcard=div;
        console.log('c di ',div);
    

    //   console.log(' op 1 ',cartelemsarr[i]);
    //   console.log(itempricelist[i]); 

    let priceint=parseFloat(itempricelist[i].innerText.substring(1));
    let itemsummarydiv=document.createElement('div');
    let costofitems=priceint*parseInt(itemcountlist[i].innerText);
    grandtotal=grandtotal+costofitems; 
    
    itemsummarydiv.classList.add('itemsummary');
    itemsummarydiv.innerHTML=`<div class="left-item">
                             <div>${i+1}. ${(itemnamelist[i].innerText).substring(0, 21)}</div>
                             <div>Each Price:${itempricelist[i].innerText}</div>
                             </div>
                             <div class="middle-item">
                               <div>-</div>
                               <div>-</div>
                             </div>
                             <div class="right-item">
                             <div>Qty:${itemcountlist[i].innerText}</div>
                             <div>Cost:$${(costofitems).toFixed(1)}</div>
                             </div>`
    pricelistdiv.append(itemsummarydiv);


    let minusbtn=document.getElementsByClassName('minusbtn')[i];
    let plusbtn=document.getElementsByClassName('plusbtn')[i];
    let itemcount=parseInt(itemcountlist[i].innerText, 10);
    let spanelem=document.getElementsByClassName('itemcount')[i];
    spanelem.innerText=itemcount;
    

    plusbtn.addEventListener('click',(event)=>{itemcount++;   //plusbutton fucntionality
        if(itemcount==0) {currelem.style.display="block";
        changeitemsdiv.style.display="none";}

        spanelem.innerText=itemcount;
        console.log('beofre ',spanelem, currentcard)
        cartitemstolocalstorage(currentcard,i); //problem with plus
        })

        minusbtn.addEventListener('click',(event)=>{itemcount--;  //minusbutton fucntionality
            if(itemcount<0) {return}
            
            if(itemcount==0) {
              currelem.style.display="block";
            changeitemsdiv.style.display="none";
          }
          
           
            spanelem.innerText=itemcount;
            // console.log()
            cartitemstolocalstorage (currentcard,i);
            })    


    }

    let totaldiv=document.createElement('div');
totaldiv.classList.add('totalprice');

totaldiv.innerHTML=`<div class="left-item">
                            <div>Grand Total </div>
                            </div>
                            <div class="middle-item">
                              <div>-</div>
                            </div>
                            <div class="right-item">
                            <div>$${grandtotal.toFixed(2)}</div>
                            </div>`
    pricelistdiv.append(totaldiv);

  let chekoutbtn=document.createElement('button');
  chekoutbtn.innerText='Proceed To Checkout';
  chekoutbtn.className='checkout';
  pricelistdiv.append(chekoutbtn);

  chekoutbtn.addEventListener('click',btnclickeffect);

}

function btnclickeffect(event) {
  try{
  let inrPayment=parseInt(grandtotal*82.16);
    // console.log('fsfadsfasdadf')
    // setTimeout(()=>{event.target.classList.remove('proceedbtn')},500);
    event.preventDefault();
    var options = {
      key: "rzp_test_iS4L1K4K1TDcAS", // Enter the Key ID generated from the Dashboard
      amount: inrPayment * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "MeShop. Checkout",
      description: "This is your order", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      theme: {
        color: "#122620",
      },
      image: "https://cdn-icons-png.flaticon.com/128/891/891419.png",
      handler: function () {
        localStorage.removeItem("cartelems");
        alert('Payment Successfull.Order has been placed,please forget your money!!!')
        location.href = "./index.html";
      },
      options: {
        checkout: {
          method: {
            netbanking: 0,
            card: 0,
            upi: 1,
            wallet: 0,
          },
        },
      },
    };
  
    // console.log('fsadf')
    var rzpy1 = new Razorpay(options);
    rzpy1.open();

}catch (error) {console.log(error)}
}

 
function cartitemstolocalstorage (currentcard,i) {
    if(localStorage.getItem('cartelems'))
   { 
    // console.log('box ')
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
            // console.log('elem',currentcard.innerHTML)
        }
    }
    if(updated===0){
        let id1=i+1;
         let obj1={'id':id1,
              'elem':JSON.stringify(currentcard.innerHTML)};
    cartelemsarr.push(JSON.stringify(obj1));
    // console.log('upd',currentcard.innerHTML)
    // console.log(currentcard);
    }
    // console.log('elem',currentcard.innerHTML)
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
    // console.log(elemsarrstr,currentcard)
    localStorage.setItem('cartelems',elemsarrstr);
    // console.log('f')
    document.getElementsByClassName('cart-btn')[0].style.backgroundColor='skyblue'
    document.getElementsByClassName('cart-btn')[0].classList.add('blink');
    document.getElementsByClassName('cart-btn')[0].style.padding='10px';
    document.getElementsByClassName('cart-btn')[0].style.color='black';
  }
  }



  const logout = function(event){
    event.preventDefault();
    localStorage.removeItem('accesstoken');
    localStorage.removeItem('curruser');
    if(localStorage.getItem('cartelems')) {localStorage.removeItem('cartelems')}
    let a=document.createElement('a');
    a.href="../index.html"
    a.click();
  }