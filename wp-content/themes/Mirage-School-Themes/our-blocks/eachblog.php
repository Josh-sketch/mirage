<section class="blog-articles">
<nav  class="blog-navigation">
  <div>
     <span><a href="<?php echo site_url("/blogs"); ?>">Blogs</a></span>
     <span> > </span>
     <span>Current Article</span>
  </div>
</nav>

<div class="content">

   <main>
    <article>
      <div class="blog-header">
       <h3 class="blog-title"><?php the_title(); ?></h3>
       <div class="blog-details">
        <span class="date_published">Date Published: May 8, 2001</span>
        <span class="categories">Category: <?php the_field('category'); ?></span>
        <span class="author">Author: Press Club</span>
       </div>
      </div>

      <div class="blog-content">
        <div class="blog-content-figure">
          <figure>
            <img src="<?php the_field('post_banner_image') ?>" alt="blog photo">
          </figure>
          <figcaption>A detailed description of the picture above.</figcaption>
       </div>
  
       <div class="text-content">
       <?php 
        the_content();
       ?>
       </div>
       
    </article>
   </main>

<aside>
  <?php 
   $post_category = get_field("category");
   $post_ID = get_the_ID();
  ?>
  <h3>
    Related Content
  </h3>

  <?php 
    $relatedContent = new WP_Query(array(
      'post_type' => 'post',
      'posts_per_page' => 7,
      'meta_query' => array(
        array(
        'key' => 'category',
        'value' => $post_category,
        'compare' => '=',
        )
      ),
      'post__not_in'   => array($post_ID), // Exclude the current post
        ));

        if($relatedContent->have_posts()) {
          while($relatedContent->have_posts()) {
            $relatedContent->the_post();
            ?>
           <div class="each-related">
           <img src="<?php the_field('post_banner_image'); ?>" alt="Related content photo"/>
           <span><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></span>
           </div>
            <?php
            wp_reset_postdata();
          }
        } else {
          echo "<p>No related content</p>";
        }
  ?>
 
  
</aside>
<div>

</section>