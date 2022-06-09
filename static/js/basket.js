$(document).ready(function () {
    //$('.basket_list').click(function () {
    $('.basket_list').on('click','input[type=number]', function(){
        let pk = event.target.name;
        console.log(event.target)
        let quantity = event.target.value;
        $.ajax({
            url: '/basket/edit/' + pk + '/' + quantity + '/',
            success: function (data) {
                console.log(data)
                $('.basket_list').html(data.result);
            }
        });
    });


//    $('.basket_list').on('click','add_quantity', function(){
//        let pk = $(this).attr('data_pk');
//        let quantity = parseInt($(this).attr('data_quantity')) + 1;
//        console.log(pk)
//        console.log(quantity)
//        $.ajax({
//            url: '/basket/edit/' + pk + '/' + quantity + '/',
//            success: function (data) {
//                console.log(data)
//                $('.basket_list').html(data.result);
//           }
//        });
//    });
});



