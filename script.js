jsconsole = {};
jsconsole.rawlog = function(str, color) {
  var out = document.getElementById("output");
  var line = document.createElement("div");
  line.style.color = color;
  line.appendChild(document.createTextNode(str));
  out.appendChild(line);
}

console.log = function(args) {
  for(var i = 0; i < arguments.length; i++) {
    jsconsole.rawlog(arguments[i], "#00F");
  }
}

console.info = console.log;

console.warn = function(args) {
  for(var i = 0; i < arguments.length; i++) {
    jsconsole.rawlog(arguments[i], "#FA0");
  }
}

console.error = function(args) {
  for(var i = 0; i < arguments.length; i++) {
    jsconsole.rawlog(arguments[i], "#F00");
  }
}

window.onload = function() {
  var input = document.getElementById("top");
  input.focus()
  input.onkeypress = function(e) {
    if(e.keyCode == 13 || e.which == 13) {
      tempval = this.value.trim();
      this.value = "";
      jsconsole.rawlog("> " + tempval, "#00A");
      if(tempval) {
        try {
          var res = eval(tempval);
          if(typeof res == "string") {
            jsconsole.rawlog('"' + res + '"', "#0A0");
          } else if(typeof res === "boolean" || res === null || res === undefined) {
            jsconsole.rawlog(res, "#FA0");
          } else if(res instanceof Date || typeof res == "number") {
            jsconsole.rawlog(res, "#A0F");
          } else if(typeof res === "function") {
            jsconsole.rawlog("function " + res.name + "()", "#00F");
          } else {
            jsconsole.rawlog(res, "#00F");
          }
        } catch(err) {
          jsconsole.rawlog(err, "#F00");
        }
      }
    }
  }
  jsconsole.rawlog("An ECMAScript Console", "#000");
}
