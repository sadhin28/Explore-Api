function one(){
    console.log('A')
    two();
    console.log('c')
}
function two(){
    console.log('B')
    d()
    console.log('BB')
}
function d(){
    console.log('D');
    console.log('DD')
}
one()