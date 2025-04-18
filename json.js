const user ={
    id: 1,
    name:'Taosif Sadhin',
    job:'Actor'
}
const stringified = JSON.stringify(user)
// console.log(user)
// console.log(stringified)

/**
 * { id: 1, name: 'Taosif Sadhin', job: 'Actor' }
{"id":1,"name":"Taosif Sadhin","job":"Actor"}
 */

const shop = {
    owner : 'Alia',
    address:{
        street:'kochuket voot er goli',
        city:'ranbir',
        country:'BD'
    },
    product:['laptop','mic','monitor','keyboard'],
    revenue:45000,
    isOpen: true,
    isNew : false
}
const shopJson = JSON.stringify(shop)
console.log(shopJson)