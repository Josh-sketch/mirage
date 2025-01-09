<?php 
$title_description = get_field('title_description');

if($title_description !== "") {
?>
<section class="why-mirage">
      <div class="mission-title-block">
        <p>
       <?php the_field('title_description'); ?>
        </p>
      </div>
    </section>
<?php
}

?>
