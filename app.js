const http=require("http")
http.createServer((req,res)=>{
	res.write("something something something")
	res.end()
}).listen(2000)