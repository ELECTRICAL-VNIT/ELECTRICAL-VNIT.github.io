function load() {
    for (const [slot, subject] of Object.entries(SUBJECTS4)) {
      var anchors = document.getElementsByClassName(slot);
      for(var i = 0; i < anchors.length; i++) {
          anchors[i].innerHTML = subject.name;
          anchors[i].onclick = function() {
            // alert('Slot: '+slot+'\nSubject: '+subject.name+'\nLink: '+subject.link);
            if (subject.link != "")
              window.open(subject.link);
        }
      }
    }
  
    // for (var i = 0; i < 6; i++) {
    //   for (var j = 0; j < 2; j++) {
    //     var anchor = document.getElementById('p'+i.toString()+j.toString());
    //     anchor.innerHTML = PRACTICALS3[i][j].join('')
    //   }
    // }
  }
  

// window.onload = load; // onload
const q = document.getElementById('sem4jsbtn');
q.onclick = load;