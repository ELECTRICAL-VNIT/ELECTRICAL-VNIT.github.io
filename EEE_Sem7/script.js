function load() {
  for (const [slot, subject] of Object.entries(SUBJECTS)) {
    var anchors = document.getElementsByClassName(slot);
    for(var i = 0; i < anchors.length; i++) {
        anchors[i].innerHTML = subject.name;
        anchors[i].onclick = function() {
            // alert('Slot: '+slot+'\nSubject: '+subject.name+'\nLink: '+subject.link);
            location.href=subject.link
        }
      }
    }
  }

window.onload = load; // onload
