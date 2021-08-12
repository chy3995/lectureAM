const fetch = require('node-fetch');
const fs = require('fs').promises;
const cheerio = require('cheerio');

const url = "http://ncov.mohw.go.kr/bdBoardList_Real.do";
const filename = "./data/data.txt";

fetch(url)
.then(function(data){
    return data.text();
})
.then(function(body){
    let $ = cheerio.load(body); //html을 읽어서 제이쿼리 형식으로 쓸 수 있게 변환해줌
    let value1 = $(".inner_value").eq(0).text();
    let value2 = $(".inner_value").eq(1).text();
    let value3 = $(".inner_value").eq(2).text();
    
    let value4 = $(".ca_value").eq(2).text();
    let value5 = $(".ca_value").eq(3).text();
    let value6 = $(".ca_value").eq(4).text();
    let value7 = $(".ca_value").eq(5).text();
    let value8 = $(".ca_value").eq(6).text();
    let value9 = $(".ca_value").eq(7).text();

    let recordData = `
        전일대비 현황
        소계 : ${value1}, 국내발생 : ${value2}, 해외유입 : ${value3}
        격리해제
        누적 : ${value4}, 전일대비 : ${value5}
        격리중 
        누적 : ${value6}, 전일대비 : ${value7}
        사망
        누적 : ${value8}, 전일대비 : ${value9}
    `;
    return fs.writeFile(filename, recordData);
})
.then(function(){    console.log("기록 완료");
})
.catch(function(err){
    console.log(err);
});
// npm install cheerio
// npm install node-fetch

//   가져온 데이터를 data/corona.html 
// 기록된 후, 기록완료라는 메시지도 나오게 정정