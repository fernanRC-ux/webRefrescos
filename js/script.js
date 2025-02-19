$(document).ready(function()
{
    /* Agregar la clase active al primer enlace */

    $('.lista-categoria .categoria-item[category="todo"]').addClass('ct_item-active');

    /* Filtrando productos */

    $('.categoria-item').click(function()
    {
        var catproducto = $(this).attr('category');

        /* Agregando la clase active al enlace seleccionado */

        $('.categoria-item').removeClass('ct_item-active');
        $(this).addClass('ct_item-active');

        /* Ocultando productos de categorias no seleccionada */

        $('.producto-item').css('trasnform', 'scale(0)');
        function hideproducto()
        {
          $('.producto-item').hide();
        }setTimeout(hideproducto,400);

        /* Mostrando productos seleccionados */

        function showproducto()
        {
          $('.producto-item[category="'+catproducto+'"]').show();
          $('.producto-item[category="'+catproducto+'"]').css('trasnform', 'scale(1)');       
        }setTimeout(showproducto,400); 
    });

    /* Moatrando todos los productos */

    $('.categoria-item[category="todo"]').click(function()
    {
      function showtodo()
      {
        $('.producto-item').show();
        $('.producto-item').css('trasnform', 'scale(1)');
      }setTimeout(showtodo,400);      
    
    });
});