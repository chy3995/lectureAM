let node03 = require('./node03');

function checkNumber(num){
    //num가 짝수이면 "짝수입니다"
    //홀수이면 "홀수입니다" 를 출력하되, 문장은 node03에 있는 문장을 써서
    if(num % 2 == 0){
        console.log(node03.even);
    }else{
        console.log(node03.odd);
    }
}


checkNumber(10);
checkNumber(9);