/**
 * Created by xuwei on 2017/6/10.
 */
var arry=[]
module.exports=function (socket) {
    socket.emit('news', arry);
    socket.on('my other event', function (data) {
        arry.push(data)
        socket.emit('news', arry);
        socket.broadcast.emit('news', arry)
        console.log(data)
    });
}