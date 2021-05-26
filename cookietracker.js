

//Funktion um zu überprüfen, welche Antwort ausgewählt wurde und ob sie richtig ist.
//Für jeden Frage diesen Code kopieren und die ID der richtigen Antwort anpassen.
//setAnswer1ID(elem); jeweils immer anpassen.
//die Alerts dienen zur Selbstüberprüfung und können dann final entfernt werden.
function FolgenFeedback1(elem){

  setFolgen1ID(elem);

     document.getElementById("weiter").style.visibility = "visible";
     document.getElementById("weiter").disabled = false; //Disable button

//hier manuell die richtige Antwort angeben
     if (elem == "A") {
       setNewScore();
       var numberColor = document.getElementsByClassName("response-number");
              var b;
                for (b = 0; b < numberColor.length; b++) {
                    numberColor[b].style.backgroundColor = '#e3dfd5';
                  }
                  //hier manuell die richtige Antwort angeben
              document.getElementById("A").style.backgroundColor = '#4c8c14';
     }
     else {
       var numberColor = document.getElementsByClassName("response-number");
              var b;
                for (b = 0; b < numberColor.length; b++) {
                    numberColor[b].style.backgroundColor = '#e3dfd5';
                  }

      //hier manuell die richtige Antwort angeben + falsche Antwort wird rot
      document.getElementById("A").style.backgroundColor = '#4c8c14';
      document.getElementById(elem).style.backgroundColor = '#880000';

     }

     //nach Auswahl der Antwort kein weiteres klicken möglich
     var element = document.getElementById("A");
     element.onclick = "";
     var element1 = document.getElementById("B");
     element1.onclick = "";
     var element2 = document.getElementById("C");
     element2.onclick = "";
     var element3 = document.getElementById("D");
     element3.onclick = "";

}


//Funktion für Frage 2
function FolgenFeedback2(elem){

  setFolgen2ID(elem);

     document.getElementById("weiter").style.visibility = "visible";
     document.getElementById("weiter").disabled = false; //Disable button

//hier manuell die richtige Antwort angeben
     if (elem == "B") {
       setNewScore();
       var numberColor = document.getElementsByClassName("response-number");
              var b;
                for (b = 0; b < numberColor.length; b++) {
                    numberColor[b].style.backgroundColor = '#e3dfd5';
                  }
                  //hier manuell die richtige Antwort angeben
              document.getElementById("B").style.backgroundColor = '#4c8c14';
     }
     else {
       var numberColor = document.getElementsByClassName("response-number");
              var b;
                for (b = 0; b < numberColor.length; b++) {
                    numberColor[b].style.backgroundColor = '#e3dfd5';
                  }

      //hier manuell die richtige Antwort angeben + falsche Antwort wird rot
      document.getElementById("B").style.backgroundColor = '#4c8c14';
      document.getElementById(elem).style.backgroundColor = '#880000';

     }

     //nach Auswahl der Antwort kein weiteres klicken möglich
     var element = document.getElementById("A");
     element.onclick = "";
     var element1 = document.getElementById("B");
     element1.onclick = "";
     var element2 = document.getElementById("C");
     element2.onclick = "";
     var element3 = document.getElementById("D");
     element3.onclick = "";
}


//Funktion für Frage 3
function FolgenFeedback3(elem){

  setFolgen3ID(elem);

     document.getElementById("weiter").style.visibility = "visible";
     document.getElementById("weiter").disabled = false; //Disable button

//hier manuell die richtige Antwort angeben
     if (elem == "D") {
       setNewScore();
       var numberColor = document.getElementsByClassName("response-number");
              var b;
                for (b = 0; b < numberColor.length; b++) {
                    numberColor[b].style.backgroundColor = '#e3dfd5';
                  }
                  //hier manuell die richtige Antwort angeben
              document.getElementById("D").style.backgroundColor = '#4c8c14';
     }
     else {
       var numberColor = document.getElementsByClassName("response-number");
              var b;
                for (b = 0; b < numberColor.length; b++) {
                    numberColor[b].style.backgroundColor = '#e3dfd5';
                  }

      //hier manuell die richtige Antwort angeben + falsche Antwort wird rot
      document.getElementById("D").style.backgroundColor = '#4c8c14';
      document.getElementById(elem).style.backgroundColor = '#880000';

     }

     //nach Auswahl der Antwort kein weiteres klicken möglich
     var element = document.getElementById("A");
     element.onclick = "";
     var element1 = document.getElementById("B");
     element1.onclick = "";
     var element2 = document.getElementById("C");
     element2.onclick = "";
     var element3 = document.getElementById("D");
     element3.onclick = "";

}

