function carusel(){
    var current = 0;
    var imagenes = new Array();

    // el valor 7 es el numero de imagen
    // el valor 4 es las casilla, que aparece, si queremos 4 casilla tedremos poner el valor de 4 y modificar el estulo del carusel para aumenta el tamaño del div
    $(document).ready(function() {
        var numImages = 7;
        if (numImages <= 4) {
            $('.right-arrow').css('display', 'none');
            $('.left-arrow').css('display', 'none');
        }

        $('.left-arrow').on('click',function() {
            if (current > 0) {
                current = current - 1;
            } else {
                current = numImages - 4;
            }
            $(".carrusel").animate({"left": -($('#product_'+current).position().left)}, 600);

            return false;
        });

        $('.left-arrow').on('hover', function() {
            $(this).css('opacity','0.5');
        }, function() {
            $(this).css('opacity','1');
        });

        // 
        $('.right-arrow').on('hover', function() {
            $(this).css('opacity','0.5');
        }, function() {
            $(this).css('opacity','1');
        });

        $('.right-arrow').on('click', function() {
            if (numImages > current + 4) {
                current = current+1;
            } else {
                current = 0;
            }
            $(".carrusel").animate({"left": -($('#product_'+current).position().left)}, 600);

            return false;
        });
    });
}