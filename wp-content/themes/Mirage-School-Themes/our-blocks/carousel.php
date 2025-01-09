<section id="history" class="our-history">
<?php
$school_history = get_field('school_history');

$years = [];
$titles = [];
$descriptions = [];
$imageURLs = [];

foreach($school_history as $history) {
  array_push($years, $history['year']);
  array_push($titles, $history['title']);
  array_push($descriptions, $history['description']);
  array_push($imageURLs, $history['photo']);
}
?>
      <div class="history-title">
        <h2>Our History</h2>
        <span>From <?php echo $years[0]; ?> to present</span>
      </div>
      <div class="history-event">
        <div>
      <?php 
       $first = true;
      foreach($school_history as $history) {
        ?>
        <div class="history-details <?php echo $first ? 'active' : ''; ?>">
        <div>
          <span class="history-year"><?php echo $history['year'] ?></span>
          <div class="history-content">
            <h3><?php echo $history['title']; ?></h3>
            <p class="history-paragraph">
            <?php echo $history['description'] ?>
            </p>
      </div>
      </div>
        </div>
<?php
$first = false;
      }
      ?>
      </div>
     
        <div class="history-image-gallery">
          <?php 
          $first = true;
          foreach($imageURLs as $photo) {
?>
 <img class="history-image <?php echo $first ? 'active' : '' ?>" src="<?php echo $photo ?>" />
<?php
      $first = false;
          }
          ?>      
        </div>
        <div class="history-slider">
          <?php 
          $first = true;
         foreach($years as $year) {
          ?>
          <div class="history-picker <?php echo $first ? 'active' : '' ?>">
            <span class="bullet"></span>
            <span class="year"><?php echo $year ?></span>
          </div>
          <?php
           $first = false;
         }
          ?>
        </div>
      </div>
    </section>