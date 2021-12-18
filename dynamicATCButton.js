private function genATCText(rawPrice) { // rawPrice format: "$ 30.00 CAD"
  let tokens = rawPrice.split(/\s+/);
  return tokens[0] + tokens[1]; // Format: "$30.00"
}

function fillATCButtonText(buttonID, rawPrice) {
  var buttonElement = document.getElementById(buttonID);
  buttonElement.innerHTML = 'Add to Cart — ' + genATCText(rawPrice);
}
