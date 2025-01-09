<?php 
if(!isset($attributes['imgURL'])) {
    $attributes['imgURL'] = get_theme_file_uri('images/school-building.jpg');
  }
  ?>
<section id="anthem" class="school-pledge"
style="
        background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)),
          url('<?php echo $attributes['imgURL'] ?>');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      "
>
      <h2>School Anthem</h2>
      <div class="anthem-flex">
      <?php the_field('school_anthem') ?>
      </div>
    </section>