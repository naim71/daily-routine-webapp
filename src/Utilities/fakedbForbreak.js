const addToDbBrk = newTimeId =>{
    let timeList = {};

    // const storedcart =localStorage.getItem('listing');
    // if(storedcart){
    //     list = JSON.parse(storedcart);
    // }
    // else{
    //     list = {};
    // }

    const quantity = timeList[newTimeId];
    if(quantity){
        const newQuantity = quantity + 1;
        timeList[newTimeId] = newQuantity;

    }
    else{
        timeList[newTimeId] = 1;
    }
    localStorage.setItem('listing',JSON.stringify(timeList));

}

// const getData = () => {
//     let list = {};

//     const storedcart =localStorage.getItem('listing');
//     if(storedcart){
//         list = JSON.parse(storedcart);
//     }

//     return list;
// }

export{
    addToDbBrk
    // getData
}