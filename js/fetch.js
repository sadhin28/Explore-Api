
function  loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.error('error happend',error))
}

const loadComent = async()=>{
   try{
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await res.json();
    console.log(data)
   }catch(error){
      console.error('Data load error')
   }
}
 

