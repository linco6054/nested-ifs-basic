document.getElementById("send").addEventListener("click", calculate);
function calculate() {
  var amount = document.getElementById("amount").value;
  var code = document.getElementById("code").value;
  var output = document.getElementById("output");
  var tax = 16 / 100;
  var a = Number(amount);
  var c = code.toLowerCase();

  if (c === "code1") {
    if (a >= 1000) {
      var result = a - (a * 10) / 100;
      const taxPaid = tax * a;
      output.innerHTML = `pay ${result} tax to pay ${taxPaid} total ${
        result + taxPaid
      }`;
    } else {
      var taxPaid = tax * a;
      output.innerHTML = ` pay ${a} tax to pay ${taxPaid} total ${
        taxPaid + a
      } the value is less than 1000 promo code is valid `;
    }
  } else if (c === "code2") {
    if (a >= 2000 && a <= 6000) {
      var taxPaid = tax * a;
      var result = 0;
      output.innerHTML = `pay ${result} tax to pay ${taxPaid} total ${
        result + taxPaid
      } valid code`;
    } else {
      var taxPaid = tax * a;
      output.innerHTML = ` pay ${a} tax to pay ${taxPaid} total ${
        taxPaid + a
      } the value is not within 2000 6000 bracket promo code is valid `;
    }
  } else if (c === "code3") {
    if (a < 1000) {
      var taxPaid = tax * a;
      var result = a / 2;

      output.innerHTML = `pay ${result} tax to pay ${taxPaid} total ${
        result + taxPaid
      } valid code`;
    } else {
      var taxPaid = tax * a;
      output.innerHTML = ` pay ${a} tax to pay ${taxPaid} total ${
        taxPaid + a
      } the value is not less than 1000  promo code is valid `;
    }
  } else {
    var taxPaid = tax * a;
    output.innerHTML = ` pay ${a} tax to pay ${taxPaid} total ${
      taxPaid + a
    } invalid promo code`;
  }
}
