  
function add_to_local(event){
        event.preventDefault();
    const name=event.target.username.value;
    const email=event.target.email.value;
    const phone=event.target.phonenumber.value;
    const obj={
        name, email, phone
    };
    axios.post("https://crudcrud.com/api/454e2c5888b248dfaadebc4ebfe82e88/appointment", obj)
    .then((res)=>showusersonscreen(res.data))
    .catch((rej)=>{
        console.log("Somethig went wrong: post");
    })
}

function showusersonscreen(obj){
    const parent=document.getElementById("list_of_users")

    const child=document.createElement('li');
    child.textContent=obj._id+'-'+obj.name+'-'+obj.email+'-'+obj.phone+"---";

    const del=document.createElement('input');
    del.type="button"
    del.value='Delete'
    del.onclick = function (){
        let x="https://crudcrud.com/api/454e2c5888b248dfaadebc4ebfe82e88/appointment/"+obj._id;
        axios.delete(x)
        .then((res)=>{
            parent.removeChild(child);
        })
        .catch((rej)=>{
            console.log("Somethig went wrong: Delete");
        })
        
    }
    child.appendChild(del);
    parent.appendChild(child)
}

function showusers(obj){
    axios.get("https://crudcrud.com/api/454e2c5888b248dfaadebc4ebfe82e88/appointment")
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

window.addEventListener("DOMContentLoaded", ()=>{
    showusers();
})
