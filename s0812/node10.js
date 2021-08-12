const fs = require('fs').promises; //fs인데 promise버전으로 임포트된다.

let filename = "./data/readme.txt"

// fs.readFile(filename, function(err, data){
//     if(err){
//         //console.log(err);
//         throw err;
//     }

//     console.log(data.toString());
// });

fs.readFile(filename)
.then(function(data) {
    console.log(data.toString());
}).catch(function(err){
    console.log(err);
})