const lib = require('./lib') ;

let amount = 2000 ; 
let tocut = 200 ;

function changeDebit() {
    amount = amount - tocut ; 
    console.log(`Remaining amount is ${amount}` ) ;
}

lib.updateAccount( "mobile " ,  changeDebit) ;



