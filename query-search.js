var socket = io.connect('https://infoyz-bkfighter.rhcloud.com:8080');
socket.on('connect', function (data) {
  // socket connected
  console.log(data);
});
