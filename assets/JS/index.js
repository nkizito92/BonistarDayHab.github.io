function index() {
     if (screen.width <= 800) {
            window.location.replace("M/index.html");
        }

    var imgslider = document.getElementById("imgcenter");
    var swiTch = 1;
    var slid = ["url(../images/building.jpg)", "url(../images/Computers.jpg)", "url(../images/Cat.jpg)", "url(../images/clients.jpg)"];
    
    setInterval(function() {
        swiTch++;
        if(swiTch > slid.length -1){
            swiTch = 0;
        }
        imgslider.style.backgroundImage = slid[swiTch];
    }, 6000);

}

function slide() {
    var imgslider2 = document.getElementById("slidd");
    var swiTch = 1;
    var images = ["../assets/images/client2.jpg", "../assets/images/bracelet.jpg", "../assets/images/Computers.jpg", "../assets/images/Tv.jpg", "../assets/images/drawing.jpg", "../assets/images/gameConsole.jpg", "../assets/images/Girraf.jpg"];
    setInterval(function(){
        swiTch++;
        if(swiTch > images.length - 1){
            swiTch = 0;
        }
        imgslider2.src = images[swiTch];
    }, 3000);
    
}