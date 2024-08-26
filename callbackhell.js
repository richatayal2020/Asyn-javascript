const fs = require('fs') ;

fs.readFile('f1.txt' , function(err1 , data1) {
    if(err1) {
        console.log(err1) ;
    }
    else{
        console.log("data in file 1 -> " + data1) ;
        fs.readFile('f2.txt' , function(err2 , data2){
            if(err2) {
                console.log(err2) ;
            }
            else{
                console.log("data in file 2 -> " + data2) ;
                fs.readFile('f3.txt' , function(err3 , data3) {
                    if(err3) {
                        console.log(err3) ;
                    }
                    else{
                        console.log("data in file 2 -> " + data3) ;
                    }
                    })
            }
        })
    }
}) ;



