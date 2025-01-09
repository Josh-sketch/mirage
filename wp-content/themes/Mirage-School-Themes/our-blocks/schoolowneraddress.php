<section id="intro" class="from-the-head-of-school">
      <div class="container-big">
        <div class="left-side-1200">
          <?php the_content(); ?>
        </div>
        <div class="right-side-1200">
          <div class="school-head">
            <img src="<?php the_field('school_owner_picture') ?>" />
          </div>

          <div class="school-head-name">
            <span><?php the_field('school_owner_name'); ?></span>
          </div>
        </div>
      </div>
    </section>