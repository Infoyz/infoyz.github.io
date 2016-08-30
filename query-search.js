var socket = io.connect('https://infoyz-bkfighter.rhcloud.com');
socket.on('connect', function (data) {
  // socket connected
  console.log(data);
});
