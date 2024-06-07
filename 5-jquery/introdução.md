## jquery

## seletores 

    jQuery(function($){
        $('h4') // tag
        $('.class') // class
        $('#id') // id
    })
## manipulando css
    - $('.class a').addclass('btn btn-dark')
    - $('.class h4').fadeIn(2000) // vai mostrar o h4
    - $('.class h4').fadeOut(2000) // vai ocultar o h4
    - $('.class h4').toggle(2000) // vai inverter o estado do this
    - $('.class h4').css('color', '#ff0000') // altera a cor para vermelho
    - $('.class a').addclass('active')
    - $('.class a').removeclass('active')

## manipulação de eventos
    $('.class').click(function() {
        $(this).css({
            'color' : '#ff0000' ,
            'font-weight' : '100',
        });
    });

    $('.class a').on('click' , function(evento){
        evento.preventDefault();
        alert('produto esgotado')
    });

