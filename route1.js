var http=require("http");
http.createServer(function(req,res){
    var path=req.url.replace(/\/?(?:\?.*)? $/,'').toLowerCase();
    console.log(path);
    switch (path){
        case '/':
            res.writeHead(200,{'Content-type':'text/plain'});
            res.end("homePage");
            break;
        case '/about':
            res.writeHead(200,{'Content-type':'text/plain'});
            res.end("About");
            break;
        default :
            res.writeHead(400,{'Content-type':'text/plain'});
            res.end("Not found");
            break;
    }

}).listen(3000);
console.log("server start on localhost:3000;press Ctrl-C to terminate...");