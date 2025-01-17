<section class="school-event">
        <div class="blog">          
          <div class="blog-container">
              <?php 
              $homeBlogSummary = new WP_Query(array(
                'post_type' => 'post',
                'posts_per_page' => 3,
                'order_by' => 'date',
              ));
              $first = true;
              while($homeBlogSummary->have_posts()) {
                   $homeBlogSummary->the_post();
                    ?>    
              <div class="blog-summary <?php echo $first ? 'active' : ''; ?>">
                <img src="<?php the_field('post_banner_image'); ?>" />
                <div class="blog-content">
                <span class="blog-category"><?php the_field('category') ?></span>
                <h2 class="blog-title"><?php the_title(); ?></h2>
                <div class="blog-excerpt">
                <?php echo wp_trim_words(get_the_content(), 50); ?>
                </div>
                <div class="btn">
                <a class="read-more-btn" href="<?php the_permalink(); ?>">Read More</a>
                </div>
              </div>
              </div>
                <?php
                 $first = false; 
              }
              ?>
          </div> 
          <div class="blog-nav">
        <div class="blog-left" >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                />
              </svg>   
          </div>
             
              <div>
                <a href="<?php echo site_url("/blogs") ?>"> See all blogs</a>
            </div>

            <div class="blog-right">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </div>

             
          </div>
          </div>
        <div class="event-calendar">
          <span class="calender-title">Upcoming Events</span>
          
            <?php 
              $today = date('Ymd'); 
              $homeEventDisplay = new WP_Query(array(
                'post_type' => 'event',
                'posts_per_page' => 7,
                'meta_query' => array(
                  array(
                    'key' => 'event_date',
                    'value' => $today,
                    'compare' => '>=',
                    'type' =>'NUMERIC'
                  )
                )
              ));
              while($homeEventDisplay->have_posts()) {
                $homeEventDisplay->the_post();
?>
    <div class="calender-item">
            <div class="event-date">
              <div class="month-date"><?php 
            
              $month = new DateTime(get_field('event_date'));
                echo $month->format('M');
              ?></div>
              <div class="number-date">
                <?php 
                 $day = new DateTime(get_field('event_date'));
                echo $day->format('d');
                ?>
              </div>
            </div>
            <div class="event-title">
              <h3 class="event-main-title">
                <?php the_title(); ?>
              </h3>
              <span class="event-time"><?php the_field('event_start') ?> to <?php the_field('event_end')?></span>
            </div>
          </div>

                <?php
              }
            ?>
        
          <div class="btn">
            <a class="read-more-btn" href="#">Full Calendar</a>
          </div>
        </div>
      </div>
    </section>