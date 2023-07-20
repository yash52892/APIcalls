  
function add_to_local(event){
    event.preventDefault();
const name=event.target.name.value;
const cat=event.target.cat.value;
const price=event.target.price.value;
const quantity=event.target.quantity.value;
const obj={
    name, cat, price, quantity
};
axios.post("https://crudcrud.com/api/04a61e255e2c466283350daf6d9b6eb9/candystore", obj)
.then((res)=>showusersonscreen(res.data))
.catch((rej)=>{
    console.log("Somethig went wrong: post");
})
}

function showusersonscreen(obj){
const parent=document.getElementById("list_of_candies")
const child=document.createElement('li');
child.textContent=obj.name+'-'+obj.cat+'-'+obj.price+'-'+obj.quantity+"---";
const one=document.createElement('input');
one.type="button"
one.value='Buy one'
one.onclick= function (){
    
}
.catch((rej)=>{
    console.log("Somethig went wrong: Delete");
})
};
const two=document.createElement('input');
two.type="button"
two.value='Buy two'
two.onclick= function (){
    
}
.catch((rej)=>{
    console.log("Somethig went wrong: Delete");
})

const three=document.createElement('input');
three.type="button"
three.value='Buy three'
three.onclick= function (){
    
}
.catch((rej)=>{
    console.log("Somethig went wrong: Delete");
})
child.appendChild(edit);
child.appendChild(del);
parent.appendChild(child);  


function showusers(obj){
axios.get("https://crudcrud.com/api/04a61e255e2c466283350daf6d9b6eb9/candystore")
.then((res)=>{
    for(let i=0;i<res.data.length;i++)
    showusersonscreen(res.data[i])
    })
    .catch((rej)=>{
        console.log("Somethig went wrong: Retrive");
    })
}

function deleteuserfromscreen(id){
const parentNode=document.getElementById("list_of_users");
const childToBeDeleted=document.getElementById("obj._id");
if(childToBeDeleted){
    parentNode.removeChild(childToBeDeleted);
}
}

//window.addEventListener("DOMContentLoaded", ()=>{
showusers();
//})