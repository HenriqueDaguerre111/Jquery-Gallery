$(document).ready(function() {
    
    $('header button').click(function(){
       $('form').slideDown(); 
    })


    $('#btn-cancel').click(function(){
        $('form').slideUp();
    })


    $('form').on('submit', function(e){
        e.preventDefault()
        const newImageAdress = $('#new-image-adress').val()
        const NewItem = $('<li style="display:none;"></li>')
console.log(newImageAdress)
        $(`<img src="${newImageAdress}"/>`).appendTo(NewItem)
        $(`<div class='overlay-image-link'>
        <a href='${newImageAdress}' target='_blank' title='Open'>Open</a>
        </div>`).appendTo(NewItem)

        $(NewItem).appendTo('ul')
        $(NewItem).fadeIn(1000)

        $('#new-image-adress').val('')

    })

})

