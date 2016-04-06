
// assign  phone number masked plugin to all phone number input box.
    $(".formatted-phone-number").mask("(999) 999-9999");
// assign  date masked plugin to all date input box.
$(".date-formatted").mask("99/99/9999", {
        placeholder: "__/__/____"
    });


// Change location
    $('.change-location-here').click(function() {
        $('.change-location').slideDown('');
        $('.change-location-here').addClass('change-location-not-clickable');
        $('.change-location-cancel').removeClass('hide');
    });

    $('.change-location-cancel').click(function() {
        $('.change-location').slideUp('');
        $('.change-location-here').removeClass('change-location-not-clickable');
        $('.change-location-cancel').addClass('hide');
    });

    $('.change-location-here2').click(function() {
        $('.change-location2').slideDown('');
        $('.change-location-here2').addClass('change-location-not-clickable');
        $('.change-location-cancel2').removeClass('hide');
    });

    $('.change-location-cancel2').click(function() {
        $('.change-location2').slideUp('');
        $('.change-location-here2').removeClass('change-location-not-clickable');
        $('.change-location-cancel2').addClass('hide');
    });

// focus on next input box after date is selected

$("#desktop-datepicker").datepicker({
     onSelect: function(dateText, inst){
          currenttab = $(this).attr("tabindex");
          nexttab = currenttab * 1 + 1;
          $(":input").each(function(){
              if ($(this).attr("tabindex") == nexttab)
                 $(this).focus();
          });
