// $(function(){
//     let a = $(".slide");
//     console.log(a);
// });

// $(document).ready(function(){
//        let a = $(".slide");
//        console.log(a);
// });

window.onload = function(){
    let imgList = $(".slide-image");
    let current = 0;
    let isSlide = false;

    function slide(target, dir){
        if(target >= imgList.length || target < 0 || isSlide) return;

        isSlide = true;

        imgList
        .eq(target)
        .css({"left": `${dir * 100}%`})
        .animate({"left":0}, 800);

        imgList
        .eq(current)
        .animate({"left":`${-100 * dir}%`}, 800, function(){
            isSlide = false;
        });
        current = target;

        //핀에대한 작업은 여기서 나중에
        $(".pin").removeClass("active");
        $(".pin").eq(target).addClass("active");
    }

    imgList.css({"left":"100%"});
    imgList.eq(current).css("left", 0);

    $(".pin").on("click", function(){
        let idx = $(this).index();
        slide(idx,idx - current < 0 ? -1 : 1);

        $(".pin").removeClass("active");
        $(".pin").eq(idx).addClass("active");
    });

    $(".slide-btn").on("click", function(){
        let dir = $(this).data("dir") * 1; //숫자로 강제 형변환
        slide(current + dir, dir);
    });

};