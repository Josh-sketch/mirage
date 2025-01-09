<!-- <?php 
if(!$attributes['imgURL']) {
  $attributes['imgURL'] = get_theme_file_uri('images/about.jpg');
}
?> -->

<div
      class="about-hero"
      style="
        background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)),
          url('<?php echo $attributes['imgURL'] ?>');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      "
    >
   <?php echo $content;  ?>   
    </div>