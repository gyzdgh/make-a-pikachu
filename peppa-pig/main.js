!function () {
    var duration = 20
    $('.actions').on('click', 'button', function (e) {
        let $button = $(e.currentTarget)
        let speed = $button.attr('data-speed')
        let container = document.querySelector('#code');
        let styleTag = document.querySelector('#styleTag');
        $button.addClass('active')
            .siblings('.active').removeClass('active')
        switch (speed) {
            case 'slow':
                duration = 20
                break;
            case 'normal':
                duration = 1
                break;
        }
    })

    function writeCode(prefix, code, fn) {
        let container = document.querySelector('#code');
        let styleTag = document.querySelector('#styleTag');
        let n = 0
        let id
        id = setTimeout(function run() {
            n += 1
            container.innerHTML = code.substring(0, n)
            styleTag.innerHTML = code.substring(0, n)
            container.scrollTop = container.scrollHeight
            if (n < code.length) {
                id = setTimeout(run, duration)
            } else {
                fn && fn.call()
            }
        }, duration)
    }

    let code = `/*
    * 首先，准备一块草地
    */
    body {
        background-color: #87B9F6;
        overflow: hidden;
    }
    #ground {
        position: absolute;
        margin: auto;
        overflow: hidden;
        bottom: 0px;
        left: 0px;
        width: 100%;
        height: 27%;
        background-color: #77C76E;
        border-radius: 50% 50% 50% 50% / 3% 9% 0% 0%;
        z-index: -4;
    }
    /*
    * 接下来，我们开始画小猪佩奇
    */
    #peppa * {
        position: absolute;
    }
    
    #peppa {
        position: absolute;
        top: 65%;
        left: 55%;
        width: 300px;
        margin-left: -150px;
        margin-top: -100px;
    }
    /*
    * 首先，是小猪佩奇的肚子
    */
    .dress {
        top: 4px;
        left: 14px;
        width: 180px;
        height: 154px;
        background-color: #E9565E;
        border: 8px solid #E3353F;
        border-bottom: none;
        border-radius: 50% 50% 50% 50% / 100% 100% 0% 0%;
        z-index: -2;
    }
    
    .bottom_of_dress_1, .bottom_of_dress_2 {
        height: 2px;
        border-radius: 50%;
        z-index: 6;
    }
    
    .bottom_of_dress_1 {
        top: 168px;
        left: 14px;
        width: 194px;
        background-color: #E3353F;
        border-top: 5px solid #E3353F;
    }
    
    .bottom_of_dress_2 {
        top: 162px;
        left: 20px;
        width: 183px;
        background-color: #E9565E;
        border-top: 5px solid #E9565E;
    }
    
    .left_of_dress, .right_of_dress {
        top: 132px;
        height: 40px;
        width: 8px;
        background-color: #E3353F;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        z-index: 5;
    }
    
    .left_of_dress {
        left: 13px;
        border-right: 3px solid #E9565E;
        transform: rotate(9deg);
    }
    
    .right_of_dress {
        left: 199px;
        border-left: 3px solid #E9565E;
        transform: rotate(-6deg);
    }
    
    .bottom_of_dress_3 {
        top: 166px;
        left: 12px;
        height: 6px;
        width: 198px;
        background-color: #E3353F;
        border-radius: 5px;
        z-index: 5;
    }
    /*
    * 接着是小猪佩奇头的部分，首先是脸
    */
    .top_of_face {
        top: -107px;
        left: 40px;
        height: 150px;
        width: 147px;
        background-color: #FFB0DF;
        border: 7px solid #EB8DC2;
        border-bottom-left-radius: 220px;
        border-top-right-radius: 350px;
        border-bottom-right-radius: 235px;
        border-top-left-radius: 180px;
        transform: rotate(18deg);
    }
    
    .bottom_of_face_1, .bottom_of_face_2 {
        top: -69px;
        left: 31px;
        height: 121px;
        width: 149px;
        background-color: #FFB0DF;
        border-radius: 50%;
        transform: rotate(180deg);
        border: 7px solid #EB8DC2;
        border-bottom: 7px solid transparent;
        z-index: 2;
    }
    .cheek {
        top: -58px;
        left: 121px;
        width: 45px;
        height: 50px;
        background-color: #FF8CD1;
        border: 11px solid #FFB0DF;
        border-radius: 50%;
        transform: rotate(24deg);
        z-index: 3;
    }
    .part_of_face_1, .part_of_face_2 {
        background-color: transparent;
        border-bottom: 4px solid #FFB0DF;
        border-radius: 50%;
        z-index: 6;
    }
    
    .part_of_face_1 {
        top: -34px;
        left: 125px;
        width: 85px;
        height: 40px;
        transform: rotate(-85.5deg);
    }
    
    .part_of_face_2 {
        top: -8px;
        left: 150px;
        width: 50px;
        height: 20px;
        transform: rotate(-75deg);
    }
    /*
    * 接着是小猪佩奇的鼻子
    */
    .bottom_of_nose, .top_of_nose {
        background-color: #FFB0DF;
        border-radius: 50% 50% 50% 50% / 100% 100% 0% 0%;
    }
    
    .bottom_of_nose {
        top: -113px;
        left: -11px;
        width: 60px;
        height: 76px;
        border-left: 7px solid #EB8DC2;
        border-top: 7px solid #EB8DC2;
        transform: rotate(-70deg);
    }
    
    .top_of_nose {
        top: -149px;
        left: 11px;
        width: 68px;
        height: 105px;
        border-right: 7px solid #EB8DC2;
        border-top: 6px solid #EB8DC2;
        border-left: 2px solid transparent;
        transform: rotate(-73deg);
    }
    .center_of_nose {
        top: -128px;
        left: -16px;
        height: 58px;
        width: 42px;
        background-color: #FFB0DF;
        border: 7px solid #EB8DC2;
        border-radius: 50%;
        transform: rotate(29deg);
        z-index: 3;
    }
    
    .center_of_nose:before, .center_of_nose:after {
        position: absolute;
        content: "";
        width: 11px;
        height: 12px;
        background-color: #D667A9;
        border-radius: 50%;
        transform: rotate(-39deg);
    }
    
    .center_of_nose:before {
        top: 24px;
        left: 7px;
    }
    
    .center_of_nose:after {
        top: 19px;
        right: 8px;
    }
    .part_of_nose {
        top: -49px;
        left: 44px;
        width: 1px;
        height: 1px;
        background-color: #FFB0DF;
        border: 9px solid #FFB0DF;
        border-radius: 50px;
        z-index: 2;
    }
    /*
    * 然后是小猪佩奇眼
    */
    .eyes:before, .eyes:after {
        position: absolute;
        content: "";
        background-color: #FDFDFD;
        border: 5px solid #FDFDFD;
        border-radius: 47%;
        z-index: 2;
    }
    
    .eyes:before {
        top: -105px;
        left: 65px;
        width: 11px;
        height: 12px;
    }
    
    .eyes:after {
        top: -92px;
        left: 107px;
        width: 12px;
        height: 13px;
        transform: rotate(-20deg);
    }
    
    .right_pupil, .left_pupil {
        height: 11px;
        width: 10px;
        background-color: #000;
        border-radius: 47%;
        transform: rotate(40deg);
        z-index: 3;
    }
    
    .left_pupil {
        top: -99px;
        left: 73px;
    }
    
    .right_pupil {
        top: -85px;
        left: 116px;
    }
    
    .right_eye_socket, .left_eye_socket {
        width: 35px;
        height: 35px;
        background-color: #EB8DC2;
        border-radius: 50%;
    }
    
    .right_eye_socket {
        top: -98px;
        left: 100px;
        transform: rotate(-35deg);
        z-index: 2;
    }
    
    .left_eye_socket {
        top: -112px;
        left: 58px;
        z-index: 1;
    }
    /*
    * 接着是小猪佩奇的耳朵
    */
    .left_ear, .right_ear {
        height: 44px;
        background-color: #FFB0DF;
        border: 7px solid #EB8DC2;
        border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
        z-index: -1;
    }
    
    .left_ear {
        top: -154px;
        left: 108px;
        width: 21px;
        transform: rotate(190deg);
    }
    
    .right_ear {
        top: -132px;
        left: 149px;
        width: 23px;
        transform: rotate(210deg);
    }
    /*
    * 然后是小猪佩奇的嘴巴
    */
    .left_of_mouth, 
    .right_of_mouth, 
    .left_of_mouth_2,
    .right_of_mouth_2, 
    .bottom_of_mouth, 
    .top_of_mouth {
        border-radius: 50%;
        z-index: 2;
    }
    
    .left_of_mouth {
        top: -54px;
        left: 55px;
        width: 64px;
        height: 71px;
        background-color: transparent;
        border-bottom: 6px solid #D8468F;
        border-left: 4px solid transparent;
        border-right: 5px solid transparent;
        transform: rotate(24deg);
    }
    
    .right_of_mouth {
        top: -61px;
        left: 48px;
        width: 80px;
        height: 71px;
        background-color: transparent;
        border-bottom: 2px solid transparent;
        border-right: 8px solid #D8468F;
        border-top: 4px solid transparent;
        transform: rotate(92deg);
    }
    
    .left_of_mouth_2 {
        top: -12px;
        left: 56px;
        width: 6px;
        height: 14px;
        background-color: #D8468F;
        transform: rotate(-15deg);
    }
    
    .right_of_mouth_2 {
        top: -1px;
        left: 117px;
        width: 7px;
        height: 9px;
        background-color: #D8468F;
        transform: rotate(30deg);
    }
    
    .bottom_of_mouth {
        top: -60px;
        left: 49px;
        width: 80px;
        height: 71px;
        background-color: transparent;
        border-bottom: 2px solid transparent;
        border-right: 8px solid #D8468F;
        border-top: 4px solid transparent;
        transform: rotate(88deg);
    }
    
    .top_of_mouth {
        top: -47px;
        left: 59px;
        width: 63px;
        height: 63px;
        background-color: #FFB0DF;
    }
    /*
    * 下面是小猪佩奇的手
    */
    .left_hand, .right_hand {
        top: 72px;
        height: 10px;
        background-color: #FDB6E0;
        border-radius: 5px;
        border-bottom-right-radius: 50%;
        border-bottom-left-radius: 50%;
    }
    
    .left_hand {
        left: -29px;
        width: 75px;
        transform: rotate(156deg);
        z-index: -3;
    }
    
    .right_hand {
        left: 180px;
        width: 65px;
        transform: rotate(204deg);
        z-index: 2;
    }
    
    .first_finger, 
    .second_finger, 
    .third_finger, 
    .fourth_finger, 
    .fifth_finger, 
    .sixth_finger {
        height: 8px;
        background-color: #FDB6E0;
        border-radius: 5px;
        z-index: 3;
    }
    
    .first_finger {
        top: 75px;
        left: -26px;
        width: 22px;
        border-top-left-radius: 50%;
        border-top-right-radius: 35%;
        transform: rotate(16deg);
    }
    
    .third_finger {
        top: 87px;
        left: -17px;
        width: 18px;
        border-bottom-right-radius: 50%;
        transform: rotate(105deg);
    }
    
    .second_finger {
        top: 86px;
        left: -27px;
        width: 18px;
        border-bottom-right-radius: 50%;
        transform: rotate(145deg);
    }
    
    .fourth_finger {
        top: 78px;
        left: 230px;
        width: 22px;
        border-top-left-radius: 35%;
        border-top-right-radius: 50%;
        transform: rotate(-18deg);
    }
    
    .sixth_finger {
        top: 89px;
        left: 224px;
        width: 18px;
        border-top-right-radius: 50%;
        transform: rotate(75deg);
    }
    
    .fifth_finger {
        top: 88px;
        left: 234px;
        width: 18px;
        border-bottom-right-radius: 50%;
        border-bottom-left-radius: 50%;
        transform: rotate(38deg);
    }
    /*
    * 接着是小猪佩奇的尾巴
    */
    .left_of_tail, .right_of_tail {
        width: 19px;
        background-color: transparent;
        border: 8px solid #FDB6E0;
        border-radius: 50%;
        z-index: -3;
    }
    
    .left_of_tail {
        top: 100px;
        left: 194px;
        height: 30px;
        border-right: 7px solid transparent;
        transform: rotate(-80deg);
    }
    
    .right_of_tail {
        top: 102px;
        left: 215px;
        height: 24px;
        border-left: 7px solid transparent;
        border-top: 9px solid transparent;
        transform: rotate(80deg);
    }
    
    .top_of_tail {
        top: 111px;
        left: 212px;
        height: 8px;
        width: 8px;
        background-color: transparent;
        border: 6px solid transparent;
        border-top: 8px solid #FDB6E0;
        border-radius: 50%;
        z-index: -3;
    }
    
    .bottom_of_tail {
        top: 125px;
        left: 240px;
        width: 10px;
        height: 8px;
        background-color: #FDB6E0;
        border-radius: 50%;
        transform: rotate(100deg);
        z-index: 2;
    }
    /*
    * 然后是小猪佩奇的腿
    */
    .left_leg, .right_leg {
        top: 172px;
        width: 10px;
        height: 40px;
        background-color: #FCB8E1;
        transform: rotate(-1.5deg);
        z-index: -1;
    }
    
    .left_leg {
        left: 72px;
    }
    
    .right_leg {
        left: 156px;
    }
    /*
    * 接着是小猪佩奇的脚
    */
    .left_foot, .right_foot {
        top: 185px;
        width: 55px;
        height: 55px;
    }
    
    .left_foot {
        left: 32px;
    }
    
    .right_foot {
        left: 116px;
    }
    
    .bottom_of_foot, 
    .top_of_foot, 
    .left_of_foot, 
    .right_of_foot {
        background-color: #000;
    }
    
    .bottom_of_foot {
        top: 24px;
        left: 8px;
        width: 43px;
        height: 7px;
        border-bottom: 1px solid black;
        border-radius: 5px;
        transform: rotate(-1deg);
    }
    
    .top_of_foot {
        top: 20px;
        left: 11px;
        width: 40px;
        height: 5px;
        border-radius: 5px;
        transform: rotate(6.2deg);
    }
    
    .left_of_foot {
        top: 18px;
        left: 2px;
        width: 22px;
        height: 13px;
        border-bottom: 1px solid black;
        border-radius: 50%;
    }
    
    .right_of_foot {
        top: 22px;
        left: 44px;
        width: 8px;
        height: 8px;
        border-bottom: 1px solid black;
        border-radius: 50%;
    }
    /*
    * 最后再来一片阴影
    */
    .shadow {
        top: 196px;
        left: 3px;
        width: 205px;
        height: 31px;
        background-color: #589454;
        border-radius: 50%;
        z-index: -3;
    }
    /*
    * 好了，这只可爱的小猪佩奇送给可爱的你
    */
    `

    writeCode(',', code)
}.call()