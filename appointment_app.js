function add_to_local(event){
    event.preventDefault();
const name=event.target.username.value;
const email=event.target.email.value;
const phone=event.target.phonenumber.value;
const obj={
    name, email, phone
};
localStorage.setItem(obj.email, JSON.stringify(obj))
showusers(obj);
}
function showusers(obj){
const parent=document.getElementById("list_of_users")
const child=document.createElement('li');
child.textContent=obj.name+'-'+obj.email+'-'+obj.phone;
parent.appendChild(child)
}