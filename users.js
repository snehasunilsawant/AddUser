$(document).ready(function(){
  $('h1').css("border-bottom","2px solid black");
  $('form').css("float","left");
  $('input').css("float","right");
  $('form').css('width','300px');
  $('td').css("border-bottom","1px solid black");

  $('form').on('submit',function(e){
    e.preventDefault();
    $('#myTable').show();
    $('#myTable').css('border','1px solid black');

    var firstName= $('form').find('input[name="first_name"]').val();
    var lastName = $('form').find('input[name="last_name"]').val();
    var emailAddr = $('form').find('input[name="email"]').val();
    var contactNum = $('form').find('input[name="contact"]').val();


    $('#myTable').append('<tr><td>' + firstName + '</td>' + '<td>' + lastName + '</td>' +'<td>' + emailAddr + '</td>'+'<td>' + contactNum + '</td></tr>' )

  })

})  // ready function ends here
