<!-- <section class="why-mirage">
      <div class="mission-title-block">
        <h3>
       School blogs
        </h3>
      </div>
    </section> -->
<section class="our-facilities">
<?php 
 $posts = new WP_Query(array(
   'post_type' => 'post'
 ));
 while($posts->have_posts()) {
  $posts->the_post();
  ?>
  <div class="each-facility-container"> 
        <div class="facility-image">
          <img src="<?php the_field("post_banner_image") ?>" />
        </div>
        <div class="facility-description">
          <h3><?php the_title(); ?></h3>
          <?php wp_trim_words(the_content(), 50); ?>
          <button><a href="<?php the_permalink(); ?>">Read More</a></button>
        </div>
  </div>
  <?php
 }
?>

</section>