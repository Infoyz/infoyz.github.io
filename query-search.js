var socket = io.connect('http://infoyz-bkfighter.rhcloud.com');
socket.on('connect', function (data) {
  // socket connected
  console.log(data);
});
