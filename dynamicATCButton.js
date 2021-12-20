function parsePrice(rawPrice) { // rawPrice format: "$ 30.00 CAD"
  let tokens = rawPrice.split(/\s+/);
  return tokens[1] == 0.00 ? "Free" : tokens[0] + tokens[1]; // Format: "$30.00"
}
function updateButtons(slug, price) {
  var matches = document.getElementsByClassName("cdg-atc-" + slug);
  for (var i = 0; i < matches.length; i++) {
    matches[i].innerHTML = 'Add to Cart — ' + parsePrice(price);
  }
}
