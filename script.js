jsconsole = {};
jsconsole.rawlog = function(str, color) {
  var out = document.getElementById("out");
  var line = document.createElement("div");
  line.style.color = color;
  line.appendChild(document.createTextNode(str));
  out.appendChild(line);
}

console.log = function(args) {
  for(var i = 0; i < args.length; i++) {
    jsconsole.rawlog(args[i]);
  }
}

document.getElementById("top").onclick = function() {
  console.log(eval(this.value));
}
