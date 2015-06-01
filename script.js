function nmpdBtnOnClick() {
  alert(this.innerText);
}

var btns = document.getElementsByClassName("keypad-button");
for (i = 0; i < btns.length; i++) {
  var btn = btns[i];
  btn.onclick = nmpdBtnOnClick;
  console.log(btn);
}