function FolgenFeedback4(elem){

  setFolgen4ID(elem);

     document.getElementById("weiter").style.visibility = "visible";
     document.getElementById("weiter").disabled = false; //Disable button

     if (elem == "D") {
       setNewScore();
       var numberColor = document.getElementsByClassName("response-number");
              var b;
                for (b = 0; b < numberColor.length; b++) {
                    numberColor[b].style.backgroundColor = '#e3dfd5';
                  }
                  //hier manuell die richtige Antwort angeben
              document.getElementById("D").style.backgroundColor = '#4c8c14';
     }
     else {
       var numberColor = document.getElementsByClassName("response-number");
              var b;
                for (b = 0; b < numberColor.length; b++) {
                    numberColor[b].style.backgroundColor = '#e3dfd5';
                  }

      //hier manuell die richtige Antwort angeben + falsche Antwort wird rot
      document.getElementById("D").style.backgroundColor = '#4c8c14';
      document.getElementById(elem).style.backgroundColor = '#880000';

     }

     //nach Auswahl der Antwort kein weiteres klicken möglich
     var element = document.getElementById("A");
     element.onclick = "";
     var element1 = document.getElementById("B");
     element1.onclick = "";
     var element2 = document.getElementById("C");
     element2.onclick = "";
     var element3 = document.getElementById("D");
     element3.onclick = "";

}

function StromFeedback1(elem){

  setStrom1ID(elem);

     document.getElementById("weiter").style.visibility = "visible";
     document.getElementById("weiter").disabled = false; //Disable button

//hier manuell die richtige Antwort angeben
     if (elem == "D") {
       setNewScore();
       var numberColor = document.getElementsByClassName("response-number");
              var b;
                for (b = 0; b < numberColor.length; b++) {
                    numberColor[b].style.backgroundColor = '#e3dfd5';
                  }
                  //hier manuell die richtige Antwort angeben
              document.getElementById("D").style.backgroundColor = '#4c8c14';
     }
     else {
       var numberColor = document.getElementsByClassName("response-number");
              var b;
                for (b = 0; b < numberColor.length; b++) {
                    numberColor[b].style.backgroundColor = '#e3dfd5';
                  }

      //hier manuell die richtige Antwort angeben + falsche Antwort wird rot
      document.getElementById("D").style.backgroundColor = '#4c8c14';
      document.getElementById(elem).style.backgroundColor = '#880000';

     }

     //nach Auswahl der Antwort kein weiteres klicken möglich
     var element = document.getElementById("A");
     element.onclick = "";
     var element1 = document.getElementById("B");
     element1.onclick = "";
     var element2 = document.getElementById("C");
     element2.onclick = "";
     var element3 = document.getElementById("D");
     element3.onclick = "";

}

//Funktion für Frage 2
function StromFeedback2(elem){

  setStrom2ID(elem);

     document.getElementById("weiter").style.visibility = "visible";
     document.getElementById("weiter").disabled = false; //Disable button

//hier manuell die richtige Antwort angeben
     if (elem == "C") {
       setNewScore();
       var numberColor = document.getElementsByClassName("response-number");
              var b;
                for (b = 0; b < numberColor.length; b++) {
                    numberColor[b].style.backgroundColor = '#e3dfd5';
                  }
                  //hier manuell die richtige Antwort angeben
              document.getElementById("C").style.backgroundColor = '#4c8c14';
     }
     else {
       var numberColor = document.getElementsByClassName("response-number");
              var b;
                for (b = 0; b < numberColor.length; b++) {
                    numberColor[b].style.backgroundColor = '#e3dfd5';
                  }

      //hier manuell die richtige Antwort angeben + falsche Antwort wird rot
      document.getElementById("C").style.backgroundColor = '#4c8c14';
      document.getElementById(elem).style.backgroundColor = '#880000';

     }

     //nach Auswahl der Antwort kein weiteres klicken möglich
     var element = document.getElementById("A");
     element.onclick = "";
     var element1 = document.getElementById("B");
     element1.onclick = "";
     var element2 = document.getElementById("C");
     element2.onclick = "";
     var element3 = document.getElementById("D");
     element3.onclick = "";
}


