
// const data = JSON.parse(localStorage.getItem('cartelems'));
// console.log(data);
// document.getElementById('op').append


let cartelemsarr=JSON.parse(localStorage.getItem('cartelems'));

let sum=

if(cartelemsarr) {
for(let i=0;i<cartelemsarr.length;i++)
{
    let currentobj=JSON.parse(cartelemsarr[i]);
    console.log(currentobj)
    let div=document.createElement('div');
    div.classList.add('card')
    div.innerHTML=JSON.parse(currentobj.elem);
    document.getElementById('op').append(div);
}

const got =document.getElementsByClassName('item')[0];


}


