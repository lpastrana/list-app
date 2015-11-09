$(document).ready(function() { 
// Creates list items from the input text field when the 'add' button is clicked  
 $("#add").click(function() {
      var item= $('#items')
     $('.cat').prepend('<li><input type="checkbox" id="check">'+item.val()+'<button id="remove">X</button></li>');
    });
// On click removes the list items individually  
    $('.cat').on('click', '#remove', function() {
      $(this).parent('li').remove();
    });  
// Once the input field is selected it will remove any text present
    $('input').on('click focusin', function() {
      this.value = '';
    }); 

   // $('checkbox').on('click', function() {
    
 //     $('#items li').addClass('line');
    //  alert('algo');    
  //  });
    $('.cat').on('click', '#check', function() {
      $(this).addClass('line');
    });
 });
