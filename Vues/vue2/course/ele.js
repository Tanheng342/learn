const https = require('https');
const http = require('http');
//配置信息
var options = {
  hostname: 'mainsite-restapi.ele.me',
  port: 443,
  path: '/v2/index_entry?geohash=wx4sjr4ewpc&group_type=1&flags[]=F',
  method: 'GET'
};

var req = https.request(options, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);
	var html = "";
  res.on('data', (data) => {
//  console.log(data.toString())
    html += data;
  });
  res.on("end",()=>{
//		console.log(JSON.parse(html));
		var obj = JSON.parse(html);
	
		http.createServer(function(req,res){
			//"Content-Type":"text/html;charset=utf-8"
			res.setHeader('Access-Control-Allow-Origin', '*');
			res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
		//	res.end("hello world!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
			//页面输出内容
			res.write(html);
			res.end();
		}).listen(8000);
//		obj.forEach((item)=>{
//			console.log(item.title)
//		})
  });
});

req.on('error', (e) => {
  console.error(e);
});
req.end();