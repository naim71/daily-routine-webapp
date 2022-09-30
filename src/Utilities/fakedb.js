const addToDb = newId =>{
    let list = {};

    const storedcart =localStorage.getItem('listing');
    if(storedcart){
        list = JSON.parse(storedcart);
    }
    else{
        list = {};
    }

    const quantity = list[newId];
    if(quantity){
        const newQuantity = quantity + 1;
        list[newId] = newQuantity;

    }
    else{
        list[newId] = 1;
    }
    localStorage.setItem('listing',JSON.stringify(list));

}

const getData = () => {
    let list = {};

    const storedcart =localStorage.getItem('listing');
    if(storedcart){
        list = JSON.parse(storedcart);
    }

    return list;
}

export{
    addToDb,
    getData
}