<?php 
if(!isset($attributes['videoURL'])) {
   $attributes['videoURL'] = get_theme_file_uri("images/school-video.avif");
}
?>
<div class="about-video">
          <img class="school-video" src="<?php echo $attributes['videoURL']; ?>" />
          <ion-icon name="play-circle-outline"></ion-icon>
</div>