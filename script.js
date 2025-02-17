$(document).ready(function () {
  /*** Filter Posts ***/
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show(1000);
    } else {
      $(".post").not("." + value).hide(1000);
      $(".post").filter("." + value).show(1000);
    }
  });
});

/*** Sticky Navbar ***/
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      document.getElementById("navbar-top").classList.add("fixed-top");
      document.body.style.paddingTop = document.querySelector(".navbar").offsetHeight + "px";
    } else {
      document.getElementById("navbar-top").classList.remove("fixed-top");
      document.body.style.paddingTop = "0";
    }
  });

  /*** Back to Top Button ***/
  let mybutton = document.getElementById("btn-back-to-top");

  window.onscroll = function () {
    mybutton.style.display = (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) ? "block" : "none";
  };

  if (mybutton) {
    mybutton.addEventListener("click", function () {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  }

  /*** Circular Progress Bars ***/
  function animateProgress(selector, progressValue, color) {
    let progressElement = document.querySelector(`.circular-progress.${selector}`);
    let valueElement = progressElement.querySelector(".progress-value");
    let startValue = 0;
    let speed = 10;
    let step=2;


    if (progressElement && valueElement) {
      let progressInterval = setInterval(() => {
        startValue+=step;
        if (startValue > progressValue) startValue = progressValue;
        valueElement.textContent = `${startValue}%`;
        progressElement.style.background = `conic-gradient(${color} ${startValue * 3.6}deg, #ededed 0deg)`;

        if (startValue === progressValue) {
          clearInterval(progressInterval);
        }
      }, speed);
    }
  }

  // Ensure the animations start after the DOM is fully loaded
  setTimeout(() => {
    animateProgress("python", 100, "#fca61f");
    animateProgress("sql-dbms", 95, "#7d2ae8");
    animateProgress("machine-learning", 80, "#20c997");
    animateProgress("web-development", 90, "#3f396d");
  }, 500); // Added delay to ensure elements are rendered properly
});
