$(document).ready(function() { 
  // Creates list items from the input text field when the 'add' button is clicked  
  $("#add").click(function() {
      var item= $('#items');
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
// Adds a line-through from the class 'line' on the list item when the checkbox is selected and removed when clicked again 
    $('.cat').on('click', '#check', function() {
       $(this).parent('li').toggleClass('line');
    });
});
