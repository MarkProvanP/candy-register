function regButtonClick() {
  var reg = this.register;
  reg.processInput(this);
}

function Register() {
  // Add the buttons
  this.buttons = {};
  var btns = document.getElementsByClassName("keypad-button");
  for (i = 0; i < btns.length; i++) {
    var btn = btns[i];
    this.buttons[btn.id] = btn;
    btn.register = this;
    btn.onclick = regButtonClick;
  }
  this.evalButton = document.getElementById("btnEval");

  // Add the display
  this.monitor = new Monitor();
  this.monitor.clear();

  // Set the current expression list to be empty
  this.currentExpression = new Array();
}

Register.prototype.listButtons = function() {
  for (i = 0; i < this.buttons.length; i++) {
    console.log(this.buttons[i]);
  }
}

Register.prototype.processInput = function(inputButton) {
  var buttonPressed = inputButton.id;
  console.log("Register processing input of button: " + buttonPressed);
  if (inputButton == this.evalButton) {
    console.log("Evaluate expression: " + this.currentExpression);
  } else {
    this.currentExpression.push(inputButton.getAttribute("exprtoken"));
    this.monitor.print(inputButton.innerText);
  }
}

function Monitor() {
  // Find the #monitor div and store it
  this.monitor = document.getElementById("monitor");
}

Monitor.prototype.clear = function() {
  this.monitor.innerText = "";
}

Monitor.prototype.print = function(data) {
  this.monitor.innerText += data;
}

var theRegister = new Register();
theRegister.listButtons();
