var http = require('http');

http.createServer(function(req,res){
	res.end(".:: Projeto TCC Joao ::.");
}).listen(80);

console.log("Servidor rodando...");