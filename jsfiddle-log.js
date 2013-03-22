var consoleDiv = document.getElementById('console');
var fiddle = function() {
    return({
        log: function(info) {
          var logDiv = document.createElement('div');
          var infoText = document.createTextNode(info);
          logDiv.appendChild(infoText);
          consoleDiv.appendChild(logDiv);
        }
    });
}();
