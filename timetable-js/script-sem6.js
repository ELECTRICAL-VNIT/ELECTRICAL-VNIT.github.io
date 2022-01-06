function openCitySix(evt, dayName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent6");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks6");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(
        " active",
        ""
      );
    }
    document.getElementById(dayName).style.display = "block";
    evt.currentTarget.className += " active";

  
  }

  // Get the element with id="defaultOpen" and click on it
 
  var sem6days =  document.getElementsByClassName("tablinks6");
  
  var j = d.getDay();

  if(j!=0){
    sem6days[j-1].setAttribute('id','defaultOpen6');
  } else {
    sem6days[0].setAttribute('id','defaultOpen6');
  }
  


document.getElementById("defaultOpen6").click(); 