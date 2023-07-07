window.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/ad184ad3e49243ba9c50a53d8a3f3d6f/appointment")
    .then((res)=>{
        for(let i=0;i<res.data.length;i++)
            showusers(res.data[i])});
    })
function add_to_local(event){
        event.preventDefault();
    const name=event.target.username.value;
    const email=event.target.email.value;
    const phone=event.target.phonenumber.value;
    const obj={
        name, email, phone
    };
    

    axios.post("https://crudcrud.com/api/ad184ad3e49243ba9c50a53d8a3f3d6f/appointment", obj)
    .then((res)=>showusers(res.data));
}
function showusers(obj){
    const parent=document.getElementById("list_of_users")
    const child=document.createElement('li');
    child.textContent=obj.name+'-'+obj.email+'-'+obj.phone;
    parent.appendChild(child)
}
