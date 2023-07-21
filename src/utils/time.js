// Function to get the current time
function generateTime() {
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();
  var time = h + ":" + m + ":" + s;
  return time;
}
