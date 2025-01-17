import scrollama from "scrollama";
var scroller = scrollama();
var last = 0;

function init() {
    scroller
        .setup({
            step: "#scrolly article .step",
            offset: 0.45,
            debug: false
        })
        .onStepEnter(function({element, index, direction}) {
            if (direction === "down") {
                if (index === 1 && last != 1) {
                    var item = document.querySelector("#nodocket1");
                    item.classList.remove("move-fade");
                    item.classList.remove("opacity-fade");
                    item.classList.add("fill-fade");
                    item.style.fill="#471323";

                    var item = document.querySelector("#nodocket1-2");
                    item.classList.remove("move-fade");
                    item.classList.remove("opacity-fade");
                    item.classList.add("fill-fade");
                    item.style.fill="#471323";
                }
                if (index === 2 && last != 2) {
                    var item = document.querySelector("#nodocket1");
                    item.classList.remove("move-fade");
                    item.classList.add("opacity-fade");
                    item.style.opacity="0";

                    var item = document.querySelector("#nodocket1-2");
                    item.classList.remove("move-fade");
                    item.classList.add("opacity-fade");
                    item.style.opacity="0";
                }
                if (index === 3 && last != 3) {
                    for (var i=1; i<=2; i++) {
                        var item = document.querySelector("#noconnection"+String(i));
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+100);

                        var item = document.querySelector("#noconnection"+String(i)+"-2");
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+50);
                    }
                    for (var i=1; i<=5; i++) {
                        var item = document.querySelector("#alum"+String(i));
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+100);

                        var item = document.querySelector("#alum"+String(i)+"-2");
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+50);
                    }
                    for (var i=1; i<=5; i++) {
                        var item = document.querySelector("#nycuni"+String(i));
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+100);

                        var item = document.querySelector("#nycuni"+String(i)+"-2");
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+50);
                    }
                    for (var i=1; i<=18; i++) {
                        var item = document.querySelector("#undergrad"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#B9D9EB";

                        var item = document.querySelector("#undergrad"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#B9D9EB";
                    }
                    for (var i=1; i<=8; i++) {
                        var item = document.querySelector("#grad"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#B9D9EB";

                        var item = document.querySelector("#grad"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#B9D9EB";
                    }
                    for (var i=1; i<=5; i++) {
                        var item = document.querySelector("#uts"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#B9D9EB";

                        var item = document.querySelector("#uts"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#B9D9EB";
                    }
                    for (var i=1; i<=2; i++) {
                        var item = document.querySelector("#staff"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#B9D9EB";

                        var item = document.querySelector("#staff"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#B9D9EB";
                    }
                }
                if (index === 4 && last != 4) {
                    for (var i=1; i<=18; i++) {
                        var item = document.querySelector("#undergrad"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";

                        var item = document.querySelector("#undergrad"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                    }
                    for (var i=1; i<=8; i++) {
                        var item = document.querySelector("#grad"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";

                        var item = document.querySelector("#grad"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                    }
                    for (var i=1; i<=5; i++) {
                        var item = document.querySelector("#uts"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";

                        var item = document.querySelector("#uts"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                    }
                    for (var i=1; i<=2; i++) {
                        var item = document.querySelector("#staff"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";

                        var item = document.querySelector("#staff"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                    }
                    for (var i=1; i<=14; i++) {
                        var item = document.querySelector("#undergrad"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#C4A69D";

                        var item = document.querySelector("#undergrad"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#C4A69D";
                    }
                }
                if (index === 6 && last != 6) {
                    var item = document.querySelector("#undergrad17");
                    item.classList.remove("move-fade");
                    item.classList.add("fill-fade");
                    item.style.fill="#C4A69D";

                    var item = document.querySelector("#undergrad17-2");
                    item.classList.remove("move-fade");
                    item.classList.add("fill-fade");
                    item.style.fill="#C4A69D";
                }
                if (index === 8 && last != 8) {
                    var item = document.querySelector("#undergrad15");
                    item.classList.remove("move-fade");
                    item.classList.add("fill-fade");
                    item.style.fill="#C4A69D";
                    var item = document.querySelector("#undergrad16");
                    item.classList.remove("move-fade");
                    item.classList.add("fill-fade");
                    item.style.fill="#C4A69D";
                    var item = document.querySelector("#undergrad18");
                    item.classList.remove("move-fade");
                    item.classList.add("fill-fade");
                    item.style.fill="#C4A69D";

                    var item = document.querySelector("#undergrad15-2");
                    item.classList.remove("move-fade");
                    item.classList.add("fill-fade");
                    item.style.fill="#C4A69D";
                    var item = document.querySelector("#undergrad16-2");
                    item.classList.remove("move-fade");
                    item.classList.add("fill-fade");
                    item.style.fill="#C4A69D";
                    var item = document.querySelector("#undergrad18-2");
                    item.classList.remove("move-fade");
                    item.classList.add("fill-fade");
                    item.style.fill="#C4A69D";
                }
                if (index === 9 && last != 9) {
                    for (var i=1; i<=8; i++) {
                        var item = document.querySelector("#grad"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#98A886";

                        var item = document.querySelector("#grad"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#98A886";
                    }
                }
                if (index === 10 && last != 10) {
                    for (var i=1; i<=5; i++) {
                        var item = document.querySelector("#uts"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#465C69";

                        var item = document.querySelector("#uts"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#465C69";
                    }
                }
                if (index === 11 && last != 11) {
                    for (var i=1; i<=2; i++) {
                        var item = document.querySelector("#staff"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#363457";

                        var item = document.querySelector("#staff"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#363457";
                    }
                }
                if (index === 12 && last != 12) {
                    for (var i=1; i<=18; i++) {
                        var item = document.querySelector("#undergrad"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";

                        var item = document.querySelector("#undergrad"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                    }
                    for (var i=1; i<=8; i++) {
                        var item = document.querySelector("#grad"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";

                        var item = document.querySelector("#grad"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                    }
                    for (var i=1; i<=5; i++) {
                        var item = document.querySelector("#uts"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";

                        var item = document.querySelector("#uts"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                    }
                    for (var i=1; i<=2; i++) {
                        var item = document.querySelector("#staff"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";

                        var item = document.querySelector("#staff"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                    }
                    for (var i=1; i<=2; i++) {
                        var item = document.querySelector("#noconnection"+String(i));
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-100);

                        var item = document.querySelector("#noconnection"+String(i)+"-2");
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-50);
                    }
                    for (var i=1; i<=5; i++) {
                        var item = document.querySelector("#alum"+String(i));
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-100);

                        var item = document.querySelector("#alum"+String(i)+"-2");
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-50);
                    }
                    for (var i=1; i<=5; i++) {
                        var item = document.querySelector("#nycuni"+String(i));
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-100);

                        var item = document.querySelector("#nycuni"+String(i)+"-2");
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-50);
                    }
                }
                if (index === 13 && last != 13) {
                    for (var i=1; i<=18; i++) {
                        var item = document.querySelector("#undergrad"+String(i));
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-100);

                        var item = document.querySelector("#undergrad"+String(i)+"-2");
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-50);
                    }
                    for (var i=1; i<=8; i++) {
                        var item = document.querySelector("#grad"+String(i));
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-100);

                        var item = document.querySelector("#grad"+String(i)+"-2");
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-50);
                    }
                    for (var i=1; i<=5; i++) {
                        var item = document.querySelector("#uts"+String(i));
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-100);

                        var item = document.querySelector("#uts"+String(i)+"-2");
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-50);
                    }
                    for (var i=1; i<=2; i++) {
                        var item = document.querySelector("#staff"+String(i));
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-100);

                        var item = document.querySelector("#staff"+String(i)+"-2");
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-50);
                    }
                }
                if (index === 14 && last != 14) {
                    for (var i=1; i<=5; i++) {
                        var item = document.querySelector("#alum"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#735290";

                        var item = document.querySelector("#alum"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#735290";
                    }
                    for (var i=1; i<=5; i++) {
                        var item = document.querySelector("#nycuni"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#735290";

                        var item = document.querySelector("#nycuni"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#735290";
                    }
                }
                if (index === 15 && last != 15) {
                    for (var i=1; i<=5; i++) {
                        var item = document.querySelector("#alum"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";

                        var item = document.querySelector("#alum"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                    }
                    for (var i=1; i<=5; i++) {
                        var item = document.querySelector("#nycuni"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";

                        var item = document.querySelector("#nycuni"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                    }
                    for (var i=1; i<=5; i++) {
                        var item = document.querySelector("#alum"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#E2C2C6";

                        var item = document.querySelector("#alum"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#E2C2C6";
                    }
                }
                if (index === 16 && last != 16) {
                    for (var i=1; i<=5; i++) {
                        var item = document.querySelector("#alum"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";

                        var item = document.querySelector("#alum"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                    }
                    for (var i=1; i<=5; i++) {
                        var item = document.querySelector("#nycuni"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#449DD1";

                        var item = document.querySelector("#nycuni"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#449DD1";
                    }
                }
                if (index === 17 && last != 17) {
                    for (var i=1; i<=5; i++) {
                        var item = document.querySelector("#nycuni"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";

                        var item = document.querySelector("#nycuni"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                    }
                    for (var i=1; i<=2; i++) {
                        var item = document.querySelector("#noconnection"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#C42021";

                        var item = document.querySelector("#noconnection"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#C42021";
                    }
                }
                if (index === 18 & last != 18) {
                    for (var i=1; i<=18; i++) {
                        var item = document.querySelector("#undergrad"+String(i));
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+100);

                        var item = document.querySelector("#undergrad"+String(i)+"-2");
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+50);
                    }
                    for (var i=1; i<=8; i++) {
                        var item = document.querySelector("#grad"+String(i));
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+100);

                        var item = document.querySelector("#grad"+String(i)+"-2");
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+50);
                    }
                    for (var i=1; i<=5; i++) {
                        var item = document.querySelector("#uts"+String(i));
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+100);

                        var item = document.querySelector("#uts"+String(i)+"-2");
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+50);
                    }
                    for (var i=1; i<=2; i++) {
                        var item = document.querySelector("#staff"+String(i));
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+100);

                        var item = document.querySelector("#staff"+String(i)+"-2");
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+50);
                    }
                }
            }
            if (direction === "up") {
                if (index === 17 && last != 17) {
                    for (var i=1; i<=18; i++) {
                        var item = document.querySelector("#undergrad"+String(i));
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-100);

                        var item = document.querySelector("#undergrad"+String(i)+"-2");
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-50);
                    }
                    for (var i=1; i<=8; i++) {
                        var item = document.querySelector("#grad"+String(i));
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-100);

                        var item = document.querySelector("#grad"+String(i)+"-2");
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-50);
                    }
                    for (var i=1; i<=5; i++) {
                        var item = document.querySelector("#uts"+String(i));
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-100);

                        var item = document.querySelector("#uts"+String(i)+"-2");
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-50);
                    }
                    for (var i=1; i<=2; i++) {
                        var item = document.querySelector("#staff"+String(i));
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-100);

                        var item = document.querySelector("#staff"+String(i)+"-2");
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-50);
                    }
                }
                if (index === 16 && last != 16) {
                    for (var i=1; i<=5; i++) {
                        var item = document.querySelector("#nycuni"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#449DD1";

                        var item = document.querySelector("#nycuni"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#449DD1";
                    }
                    for (var i=1; i<=2; i++) {
                        var item = document.querySelector("#noconnection"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";

                        var item = document.querySelector("#noconnection"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                    }
                }
                if (index === 15 && last != 15) {
                    for (var i=1; i<=5; i++) {
                        var item = document.querySelector("#alum"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#E2C2C6";

                        var item = document.querySelector("#alum"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#E2C2C6";
                    }
                    for (var i=1; i<=5; i++) {
                        var item = document.querySelector("#nycuni"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";

                        var item = document.querySelector("#nycuni"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                    }
                }
                if (index === 14 && last != 14) {
                    for (var i=1; i<=5; i++) {
                        var item = document.querySelector("#alum"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";

                        var item = document.querySelector("#alum"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                    }
                    for (var i=1; i<=5; i++) {
                        var item = document.querySelector("#nycuni"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#735290";

                        var item = document.querySelector("#nycuni"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#735290";
                    }
                    for (var i=1; i<=5; i++) {
                        var item = document.querySelector("#alum"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#735290";

                        var item = document.querySelector("#alum"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#735290";
                    }
                }
                if (index === 13 && last != 13) {
                    for (var i=1; i<=5; i++) {
                        var item = document.querySelector("#alum"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";

                        var item = document.querySelector("#alum"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                    }
                    for (var i=1; i<=5; i++) {
                        var item = document.querySelector("#nycuni"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";

                        var item = document.querySelector("#nycuni"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                    }
                }
                if (index === 12 && last != 12) {
                    for (var i=1; i<=18; i++) {
                        var item = document.querySelector("#undergrad"+String(i));
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+100);

                        var item = document.querySelector("#undergrad"+String(i)+"-2");
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+50);
                    }
                    for (var i=1; i<=8; i++) {
                        var item = document.querySelector("#grad"+String(i));
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+100);

                        var item = document.querySelector("#grad"+String(i)+"-2");
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+50);
                    }
                    for (var i=1; i<=5; i++) {
                        var item = document.querySelector("#uts"+String(i));
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+100);

                        var item = document.querySelector("#uts"+String(i)+"-2");
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+50);
                    }
                    for (var i=1; i<=2; i++) {
                        var item = document.querySelector("#staff"+String(i));
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+100);

                        var item = document.querySelector("#staff"+String(i)+"-2");
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+50);
                    }
                }
                if (index == 11 && last != 11) {
                    for (var i=1; i<=18; i++) {
                        var item = document.querySelector("#undergrad"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#C4A69D";

                        var item = document.querySelector("#undergrad"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#C4A69D";
                    }
                    for (var i=1; i<=8; i++) {
                        var item = document.querySelector("#grad"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#98A886";

                        var item = document.querySelector("#grad"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#98A886";
                    }
                    for (var i=1; i<=5; i++) {
                        var item = document.querySelector("#uts"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#465C69";

                        var item = document.querySelector("#uts"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#465C69";
                    }
                    for (var i=1; i<=2; i++) {
                        var item = document.querySelector("#staff"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#363457";

                        var item = document.querySelector("#staff"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#363457";
                    }
                    for (var i=1; i<=2; i++) {
                        var item = document.querySelector("#noconnection"+String(i));
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+100);

                        var item = document.querySelector("#noconnection"+String(i)+"-2");
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+50);
                    }
                    for (var i=1; i<=5; i++) {
                        var item = document.querySelector("#alum"+String(i));
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+100);

                        var item = document.querySelector("#alum"+String(i)+"-2");
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+50);
                    }
                    for (var i=1; i<=5; i++) {
                        var item = document.querySelector("#nycuni"+String(i));
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+100);

                        var item = document.querySelector("#nycuni"+String(i)+"-2");
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+50);
                    }
                }
                if (index === 10 && last != 10) {
                    for (var i=1; i<=2; i++) {
                        var item = document.querySelector("#staff"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";

                        var item = document.querySelector("#staff"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                    }
                }
                if (index === 9 && last != 9) {
                    for (var i=1; i<=5; i++) {
                        var item = document.querySelector("#uts"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";

                        var item = document.querySelector("#uts"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                    }
                }
                if (index === 8 && last != 8) {
                    for (var i=1; i<=8; i++) {
                        var item = document.querySelector("#grad"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";

                        var item = document.querySelector("#grad"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                    }
                }
                if (index === 6 && last != 6) {
                    var item = document.querySelector("#undergrad15");
                    item.classList.remove("move-fade");
                    item.classList.add("fill-fade");
                    item.style.fill="#d3d3d3";
                    var item = document.querySelector("#undergrad16");
                    item.classList.remove("move-fade");
                    item.classList.add("fill-fade");
                    item.style.fill="#d3d3d3";
                    var item = document.querySelector("#undergrad18");
                    item.classList.remove("move-fade");
                    item.classList.add("fill-fade");
                    item.style.fill="#d3d3d3";

                    var item = document.querySelector("#undergrad15-2");
                    item.classList.remove("move-fade");
                    item.classList.add("fill-fade");
                    item.style.fill="#d3d3d3";
                    var item = document.querySelector("#undergrad16-2");
                    item.classList.remove("move-fade");
                    item.classList.add("fill-fade");
                    item.style.fill="#d3d3d3";
                    var item = document.querySelector("#undergrad18-2");
                    item.classList.remove("move-fade");
                    item.classList.add("fill-fade");
                    item.style.fill="#d3d3d3";
                }
                if (index === 5 && last != 5) {
                    var item = document.querySelector("#undergrad17");
                    item.classList.remove("move-fade");
                    item.classList.add("fill-fade");
                    item.style.fill="#d3d3d3";

                    var item = document.querySelector("#undergrad17-2");
                    item.classList.remove("move-fade");
                    item.classList.add("fill-fade");
                    item.style.fill="#d3d3d3";
                }
                if (index === 3 && last != 3) {
                    for (var i=1; i<=14; i++) {
                        var item = document.querySelector("#undergrad"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";

                        var item = document.querySelector("#undergrad"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                    }
                    for (var i=1; i<=8; i++) {
                        var item = document.querySelector("#grad"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#B9D9EB";

                        var item = document.querySelector("#grad"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#B9D9EB";
                    }
                    for (var i=1; i<=5; i++) {
                        var item = document.querySelector("#uts"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#B9D9EB";

                        var item = document.querySelector("#uts"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#B9D9EB";
                    }
                    for (var i=1; i<=2; i++) {
                        var item = document.querySelector("#staff"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#B9D9EB";

                        var item = document.querySelector("#staff"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#B9D9EB";
                    }
                    for (var i=1; i<=18; i++) {
                        var item = document.querySelector("#undergrad"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#B9D9EB";

                        var item = document.querySelector("#undergrad"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#B9D9EB";
                    }
                }
                if (index === 2 && last != 2) {
                    for (var i=1; i<=2; i++) {
                        var item = document.querySelector("#noconnection"+String(i));
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-100);

                        var item = document.querySelector("#noconnection"+String(i)+"-2");
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-50);
                    }
                    for (var i=1; i<=5; i++) {
                        var item = document.querySelector("#alum"+String(i));
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-100);

                        var item = document.querySelector("#alum"+String(i)+"-2");
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-50);
                    }
                    for (var i=1; i<=5; i++) {
                        var item = document.querySelector("#nycuni"+String(i));
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-100);

                        var item = document.querySelector("#nycuni"+String(i)+"-2");
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-50);
                    }
                    for (var i=1; i<=18; i++) {
                        var item = document.querySelector("#undergrad"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";

                        var item = document.querySelector("#undergrad"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                    }
                    for (var i=1; i<=8; i++) {
                        var item = document.querySelector("#grad"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";

                        var item = document.querySelector("#grad"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                    }
                    for (var i=1; i<=5; i++) {
                        var item = document.querySelector("#uts"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";

                        var item = document.querySelector("#uts"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                    }
                    for (var i=1; i<=2; i++) {
                        var item = document.querySelector("#staff"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";

                        var item = document.querySelector("#staff"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                    }
                }
                if (index === 1 && last != 1) {
                    var item = document.querySelector("#nodocket1");
                    item.classList.remove("move-fade");
                    item.classList.add("opacity-fade");
                    item.style.opacity="100";

                    var item = document.querySelector("#nodocket1-2");
                    item.classList.remove("move-fade");
                    item.classList.add("opacity-fade");
                    item.style.opacity="100";
                }
                if (index === 0 && last != 0) {
                    var item = document.querySelector("#nodocket1");
                    item.classList.remove("move-fade");
                    item.classList.remove("opacity-fade");
                    item.classList.add("fill-fade");
                    item.style.fill="#d3d3d3";

                    var item = document.querySelector("#nodocket1-2");
                    item.classList.remove("move-fade");
                    item.classList.remove("opacity-fade");
                    item.classList.add("fill-fade");
                    item.style.fill="#d3d3d3";
                }
            }

            last = index;
        }) 
}

document.addEventListener('DOMContentLoaded', init);