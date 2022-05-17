window.onload = function () {
    // 网页点击爱心特效
    !function (e, t, a) {
        function r() {
            for (var e = 0; e < s.length; e++) s[e].alpha <= 0 ?
                (t.body.removeChild(s[e].el), s.splice(e, 1)) : (s[e].y--, s[e].scale += .004, s[e].alpha -= .013, s[e].el.style.cssText = "left:" + s[e].x + "px;top:" + s[e].y + "px;opacity:" + s[e].alpha + ";transform:scale(" + s[e].scale + "," + s[e].scale + ") rotate(45deg);background:" + s[e].color + ";z-index:99999"); requestAnimationFrame(r)
        }
         function n() {
              var t = "function" == typeof e.onclick && e.onclick; e.onclick = function (e) { t && t(), o(e) } 
            
            } function o(e) { 
                var a = t.createElement("div"); a.className = "heart", s.push({ el: a, x: e.clientX - 5, y: e.clientY - 5, scale: 1, alpha: 1, color: c() }), t.body.appendChild(a) } function i(e) { var a = t.createElement("style"); a.type = "text/css"; try { a.appendChild(t.createTextNode(e)) } catch (t) { a.styleSheet.cssText = e } t.getElementsByTagName("head")[0].appendChild(a) } function c() { return "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + ")" } var s = []; e.requestAnimationFrame = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function (e) { setTimeout(e, 1e3 / 60) }, i(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"
            ),
            n(), r()
            
    }(window, document);



    // 自动轮播初始化
    var glide = new Glide(".glide");
    glide.mount();

    //框架 动画效果
    ScrollReveal().reveal('.introduce');
    ScrollReveal().reveal('.successful_content');
    ScrollReveal().reveal('.give_service_content');
    // Progress_bar
    ScrollReveal().reveal('.Progress_bar');



    // 成功案例_点击切换图片
    var select_succ_btn = document.querySelector('.select_succ_btn').querySelectorAll('button');
    // 按钮
    var btn_web = document.getElementById('web');
    var btn_ps = document.getElementById('ps');
    var btn_wx = document.getElementById('wx');
    // 按钮下面的内容
    var web_btn_content = document.getElementById('web_content');
    var ps_btn_content = document.getElementById('ps_content');
    var wx_btn_content = document.getElementById('wx_content');

    // 排他-变色
    for (var i = 0; i < select_succ_btn.length; i++) {
        select_succ_btn[i].onclick = function () {
            for (var i = 0; i < select_succ_btn.length; i++) {
                select_succ_btn[i].style.backgroundColor = '';
            };
            this.style.backgroundColor = 'blue';
        };
    };
    // 单个点击事件
    // web
    btn_web.addEventListener('click', function (e) {
        web_btn_content.style.display = 'block';
        ps_btn_content.style.display = 'none';
        wx_btn_content.style.display = 'none';
    });
    // ps
    btn_ps.addEventListener('click', function (e) {
        ps_btn_content.style.display = 'block';
        web_btn_content.style.display = 'none';
        wx_btn_content.style.display = 'none';

    });


    // wx
    btn_wx.addEventListener('click', function (e) {
        wx_btn_content.style.display = 'block';
        web_btn_content.style.display = 'none';
        ps_btn_content.style.display = 'none';
    });

    // 设置小于1282大小点击就显示，导航栏
    var burger = document.querySelector('.burger');
    // 导航栏
    var nav_bu_1282 = document.querySelector('.nav_bu_1282');
    var nav_li_bu = nav_bu_1282.querySelectorAll('li');
    // 初始化变量——用于判断点击两次
    var flag_burger = 0;

    // 点击显示导航栏
    burger.addEventListener('click', function (e) {
        if (flag_burger == 0) {
            nav_bu_1282.style.display = 'block';
            // 把三个横杠改为叉叉
            burger.innerHTML = '<div>X</div>';
            // 并且设置样式
            burger.style.color = '#fff';
            burger.style.fontSize = '30px';
            burger.style.fontWeight = 'bold';
            burger.style.cursor = 'pointer';
            flag_burger = 1;
        } else {
            // 隐藏导航栏
            nav_bu_1282.style.display = 'none';
            // 继续显示三条拫杠
            burger.innerHTML = '<div>=</div>';
            // 设置样式
            burger.style.color = '#fff';
            burger.style.fontSize = '30px';
            burger.style.fontWeight = 'bold';
            burger.style.cursor = 'pointer';
            flag_burger = 0;
        };

    });


    // 进度条
    // web
    var pr_web_1 = document.getElementById('pr_web_1');
    var pr_web_span_1 = document.getElementById('pr_web_span_1');
    var num1 = 0;

    // 定时器
    var timer1 = setInterval(function () {

        num1 += 1;
        pr_web_span_1.innerHTML = num1 + '%';
        pr_web_1.style.width = num1 + '%';

        if (num1 == 80) {
            clearInterval(timer1);
        };

    }, 10);

    // ps
    var pr_web_2 = document.getElementById('pr_web_2');
    var pr_web_span_2 = document.getElementById('pr_web_span_2');
    var num2 = 0;

    // 定时器
    var timer2 = setInterval(function () {

        num2 += 1;
        pr_web_span_2.innerHTML = num2 + '%';
        pr_web_2.style.width = num2 + '%';

        if (num2 == 60) {
            clearInterval(timer2);
        };

    }, 10);

    // wx
    var pr_web_3 = document.getElementById('pr_web_3');
    var pr_web_span_3 = document.getElementById('pr_web_span_3');
    var num3 = 0;

    // 定时器
    var timer3 = setInterval(function () {

        num3 += 1;
        pr_web_span_3.innerHTML = num3 + '%';
        pr_web_3.style.width = num3 + '%';

        if (num3 == 40) {
            clearInterval(timer3);
        };

    }, 10);

    // and
    var pr_web_4 = document.getElementById('pr_web_4');
    var pr_web_span_4 = document.getElementById('pr_web_span_4');
    var num4 = 0;

    // 定时器
    var timer4 = setInterval(function () {

        num4 += 1;
        pr_web_span_4.innerHTML = num4 + '%';
        pr_web_4.style.width = num4 + '%';

        if (num4 == 50) {
            clearInterval(timer4);
        };

    }, 10);

    // python
    var pr_web_5 = document.getElementById('pr_web_5');
    var pr_web_span_5 = document.getElementById('pr_web_span_5');
    var num5 = 0;

    // 定时器
    var timer5 = setInterval(function () {

        num5 += 1;
        pr_web_span_5.innerHTML = num5 + '%';
        pr_web_5.style.width = num5 + '%';

        if (num5 == 70) {
            clearInterval(timer5);
        };

    }, 10);

    // 客户满意度
    var pr_web_6 = document.getElementById('pr_web_6');
    var pr_web_span_6 = document.getElementById('pr_web_span_6');
    var num6 = 0;

    // 定时器
    var timer6 = setInterval(function () {

        num6 += 1;
        pr_web_span_6.innerHTML = num6 + '%';
        pr_web_6.style.width = num6 + '%';

        if (num6 == 100) {
            clearInterval(timer6);
        };

    }, 10);




    // 
    var give_service_btn = document.getElementById('give_service_btn');
    var pr6_w = document.querySelector('.pr6_w');
    var pr6 = document.getElementById('pr6');

    give_service_btn.onclick = function () {
        pr6_w.style.display = 'block';
    };

    // 回到顶部
    var totop = document.querySelector('.totop');
    window.onscroll = function () {
        // 兼容写法
        var t = document.documentElement.scrollTop || document.body.scrollTop
        // 判断滚动条的高度让顶部和回到顶部按钮显示和隐藏
        if (t >= 500) {

            totop.style.display = 'block';
        } else {
            totop.style.display = 'none';
        };
    };
    // 给回到顶部按钮添加点击事件
    totop.onclick = function () {
        //  兼容写法
        var t = document.documentElement.scrollTop || document.body.scrollTop
        // 设置定时器制作动画效果
        var timer = setInterval(function () {
            // 高度自减回收过程
            t -= 20
            console.log(1)
            // 当高度为0清除定时器 - 停止动画
            if (t <= 0) {
                clearInterval(timer)
            }
            // 重新将高度t赋值给滚动的高度
            document.documentElement.scrollTop = document.body.scrollTop = t
        }, 20);
    };


};