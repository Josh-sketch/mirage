<section id="mission" class="our-mission">
      <div class="mission-container">
        <div class="mission-title-block">
          <h2>Our Mission</h2>
          <p>
            <?php the_field('mission_summary'); ?>
          </p>
        </div>
        <div class="mission-content-block">
          <div class="mission-content-text">
         <?php the_field('mission_content') ?>
          </div>
          <div class="mission-content-image">
            <img src="<?php the_field('mission_photo') ?>" />
          </div>
        </div>
      </div>
    </section>