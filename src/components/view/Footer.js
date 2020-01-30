import React from "react";

export default () => {
  return (
    <footer class="page-footer bg-primary font-small cyan darken-3" style={{ color: "#eee", height: "100px", bottom: "0", width: "100%" }}>
      <div class="container footer-container">
        <div class="row" style={{ height: "100px" }}><div class="col-md-12 py-5">
          <div class="mb-5 flex-center">
            <a href="https://www.facebook.com/NetHub/" target="_blank" class="fb-ic">
              <i class="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
            </a><a class="tw-ic"><i class="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x">
            </i></a><a class="gplus-ic"><i class="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x">
            </i></a><a class="li-ic"><i class="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a>

            <a class="ins-ic"><i class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x">
            </i></a><a class="pin-ic"><i class="fab fa-pinterest fa-lg white-text fa-2x"> </i>
            </a></div></div></div></div>
      <div class="footer-copyright bg-primary text-center py-3" style={{ borderTop: "1px solid gray" }}>© Copyright & copy; {new Date().getFullYear()} NetHub<a href="https://NetHub.com/"> NetHub.com</a></div></footer>

  );
};
