$(document).on('turbolinks:load', function() {
  $('#new_message').on('keypress', function(e){
    if(e && e.keyCode == 13) {
      e.preventDefault();
      $.ajax({
        type: $(this)[0].method,
        url: $(this)[0].action,
        dataType: 'script',
        data: $(this).serialize()
      })
    }
  })
})