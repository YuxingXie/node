var http=require("http");
http.createServer(function(req,res){
    res.writeHeader(200,{'Content-type':'text/plain'})
    res.end('hello world');
}).listen(3000);

console.log("server start on localhost:3000;press Ctrl-C to terminate...")
