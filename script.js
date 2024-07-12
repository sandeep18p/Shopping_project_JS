// myProducts.filter((item)=>item.title.includes(search.value))

// myCartProductArray = myProducts.filter((item)=> myCartIDs.includes(item.id))

if(localStorage.getItem('accesstoken')) {
  redirectfunc();
}

function redirectfunc(event) {   //Redirect function
let a=document.createElement('a');
a.href="./shop/index.html"
a.click();
}

function singup(){

//   e.preventDefault();
  console.log('woktin')
  window.location.href="singup/index.html";
}

function singin(){

    //   e.preventDefault();
      console.log('woktin')
      window.location.href="login/index.html";
    }



