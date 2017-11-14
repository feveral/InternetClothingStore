'use strict';

const parse = require('url').parse;
const path = require('path');
const http = require('http');
const fs = require('fs');

const fileTypes = {
    ".html": "text/html",
    ".jpeg": "image/jpeg",
    ".jpg": "image/jpg",
    ".png": "image/png",
    ".js": "text/javascript",
    ".css": "text/css",
    ".svg": "image/svg+xml"
};

module.exports = class{

	constructor(root){
		this.root = root;
		this.createWebServer(this);
	}

	createWebServer(self){

		http.createServer(function(req,res){
			var url = parse(req.url);
			var filePath = path.join(self.root,url.pathname);
			var fileType = fileTypes[path.extname(filePath)];
			var ACAO = "Access-Control-Allow-Origin";

			try
			{
		        var stats = fs.lstatSync(filePath);
			}
		    catch(e)
		    {
		        res.writeHead(404, {'Content-type': 'text/plain' ,ACAO : "*"});
		        res.end('404 Not Found!\n');
		        return;
		    }

			if(stats.isFile())
			{
				res.writeHead(200, {'Content-type': fileType , ACAO : "*"});
				fs.createReadStream(filePath).pipe(res);
			}
			else if(stats.isDirectory())
			{
				res.writeHead(302, {'Location': 'index.html' , ACAO : "*"});
				res.end();
			}
			else
			{
		        res.writeHead(500, {'Content-type': 'text/plain' , ACAO : "*"});
		        res.end('500 Internal Error\n');	
		    }
		}).listen(80);
	}
}
