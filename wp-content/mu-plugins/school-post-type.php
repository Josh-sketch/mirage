<?php 
function school_post_types() {
  //Testimonial Post Type
  register_post_type('testimonials', array(
    'supports' => array('title'), 
    'public' => true,
    'show_in_rest' => true,
    'labels' => array(
      'name' => 'Testimonial',
      'add_new_item' => 'Add New Testimonial',
      'edit_item' => 'Edit Testimonial',
      'all_items' => 'All Testimonials',
      'singular_name' => 'Testimonial' 
    ),
    "menu_icon" => "dashicons-editor-quote"
  ) );
  register_post_type('events', array(
    'supports' => array('title'), 
    'public' => true,
    'show_in_rest' => true,
    'labels' => array(
      'name' => 'Event',
      'add_new_item' => 'Add New Event',
      'edit_item' => 'Edit Event',
      'all_items' => 'All Events',
      'singular_name' => 'Event' 
    ),
    "menu_icon" => "dashicons-calendar"
  ) );
   register_post_type('Questions', array(
    'supports' => array('title'), 
    'public' => true,
    'show_in_rest' => true,
    'labels' => array(
      'name' => 'Questions',
      'add_new_item' => 'Add New Question',
      'edit_item' => 'Edit Question',
      'all_items' => 'All Questions',
      'singular_name' => 'Question' 
    ),
    "menu_icon" => "dashicons-editor-help"
  ) );

  register_post_type('staff', array(
    'supports' => array('title'), 
    'public' => true,
    'show_in_rest' => true,
    'labels' => array(
      'name' => 'Staff',
      'add_new_item' => 'Add New Member',
      'edit_item' => 'Edit Member',
      'all_items' => 'All Member',
      'singular_name' => 'Member' 
    ),
    "menu_icon" => "dashicons-businessperson"
  ) );

  register_post_type('curriculum', array(
    'supports' => array('title'), 
    'public' => true,
    'show_in_rest' => true,
    'labels' => array(
      'name' => 'Grade',
      'add_new_item' => 'Add New Grade',
      'edit_item' => 'Edit Grade',
      'all_items' => 'All Grades',
      'singular_name' => 'Grade' 
    ),
    "menu_icon" => "dashicons-book"
  ) );
}

 add_action('init', 'school_post_types');

?>