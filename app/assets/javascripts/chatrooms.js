$(document).ready(function() {
  $('#new_message').on('keypress', function(e){
    console.log(e.keyCode)
    if(e && e.keyCode == 13) {
      e.preventDefault();
      $(this).submit();
    }
  })
})