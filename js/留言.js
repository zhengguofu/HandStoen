window.onload = function () {


    // 
    // 设置小于1282大小点击就显示，导航栏
    var burger = document.querySelector('.burger');
    // 导航栏
    var nav_bu_1282 = document.querySelector('.nav_bu_1282');
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
    // 获取
    var btn = document.getElementById('btn');
    var ul_el = document.querySelector('.ul_el');
    var text = document.getElementById('text');
    var username = document.getElementById('username');
    var emi = document.getElementById('emi');
    var ul_text = document.getElementById('ul_text');
    var con_name = document.querySelector('.con_name');
    var con_emi = document.querySelector('.con_emi');
    var con_time = document.querySelector('.con_time');


    btn.onclick = function () {
        if (text.value == '' && username.value == '' && emi.value.length == '') {
            alert('请输入内容');
        } else if (username.value == '') {
            alert('名字为空');
        } else if (emi.value == '') {
            alert('邮箱为空');
        } else if (text.value == '') {
            alert('内容为空');
        } else {

            ul_el.style.display = 'block';
            // 时间
            var date = new Date();
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var day = date.getDate();
            var hour = date.getHours();
            var minute = date.getMinutes();
            var second = date.getSeconds();

            var times = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;

            // 创建li
            var li = document.createElement('li');

            // 吧时间添加进去，动态创建多个时间
            var name = document.createElement('span');

            name.innerHTML = username.value + '<br>';

            // 邮箱
            var emi_ = document.createElement('p');
            emi_.innerHTML = emi.value;


            // 时间
            // 创建时间
            var time = document.createElement('div');
            // 添加时间
            time.innerHTML = times;
            time.style.float = 'right';



            // 值
            li.innerHTML = text.value + '<a style = "float: right; cursor: pointer;">删除</a>';
            // 点击删除
            var a = document.querySelectorAll('a');

            for (var i = 0; i < a.length; i++) {

                a[i].onclick = function () {
                    ul_text.removeChild(this.parentNode);
                }
            }

            // 添加
            ul_text.insertBefore(li, ul_text.firstChild);
            li.insertBefore(name, li.firstChild);
            li.insertBefore(emi_, li.firstChild);
            // 最后
            li.appendChild(time);





        };



    };
    // 网页点击爱心特效
    !function (e, t, a) {
        function r() {
            for (var e = 0; e < s.length; e++) s[e].alpha <= 0 ?
                (t.body.removeChild(s[e].el), s.splice(e, 1)) : (s[e].y--, s[e].scale += .004, s[e].alpha -= .013, s[e].el.style.cssText = "left:" + s[e].x + "px;top:" + s[e].y + "px;opacity:" + s[e].alpha + ";transform:scale(" + s[e].scale + "," + s[e].scale + ") rotate(45deg);background:" + s[e].color + ";z-index:99999"); requestAnimationFrame(r)
        } function n() { var t = "function" == typeof e.onclick && e.onclick; e.onclick = function (e) { t && t(), o(e) } } function o(e) { var a = t.createElement("div"); a.className = "heart", s.push({ el: a, x: e.clientX - 5, y: e.clientY - 5, scale: 1, alpha: 1, color: c() }), t.body.appendChild(a) } function i(e) { var a = t.createElement("style"); a.type = "text/css"; try { a.appendChild(t.createTextNode(e)) } catch (t) { a.styleSheet.cssText = e } t.getElementsByTagName("head")[0].appendChild(a) } function c() { return "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + ")" } var s = []; e.requestAnimationFrame = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function (e) { setTimeout(e, 1e3 / 60) }, i(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"),
            n(), r()
    }(window, document);


};


