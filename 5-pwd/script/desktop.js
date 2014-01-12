"use strict"
var desktop = 
{

    init: function () 
    {
        var a = document.getElementById("menuIcon");
        var count = 0;  //Kollar om den är öppen eller stängd

        //Desktopknappens klickfunktion
        a.onclick = function (e) 
        {
            e.preventDefault();
            if (count === 0) 
            {
                var div = document.getElementById("desktop");
                var window = document.createElement("div");
                window.setAttribute("id", "window");
                div.appendChild(window);

                var head = document.createElement("div");
                head.setAttribute("id", "head");
                window.appendChild(head);

                var camera = document.createElement("img");
                camera.src = "pics/camera.png";
                head.appendChild(camera);

                var text = document.createTextNode("Image viewer");
                head.appendChild(text)

                var content = document.createElement("div");
                content.setAttribute("id", "content");
                window.appendChild(content);

                var foot = document.createElement("div");
                foot.setAttribute("id", "foot");
                window.appendChild(foot);

                var open = document.createElement("a");
                open.setAttribute("id", "openimageviewer");
                head.appendChild(open);

                var close = document.createElement("img");
                close.src = "pics/x.png";
                open.appendChild(close);      
                
                desktop.showImages();

                count += 1;
            }
            //Bildfönstrets klickfunktion
            open.onclick = function (e) 
            {
                e.preventDefault();
                var div = document.getElementById("desktop");
                div.removeChild(window);
                count -= 1;
            }
        }
    },