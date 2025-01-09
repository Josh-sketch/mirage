<section id="transportation" class="transportation-info">
      <div class="mission-container">
        <div class="mission-title-block">
          <h2><?php the_field('information_title'); ?></h2>
        </div>
        <div class="mission-content-block">
          <div class="mission-content-text">
            <p><?php the_field('information_text'); ?></p>

            <ul class="information-list">
              <?php 
              $stops = get_field('stops');
              foreach($stops as $stop) {
                $bus_stop = $stop['place'];
                $time = $stop['time'];
                if(isset($stop['place']) && $stop['place'] !== "") {

                
?>
<li class="information-list-item">
                <span class="place"
                  ><?php echo $bus_stop ?></span
                >
                <span class="time">(<?php echo $time ?>)</span>
              </li>
                <?php 
              }
            }
              ?>
            </ul>
          </div>
          <div class="mission-content-image">
            <img src="<?php the_field('information_photo'); ?>" />
          </div>
        </div>
      </div>
    </section>
