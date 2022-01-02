function load() {
    for (const [slot, subject] of Object.entries(SUBJECTS6)) {
      var anchors = document.getElementsByClassName(slot);
      for(var i = 0; i < anchors.length; i++) {
          anchors[i].innerHTML = subject.name;
          if (slot == "slotDa") { continue; }
          anchors[i].onclick = function() {
            // alert('Slot: '+slot+'\nSubject: '+subject.name+'\nLink: '+subject.link);
            if (subject.link != "")
              window.open(subject.link);
        }
      }
    }
  
    for (var i = 0; i < 6; i++) {
      for (var j = 0; j < 2; j++) {
        id = 'p'+i.toString()+j.toString();
        if (j == 0) {
          var anchor = document.getElementById(id+'a');
          anchor.innerHTML = PRACTICALS6[i][j][0];
          anchor = document.getElementById(id+'b');
          anchor.innerHTML = PRACTICALS6[i][j][1];
        }
        else {
          var anchor = document.getElementById(id);
          anchor.innerHTML = PRACTICALS6[i][j];
        }
      }
    }
  }
  
  // window.onload = load; // onload
  const p = document.getElementById('Sem6btn');
  p.onclick = load;