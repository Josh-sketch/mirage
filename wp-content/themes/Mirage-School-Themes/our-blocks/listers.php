<section class="our-facilities">
  <?php 
   $lists = get_field('lists');
  //  echo "<pre>";
  //  print_r($lists);
  //  echo "<pre>";

   foreach($lists as $list) {
    if(isset($list['list_title']) && $list['list_title'] !== "") {
   ?>
 <div class="each-facility-container">
        <div class="facility-image">
          <img src="<?php echo $list['list_photo']; ?>" />
        </div>
        <div class="facility-description">
          <h3><?php echo $list['list_title']; ?></h3>
         <?php echo $list['list_content']; ?>
        </div>
      </div>
   <?php
    }
   }

?>
 
</section>