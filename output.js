const timeRef = setInterval(()=> {
    console.log("int") ;
}, 1000 ) ;


setTimeout(()=>{
    clearInterval(timeRef) ; 
    console.log("Stopped") ;
} , 5000) ;

