<template>
  <div class="cursor" data-cursor>
    <div class="inner">
      <div class="circle"></div>
    </div>
  </div>
  <div class="cursor-dot" data-cursor-dot></div>

  <div id="loading-cover" class="loading-cover"></div>
  <div id="loading" class="loading">
    <div class="logo" title="Home">
      <span class=""
        ><span class="rev_item">
          <img
            src="assets/img/icons/android-chrome-512x512.png"
            width="500"
          /> </span
      ></span>
    </div>
  </div>

  <div id="head" class="header">
    <div class="header-wrap header-static">
      <div data-stick-cursor>
        <a href="/" class="logo" data-stick-cursor id="main-logo" title="">
          <img src="assets/img/icons/android-chrome-512x512.png" />
        </a>
      </div>

      <div class="right-nav hidescroll">
        <a href="index.html" data-stick-cursor class="font-caps">Home</a>
      </div>
    </div>

    <div class="nav-menu hidescroll" data-stick-cursor id="nav">
      <span class="line"></span>
      <span class="line"></span>
      <span class="font-caps text">Menu</span>
    </div>
  </div>

  <div id="menu" class="menu hideOnLoad">
    <div class="menu-content" id="menu-content">
      <div class="nav-close hover-target" data-stick-cursor id="navClose">
        <span class="line"></span>
      </div>

      <div class="menu-wrapper">
        <div class="column">
          <a href="/" class="logo navlink" data-stick-cursor title="">
            <img src="assets/img/icons/android-chrome-512x512.png" />
          </a>
          <ol class="links">
            <li>
              <a href="/" class="navlink" data-stick-cursor>
                <span class="q_split"><span class="rev_item">Home</span></span>
              </a>
            </li>
            <li>
              <a href="/" class="navlink" data-stick-cursor>
                <span class="q_split"
                  ><span class="rev_item">Our Impact</span></span
                >
              </a>
            </li>
            <li>
              <a href="/" class="navlink" data-stick-cursor>
                <span class="q_split"
                  ><span class="rev_item">Partner</span></span
                >
              </a>
            </li>
            <li>
              <a href="/" class="navlink" data-stick-cursor>
                <span class="q_split"><span class="rev_item">About</span></span>
              </a>
            </li>
          </ol>
        </div>
        <div class="nav_bottom">
          <div class="col">
            <div class="copyright hidescroll">
              &copy; <span class="year_copy">2023</span> TheEcoTribe. All rights
              reserved.<br />
            </div>
          </div>

          <div class="col">
            <div class="copyright hidescroll">
              <a href="http://paystack.com/ecotribe" data-stick-cursor>Donate</a
              ><br />
              <a href="/" data-stick-cursor>Sponsors</a>
            </div>
          </div>

          <div class="col">
            <a
              href="mailto:hello@ecotribe.ng?subject=Contact The EcoTribe"
              data-stick-cursor
              >Email</a
            ><br />
            <a
              href="https://www.linkedin.com/company/ecotribe/"
              class="navlink"
              data-stick-cursor
              >LinkedIn</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="dynamicLoad" class="dynamic_load">
    <div class="progress">
      <div class="bar" id="dynamicBar"></div>
    </div>
  </div>

  <div id="barba-wrapper">
    <div class="barba-container">
      <canvas id="webgl"></canvas>
      <div class="vignette-overlay"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
