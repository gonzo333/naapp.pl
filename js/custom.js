// to get current year
function getYear() {
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// isotope js
$(window).on("load", function () {
  $(".filters_menu li").click(function () {
    $(".filters_menu li").removeClass("active");
    $(this).addClass("active");

    var data = $(this).attr("data-filter");
    $grid.isotope({
      filter: data,
    });
  });

  var $grid = $(".grid").isotope({
    itemSelector: ".all",
    percentPosition: false,
    masonry: {
      columnWidth: ".all",
    },
  });
});

// nice select
$(document).ready(function () {
  $("select").niceSelect();
});

/** google_map js **/
function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(40.712775, -74.005973),
    zoom: 18,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// client section owl carousel
$(".client_owl-carousel").owlCarousel({
  loop: true,
  margin: 0,
  dots: false,
  nav: true,
  navText: [],
  autoplay: true,
  autoplayHoverPause: true,
  navText: [
    '<i class="fa fa-angle-left" aria-hidden="true"></i>',
    '<i class="fa fa-angle-right" aria-hidden="true"></i>',
  ],
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1000: {
      items: 2,
    },
  },
});

// D-ID agent
$(document).ready(function () {
  const clientKey = $("#d-id-script").attr("data-client-key");
  const agentId = $("#d-id-script").attr("data-agent-id");

  function reloadDIDAgent() {
    $("#d-id-agent-container").remove();

    const newContainer = $('<div id="d-id-agent-container"></div>').css({
      display: "block",
      width: "100%",
      height: "600px",
      "min-height": "600px",
      "background-color": "#f8f9fa",
      "border-radius": "15px",
      "box-shadow": "0 10px 30px rgba(0,0,0,0.15)",
      padding: "10px",
      "margin-bottom": "25px",
    });

    $("#close-agent-btn").before(newContainer);

    $("#d-id-script").remove();

    const newScript = document.createElement("script");
    newScript.type = "module";
    newScript.id = "d-id-script";
    newScript.src = "https://agent.d-id.com/v2/index.js";
    newScript.setAttribute("data-mode", "full");
    newScript.setAttribute("data-client-key", clientKey);
    newScript.setAttribute("data-agent-id", agentId);
    newScript.setAttribute("data-name", "did-agent");
    newScript.setAttribute("data-monitor", "true");
    newScript.setAttribute("data-target-id", "d-id-agent-container");

    document.body.appendChild(newScript);
  }

  $("#open-agent-btn").click(function () {
    $("#form-column").fadeOut(300);
    $("#agent-trigger-box").fadeOut(300, function () {
      $("#agent-column").removeClass("col-md-6").addClass("col-md-12");
      $("#kontakt_title").text("Rozmawiasz z naszym Agentem AI");
      $("#agent-display-box").fadeIn(300);
    });
  });

  $("#close-agent-btn").click(function () {
    reloadDIDAgent();

    $("#agent-display-box").fadeOut(300, function () {
      $("#agent-column").removeClass("col-md-12").addClass("col-md-6");
      $("#kontakt_title").text("Skontaktuj się z Nami !");
      $("#form-column").fadeIn(300);
      $("#agent-trigger-box").fadeIn(300);
    });
  });
});
