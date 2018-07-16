!function () {
    var duration = 20
    $('.actions').on('click', 'button', function (e) {
        let $button = $(e.currentTarget)
        let speed = $button.attr('data-speed')
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
    * 画一只可爱的哆啦A梦
    */

    *{
        margin:0;padding:0;
        transition: all 1s;
    }
    #code{
        margin:10px;
    }

   .doraemon {
    position: relative;
    width: 500px;
    height: 500px;
    margin: 0 auto;
    margin-top: 50px;
    }

    /*
    * 首先是多啦 A 梦的脸
    */
    
    .face {
    width: 480px;
    height: 470px;
    margin-left: 10px;
    border-radius: 50%;
    background-color: #019FE9;
    border: 6px solid #000;
    box-sizing: border-box;
    }

    .face-base {
        background-color: #fff;
        width: 420px;
        height: 400px;
        margin-left: 20px;
        border: solid 3px #000;
    }
    
    /*
    * 然后是多啦 A 梦的眼
    */

    .eyes {
    position: absolute;
    z-index: 10;
    top: 10px;
    width: 180px;
    height: 110px;
    left: 0;
    right: 0;
    margin: 0 auto;
    }
    
    .eye {
    display: inline-block;
    float: left;
    width: 50%;
    height: 100%;
    background-color: #fff;
    border-radius: 50%;
    border: 3px solid #000;
    }
    
    /*
    * 这里是多啦 A 梦的瞳孔
    */
    .pupil {
    position: relative;
    margin-top: 50px;
    margin-left: 4px;
    width: 35px;
    height: 40px;
    background-color: #000;
    border-radius: 50%;
    }
    
    .pupil::after {
    position: absolute;
    content: '';
    display: block;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background-color: #fff;
    margin-top: 10px;
    margin-left: 10px;
    }
    
    /*
    * 接着是多啦 A 梦的鼻子
    */

    .nose {
    position: relative;
    z-index: 10;
    top: 20%;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 50px;
    height: 50px;
    background-color: red;
    border-radius: 50%;
    border: 3px solid #000;
    }
    
    .nose-light {
    position: absolute;
    top: 10%;
    left: 20%;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #fff;
    }
    
    .noseline {
    position: absolute;
    z-index: 10;
    top: 146px;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: 5;
    height: 230px;
    width: 4px;
    background-color: #000;
    }
    
    /*
    * 然后是多啦 A 梦的胡子
    */

    .mustache {
    position: absolute;
    z-index: 10;
    top: 10%;
    left: 15%;
    height: 300px;
    width: 180px;
    }
    
    .reflect {
    top: -1%;
    left: 49%;
    transform: rotate(180deg);
    }
    
    .m03 {
    top: 50%;
    }
    
    .m01 {
    top: 25%;
    }
    
    .m {
    position: absolute;
    width: 140px;
    height: 3px;
    background-color: #000;
    }

    .m01 {
    top: 26%;
    transform: rotate(17deg);
    }

    .m02 {
    top: 40%;
    }

    .m03 {
    top: 55%;
    transform: rotate(-15deg);
    }

    /*
    * 接着是多啦 A 梦的嘴巴
    */

    .mouth {
    position: absolute;
    z-index: 1;
    top: 16%;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 100%;
    height: 300px;
    }

    .mouth-hidden {
    position: absolute;
    z-index: 2;
    top: 6%;
    right: 0;
    left: 0;
    margin: 0 auto;
    width: 70%;
    height: 80%;
    background-color: #fff;
    border-radius: 50%;
    }

    /*
    * 嘴巴上的线
    */

    .mouth-line {
        position: absolute;
        z-index: 1;
        top: 6%;
        right: 0;
        left: 0;
        margin: 0 auto;
        border: 3px solid #000;
        border-radius: 50%;
        width: 63%;
        height: 280px;
    }

    /*
    * 接着是多啦 A 梦的项链
    */

    .necklace {
        position: absolute;
        bottom: 40px;
        left: 0;
        right: 0;
        width: 280px;
        height: 30px;
        margin: 0 auto;
        border-radius: 40px;
        background-color: red;
        border: 4px solid #000;
    }

    /*
    * 然后是多啦 A 梦的铃铛
    */

    .bell {
        position: absolute;
        z-index: 10;
        top: -50%;
        left: 40%;
        width: 50px;
        height: 50px;
        background-color: #ECC81A;
        border-radius: 50%;
        border: 3px solid;
    }

    .ring {
        position: absolute;
        top: 20%;
        left: -15%;
        height: 10px;
        width: 58px;
        background-color: #ECC81A;
        border-radius: 50px;
        border: 3px solid #000;
    }

    .hole {
        position: absolute;
        top: 50%;
        left: 30%;
        width: 15px;
        height: 15px;
        background-color: #000;
        border-radius: 50%;
    }

    .hole::after {
        position: absolute;
        top: 5px;
        left: 6px;
        content: '';
        display: block;
        height: 20px;
        width: 3px;
        background-color: #000;
    }

    /*
    * 好了，画完了
    * 把这只可爱的多啦 A 梦送给你
    */
    `
    writeCode(',', code)
}.call()