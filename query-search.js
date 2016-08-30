var socket = io.connect('127.7.233.129:8080');
socket.on('connect', function (data) {
  // socket connected
  console.log(data);
});
