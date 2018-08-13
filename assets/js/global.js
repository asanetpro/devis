new WOW().init();

jQuery(function($) {    
    
    //Lawbar
    var acceptLawBar = localStorage.getItem("accept_lawbar");
    
    //If has no cookie
    if(!acceptLawBar) {
        $('.lawbar').slideDown();
    }
    $('.accept-law').click(function() {
        $(this).closest('.lawbar').slideUp();
        localStorage.setItem("accept_lawbar", true); 
    });
    //Lawbar
    
    var p = $(".pulsate");
    for(var i=0; i<3; i++) {
    p.animate({opacity: 0.2}, 1000, 'linear')
     .animate({opacity: 1}, 1000, 'linear');
    }
    
    $('.page_up').hide();
    $(".sticky").sticky({topSpacing:0});
    
    $('.scrollTo').click(function() {
        var $goTo = $(this.hash);
        
        $goTo = $goTo.length && $goTo || $('[id=' + this.hash.slice(1) +']');
    
        if ($goTo.length) {
            var goToOffset = $goTo.offset().top;
            
            /* Nach Klick Handynavigation schliessen */
            $('.navbar-collapse').removeClass('in');            
                        
            $('html,body').animate({
                scrollTop: goToOffset - 61
            }, 1000);
    
            return false;
        }
    });
    
    $(window).scroll(function() {

        if ($(this).scrollTop() > 200) {
            $('.page_up').show();
        } else {
            $('.page_up').hide();
        }
         
    });

    
    /* Email Syntax Check */
    var mailValidate = function(mail) {
        var reg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

        if(!reg.test(mail) ) {
            return false;
        } else {
            return true;
        }
    }
    $('.directContactForm broForm').submit(function() {

        /* Felder �berpr�fen */
        var send = true
            closestForm = $(this);                

        /* Felder Array f�r Validierung */
        var fields = {
            'broName' : closestForm.find('input#broName').val(), 
            'broNachName' : closestForm.find('input#broNachName').val(), 
            'broStrasse': closestForm.find('input#broStrasse').val(),
            'broStadt': closestForm.find('input#broStadt').val(),
            'broTel': closestForm.find('input#broTel').val(),
            'broMail': closestForm.find('input#broMail').val(),
            'broDate': closestForm.find('input#broDate').val(),

        };

        /* Felder durchlaufen und abfragen ob sie leer sind, wenn ja dann ist send = false */
        $.each(fields, function(fieldname, selector) {
            closestForm.find('#' + fieldname).removeAttr('style');
            
            if(selector == '') {
                closestForm.find('#' + fieldname).css('border', '1px solid #bf1238');
                send = false;
            }
        });
        
        if($(this).find('input:checkbox[name="contactPrivacy"]').length) {
            if(!$(this).find('input[name="contactPrivacy"]').is(':checked')) {
                $(this).find('.privacy-wrap .privacy-error-wrap').slideDown();
                send = false;
            } else {
                $(this).find('.privacy-wrap .privacy-error-wrap').slideUp();
            } 
        } 

        /* Wenn alles gef�llt ist, AJAX ausf�hren */
        if(send) {
            return true;
        } else {
            return false;
        }

    });
    
    /* Form Submit */
    $('form.broForm').submit(function() {

        /* Felder �berpr�fen */
        var send = true
            closestForm = $(this);                

        /* Felder Array f�r Validierung */
        var fields = {
            'broName' : closestForm.find('input#broName').val(), 
            'broNachName' : closestForm.find('input#broNachName').val(), 
            'broStrasse': closestForm.find('input#broStrasse').val(),
            'broStadt': closestForm.find('input#broStadt').val(),
            'broTel': closestForm.find('input#broTel').val(),
            'broMail': closestForm.find('input#broMail').val(),
  

        };

        /* Felder durchlaufen und abfragen ob sie leer sind, wenn ja dann ist send = false */
        $.each(fields, function(fieldname, selector) {
            closestForm.find('#' + fieldname).removeAttr('style');
            
            if(selector == '') {
                closestForm.find('#' + fieldname).css('border', '1px solid #bf1238');
                send = false;
            }
        });
        
        if($(this).find('input:checkbox[name="contactPrivacy"]').length) {
        	if(!$(this).find('input[name="contactPrivacy"]').is(':checked')) {
        		$(this).find('.privacy-wrap .privacy-error-wrap').slideDown();
        		send = false;
        	} else {
        		$(this).find('.privacy-wrap .privacy-error-wrap').slideUp();
        	} 
        } 

        /* Wenn alles gef�llt ist, AJAX ausf�hren */
        if(send) {
            return true;
        } else {
            return false;
        }

    });



        

    $('.datepicker').datepicker({
        format: 'mm-dd-yyyy',
        language: 'fr',
        startDate: '+0d',
        autoclose: true,
    });
    
    $('.showVisitForm').click(function() {
         $('a[href="#contact"]').trigger('click');
         
        var goToOffset = $('.hero').offset().top;    
                
        $('html,body').animate({
            scrollTop: goToOffset
        }, 1000);
         
         return false;
    });
    
});