//Funktion für Frage 3
function StromFeedback3(elem){

  setStrom3ID(elem);

     document.getElementById("weiter").style.visibility = "visible";
     document.getElementById("weiter").disabled = false; //Disable button

//hier manuell die richtige Antwort angeben
     if (elem == "A") {
       setNewScore();
       var numberColor = document.getElementsByClassName("response-number");
              var b;
                for (b = 0; b < numberColor.length; b++) {
                    numberColor[b].style.backgroundColor = '#e3dfd5';
                  }
                  //hier manuell die richtige Antwort angeben
              document.getElementById("A").style.backgroundColor = '#4c8c14';
     }
     else {
       var numberColor = document.getElementsByClassName("response-number");
              var b;
                for (b = 0; b < numberColor.length; b++) {
                    numberColor[b].style.backgroundColor = '#e3dfd5';
                  }

      //hier manuell die richtige Antwort angeben + falsche Antwort wird rot
      document.getElementById("A").style.backgroundColor = '#4c8c14';
      document.getElementById(elem).style.backgroundColor = '#880000';

     }

     //nach Auswahl der Antwort kein weiteres klicken möglich
     var element = document.getElementById("A");
     element.onclick = "";
     var element1 = document.getElementById("B");
     element1.onclick = "";
     var element2 = document.getElementById("C");
     element2.onclick = "";
     var element3 = document.getElementById("D");
     element3.onclick = "";

}

function StromFeedback4(elem){

  setStrom4ID(elem);

     document.getElementById("weiter").style.visibility = "visible";
     document.getElementById("weiter").disabled = false; //Disable button

     if (elem == "A") {
       setNewScore();
       var numberColor = document.getElementsByClassName("response-number");
              var b;
                for (b = 0; b < numberColor.length; b++) {
                    numberColor[b].style.backgroundColor = '#e3dfd5';
                  }
                  //hier manuell die richtige Antwort angeben
              document.getElementById("A").style.backgroundColor = '#4c8c14';
     }
     else {
       var numberColor = document.getElementsByClassName("response-number");
              var b;
                for (b = 0; b < numberColor.length; b++) {
                    numberColor[b].style.backgroundColor = '#e3dfd5';
                  }

      //hier manuell die richtige Antwort angeben + falsche Antwort wird rot
      document.getElementById("A").style.backgroundColor = '#4c8c14';
      document.getElementById(elem).style.backgroundColor = '#880000';

     }

     //nach Auswahl der Antwort kein weiteres klicken möglich
     var element = document.getElementById("A");
     element.onclick = "";
     var element1 = document.getElementById("B");
     element1.onclick = "";
     var element2 = document.getElementById("C");
     element2.onclick = "";
     var element3 = document.getElementById("D");
     element3.onclick = "";

}

function LebensmittelFeedback1(elem){

  setLebensmittel1ID(elem);

     document.getElementById("weiter").style.visibility = "visible";
     document.getElementById("weiter").disabled = false; //Disable button

//hier manuell die richtige Antwort angeben
     if (elem == "B") {
       setNewScore();
       var numberColor = document.getElementsByClassName("response-number");
              var b;
                for (b = 0; b < numberColor.length; b++) {
                    numberColor[b].style.backgroundColor = '#e3dfd5';
                  }
                  //hier manuell die richtige Antwort angeben
              document.getElementById("B").style.backgroundColor = '#4c8c14';
     }
     else {
       var numberColor = document.getElementsByClassName("response-number");
              var b;
                for (b = 0; b < numberColor.length; b++) {
                    numberColor[b].style.backgroundColor = '#e3dfd5';
                  }

      //hier manuell die richtige Antwort angeben + falsche Antwort wird rot
      document.getElementById("B").style.backgroundColor = '#4c8c14';
      document.getElementById(elem).style.backgroundColor = '#880000';

     }

     //nach Auswahl der Antwort kein weiteres klicken möglich
     var element = document.getElementById("A");
     element.onclick = "";
     var element1 = document.getElementById("B");
     element1.onclick = "";
     var element2 = document.getElementById("C");
     element2.onclick = "";
     var element3 = document.getElementById("D");
     element3.onclick = "";

}

