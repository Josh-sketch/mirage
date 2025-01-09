<?php
// Ensure $attributes['svgColor'] exists and set a default value if not.
if (!isset($attributes['svgColor']) || !$attributes['svgColor']) {
    $attributes['svgColor'] = '%23dadada';
}
?>

<section class="about-mirage"
  style="
   background: url('data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%27100%%27%20height=%271025%27%3E%3Cpolygon%20points=%270,0%201900,0%201900,800%200,1025%27%20fill=%27<?php echo $attributes['svgColor'] ?>%27/%3E%3C/svg%3E');
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
  "
>
<div class="about-mirage-content">
      <?php echo $content?>
</div>
</section>
