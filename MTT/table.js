$("#timetable").animatedModal({
    color: "#349fe7"
});
$(".close-animatedModal").click(function() {
    window.location = $(this).find("a").attr("href"); 
    return false;
  });
$(document).ready(function() {
    $("#timetable").trigger('click');
} ); 