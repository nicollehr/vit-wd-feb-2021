function calculateTip() {
  var billAmountValue = document.getElementById("billAmount").value;
  console.log(billAmountValue);
  var tipAmount = billAmountValue * 0.15;
  var outputElement = document.getElementById("output");
  outputElement.innerText = tipAmount;
}
