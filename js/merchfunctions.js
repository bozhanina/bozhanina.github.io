$(document).ready(function(){
    //if btns are clicked
    var $btns = $('.btn').click(function() {
        if(this.id == 'all') {
            //do something
            //shows everyhing in the elements in the div basket
            $('#basket > div').show();
        }   
        else {
            //not the all button
            //show only the clicked
            var $el = $('.' + this.id).show ();
            console.log($el);
            $('#basket > div').not($el).hide();
        }
        $btns.removeClass('active');
        $(this).addClass('active');
     })

})