$(document).ready(function(){
  // call functions here
submitForm();
});

// define functions here
function submitForm(){

  $('form').on('submit', function(event){
    let something = $('#item').val();
    $('ol').append('<li>' + something + '</li>');
  event.preventDefault();
  });
}
