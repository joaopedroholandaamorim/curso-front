jQuery(function($){
    let h4 = $('h4') // tag
    let card_link = $('.featured-item a') // class
    let home = $('#home') // id
    let p1 = $('.featured-item:nth(0)')

    
    // produto fora de estoque
    p1.hide(2000,function(){
        alert($(this).find('h4').text() +'ESGOTADO')
    });

    //produto de volta ao estoque
    p1.show(2000,function(){
        alert($(this).find('h4').text() +'de volta ao estoque')
    });

    /*card-link.on('click' , function(evento){
        evento.preventDefault();
        alert('produto esgotado')
    }); */
});