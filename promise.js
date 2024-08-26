const mypromise = new Promise(function(resolve , reject) {
    let passingMark = 33 ;
    let studentMark = 20 ; 

    if(studentMark > passingMark){
        resolve("Congrats") ;
    }
    else{
        reject("Belt padegi!!"); 
    }
}) ; 



// console.log(mypromise) ;

mypromise.then(
    function(data) {
    console.log(data) ; 
}).catch(
    function(data){
    console.log(data) ;
})



