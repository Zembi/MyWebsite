var c = 0;

function LoadBar() {
  if (c == 0) {
    c = 1;

    var loadingBarC = document.getElementById("loadingBarC");
    var loadingCountSp = document.getElementById("loadingCountP").children[0];
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
        loadingCountSp.innerHTML = width;
      }
    }
  }
}

//READY TO CHANGE STATUS
function ReadyToRoll() {
  sessionStorage.setItem("siteIsLoaded", 1);

  window.location.href = "Home/home.html";
}

setTimeout(function() {
  LoadBar();
}, 400);