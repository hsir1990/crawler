var request = require('request');
var fs = require('fs');
var cheerio = require('cheerio');

var index = 2;
function getHtml(url){
    request(url, function(err, reponse, body){
        if(!err && reponse.statusCode == 200){//请求码等于200的时候运行
            var $ = cheerio.load(body, {decodeEntities: false}); //获取DOM，后面的参数解决乱码用的
            var content = $('.inner').html();
            console.log(content);
            // fs.writeFileSync('content.txt', content);//内容写入到文件中
            // var nextArcLick = $('#nextArcLink').attr('href')
            var nextHtml =  'http://www.yikedou.com/index_'+index+'.html';
            // fs.appendFileSync('yikkedou.txt',content);//内容插入到文件中
            document.getElementById('addContest').innerText += content;
            getHtml(nextHtml);
            index++;
        }
    });
}

var url = 'http://www.yikedou.com/';
getHtml(url);