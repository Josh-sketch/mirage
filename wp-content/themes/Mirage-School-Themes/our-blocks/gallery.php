
<?php
    if (empty($attributes['photos']) || !is_array($attributes['photos'])) {
        return '<p>No images selected.</p>';
    }
?>

<div class="lifestyle-gallery">
    <?php 
    foreach ($attributes['photos'] as $photo) {
             echo "<img src='" . esc_url($photo['url']) . "' />";
    }
    ?>  
</div>