//Funktion für Frage 2
function LebensmittelFeedback2(elem){

  setLebensmittel2ID(elem);

     document.getElementById("weiter").style.visibility = "visible";
     document.getElementById("weiter").disabled = false; //Disable button

//hier manuell die richtige Antwort angeben
     if (elem == "A") {
       setNewScore();
       var numberColor = document.getElementsByClassName("response-number");
              var b;
                for (b = 0; b < numberColor.length; b++) {
                    numberColor[b].style.backgroundColor = '#e3dfd5';
                  }
                  //hier manuell die richtige Antwort angeben
              document.getElementById("A").style.backgroundColor = '#4c8c14';
     }
     else {
       var numberColor = document.getElementsByClassName("response-number");
              var b;
                for (b = 0; b < numberColor.length; b++) {
                    numberColor[b].style.backgroundColor = '#e3dfd5';
                  }

      //hier manuell die richtige Antwort angeben + falsche Antwort wird rot
      document.getElementById("A").style.backgroundColor = '#4c8c14';
      document.getElementById(elem).style.backgroundColor = '#880000';

     }

     //nach Auswahl der Antwort kein weiteres klicken möglich
     var element = document.getElementById("A");
     element.onclick = "";
     var element1 = document.getElementById("B");
     element1.onclick = "";
     var element2 = document.getElementById("C");
     element2.onclick = "";
     var element3 = document.getElementById("D");
     element3.onclick = "";
}


//Funktion für Frage 3
function LebensmittelFeedback3(elem){

  setLebensmittel3ID(elem);

     document.getElementById("weiter").style.visibility = "visible";
     document.getElementById("weiter").disabled = false; //Disable button

//hier manuell die richtige Antwort angeben
     if (elem == "B") {
       setNewScore();
       var numberColor = document.getElementsByClassName("response-number");
              var b;
                for (b = 0; b < numberColor.length; b++) {
                    numberColor[b].style.backgroundColor = '#e3dfd5';
                  }
                  //hier manuell die richtige Antwort angeben
              document.getElementById("B").style.backgroundColor = '#4c8c14';
     }
     else {
       var numberColor = document.getElementsByClassName("response-number");
              var b;
                for (b = 0; b < numberColor.length; b++) {
                    numberColor[b].style.backgroundColor = '#e3dfd5';
                  }

      //hier manuell die richtige Antwort angeben + falsche Antwort wird rot
      document.getElementById("B").style.backgroundColor = '#4c8c14';
      document.getElementById(elem).style.backgroundColor = '#880000';

     }

     //nach Auswahl der Antwort kein weiteres klicken möglich
     var element = document.getElementById("A");
     element.onclick = "";
     var element1 = document.getElementById("B");
     element1.onclick = "";
     var element2 = document.getElementById("C");
     element2.onclick = "";
     var element3 = document.getElementById("D");
     element3.onclick = "";

}

function LebensmittelFeedback4(elem){

  setLebensmittel4ID(elem);

     document.getElementById("weiter").style.visibility = "visible";
     document.getElementById("weiter").disabled = false; //Disable button

     if (elem == "D") {
       setNewScore();
       var numberColor = document.getElementsByClassName("response-number");
              var b;
                for (b = 0; b < numberColor.length; b++) {
                    numberColor[b].style.backgroundColor = '#e3dfd5';
                  }
                  //hier manuell die richtige Antwort angeben
              document.getElementById("D").style.backgroundColor = '#4c8c14';
     }
     else {
       var numberColor = document.getElementsByClassName("response-number");
              var b;
                for (b = 0; b < numberColor.length; b++) {
                    numberColor[b].style.backgroundColor = '#e3dfd5';
                  }

      //hier manuell die richtige Antwort angeben + falsche Antwort wird rot
      document.getElementById("D").style.backgroundColor = '#4c8c14';
      document.getElementById(elem).style.backgroundColor = '#880000';

     }

     //nach Auswahl der Antwort kein weiteres klicken möglich
     var element = document.getElementById("A");
     element.onclick = "";
     var element1 = document.getElementById("B");
     element1.onclick = "";
     var element2 = document.getElementById("C");
     element2.onclick = "";
     var element3 = document.getElementById("D");
     element3.onclick = "";

}

