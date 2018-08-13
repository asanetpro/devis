jQuery(function($) {

	/* Email Syntax Check */
    var mailValidate = function(mail) {
        var reg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

        if(!reg.test(mail) ) {
            return false;
        } else {
            return true;
        }
    }
    
    //Trigger Pageview on hit step 1
    $(".step1").mouseenter(function() { 
        if(!$(this).hasClass('isTriggerd')) {
            $(this).addClass('isTriggerd');
            
             ga('send', { 'hitType': 'pageview', 'page': '/wizzard/step-1-of-8/', 'title': 'Step-1-of-8' });
        }
    }); 
	
	$('.answer-wrap').click(function() {
		var step = $(this).closest('.step-wrap').attr('data-step');
			nextstep = parseInt(step) + parseInt(1);
			parentWrap = $(this).closest('.step');
		
		var attr = $(this).attr('data-active');
		
		if($('.step' + nextstep).length) {
			
            $(this).addClass('active-answer');
			$(this).closest('.step-wrap').addClass('finished-step');
            $(this).closest('.konfi-section').find('.step' + nextstep).closest('.step').slideDown('slow', function() {
                
                ga('send', { 'hitType': 'pageview', 'page': '/wizzard/step-' + nextstep + '-of-8/', 'title': 'Step-' + nextstep + '-of-8' });
                
                $('html, body').animate({
                    scrollTop: $('.step' + nextstep).offset().top
                }, 700);
                
            });
            
			if($(this).closest('.konfi-section').find('.dataForm').find('input.step' + step + '_input').length) {
				$(this).closest('.konfi-section').find('.dataForm').find('input.step' + step + '_input').val($(this).attr('data-val'));
			}
		}
		
	});
    
    $(document).keypress(function(e) {
        if(e.which == 13 && $('.plz-row').is(':visible')) {
            $('.showDataForm').trigger('click');
            $('.form-row input').removeAttr('style');
        }
    });
    
    $('.showDataForm').click(function() {
        parentWrap = $(this).closest('.step');
        step = $(this).closest('.step-wrap').attr('data-step');
        nextstep = parseInt(step) + parseInt(1);
        isPlz = true;

        parentWrap.find('.plz_finder').removeAttr('style');
								 
		var plz_check = parentWrap.find(".plz_finder").val();
        
		if(!plz_check.match(/^\d+$/) || (plz_check.length != 5) || plz_check == '0000') {
			parentWrap.find('.plz_finder').css('border-color', '#bf1238');
            parentWrap.find('.plzErrorMsg').html('* Code postal invalide');
			isPlz = false;
		}
        
        if(isPlz) {
            $this = $(this);
            
            $this.closest('.step-wrap').addClass('finished-step');
            $this.closest('.konfi-section').find('.step' + nextstep).closest('.step').slideDown('slow', function() {
                ga('send', { 'hitType': 'pageview', 'page': '/wizzard/step-8-of-8/', 'title': 'Step-8-of-8' });
                $('html, body').animate({
                    scrollTop: $('.step' + nextstep).offset().top
                }, 700);
            });
            
            setTimeout(function(){
                    
                $('.search-col').slideUp();
                $('.finded-col').slideDown();
                
            }, 2000);
            
            setTimeout(function(){
                nextstep = parseInt(nextstep) + parseInt(1);
                $this.closest('.konfi-section').find('.step' + nextstep).closest('.step').slideDown('slow', function() {
                    $('.form-row').find('input').removeAttr('style');
                    $('html, body').animate({
                        scrollTop: $('.step' + nextstep).offset().top
                    }, 700);
                    
                });
                
            }, 3000);
        }
    });
	
	/* Form Submit */
    $('form.dataForm').submit(function() {

        /* Felder überprüfen */
        var send = true;                

        /* Felder Array für Validierung */
        var fields = {
            'konfName' : $(this).find('input.konfName').val(), 
            'konfNachname': $(this).find('input.konfNachname').val(),
            'konfStrasse': $(this).find('input.konfStrasse').val(),
            'konfPlz': $(this).find('input.konfPlz').val(),
            'konfTel': $(this).find('input.konfTel').val(),
            'konfMail': $(this).find('input.konfMail').val(),
        };

        $(this).find('.agbCheck').closest('label').removeAttr('style');
        
        /* Felder durchlaufen und abfragen ob sie leer sind, wenn ja dann ist send = false */
        $.each(fields, function(fieldname, selector) {
            $('.' + fieldname).removeAttr('style');
            $(this).find('input.konfMail').removeAttr('style');
            
            if(selector == '') {
                $('.' + fieldname).css('border', '1px solid #bf1238');
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
      
        /* Wenn alles gefüllt ist, AJAX ausführen */
        if(send) {
            return true;
        } else {
            return false;
        }

    });
    
    $('.showNextStep').click(function() {
        var parentDiv = $(this).closest('.step');
            currentStep = parentDiv.attr('data-step');
            nextStep = parseInt(currentStep) + parseInt(1),
            isPlz = true,
            showLoader = false;
        
        /** Existiert ein naechster Step? */
        if($('.step-' + nextStep).length) {
            
            var showNext = true;
            
            if(parentDiv.find('input.required').length) {
                
                /** Input Felder im Step ueberpruefen */
                parentDiv.find('input.required').each(function() {
                    
                    if($(this).is('input[type="text"]')) {
                        
                        if(!$(this).hasClass('postal-input')) {
                            if($(this).val() == '') {
                                $(this).css('border', '1px solid red');
                                showNext = false;
                            } else {
                                $(this).removeAttr('style');
                                showNext = true;
                            }   
                        } else {
                            //Postal check
                            $(this).removeAttr('style');
                    								 
                    		var plz_check = $(this).val();
                            
                    		if(!plz_check.match(/^\d+$/) || (plz_check.length != 5) || plz_check == '0000') {
                    			parentDiv.find('.postal-input').css('border-color', '#bf1238');
                                parentDiv.find('.plzErrorMsg').html('* Ongeldige postcode');
                    			isPlz = false;
                    		} else {
                  		        showLoader = true;
                    		}
                        }
                    } else {
                        //Hole Namen um Group zu testen
                        name = $(this).attr('name');
                        checkedCount = parentDiv.find('input[name="' + name + '"]:checked').length;
                         
                        //Wenn keiner gecheckt ist, dann faerben
                        if(checkedCount < 1) {
                            $(this).closest('.row').find('.radioDesc').css('color', 'red');
                            showNext = false;
                        } else {
                            $(this).closest('.row').find('.radioDesc').removeAttr('style');
                            showNext = true;
                        }
                    }
                });
                                
            }
            
            //Wenn Select via "Konfselect", dann check ob HiddenFeld vorhanden ist
            if(parentDiv.find('input[type="hidden"]').length && parentDiv.find('input[type="hidden"]').val() == '') {
                showNext = false;
            }
            
            if(showLoader) {
                var konfi = $(this).closest('.konfigurator');
                var loaderDiv = $('.step.loader');
                
                parentDiv.slideUp();
                $('.step.loader').slideDown();
                
                setTimeout(function(){    
                    loaderDiv.find('.search-col').slideUp();
                    loaderDiv.find('.finded-col').slideDown();
                }, 2000);
                
                setTimeout(function(){
                    loaderDiv.slideUp();
                    konfi.find('.data-step').slideDown();
                }, 4000);
            } else {
                if(showNext === true && isPlz === true) {
                    parentDiv.slideUp();
                    $('.step-' + nextStep).slideDown();
                    return false;
                }   
            }
        }        
        
    });
    
    
    //HiddenFeld füllen anhand des data-val attr
    $('.konfSelect').click(function() {
        var parentDiv = $(this).closest('.step');
            currentStep = parentDiv.attr('data-step');
            val = $(this).attr('data-val');
        
        parentDiv.find('.konfSelect').removeClass('active');
        $(this).addClass('active');
        
        parentDiv.find('input[name="step' + currentStep + '_input"]').val(val);
        parentDiv.find('.showNextStep').trigger('click');
    });
	
});