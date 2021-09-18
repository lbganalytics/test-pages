for (var k in testEvents) {

  makeButton(k.trim(), testEvents[k].join(","));

}

function makeButton(action, eventList) {
  eventList = eventList.split(",");
  var b = document.createElement("button");
  b.innerText = action;
  b.onclick = function () {
    for (var i = 0; i < eventList.length; i++) {
      utag.view(testData[1 * eventList[i]]);
    }
  }
  document.body.appendChild(b);
  document.body.appendChild(document.createElement("br"));
}