function RecyclingFeedback1(elem){

  setRecycling1ID(elem);

     document.getElementById("weiter").style.visibility = "visible";
     document.getElementById("weiter").disabled = false; //Disable button

//hier manuell die richtige Antwort angeben
     if (elem == "B") {
       setNewScore();
       var numberColor = document.getElementsByClassName("response-number");
              var b;
                for (b = 0; b < numberColor.length; b++) {
                    numberColor[b].style.backgroundColor = '#e3dfd5';
                  }
                  //hier manuell die richtige Antwort angeben
              document.getElementById("B").style.backgroundColor = '#4c8c14';
     }
     else {
       var numberColor = document.getElementsByClassName("response-number");
              var b;
                for (b = 0; b < numberColor.length; b++) {
                    numberColor[b].style.backgroundColor = '#e3dfd5';
                  }

      //hier manuell die richtige Antwort angeben + falsche Antwort wird rot
      document.getElementById("B").style.backgroundColor = '#4c8c14';
      document.getElementById(elem).style.backgroundColor = '#880000';

     }

     //nach Auswahl der Antwort kein weiteres klicken möglich
     var element = document.getElementById("A");
     element.onclick = "";
     var element1 = document.getElementById("B");
     element1.onclick = "";
     var element2 = document.getElementById("C");
     element2.onclick = "";
     var element3 = document.getElementById("D");
     element3.onclick = "";

}

//Funktion für Frage 2
function RecyclingFeedback2(elem){

  setRecycling2ID(elem);

     document.getElementById("weiter").style.visibility = "visible";
     document.getElementById("weiter").disabled = false; //Disable button

//hier manuell die richtige Antwort angeben
     if (elem == "A") {
       setNewScore();
       var numberColor = document.getElementsByClassName("response-number");
              var b;
                for (b = 0; b < numberColor.length; b++) {
                    numberColor[b].style.backgroundColor = '#e3dfd5';
                  }
                  //hier manuell die richtige Antwort angeben
              document.getElementById("A").style.backgroundColor = '#4c8c14';
     }
     else {
       var numberColor = document.getElementsByClassName("response-number");
              var b;
                for (b = 0; b < numberColor.length; b++) {
                    numberColor[b].style.backgroundColor = '#e3dfd5';
                  }

      //hier manuell die richtige Antwort angeben + falsche Antwort wird rot
      document.getElementById("A").style.backgroundColor = '#4c8c14';
      document.getElementById(elem).style.backgroundColor = '#880000';

     }

     //nach Auswahl der Antwort kein weiteres klicken möglich
     var element = document.getElementById("A");
     element.onclick = "";
     var element1 = document.getElementById("B");
     element1.onclick = "";
     var element2 = document.getElementById("C");
     element2.onclick = "";
     var element3 = document.getElementById("D");
     element3.onclick = "";
}


//Funktion für Frage 3
function RecyclingFeedback3(elem){

  setRecycling3ID(elem);

     document.getElementById("weiter").style.visibility = "visible";
     document.getElementById("weiter").disabled = false; //Disable button

//hier manuell die richtige Antwort angeben
     if (elem == "B") {
       setNewScore();
       var numberColor = document.getElementsByClassName("response-number");
              var b;
                for (b = 0; b < numberColor.length; b++) {
                    numberColor[b].style.backgroundColor = '#e3dfd5';
                  }
                  //hier manuell die richtige Antwort angeben
              document.getElementById("B").style.backgroundColor = '#4c8c14';
     }
     else {
       var numberColor = document.getElementsByClassName("response-number");
              var b;
                for (b = 0; b < numberColor.length; b++) {
                    numberColor[b].style.backgroundColor = '#e3dfd5';
                  }

      //hier manuell die richtige Antwort angeben + falsche Antwort wird rot
      document.getElementById("B").style.backgroundColor = '#4c8c14';
      document.getElementById(elem).style.backgroundColor = '#880000';

     }

     //nach Auswahl der Antwort kein weiteres klicken möglich
     var element = document.getElementById("A");
     element.onclick = "";
     var element1 = document.getElementById("B");
     element1.onclick = "";
     var element2 = document.getElementById("C");
     element2.onclick = "";
     var element3 = document.getElementById("D");
     element3.onclick = "";

}

