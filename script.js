//DOM MANIPULATION

const needTrue = document.getElementById('needTrue');
const needFalse = document.getElementById('needFalse');
const amount = document.getElementById('amount');
const item = document.getElementById('item');
const addList = document.getElementById('addList');
const lists = document.getElementById('lists');
const listItem = document.getElementById('listItem');
const total = document.getElementById('total');

let list = []


let object;

addList.addEventListener('click', function(e) {
    e.preventDefault()

    if (item.value.length < 1 || amount.Value === '') {
        alert('please fill all inputs')
        return false
    }

    let objName = () => {
        return item.value
    }
    
    let objPrice = () => {
        return amount.value
    }
    
    let objNeed = () => {
        if (needTrue.checked) {
            return true
        } else if (needFalse.checked) {
            return false
        }
    }

     object = {name: objName(), price: objPrice(), need: objNeed()};
    
    list.push(object);
    lists.innerHTML += `<li class='list-item'>${object.name} <span class='price'>${object.price}</span><button onclick='removeItem()'>remove</button></li>`
    console.log(list);

    let currentTotal = parseFloat(total.innerHTML) || 0;
    currentTotal += parseFloat(object.price);
    total.innerHTML = currentTotal.toFixed(2);

    item.value = '';
    amount.value = ';'
     
})


    function removeItem(index) {
        list.splice(index, 1);
        updateListUI();
    }
    
    function updateListUI() {
        lists.innerHTML = '';
        list.forEach((object, index) => {
            lists.innerHTML += `<li class='list-item'>${object.name} <button onclick='removeItem(${index})'>remove</button></li>`;
        });
}
