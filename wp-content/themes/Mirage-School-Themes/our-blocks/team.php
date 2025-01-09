<section id="leadership" class="our-team">
      <div class="our-team-container">
        <div class="our-team-container-title">
          <h2>Leadership Team</h2>
          <p>
            The leadership team at our science-focused high school inspires
            innovation, fosters academic excellence, and promotes a
            collaborative learning environment.
          </p>
        </div>

        <div class="team-members-container">
          <?php 
          $ourteam = new WP_Query(array(
            'post_type' => 'staff',
            'posts_per_page' => '10',
           'meta_query' => array(
              array(
                'key' => 'role',
                'value'=> 'administrative',
                'compare' => 'LIKE',
              ),
              array(
                'key' => 'rank',
                'value' => 8,
                'compare' => '<=',
                'type' => 'NUMERIC',
              )
              ),
            'order' => 'ASC',
              ));
              // echo '<pre>';
              // print_r($ourteam);
              // echo '</pre>';
              while($ourteam->have_posts()) {
                $ourteam->the_post();
?>
             <div class="team-member-card">
            <img
              class="team-member-img"
              src="<?php echo get_field('photo'); ?>"
              alt="team-member-photo"
            />
            <div class="member-title-container">
              <span class="member-name"><?php echo get_field('name'); ?></span>
              <span class="member-position"><?php echo get_field('position'); ?></span>
              <span class="member-email"
                ><a href="mailto:<?php echo get_field('email'); ?>"><?php echo get_field('email'); ?></a></span
              >
            </div>
          </div>
                <?php
              }
          ?>     
        </div>
      </div>
    </section>