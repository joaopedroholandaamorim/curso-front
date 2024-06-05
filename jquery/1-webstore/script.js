jQuery(function($){
    let h4 = $('h4') // tag
    let card_link = $('.featured-item a') // class
    let home = $('#home') // id
    let p1 = $('.featured-item:nth(0)')
    let botao = $('#form-submit')
    let email = $('#email')
    let modal = $('.nav-modal-open')

    
    // produto fora de estoque
    //p1.hide(2000,function(){
        //alert($(this).find('h4').text() +'ESGOTADO')
    //});

    //produto de volta ao estoque
    //p1.show(2000,function(){
        //alert($(this).find('h4').text() +'de volta ao estoque')
    //});

    botao.on('click', function(evento){
        evento.preventDefault()
        if(email.val() != '') {
            email.animate({
                opacity: "toggle",
                top:"-50"
            } , 1000,function(){
                console.log($(this).val())
            })
        }
    });

    modal.on('click', function(evento){
        evento.preventDefault()
        let elem = $(this).attr('rel')
        $('.modal-body').html($('#' + elem).html())
        $('.modal-header h5.modal-title').html($(this).text())
        let mymodal = new bootstrap.Modal($('#modalId'))
        mymodal.show()
    });

    function validate(elem , help) {
        if(elem.val() == ''){
            elem.addClass('invalid')
            elem.parent().find('.text-muted').show()
            return false
        }
        else{
            elem.parent().find('.text-muted').hide()
            elem.removeClass('invalid')
        }
    }

    
    $('body').on('submit', '.modal-body .form', function(evento){
        evento.preventDefault()
        const inputname = $('#nome')
        const inputemail = $('#e-mail')

        validate(inputname)
        validate(inputemail)
       if(inputname.hasClass('invalid') || inputemail.hasClass('invalid')){
            console.log('verificar pontos obrigatorios')
            return false
       }
       else {
            return true
       }    
    });

    /*
    validate
    */
    {
        $('body').on('blur','#nome', function(){
            validate($(this))
        });

        $('body').on('blur','#e-mail', function(){
            validate($(this))
        });

        $('body').on('blur','#data', function(){
            validate($(this))
        });

        $('body').on('blur','#time', function(){
            validate($(this))
        });

        $('body').on('blur','#cep', function(){
            validate($(this)) 
        });

        $('body').on('blur','#phone', function(){
            validate($(this))
        });

        $('body').on('blur','#cpf', function(){
            validate($(this))
        });
    }
    
    /*
    mascaras
    */
    {
        $('body').on('focusin','#data', function(){
            $(this).mask('00/00/0000');
        });
    
        $('body').on('focusin','#time', function(){
            $(this).mask('00:00:00');
        });
    
        $('body').on('focusin','#cep', function(){
            $(this).mask('00000-000');
        });
    
        $('body').on('focusin','#phone', function(){
            $(this).mask('00000-0000');
        });
    
        $('body').on('focusin','#cpf', function(){
            $(this).mask('000.000.000-00');
        });
    }

    

    /*card-link.on('click' , function(evento){
        evento.preventDefault();
        alert('produto esgotado')
    }); */

});