function RecyclingFeedback4(elem){

  setRecycling4ID(elem);

     document.getElementById("weiter").style.visibility = "visible";
     document.getElementById("weiter").disabled = false; //Disable button

     if (elem == "C") {
       setNewScore();
       var numberColor = document.getElementsByClassName("response-number");
              var b;
                for (b = 0; b < numberColor.length; b++) {
                    numberColor[b].style.backgroundColor = '#e3dfd5';
                  }
                  //hier manuell die richtige Antwort angeben
              document.getElementById("C").style.backgroundColor = '#4c8c14';
     }
     else {
       var numberColor = document.getElementsByClassName("response-number");
              var b;
                for (b = 0; b < numberColor.length; b++) {
                    numberColor[b].style.backgroundColor = '#e3dfd5';
                  }

      //hier manuell die richtige Antwort angeben + falsche Antwort wird rot
      document.getElementById("C").style.backgroundColor = '#4c8c14';
      document.getElementById(elem).style.backgroundColor = '#880000';

     }

     //nach Auswahl der Antwort kein weiteres klicken möglich
     var element = document.getElementById("A");
     element.onclick = "";
     var element1 = document.getElementById("B");
     element1.onclick = "";
     var element2 = document.getElementById("C");
     element2.onclick = "";
     var element3 = document.getElementById("D");
     element3.onclick = "";

}




////Audio Player, hier müssen ale Audios in das Array eingetragen werden

function playAudio(track){
  var audioArray = [LU_sec2_ex5, LU_sec2_ex6];

    function stopAll() {

        for (var z = 0; z < audioArray.length; z++) {
            audioArray[z].src  = audioArray[z].src;
        }
    }
    stopAll();

    var audio = audioArray[track];
    audio.play();
}

    ////Audios, hier alle Audios in dieser Form einfügen und nicht vergessen, sie in den selben Ordner abzuspeichern
    var LU_sec2_ex5 = new Audio('einkaufen.mp3');
    var LU_sec2_ex6 = new Audio('apfelsaft.mp3');




