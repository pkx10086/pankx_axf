$(function(){

    initTopSwiper()
    initMenuSwiper();
    //绑定添加商品按钮
    initProudctButtonEvent();
})
function initTopSwiper(){
 console.log(new Date().getTime())
    var swiper = new Swiper("#topSwiper", {
        loop: true,
        pagination:".swiper-pagination",
        speed:500,
        autoplay:2000,
    })
}


function initMenuSwiper(){

    var swiper = new Swiper("#swiperMenu", {
        slidesPerView: 3,
        loop: true,
        pagination:".swiper-pagination",
        speed:500,
        autoplay:2000,
    })
}
//增加商品到cart
function initProudctButtonEvent(){
    $(".mainInfo  button").on("click",function(e){
        $.ajax({
            url:"/axf/addgoods/",
            async:true,
            type:"POST",
            data:{goods_id:"1"},
            dataType:"json",
            success:function(data){alert(data.code)
            console.log(data);
        },error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert(XMLHttpRequest.status);
            alert(XMLHttpRequest.readyState);
            alert(textStatus);
        },

        })
    });

}