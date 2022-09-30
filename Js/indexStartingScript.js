var c = 0;

function LoadBar() {
  if (c == 0) {
    c = 1;

    var loadingBarC = document.getElementById("loadingBarC");
    var loadingCountP = document.getElementById("loadingCountP");
    var width = 0;
    
    var id = setInterval(FramePerFrame, 15);

    function FramePerFrame() {
      if(width >= 100) {
        clearInterval(id);
        c = 0;

        //REDIRECT TO MAIN PAGE
        ReadyToRoll();
      }
      else {
        width++;
        loadingBarC.style.width = width + "%";
        loadingCountP.innerHTML = width + "%";
      }
    }
  }
}

//READY TO CHANGE STATUS
function ReadyToRoll() {
  //document.location.href = "../Home/home.html";
  
  var metaTag = document.getElementById("changePageMeta");
  metaTag.content = "0; Home/home.html";
}

setTimeout(function() {
  LoadBar();
}, 400);