///Cookie Einstellungen
    function setCookie(cname, cvalue, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
      var expires = "expires="+d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getCookie(cname) {
      var name = cname + "=";
      var ca = document.cookie.split(';');
      for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }

    function checkCookie() {
      var counter=getCookie("counter");
      if (counter != "") {
        alert("This is your current score " + counter);
      } else {
         counter = "5"; //Hier aktuellen Punktestand angeben
         alert("noch kein Cookie gesetzt " +counter)
         if (counter != "" && counter != null) {
           setCookie("counter", counter, 30);
         }
      }
    }

    //neue Fragevariablen hier einfügen
    var score = 0;
    var folgen1ID = "0";
    var folgen2ID = "0";
    var folgen3ID = "0";
    var folgen4ID = "0";
    var strom1ID = "0";
    var strom2ID = "0";
    var strom3ID = "0";
    var strom4ID = "0";
    var lebensmittel1ID = "0";
    var lebensmittel2ID = "0";
    var lebensmittel3ID = "0";
    var lebensmittel4ID = "0";
    var recycling1ID = "0";
    var recycling2ID = "0";
    var recycling3ID = "0";
    var recycling4ID = "0";


    //Get current score by loading cookies
    function getCookieValues(){
      score = getCookie("score");
      folgen1ID = getCookie("folgen1ID");
      folgen2ID = getCookie("folgen2ID");
      folgen3ID = getCookie("folgen3ID");
      folgen4ID = getCookie("folgen4ID");
      strom1ID = getCookie("strom1ID");
      strom2ID = getCookie("strom2ID");
      strom3ID = getCookie("strom3ID");
      strom4ID = getCookie("strom4ID");
      lebensmittel1ID = getCookie("lebensmittel1ID");
      lebensmittel2ID = getCookie("lebensmittel2ID");
      lebensmittel3ID = getCookie("lebensmittel3ID");
      lebensmittel4ID = getCookie("lebensmittel4ID");
      recycling1ID = getCookie("recycling1ID");
      recycling2ID = getCookie("recycling2ID");
      recycling3ID = getCookie("recycling3ID");
      recycling4ID = getCookie("recycling4ID");



        alert("This is the current score: "+ score + "Folgen KLimawandel 1.Frage: "+ folgen1ID +"Folgen KLimawandel 2.Frage: "+ folgen2ID + "Folgen KLimawandel 3.Frage: "+ folgen3ID + "Folgen KLimawandel 4.Frage: "+ folgen4ID + "CO2 und Strom 1.Frage: "+ strom1ID +"CO2 und Strom 2.Frage: "+ strom2ID + "CO2 und Strom 3.Frage: "+ strom3ID + "CO2 und Strom 4.Frage: "+ strom4ID + "Auswirkungen Lebensmittelindustrie 1.Frage: "+ lebensmittel1ID +"Auswirkungen Lebensmittelindustrie 2.Frage: "+ lebensmittel2ID + "Auswirkungen Lebensmittelindustrie 3.Frage: "+ lebensmittel3ID + "Auswirkungen Lebensmittelindustrie 4.Frage: "+ lebensmittel4ID + "Recycling 1.Frage: "+ recycling1ID +"Recycling 2.Frage: "+ recycling2ID + "Recycling 3.Frage: "+ recycling3ID + "Recycling 4.Frage: "+ recycling4ID);

    }

    //Set new score by adding +1 point
    function setNewScore(){
      score = ++score;
      setCookie("score", score, 30);
    }

//Set cookie for first answer ID --> Folgen des KLimawandel
    function setFolgen1ID(clicked_id) {
      folgen1ID = clicked_id;
      setCookie("folgen1ID", folgen1ID, 30);
    }

    //Set cookie for second answer ID
    function setFolgen2ID(clicked_id2) {
      folgen2ID = clicked_id2;
      setCookie("folgen2ID", folgen2ID, 30);
    }

    //Set cookie for third answer ID
    function setFolgen3ID(clicked_id3) {
      folgen3ID = clicked_id3;
      setCookie("folgen3ID", folgen3ID, 30);
    }

    //Set cookie for third answer ID
    function setFolgen4ID(clicked_id4) {
      folgen4ID = clicked_id4;
      setCookie("folgen4ID", folgen4ID, 30);
    }

//Set cookie for first answer ID --> CO2 und Strom
    function setStrom1ID(clicked_id) {
      strom1ID = clicked_id;
      setCookie("strom1ID", strom1ID, 30);
    }

    //Set cookie for second answer ID
    function setStrom2ID(clicked_id2) {
      strom2ID = clicked_id2;
      setCookie("strom2ID", strom2ID, 30);
    }

    //Set cookie for third answer ID
    function setStrom3ID(clicked_id3) {
      strom3ID = clicked_id3;
      setCookie("strom3ID", strom3ID, 30);
    }

    //Set cookie for third answer ID
    function setStrom4ID(clicked_id4) {
      strom4ID = clicked_id4;
      setCookie("strom4ID", strom4ID, 30);
    }

//Set cookie for first answer ID --> Umweltauswirkung Lebensmittel
        function setLebensmittel1ID(clicked_id) {
          lebensmittel1ID = clicked_id;
          setCookie("lebensmittel1ID", lebensmittel1ID, 30);
        }

        //Set cookie for second answer ID
        function setLebensmittel2ID(clicked_id2) {
          lebensmittel2ID = clicked_id2;
          setCookie("lebensmittel2ID", lebensmittel2ID, 30);
        }

        //Set cookie for third answer ID
        function setLebensmittel3ID(clicked_id3) {
          lebensmittel3ID = clicked_id3;
          setCookie("lebensmittel3ID", lebensmittel3ID, 30);
        }

        //Set cookie for third answer ID
        function setLebensmittel4ID(clicked_id4) {
          lebensmittel4ID = clicked_id4;
          setCookie("lebensmittel4ID", lebensmittel4ID, 30);
        }

//Set cookie for first answer ID --> Recycling
        function setRecycling1ID(clicked_id) {
          recycling1ID = clicked_id;
          setCookie("recycling1ID", recycling1ID, 30);
        }

        //Set cookie for second answer ID
        function setRecycling2ID(clicked_id2) {
          recycling2ID = clicked_id2;
          setCookie("recycling2ID", recycling2ID, 30);
        }

        //Set cookie for third answer ID
        function setRecycling3ID(clicked_id3) {
          recycling3ID = clicked_id3;
          setCookie("recycling3ID", recycling3ID, 30);
        }

        //Set cookie for third answer ID
        function setRecycling4ID(clicked_id4) {
          recycling4ID = clicked_id4;
          setCookie("recycling4ID", recycling4ID, 30);
        }


