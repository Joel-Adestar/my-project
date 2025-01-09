let list = [];

let object;
 let objName = () => 'jay'


 let objPrice = () => 20


 let objNeed = () =>  true

 const addObj = () => {

   object += {name:objName(), price: objPrice(), need: objNeed()}
    list.push(object)

    return list
    
 }

console.log(addObj);


 

//     if (needTrue.checked) {
//         return true
//     } else if (needFalse.checked) {
//         return false
//     }
// }
// addList.addEventListener('click', function addItems() {
//     // NO CODE YET

   
    
//      
    
//     
//     