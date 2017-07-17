/**
 * Created by xuwei on 2017/6/10.
 */
var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(80);

function handler (req, res) {
    fs.readFile(__dirname + '/index.html',
        function (err, data) {
            if (err) {
                res.writeHead(500);
                return res.end('Error loading index.html');
            }

            res.writeHead(200);
            res.end(data);
        });
}
var arry=[]
io.on('connection', function (socket) {
    socket.emit('news', arry);
    socket.on('my other event', function (data) {
        arry.push(data)
        socket.emit('news', arry)
        console.log(data)
    });
});