import React from "react";

function BacktoTop() {
  return (
    <div className="backto-top">
      <div>
        <i data-feather="arrow-up"></i>
      </div>
    </div>
  );
}

// function backToTopInit() {
//   // declare variable
//   var scrollTop = $(".backto-top");
//   $(window).scroll(function () {
//     // declare variable
//     var topPos = $(this).scrollTop();
//     // if user scrolls down - show scroll to top button
//     if (topPos > 100) {
//       $(scrollTop).css("opacity", "1");
//     } else {
//       $(scrollTop).css("opacity", "0");
//     }
//   });

//   //Click event to scroll to top
//   $(scrollTop).on("click", function () {
//     $("html, body").animate(
//       {
//         scrollTop: 0,
//         easingType: "linear",
//       },
//       500
//     );
//     return false;
//   });
// }

export default BacktoTop;
