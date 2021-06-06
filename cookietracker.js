

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
      var counter = getCookie("counter");
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
    var score = "0";
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
    var nicknameID = "0";
    var einstieg1ID = "A";


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

    //Get Cookie for Nickname
    function getCookieValue(){
      nicknameID = getCookie("nicknameID");
    }
    
   //Get Cookie for Einstieg-Achievement
  function getCookieValue1(){
      einstieg1ID = getCookie("einstieg1ID");
    
  }

    function setEinstieg1ID(clicked_id) {
        einstieg1ID = clicked_id;
        setCookie("einstieg1ID", einstieg1ID, 30);
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

//Remove Cookies
        function deleteScore(){
            setCookie("score", score, 0)
        }



//Set cookie for nickname
        function addToMenu(safedNameId) {
          nicknameID = safedNameId;
          setCookie("nicknameID", nicknameID, 30);
        }

//Achievements manipulieren

    
//Funktion um Daumen anzeigen zu lassen, nachdem Tutorialfrage richtig beantwortet wurde
function Tutorial(elem){
    
    var currentImage = document.getElementById("Daumen");
    var imagesrc = currentImage.getAttribute("src");
    
    if (elem == "A") {
        currentImage.setAttribute("src", "Achievements/Tutorial_Daumen.png");
    }
    else {
        currentImage.setAttribute("src", "Achievements/Tutorial.png");
    }
}
function Einstieg1(elem) {
        
    setEinstieg1ID(elem);
    
 var currentImage = document.getElementById("Haken");
    var imagesrc = currentImage.getAttribute("src");

 
    if (elem == "A") {                                                                 //Antwort richtig, dann
        currentImage.setAttribute("src", "Achievements/Eine_Frage_Haken.png");          //Daumenhoch
    }

    else {                                                                              //Ansonsten Fragezeichen
       currentImage.setAttribute("src", "Achievements/Eine_Frage.png");
    }
}


function Einstieg2(elem) {
    
 var currentImage = document.getElementById("Haken");
    var imagesrc = currentImage.getAttribute("src");
        
    if (elem == "B") {                                                                 //Antwort richtig, dann
        currentImage.setAttribute("src", "Achievements/Eine_Frage_Haken.png");          //Daumenhoch
    }

    else {                                                                              //Ansonsten Fragezeichen
       currentImage.setAttribute("src", "Achievements/Eine_Frage.png");
    }
}


//Funktion um Haken anzeigen zu lassen, nachdem erste Frage der Lernumgebung richtig beantwortet wurde
//Wird nach jeder richtigen Frage abgefragt
function Einstieg(FolgenFeedback1){
    
    var currentImage = document.getElementById("Haken");
    var imagesrc = currentImage.getAttribute("src");
        
    if (FolgenFeedback1.value == "A" ) {                                                //Erste Antwort richtig, dann
        currentImage.setAttribute("src", "Achievements/Eine_Frage_Haken.png");          //Daumenhoch
    }
    else if (FolgenFeedback2.value == "B") {                                            //Zweite Antwort erst richtig
        currentImage.setAttribute("src", "Achievements/Eine_Frage_Haken.png");
    }
    else if (FolgenFeedback3.value == "D") {                                            //Dritte Anwort erst richtig
        currentImage.setAttribute("src", "Achievements/Eine_Frage_Haken.png");
    }
    else if (FolgenFeedback4.value == "D") {                                            //Vierte Antwort erst richtig
        currentImage.setAttribute("src", "Achievements/Eine_Frage_Haken.png");
    }
    else if (StromFeedback1.value == "D") {                                             //5. Antwort erst richtig 
        currentImage.setAttribute("src", "Achievements/Eine_Frage_Haken.png");
    }
    else if (StromFeedback2.value == "C") {                                             //6. Antwort erst richtig
        currentImage.setAttribute("src", "Achievements/Eine_Frage_Haken.png");
    }
    else if (StromFeedback3.value == "A") {                                             //7. Antwort erst richtig
        currentImage.setAttribute("src", "Achievements/Eine_Frage_Haken.png");
    }
    else if (StromFeedback4.value == "A") {                                             //8. Antwort erst richtig
         currentImage.setAttribute("src", "Achievements/Eine_Frage_Haken.png");                 
    }
    else if (LebensmittelFeedback1.value == "B") {                                       //9. Antwort erst richtig
         currentImage.setAttribute("src", "Achievements/Eine_Frage_Haken.png");  
    }
    else if (LebensmittelFeedback2.value == "A") {                                       //10. Antwort erst richtig
         currentImage.setAttribute("src", "Achievements/Eine_Frage_Haken.png");                 
    }
    else if (LebensmittelFeedback3.value == "B") {                                       //11. Antwort erst richtig
         currentImage.setAttribute("src", "Achievements/Eine_Frage_Haken.png");                 
    }
    else if (LebensmittelFeedback4.value == "D") {                                       //12. Antwort erst richtig
         currentImage.setAttribute("src", "Achievements/Eine_Frage_Haken.png");                 
    }
    else if (RecyclingFeedback1.value == "B") {                                          //13. Antwort erst richtig
         currentImage.setAttribute("src", "Achievements/Eine_Frage_Haken.png");                 
    }
    else if (RecyclingFeedback2.value == "A") {                                          //14. Antwort erst richtig
         currentImage.setAttribute("src", "Achievements/Eine_Frage_Haken.png");                 
    }
    else if (RecyclingFeedback3.value == "B") {                                          //15.Antwort erst richtig
         currentImage.setAttribute("src", "Achievements/Eine_Frage_Haken.png");                 
    }
    else if (RecyclingFeedback4.value == "C") {                                          //16. Antwort erst richtig
         currentImage.setAttribute("src", "Achievements/Eine_Frage_Haken.png");                 
    }
    else {                                                                      //Ansonsten Fragezeichen
       currentImage.setAttribute("src", "Achievements/Eine_Frage.png");
    }
}

//Funktion um Flamme nach 3 richtigen Antworten anzeigen zu lassen
//wird bei jeder richtigen Frage, ab 3. Frage abefragt
function HotFlamme1(elem1,elem2,elem3) {
    
    setFolgen1ID;

 var currentImage = document.getElementById("1Flamme");
    var imagesrc = currentImage.getAttribute("src");
        
    if (elem1 == "A" && elem2 =="B" && elem3 =="C") {                                                                 //Antwort richtig, dann
        currentImage.setAttribute("src", "Achievements/Hot_Streak_Flamme.png");          //Daumenhoch
    }

    else {                                                                              //Ansonsten Fragezeichen
       currentImage.setAttribute("src", "Achievements/Hot_Streak.png");
    }
}



function HotFlamme(){
    
    var currentImage = document.getElementById("1Flamme");
    var imagesrc = currentImage.getAttribute("src");
    
    if (FolgenFeedback1.value == "A" + FolgenFeedback2.value == "B" + FolgenFeedback3.value == "D") {     //Ersten drei Antworten richtig, danach manuell abgefragt für immer die nächsten 3 Antworten
        currentImage.setAttribute("src", "Achievements/Hot_Streak_Flamme.png");                          //Flamme
    }
    else if (FolgenFeedback2.value == "B" + FolgenFeedback3.value == "D" + FolgenFeedback4.value == "D"){
        currentImage.setAttribute("src", "Achievements/Hot_Streak_Flamme.png");
    }
    else if (FolgenFeedback3.value == "D" + FolgenFeedback4.value == "D" + StromFeedback1.value == "D"){
        currentImage.setAttribute("src", "Achievements/Hot_Streak_Flamme.png");
    }
    else if (FolgenFeedback4.value == "B" + StromFeedback1.value == "D" + StromFeedback2.value == "C"){
        currentImage.setAttribute("src", "Achievements/Hot_Streak_Flamme.png");
    }
     else if (StromFeedback1.value == "D" + StromFeedback2.value == "C" + StromFeedback3.value == "A"){
        currentImage.setAttribute("src", "Achievements/Hot_Streak_Flamme.png");
    }
    else if (StromFeedback2.value == "C" + StromFeedback3.value == "A" + StromFeedback4.value == "A"){
        currentImage.setAttribute("src", "Achievements/Hot_Streak_Flamme.png");
    }
    else if (StromFeedback3.value == "A" + StromFeedback4.value == "A" + LebensmittelFeedback1.value == "B"){
        currentImage.setAttribute("src", "Achievements/Hot_Streak_Flamme.png");
    }
    else if (StromFeedback4.value == "A" + LebensmittelFeedback1.value == "B" + LebensmittelFeedback2.value == "A"){
        currentImage.setAttribute("src", "Achievements/Hot_Streak_Flamme.png");
    }
    else if (LebensmittelFeedback1.value == "B" + LebensmittelFeedback2.value == "A" + LebensmittelFeedback3.value == "B"){
        currentImage.setAttribute("src", "Achievements/Hot_Streak_Flamme.png");
    }
    else if (LebensmittelFeedback2.value == "A" + LebensmittelFeedback3.value == "B" + LebensmittelFeedback4.value == "D"){
        currentImage.setAttribute("src", "Achievements/Hot_Streak_Flamme.png");
    }
    else if (LebensmittelFeedback3.value == "B" + LebensmittelFeedback4.value == "D" + RecyclingFeedback1.value == "B"){
        currentImage.setAttribute("src", "Achievements/Hot_Streak_Flamme.png");
    }
    else if (LebensmittelFeedback4.value == "D" + RecyclingFeedback1.value == "B" + RecyclingFeedback2.value == "A"){
        currentImage.setAttribute("src", "Achievements/Hot_Streak_Flamme.png");
    }
    else if (RecyclingFeedback1.value == "B" + RecyclingFeedback2.value == "A" + RecyclingFeedback3.value == "B"){
        currentImage.setAttribute("src", "Achievements/Hot_Streak_Flamme.png");
    }
    else if (RecyclingFeedback2.value == "A" + RecyclingFeedback3.value == "B" + RecyclingFeedback4.value == "C"){
        currentImage.setAttribute("src", "Achievements/Hot_Streak_Flamme.png");
    }
    else {
        currentImage.setAttribute("src", "Achievements/Hot_Streak.png");
    }
}


//Funktion um 2 Flammen nach 5 richtig beantworteten Fragen anzeigen zu lassen
//wird bei jeder richtigen Frage, ab der fünften Frage abgefragt
function HotterFlamme() {
    
    var currentImage = document.getElementById("2Flamme");
    var imagesrc = currentImage.getAttribute("src");
    
    if (FolgenFeedback1.value == "A" + FolgenFeedback2.value == "B" + FolgenFeedback3.value == "D" + FolgenFeedback4.value == "D" + StromFeedback1.value == "D") {     //Ersten fünf Antworten richtig, danach manuell                                                                                                                                                                          //  abgefragt für immer die nächsten 5 Antworten 
        currentImage.setAttribute("src", "Achievements/Hotter_Streak_Flamme.png");                                                                                     //2 Flammen
    }
    else if (FolgenFeedback2.value == "B" + FolgenFeedback3.value == "D" + FolgenFeedback4.value == "D" + StromFeedback1.value == "D" + StromFeedback2.value == "C"){
        currentImage.setAttribute("src", "Achievements/Hotter_Streak_Flamme.png");
    }
    else if (FolgenFeedback3.value == "D" + FolgenFeedback4.value == "D" + StromFeedback1.value == "D" + StromFeedback2.value == "C" + StromFeedback3.value == "A"){
        currentImage.setAttribute("src", "Achievements/Hotter_Streak_Flamme.png");
    }
    else if (FolgenFeedback4.value == "D" + StromFeedback1.value == "D" + StromFeedback2.value == "C" + StromFeedback3.value == "A" + StromFeedback4.value == "A"){
        currentImage.setAttribute("src", "Achievements/Hotter_Streak_Flamme.png");
    }
     else if (StromFeedback1.value == "D" + StromFeedback2.value == "C" + StromFeedback3.value == "A" + StromFeedback4.value == "A" + LebensmittelFeedback1.value == "B"){
        currentImage.setAttribute("src", "Achievements/Hotter_Streak_Flamme.png");
    }
    else if (StromFeedback2.value == "C" + StromFeedback3.value == "A" + StromFeedback4.value == "A" + LebensmittelFeedback1.value == "B" + LebensmittelFeedback2.value == "A"){
        currentImage.setAttribute("src", "Achievements/Hotter_Streak_Flamme.png");
    }
    else if (StromFeedback3.value == "A" + StromFeedback4.value == "A" + LebensmittelFeedback1.value == "B" + LebensmittelFeedback2.value == "A" + LebensmittelFeedback3.value == "B"){
        currentImage.setAttribute("src", "Achievements/Hotter_Streak_Flamme.png");
    }
    else if (StromFeedback4.value == "A" + LebensmittelFeedback1.value == "B" + LebensmittelFeedback2.value == "A" + LebensmittelFeedback3.value == "B" + LebensmittelFeedback4.value == "D"){
        currentImage.setAttribute("src", "Achievements/Hotter_Streak_Flamme.png");
    }
    else if (LebensmittelFeedback1.value == "B" + LebensmittelFeedback2.value == "A" + LebensmittelFeedback3.value == "B" + LebensmittelFeedback4.value == "D" + RecyclingFeedback1.value == "B"){
        currentImage.setAttribute("src", "Achievements/Hotter_Streak_Flamme.png");
    }
    else if (LebensmittelFeedback2.value == "A" + LebensmittelFeedback3.value == "B" + LebensmittelFeedback4.value == "D" + RecyclingFeedback1.value == "B" + RecyclingFeedback2.value == "A"){
        currentImage.setAttribute("src", "Achievements/Hotter_Streak_Flamme.png");
    }
    else if (LebensmittelFeedback3.value == "B" + LebensmittelFeedback4.value == "D" + RecyclingFeedback1.value == "B" + RecyclingFeedback2.value == "A" + RecyclingFeedback3.value == "B"){
        currentImage.setAttribute("src", "Achievements/Hotter_Streak_Flamme.png");
    }
    else if (LebensmittelFeedback4.value == "D" + RecyclingFeedback1.value == "B" + RecyclingFeedback2.value == "A" + RecyclingFeedback3.value == "B" + RecyclingFeedback4.value == "C"){
        currentImage.setAttribute("src", "Achievements/Hotter_Streak_Flamme.png");
    }
    else {
        currentImage.setAttribute("src", "Achievements/Hotter_Streak.png");
    }
}


//Funktion um 3 Flammen nach 7 richtig beantworteten Fragen anzeigen zu lassen
//wird bei jeder richtigen Frage, ab der siebten Frage abgefragt
function HottestFlamme() {
    
    var currentImage = document.getElementById("3Flamme");
    var imagesrc = currentImage.getAttribute("src");
    
    if (FolgenFeedback1.value == "A" + FolgenFeedback2.value == "B" + FolgenFeedback3.value == "D" + FolgenFeedback4.value == "D" + StromFeedback1.value == "D" + StromFeedback2.value == "C" + StromFeedback3.value == "A") {                                                                                                                                                                  //Ersten sieben Antworten richtig, danach manuell                                                                                                                                                                        //  abgefragt für immer die nächsten 7 Antworten 
        currentImage.setAttribute("src", "Achievements/Hottest_Streak_Flamme.png");                                                                                     //3 Flammen
    }
    else if (FolgenFeedback2.value == "B" + FolgenFeedback3.value == "D" + FolgenFeedback4.value == "D" + StromFeedback1.value == "D" + StromFeedback2.value == "C" + StromFeedback3.value == "A" + StromFeedback4.value == "A") {
        currentImage.setAttribute("src", "Achievements/Hottest_Streak_Flamme.png");
    }
    else if (FolgenFeedback3.value == "D" + FolgenFeedback4.value == "D" + StromFeedback1.value == "D" + StromFeedback2.value == "C" + StromFeedback3.value == "A" + StromFeedback4.value == "A" + LebensmittelFeedback1.value == "B") {
        currentImage.setAttribute("src", "Achievements/Hottest_Streak_Flamme.png");
    } 
    else if (FolgenFeedback4.value == "D" + StromFeedback1.value == "D" + StromFeedback2.value == "C" + StromFeedback3.value == "A" + StromFeedback4.value == "A" + LebensmittelFeedback1.value == "B" + LebensmittelFeedback2.value == "A") {
        currentImage.setAttribute("src", "Achievements/Hottest_Streak_Flamme.png");
    } 
    else if (StromFeedback1.value == "D" + StromFeedback2.value == "C" + StromFeedback3.value == "A" + StromFeedback4.value == "A" + LebensmittelFeedback1.value == "B" + LebensmittelFeedback2.value == "A" + LebensmittelFeedback3.value == "B") {
        currentImage.setAttribute("src", "Achievements/Hottest_Streak_Flamme.png");
    } 
    else if (StromFeedback2.value == "C" + StromFeedback3.value == "A" + StromFeedback4.value == "A" + LebensmittelFeedback1.value == "B" + LebensmittelFeedback2.value == "A" + LebensmittelFeedback3.value == "B" + LebensmittelFeedback4.value == "D") {
        currentImage.setAttribute("src", "Achievements/Hottest_Streak_Flamme.png");
    } 
    else if (StromFeedback3.value == "A" + StromFeedback4.value == "A" + LebensmittelFeedback1.value == "B" + LebensmittelFeedback2.value == "A" + LebensmittelFeedback3.value == "B" + LebensmittelFeedback4.value == "D" + RecyclingFeedback1.value == "B") {
        currentImage.setAttribute("src", "Achievements/Hottest_Streak_Flamme.png");
    } 
    else if (StromFeedback4.value == "A" + LebensmittelFeedback1.value == "B" + LebensmittelFeedback2.value == "A" + LebensmittelFeedback3.value == "B" + LebensmittelFeedback4.value == "D" + RecyclingFeedback1.value == "B" + RecyclingFeedback2.value == "A") {
        currentImage.setAttribute("src", "Achievements/Hottest_Streak_Flamme.png");
    } 
    else if (LebensmittelFeedback1.value == "B" + LebensmittelFeedback2.value == "A" + LebensmittelFeedback3.value == "B" + LebensmittelFeedback4.value == "D" + RecyclingFeedback1.value == "B" + RecyclingFeedback2.value == "A" + RecyclingFeedback3.value == "B") {
        currentImage.setAttribute("src", "Achievements/Hottest_Streak_Flamme.png");
    } 
    else if (LebensmittelFeedback2.value == "A" + LebensmittelFeedback3.value == "B" + LebensmittelFeedback4.value == "D" + RecyclingFeedback1.value == "B" + RecyclingFeedback2.value == "A" + RecyclingFeedback3.value == "B" + RecyclingFeedback4.value == "C") {
        currentImage.setAttribute("src", "Achievements/Hottest_Streak_Flamme.png");
    } 
    else {
        currentImage.setAttribute("src", "Achievements/Hottest_Streak.png")
    }
}


//Funktion um Abzeichen Medaille für den Bereich anzeigen zu lassen, wird bei Klick auf die letzte richtige Antwort aufgerufen      
function Klimawandel() {
    
    var currentImage = document.getElementById("Klimawandel");
    var imagesrc = currentImage.getAttribute("src");
    
    if (FolgenFeedback1.value == "A" + FolgenFeedback2.value == "B" + FolgenFeedback3.value == "D" + FolgenFeedback4.value == "D") {               //Alle Antworten des Bereichs richtig
        currentImage.setAttribute("src", "Achievements/Folgen_des_Klimawandels_Medaille.png");                                                  //Medaille anzeigen lassen
    }
    else {
        currentImage.setAttribute("src", "Achievements/Folgen_des_Klimawandels.png");                                                           //Ansonsten wird Fragezeichen abgerufen
    }
}

//Funktion um Abzeichen Medaille für den Bereich anzeigen zu lassen, wird bei Klick auf die letzte richtige Antwort aufgerufen  
function Strom() {
    
    var currentImage = document.getElementById("Strom");
    var imagesrc = currentImage.getAttribute("src");
    
    if (StromFeedback1Feedback1.value == "D" + StromFeedback2.value == "C" + StromFeedback3.value == "A" + StromFeedback4.value == "A") {          //Alle Antworten des Bereichs richtig
        currentImage.setAttribute("src", "Achievements/Strom_und_CO2-Verbrauch_Medaille.png");                                                  //Medaille anzeigen lassen
    }
    else {
        currentImage.setAttribute("src", "Achievements/Strom_und_CO2-Verbrauch.png");                                                           // Ansonsten wird Fragezeichen abgerufen
    }
}
    
//Funktion um Abzeichen Medaille für den Bereich anzeigen zu lassen, wird bei Klick auf die letzte richtige Antwort aufgerufen    
function Lebensmittel() {
    
    var currentImage = document.getElementById("Lebensmittel");
    var imagesrc = currentImage.getAttribute("src");
    
    if (LebensmittelFeedback1.value == "B" + LebensmittelFeedback2.value == "A" + LebensmittelFeedback3.value == "B" + LebensmittelFeedback4.value == "D") {  //Alle Antworten des Bereichs richtig
        currentImage.setAttribute("src", "Achievements/Lebensmittel_Medaille.png");                                                                         //Medaille anzeigen lassen
    }
    
    else {
        currentImage.setAttribute("src", "Achievements/Lebensmittel.png");                                                                                   //Ansonsten wird Fragezeichen abgerufen
    }
    
}
    
//Funktion um Abzeichen Medaille für den Bereich anzeigen zu lassen, wird bei Klick auf die letzte richtige Antwort aufgerufen  
function Recycling() {
    
    var currentImage = document.getElementById("Recycling");
    var imagesrc = currentImage.getAttribute("src");
    
    if (RecyclingFeedback1.value == "B" + RecyclingFeedback2.value == "A" + RecyclingFeedback3.value == "B" + RecyclingFeedback4.value == "C") {   //Alle Antworten des Bereichs richtig
        currentImage.setAttribute("src", "Achievements/Recycling_Medaille.png");                                                                //Medaille anzeigen lassen
    }
    else {
        currentImage.setAttribute("src", "Achievements/Recycling.png");                                                                         //Ansonsten wird Fragezeichen abgerufen
    }
}

//Funktion um Abzeichen für alle Fragen richtig beantwortet anzeigen zu lassen, wird bei Klick auf letzte richtige Antwort im Bereich Recycling aufgerufen
function Allwissend() {
    
    var currentImage = document.getElementbyId("Allwissend");
    var imagesrc = currentImage.getAttribute("src");
    
    if (FolgenFeedback1.value == "A" + FolgenFeedback2.value == "B" + FolgenFeedback3.value == "D" + FolgenFeedback4.value == "D" + StromFeedback1.value == "D" + StromFeedback2.value == "C" + StromFeedback3.value == "A" + StromFeedback4.value == "A" + LebensmittelFeedback1.value == "B" + LebensmittelFeedback2.value == "A" + LebensmittelFeedback3.value == "B" + LebensmittelFeedback4.value == "D" + RecyclingFeedback1.value == "B" + RecyclingFeedback2.value == "A" + RecyclingFeedback3.value == "B" + RecyclingFeedback4.value == "C") {                   //Alle Fragen richtig beantwortet
        currentImage.setAttribute("src", "Achievements/Allwissend_Pokal.png");                                            //Pokal anzeigen lassen
    }
    else {
        currentImage.setAttribute("src", "Achievements/Allwissend.png");                                                   //Ansonsten wird Fragezeichen abgerufen
    }
}
//Nickname speichern und anzeigen lassen
function showNickname(){
  var nickname = getCookie("nicknameID"); //Gespeicherten Nickname abrufen
  document.getElementById("username").innerHTML = nickname;  //div mit der id "username" mit dem abgerufenen Nickname befüllen
  document.getElementById("nickname").value = ""; //Reset empty text input field
}

    
//Streak anzeigen lassen
function Streak() {
    
    var i = 0;
    var ende = (FolgenFeedback1.value != "A" + FolgenFeedback2.value != "B" + FolgenFeedback3.value != "D" + FolgenFeedback4.value != "D" + StromFeedback1.value != "D" + StromFeedback2.value != "C" + StromFeedback3.value != "A" + StromFeedback4.value != "A" + LebensmittelFeedback1.value != "B" + LebensmittelFeedback2.value != "A" + LebensmittelFeedback3.value != "B" + LebensmittelFeedback4.value != "D" + RecyclingFeedback1.value != "B" + RecyclingFeedback2.value != "A" + RecyclingFeedback3.value != "B" + RecyclingFeedback4.value != "C")
    
var inv = setInterval(function() {     
    if(i < ende)
        
        document.getElementById("counter").innerHTML = ++i;
    
    else
        clearInterval(inv);
}, 3000 / 100);
}
