
    <header class="home_page_header">
      <div class="top-navigation">
        <div class="left-navigation">
          <ul>
            <li><a href="#">Alumni</a></li>
            <li><a href="#">Parents</a></li>
          </ul>
        </div>
        <div class="right-navigation">
          <ul>
            <li><a href="#">Calendar</a></li>
            <li><a href="#">Quick Links</a></li>
            <li><a href="#">Login</a></li>
            <li>
              <input placeholder="Search" ="search-box" type="text" />
              <ion-icon class="search-icon" name="search-outline"></ion-icon>
            </li>
          </ul>
        </div>
      </div>
      <div class="home_page_navigation">
        <a href="<?php echo site_url(); ?>" class="logo">
          <img class="mirage-logo" src="<?php echo get_theme_file_uri("images/mirage-logo.avif") ?>" />
          <div class="school-name">
            <span>Mirage</span>
            <span>International</span>
            <span>High School</span>
          </div>
        </a>
        <nav class="home_page_nav_list">
          <ul class="main-nav-list">
            <li class="<?php echo is_page('explore') ? 'active' : '' ?>"><a href="<?php echo site_url('/explore') ?>">Explore</a></li>
            <li class="<?php echo is_page('about-us') ? 'active' : '' ?>"><a  href="<?php echo site_url('/about-us') ?>">About</a></li>
            <li class="<?php echo is_page('admissions') ? 'active' : '' ?>"><a href="<?php echo site_url('/admissions') ?>">Admission</a></li>
            <li class="<?php echo is_page('academics') ? 'active' : '' ?>"><a href="<?php echo site_url('/academics') ?>">Academics</a></li>
            <li class="<?php echo is_page('student-life') ? 'active' : '' ?>"><a href="<?php echo site_url('/student-life') ?>">Student Life</a></li>
            <li class="<?php echo is_page('athletics') ? 'active' : '' ?>"><a href="<?php echo site_url('/Athletics') ?>">Athletics</a></li>
            <li class="<?php echo is_page('giving') ? 'active' : '' ?>"><a href="<?php echo site_url('/giving') ?>">Giving</a></li>
          </ul>
        </nav>
        <button class="btn-mobile-nav">
          <ion-icon
            class="icon-mobile-nav menu-nav"
            name="menu-outline"
          ></ion-icon>
        </button>
      </div>

      <div class="mobile-nav close">
        <button class="btn-mobile-nav">
          <ion-icon
            class="icon-mobile-nav cancel-nav"
            name="close-outline"
          ></ion-icon>
        </button>

        <div>
          <input placeholder="Search" ="search-box" type="text" />
          <ion-icon class="search-icon" name="search-outline"></ion-icon>
        </div>
        <ul class="mobile-main-nav-list">
        <li><a href="<?php echo site_url() ?>">Home</a></li>
        <li><a href="<?php echo site_url('/explore') ?>">Explore</a></li>
            <li><a href="<?php echo site_url('/about-us') ?>">About</a></li>
            <li><a href="<?php echo site_url('/admissions') ?>">Admission</a></li>
            <li><a href="<?php echo site_url('/academics') ?>">Academics</a></li>
            <li><a href="<?php echo site_url('/student-life') ?>">Student Life</a></li>
            <li><a href="<?php echo site_url('/Athletics') ?>">Athletics</a></li>
            <li><a href="<?php echo site_url('/giving') ?>">Giving</a></li>
        </ul>
        <ul class="mobile-top-navigation">
          <li><a href="#">Alumni</a></li>
          <li><a href="#">Parents</a></li>
          <li><a href="#">Calendar</a></li>
          <li><a href="#">Quick Links</a></li>
          <li><a href="#">Login</a></li>
        </ul>
      </div>
    </header>