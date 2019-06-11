function index() {
  if (screen.width <= 800) {
    window.location.replace("M/index.html");
  }

  setInterval(function() {
    swiTch++;
    if (swiTch > slid.length - 1) {
      swiTch = 0;
    }
    imgslider.style.backgroundImage = slid[swiTch];
  }, 6000);
}

function start() {
  var task = document.getElementById("task");
  task.hidden = true;
  var next = "back";

  function hide() {
    if (next === "back") {
      go.innerText = "Hide Task Sheet";
      task.hidden = false;
      next = "hide";
    } else {
      go.innerText = "View Task Sheet";
      task.hidden = true;
      next = "back";
    }
  }
  var go = document.getElementById("go");
  go.addEventListener("click", hide);
  currentPage();
}

function slide() {
  var imgslider2 = document.getElementById("slidd");
  var swiTch = 1;
  var images = [
    "../assets/images/client2.jpg",
    "../assets/images/bracelet.jpg",
    "../assets/images/Computers.jpg",
    "../assets/images/Tv.jpg",
    "../assets/images/drawing.jpg",
    "../assets/images/gameConsole.jpg",
    "../assets/images/Girraf.jpg"
  ];
  setInterval(function() {
    swiTch++;
    if (swiTch > images.length - 1) {
      swiTch = 0;
    }
    imgslider2.src = images[swiTch];
  }, 3000);
  currentPage();
}
function currentPage() {
  var path = document.getElementById("path");
  if (screen.width <= 800) {
    window.location.replace("/M/HTML/" + path.getAttribute("href"));
  }
}
