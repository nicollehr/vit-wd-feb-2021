function decrement() {
  // access the DOM element associated with the h1
  var h1Element = document.getElementById("grabMe");
  var numberText = Number(h1Element.innerText);
<<<<<<< HEAD
  numberText--;
=======
  console.log(numberText);
  if (numberText > 0) {
    numberText--;
  }
>>>>>>> 9fbcb841f482f259b23129f262be5d2db299cb82
  h1Element.innerText = numberText;
}

function increment() {
<<<<<<< HEAD
  var h1Element = document.getElementById("grabMe");
  var numberText = Number(h1Element.innerText);
  numberText++;
=======
  // write code here
  var h1Element = document.getElementById("grabMe");
  var numberText = Number(h1Element.innerText);
  console.log(numberText);
  if (numberText < 10) {
    numberText++;
  }
>>>>>>> 9fbcb841f482f259b23129f262be5d2db299cb82
  h1Element.innerText = numberText;
}

// Done early? Try to add a blocker that doesnt go below 0 and above 10!

function randomize() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var myRandomNumbers = "rgb(" + x + "," + y + "," + z + ")";
  document.body.style.background = myRandomNumbers;
}

<input type="button" class="indented" value="Switch to Advanced Mode" onclick="javascript:window.location.href='https://www.random.org/lists/?mode=advanced';">







  function showload(form) {
    document.getElementById("modalonsubmit").style.display = "block";
  document.getElementById("submitNew").value = "Loading...";
var textArea = document.getElementById("id_text");
var s = textArea.value.split("\n");
var x = document.getElementById('randomitem');

var i = 0;
var itime = 200;
if (s.length < 2){
    form.submit();
  return false;
}
(function loop() {
    console.log(i);
    x.innerHTML = s[i];
    if (++i < s.length) {
    setTimeout(loop, 200);
        if (i == s.length-1)
        {
    i = 0;
        }
    }
})();
  setTimeout(function() {
    if(typeof(Storage) !== "undefined"){localStorage.setItem("randomitempicker", document.getElementById("id_text").value)}

        form.submit();
    }, 3000);  // 3 seconds

    return false;
}



function readfileFunction(){
  var file = document.getElementById("myFile").files[0];
  var reader = new FileReader();
  reader.onload = function (e) {
    var textArea = document.getElementById("id_text");
    textArea.value = e.target.result;
};
reader.readAsText(file);
if(typeof(Storage) !== "undefined"){localStorage.setItem("randomitempicker", document.getElementById("id_text").value)}
}

