const addToDb = id =>{
    let list = {};

    const storedList = localStorage.getItem('btn-list');
    if(storedList){
        list = JSON.parse(storedList);
    }

    const quantity = storedList[id];
    if(quantity){
        const newQuantity = quantity + 1;
        list[id] = newQuantity;
    }
    else{
        list[id] = 1;
    }
    localStorage.setItem('btn-list',JSON.stringify(list));
}

export{
    addToDb,
}