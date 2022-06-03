 // Create a new list item when clicking on the "Add" button
 function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("input").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("Input field Empty !");
    } else {
      document.getElementById("todoList").appendChild(li);
      document.getElementById('clear-Btn').disabled = false;
    }
    document.getElementById("input").value = "";

  addCompleteBtn(li);
  addCloseBtn(li);
  hideElement();
  disableElement();
}
function addCompleteBtn(li) {
  var span = document.createElement("span");
  var completeSign = document.createTextNode("\u2714");
  span.className = "complete";
  span.appendChild(completeSign);
  li.appendChild(span);
}
function addCloseBtn(li) {
  var span = document.createElement("span");
  var closeSign = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(closeSign);
  li.appendChild(span);
}

function hideElement() {
  var close = document.getElementsByClassName("close");
  for (var i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
}
}

function disableElement() {
  var check = [];
  var complete = document.getElementsByClassName("complete");
  for (var i = 0; i < complete.length; i++) {
    complete[i].onclick = function() {
      if(check[i]!=0) {
      check[i] = 0;
      this.parentElement.style.opacity = "0.4";
      this.parentElement.style.textDecoration = "line-through";
      }
      else {
        check[i] = 1;
        this.parentElement.style.opacity = "1";
        this.parentElement.style.textDecoration = "none";
  }
  }
}
}

function clearAll() {
  var clearBtn = document.getElementById('clear-Btn');
  var list = document.getElementById('todoList');
  list.innerHTML = '';
  clearBtn.disabled = true;
}