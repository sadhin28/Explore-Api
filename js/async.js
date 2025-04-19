const myLoader = ( )=>{
    return new Promise((resolve,reject)=>{
        const success = Math.random();
        if(success <= 0.5){
            resolve(success)
        }
        else{
            reject(success)
        }
    })
}


const myTimeout = setTimeout(myGreeting, 5000);

function myGreeting() {
 console.log('Good Night')
 console.log('Good Night')
}

function myStopFunction() {
  clearTimeout(myTimeout);
}