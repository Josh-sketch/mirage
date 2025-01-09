
<?php 
  if(!isset($attributes['textSize'])) {
    $attributes['textSize'] = "large";
  }

  if(!isset($attributes['textColor'])) {
    $attributes['textColor'] = "lightYellow";
  }

  if(!isset($attributes['imgURL'])) {
    $attributes['imgURL'] = get_theme_file_uri('images/school-lockers.jpg');
  }
?>
<section class="testimonial"
style="
        background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)),
          url('<?php echo $attributes['imgURL'] ?>');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      "
>
      <div class="quote-block">
        <img class="quote" src="<?php  echo get_theme_file_uri('images/white-quote.png') ?>" />
      </div>

      <div class="testimonial-container">
      <?php 
      $testimonialQuery = new WP_Query(array(
        'post_type' => 'testimonial',
        'posts_per_page' => 5,
        'order_by'=> 'date',
        // 'order' => 'ASC'

      ));
      $first = true;
      while($testimonialQuery->have_posts()) {
        $testimonialQuery->the_post();  
        ?>
        <div class="testimonial-text <?php echo $first ? 'active' : ''; ?>">
          <div class="size-<?php echo $attributes['textSize']; ?>">
           <?php the_field('testimonial_text') ?>
          </div>

          <span class="testimonial-author <?php echo $attributes['textColor']; ?>">   <?php the_field('testimonial_author') ?></span>
        </div>
        <?php 
    $first = false; 
}
?>       
      </div>

      <div class="testimonial-control right">
        <ion-icon name="chevron-forward-outline"></ion-icon>
      </div>

      <div class="testimonial-control left">
        <ion-icon name="chevron-back-outline"></ion-icon>
      </div>
    </section>