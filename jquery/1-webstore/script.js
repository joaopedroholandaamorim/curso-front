jQuery(function($){
    let h4 = $('h4') // tag
    let card_link = $('.featured-item a') // class
    let home = $('#home') // id
    let p1 = $('.featured-item:nth(0)')
    let botao = $('#form-submit')
    let email = $('#email')
    let modal = $('.nav-modal-open')

    
    // produto fora de estoque
    /*p1.hide(2000,function(){
        alert($(this).find('h4').text() +'ESGOTADO')
    });

    //produto de volta ao estoque
    p1.show(2000,function(){
        alert($(this).find('h4').text() +'de volta ao estoque')
    });*/

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

    /*card-link.on('click' , function(evento){
        evento.preventDefault();
        alert('produto esgotado')
    }); */
});