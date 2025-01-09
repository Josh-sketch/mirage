<section class="curriculum">
      <h2>Curriculum</h2>
      <ul class="curriculum-accordion">
        <li>
          <div class="curriculum-title">
            <i class="fa-solid fa-plus"></i>
            <span>Lower School </span>
          </div>

          <div class="curriculum-category-container">
            <div class="curriculum-category-nav">
                 <?php 
                     $lowerSchool = new WP_Query(array(
                      'post_type' => 'curriculum',
                      'posts_per_page'=> -1,
                      'order'=> 'ASC',   
                      'meta_query' => array(
                        array(
                          'key' => 'grade_level',
                          'value' => 'Lower School',
                          'compare' => 'LIKE'
                        ),
                        
                      )
                      ));
                      $first = true;
               while($lowerSchool->have_posts()) {
              $lowerSchool->the_post();
?>
  <button class="event-nav-btn"><?php the_title(); ?></button>
              <?php
               }
                 ?>
            </div>
                <?php 
       while($lowerSchool->have_posts()) {
             $lowerSchool->the_post();
             ?>
             <table class="event-table">
              <tbody>
                <?php
               $subjects = get_field('subjects');
               foreach($subjects as $subject) {
                ?>
               <tr>
                  <td class="bold"><?php echo $subject['subject_name'] ?></td>
                  <td>
                    <ul class="inner-table-list">
                    <?php 
                     $topics = explode(",", $subject['topics']);
                     foreach($topics as $topic) {
                     ?>
                       <li><?php echo $topic ?></li>
                      <?php
                     }
                     ?>
                    </ul>
                  </td>
                </tr>
                <?php
               }
                ?>
            
              </tbody>
            </table>
             <?php
             $first = false;
          }
                ?>
          </div>
        </li>

        <li>
          <div class="curriculum-title">
            <i class="fa-solid fa-plus"></i>
            <span>Middle School </span>
          </div>

          <div class="curriculum-category-container">
            <div class="curriculum-category-nav">
                 <?php 
                     $middleSchool = new WP_Query(array(
                      'post_type' => 'curriculum',
                      'posts_per_page'=> -1,
                      'order'=> 'ASC',   
                      'meta_query' => array(
                        array(
                          'key' => 'grade_level',
                          'value' => 'Middle School',
                          'compare' => 'LIKE'
                        ),
                        
                      )
                      ));
                      $first = true;
               while($middleSchool->have_posts()) {
              $middleSchool->the_post();
?>
  <button class="event-nav-btn"><?php the_title(); ?></button>
              <?php
               }
                 ?>
            </div>
                <?php 
       while($middleSchool->have_posts()) {
             $middleSchool->the_post();
             ?>
             <table class="event-table">
              <tbody>
                <?php
               $subjects = get_field('subjects');
               foreach($subjects as $subject) {
                ?>
               <tr>
                  <td class="bold"><?php echo $subject['subject_name'] ?></td>
                  <td>
                    <ul class="inner-table-list">
                    <?php 
                     $topics = explode(",", $subject['topics']);
                     foreach($topics as $topic) {
                     ?>
                       <li><?php echo $topic ?></li>
                      <?php
                     }
                     ?>
                    </ul>
                  </td>
                </tr>
                <?php
               }
                ?>
            
              </tbody>
            </table>
             <?php
             $first = false;
          }
                ?>
          </div>
        </li>

        <li>
          <div class="curriculum-title">
            <i class="fa-solid fa-plus"></i>
            <span>High School </span>
          </div>

          <div class="curriculum-category-container">
            <div class="curriculum-category-nav">
                 <?php 
                     $upperSchool = new WP_Query(array(
                      'post_type' => 'curriculum',
                      'posts_per_page'=> -1,
                      'order'=> 'ASC',   
                      'meta_query' => array(
                        array(
                          'key' => 'grade_level',
                          'value' => 'Upper School',
                          'compare' => 'LIKE'
                        ),
                        
                      )
                      ));
                      $first = true;
               while($upperSchool->have_posts()) {
              $upperSchool->the_post();
?>
  <button class="event-nav-btn"><?php the_title(); ?></button>
              <?php
               }
                 ?>
            </div>
                <?php 
       while($upperSchool->have_posts()) {
             $upperSchool->the_post();
             ?>
             <table class="event-table">
              <tbody>
                <?php
               $subjects = get_field('subjects');
               foreach($subjects as $subject) {
                ?>
               <tr>
                  <td class="bold"><?php echo $subject['subject_name'] ?></td>
                  <td>
                    <ul class="inner-table-list">
                    <?php 
                     $topics = explode(",", $subject['topics']);
                     foreach($topics as $topic) {
                     ?>
                       <li><?php echo $topic ?></li>
                      <?php
                     }
                     ?>
                    </ul>
                  </td>
                </tr>
                <?php
               }
                ?>
            
              </tbody>
            </table>
             <?php
             $first = false;
          }
                ?>
          </div>
        </li>
      </ul>
    </section>