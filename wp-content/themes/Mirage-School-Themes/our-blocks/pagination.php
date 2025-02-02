<section class="pagination">
<?php 
 $posts = new WP_Query(array(
   'paged' => get_query_var('paged',  1),
   'post_type' => 'post',
   'posts_per_page' => '2',
 ));
 ?>
 
  <nav class="pagination-nav">
  <div class="pagination-container">
    <?php 
   echo paginate_links(array(
    'total' => $posts->max_num_pages
   ));
  ?>
  </div>
</nav>
</section>