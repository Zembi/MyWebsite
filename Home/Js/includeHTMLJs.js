function IncludeHTML() {
    var divs, i, elmnt, file, xhttp;
    
    /*LOOP THROUGH A COLLECTION OF ALL HTML ELEMENTS*/
    divs = document.getElementsByTagName("div");

    for(i = 0;i < divs.length;i++) {
      elmnt = divs[i];

      /*SEARCH FOR ELEMENTS WITH A CERTAIN ATTRIBUTE*/
      file = elmnt.getAttribute("include-html");
      if(file) {
        /*MAKE AN HTTP REQUEST USING THE ATTRIBUTE VALUE AS THE FILE NAME*/
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if(this.readyState == 4) {
            if(this.status == 200) {
              elmnt.innerHTML = this.responseText;
            }
            if(this.status == 404) {
              elmnt.innerHTML = "Page not found.";
            }

            /*REMOVE THE ATTRIBUTE, AND CALL THIS FUNCTION ONE MORE TIME*/
            elmnt.removeAttribute("include-html");
            IncludeHTML();
          }
        }      
        xhttp.open("GET", file, true);
        xhttp.send();

        return;
      }
    }
};