const btn=document.getElementById("btn");
btn.onclick= function(event) {
    event.preventDefault();
const name=document.getElementById("n").value;
const cat=document.getElementById("c").value;
const price=document.getElementById("p").value;
const quantity=document.getElementById("q").value;
const obj={
    name, cat, price, quantity
};
axios.post("https://crudcrud.com/api/96739f4883b94561a8a690530a4ad9a1/candystore", obj)
.then((res)=>showusersonscreen(res.data))
.catch((rej)=>{
    console.log("Somethig went wrong: post");
})
}

function showusersonscreen(obj){

const parent=document.getElementById("list_of_candies")
const child=document.createElement('li');
child.textContent=obj.name+' -- '+obj.cat+' -- '+obj.price+' -- '+obj.quantity+"-  ";

const one=document.createElement('input');
one.type="button"
one.value='Buy one'
one.onclick= function(){
    if(obj.quantity>0){
        axios.put("https://crudcrud.com/api/96739f4883b94561a8a690530a4ad9a1/candystore/"+obj._id,
        {
        "name":obj.name,
        "cat":obj.cat,
        "price":obj.price,
        "quantity":obj.quantity-1
        })
        .then( function(){
            window.location.reload();
          })
        .catch((rej)=>{
    console.log("Something went wrong in updation");
})
    }  
else
    {
        alert("Selected candy is not available")
    }
};

const two=document.createElement('input');
two.type="button"
two.value='Buy two'
two.onclick= function (){
    if(obj.quantity>0)
    {
        axios.put("https://crudcrud.com/api/96739f4883b94561a8a690530a4ad9a1/candystore/"+obj._id,
        {
        "name":obj.name,
        "cat":obj.cat,
        "price":obj.price,
        "quantity":obj.quantity-2
        })
        .then(function (){
            window.location.reload();
          })
        .catch((rej)=>{
    console.log("Something went wrong in updation");
    })
    }
    else
    {
        alert("Selected candy is not available");
    }
}

const three=document.createElement('input');
three.type="button"
three.value='Buy three'
three.onclick= function (){
    if(obj.quantity>0){
        axios.put("https://crudcrud.com/api/96739f4883b94561a8a690530a4ad9a1/candystore/"+obj._id,
        {
        "name":obj.name,
        "cat":obj.cat,
        "price":obj.price,
        "quantity":obj.quantity-3
        })
        .then(function() {
            window.location.reload();
          })
        .catch((rej)=>{
    console.log("Something went wrong in updation");
    })
    }
    else{
        alert("Selected candy is not available")
    }

}
child.appendChild(one);
child.appendChild(two);
child.appendChild(three);
parent.appendChild(child);  

}

function showusers(obj){
axios.get("https://crudcrud.com/api/96739f4883b94561a8a690530a4ad9a1/candystore")
.then((res)=>{
    for(let i=0;i<res.data.length;i++)
    showusersonscreen(res.data[i])
    })
    .catch((rej)=>{
        console.log("Somethig went wrong: Retrive");
    })
}

window.addEventListener("DOMContentLoaded", ()=>{
    showusers();
    })
