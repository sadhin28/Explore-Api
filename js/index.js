
function todos(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data=>displayTodos(data))
}
   
function displayTodos(data){
      const ul =document.getElementById('users-list')
      
   for(const user of data){
     const li=document.createElement('li');
     li.innerHTML=user.name;
     ul.appendChild(li);
   }
}