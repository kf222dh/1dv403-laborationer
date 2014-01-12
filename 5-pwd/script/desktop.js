"use strict"
//Objekt
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
                //Div för desktop
                var div = document.getElementById("desktop");
                var window = document.createElement("div");
                window.setAttribute("id", "window");
                div.appendChild(window);

                //Div för head
                var head = document.createElement("div");
                head.setAttribute("id", "head");
                window.appendChild(head);

                //Div för kamera
                var camera = document.createElement("img");
                camera.src = "pics/camera.png";
                head.appendChild(camera);

                //Div för text
                var text = document.createTextNode("Image viewer");
                head.appendChild(text)

                //Div för content
                var content = document.createElement("div");
                content.setAttribute("id", "content");
                window.appendChild(content);

                //Div för foot
                var foot = document.createElement("div");
                foot.setAttribute("id", "foot");
                window.appendChild(foot);

                //Div för öppna
                var open = document.createElement("a");
                open.setAttribute("id", "openimageviewer");
                head.appendChild(open);

                //Div för stänga
                var close = document.createElement("img");
                close.src = "pics/x.png";
                open.appendChild(close);      
                
                //Visar bilderna i fönstret
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

    //Laddar bilderna
    showImages: function () 
    {
        //Tar hand om gifen och bilderna
        var url = "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/";
        var gif = document.createElement("img");
        //Laddningsikon & text visas när ajaxanrop sker.
        gif.src = "pics/ajax-loader.gif";
        foot.appendChild(gif);

        //Tar emot xhr.statustext ifrån ajaxconnect
        new AjaxCon(url, function (data) 
        {
            foot.removeChild(gif);
            var imageData = JSON.parse(data);//parsear till json

            var Height_Width = desktop.topWidth_topHeight(imageData);
            
            //Bestämmer max höjden och max bredden dynamiskt.
            for (var i = 0; i < imageData.length; i++) 
            {
                var a = document.createElement("a");
                var img = document.createElement("img");

                a.style.width = Height_Width[0] + 5 + "px";
                a.style.height = Height_Width[1] + 5 + "px";
                a.href = "#";

                img.src = imageData[i].thumbURL;

                desktop.changeBg(imageData[i].URL, a);

                content.appendChild(a);

                a.appendChild(img);
            }

        });
    },

    topWidth_topHeight: function (info) 
    {
        var array = new Array(0, 0);
        //Loopar igenom för att ta ut maxvärdena.
        for (var x in info) 
        {
        //Om höjden är mindre än aktuella thumbhöjden sätts höjden till thumbhöjden
        if (info[x].thumbHeight > array[1]) 
        {
            array[1] = info[x].thumbHeight;
        }
        //Samma som ovan fast med bredden
        if (info[x].thumbWidth > array[0]) 
        {
            array[0] = info[x].thumbWidth;
        }
        }
            return array;
    },

    changeBg: function (info, a) 
    {
        //Sätter onclick till att ändra backgrunden
        a.onclick = function (e) 
        {
            e.preventDefault();
            var desk = document.getElementById("desktop");
            desk.style.backgroundImage = "url('"+info+"')";
        }
    }
}
window.onload = desktop.init;