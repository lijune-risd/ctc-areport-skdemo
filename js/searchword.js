
$(document).ready(function(){
    $('input#filtersearch').bind('keyup change', function () {
        if ($(this).val().trim().length !== 0) {
    
            $('#list li').show().hide().each(function () {
                if ($(this).is(':icontains(' + $('input#filtersearch').val() + ')'))
                    $(this).show();
            });
        }
        else {
            $('#list li').show().hide().each(function () {
                $(this).show();
            });
        }
    });

    $.expr[':'].icontains = function (obj, index, meta, stack) {
        return (obj.textContent || obj.innerText || jQuery(obj).text() || '').toLowerCase().indexOf(meta[3].toLowerCase()) >= 0;
    };
});