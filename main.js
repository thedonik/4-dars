var money = Number(prompt("Pulingizni kiriting"));
var flightCost = 500;
var hotelCost = 250;
var museum = 500;
var yevro = 10554.12;
var dollor = 9434.34;

var yevroCost = museum * yevro;
var dollorCost = (flightCost + hotelCost) * dollor;

var cost = yevroCost + dollorCost;

if (cost <= money) {
  console.log("Pulingiz yetadi");
} else {
  console.log("Pul yetmas ekan!");
}
