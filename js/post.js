function post(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => postData(data))
}


function postData(data){
    const ul = document.getElementById('ul')
    const paragraph = document.getElementById('posts');
    for(const post of data){
        const p= document.createElement('p');
        const li=document.createElement('li');
        li.innerText=post.title
        ul.append(li)
        p.innerText=post.body;
        paragraph.appendChild(p)
    }
    
}