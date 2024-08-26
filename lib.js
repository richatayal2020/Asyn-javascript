function updateAccount (product , cb) {
    setTimeout(()=> {
        console.log(product + "is purchased") ;
        cb(); 
        cb()
        cb()
    } , 2000)
}


module.exports = {
    updateAccount : updateAccount 
}