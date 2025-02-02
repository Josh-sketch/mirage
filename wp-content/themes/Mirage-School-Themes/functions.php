<?php 

function mirage_files() {
  wp_enqueue_style('goggle-fonts','//fonts.googleapis.com');
  wp_enqueue_style('goggle-fonts-styles','//fonts.gstatic.com');
  wp_enqueue_style('flaticons', 'path/to/flaticon.css"');
  wp_enqueue_style('font-awesome-beta', '//cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');
  wp_enqueue_style('teko-font', '//fonts.googleapis.com/css2?family=Playfair+Display:wght@400..900&family=Teko:wght@300..700&display=swap');
  wp_enqueue_style('teko-font-weights', '//fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Playfair+Display:wght@400..900&family=Teko:wght@300..700&display=swap');
  wp_enqueue_style('work-san-font', '//fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap');
  wp_enqueue_style('other-san', '//fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');
  wp_enqueue_style('lora', '//fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Lora:ital,wght@0,400..700;1,400..700&display=swap');
  wp_enqueue_style('mirage_main_styles', get_theme_file_uri('/style/main.css'));

  wp_enqueue_script('mirage-custom-script-1',  get_theme_file_uri('/script/header.js'), array(), false, true);
  wp_enqueue_script('mirage-custom-script-2',  get_theme_file_uri('/script/hero-slider.js'), array(), false, true);
  wp_enqueue_script('mirage-custom-script-3',  get_theme_file_uri('/script/title.js'), array(), false, true);
  wp_enqueue_script('mirage-custom-script-4',  get_theme_file_uri('/script/testimonial.js'), array(), false, true);
  wp_enqueue_script('mirage-custom-script-5',  get_theme_file_uri('/script/blogsnippet-slider.js'), array(), false, true);
  wp_enqueue_script('mirage-custom-script-6',  get_theme_file_uri('/build/index.js'), array("jquery"), '1.0', true);
  wp_enqueue_script('mirage-custom-script-7',  get_theme_file_uri('/script/carousel.js'), array(), false, true);
  wp_enqueue_script('mirage-custom-script-8', get_theme_file_uri('/script/accordion.js'), array(), false, true);
  wp_enqueue_script('mirage-ionic-icons-module',  '//unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js', array(), false, true);
  wp_enqueue_script('mirage-ionic-icons-nonmodule',  '//unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js', array(), false, true);  

  wp_localize_script('mirage-custom-script-6', 'mirageSchoolThemeData', array(
    'themeUrl' => get_template_directory_uri(),
    'root_url' => get_site_url(),
    'nonce' => wp_create_nonce('wp_rest')
  ));
}

add_action('wp_enqueue_scripts', 'mirage_files');

function mirage_features() {
  add_theme_support('editor-styles');
  add_editor_style('/style/main.css'); // Path to your CSS file
  add_editor_style(array('http://fonts.googleapis.com/css2?family=Playfair+Display:wght@400..900&family=Teko:wght@300..700&display=swap', 'http://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Playfair+Display:wght@400..900&family=Teko:wght@300..700&display=swap'));
  add_image_size('pageBanner', 1500, 500, true);
  add_image_size('slidePhoto', 1500, 570, true);
  add_image_size('galleryPhoto', 350, 500, true);
  add_image_size('schoolOwner', 365, 550, true);
}

add_action('after_setup_theme', 'mirage_features');




class placeholderBlock {
  function __construct($name) {
   $this->name = $name; 
   add_action('init', [$this, 'onInit']);
  }

  function ourRenderCallback($attributes, $content) {
    ob_start();
    require get_theme_file_path("/our-blocks/{$this->name}.php");
    return ob_get_clean();
   }

  function onInit() {
    wp_register_script($this->name, get_stylesheet_directory_uri()."/our-blocks/{$this->name}.js", array('wp-blocks', 'wp-editor'));
    register_block_type("ourblocktheme/{$this->name}", array(
    'editor_script' => $this->name ,
    'render_callback' => [$this, 'ourRenderCallback']
    ));
  }
}

new placeholderBlock('header', true);
new placeholderBlock('achievementboard', true);
new placeholderBlock('blogandevent', true);
new placeholderBlock('form', true);
new placeholderBlock('footer', true);
new placeholderBlock('schoolowneraddress', true);
new placeholderBlock('carousel', true);
new placeholderBlock('mission', true);
new placeholderBlock('values', true);
new placeholderBlock('team', true);
new placeholderBlock('transportation', true);
new placeholderBlock('accreditation', true);
new placeholderBlock('titledescription', true);
new placeholderBlock('listers', true);
new placeholderBlock('cta', true);
new placeholderBlock('curriculum', true);
new placeholderBlock('blogs', true);
new placeholderBlock('eachblog', true);
new placeholderBlock('pagination', true);


class JSXBlock {
  function __construct($name, $renderCallback = null, $data = null) {
    $this-> name  = $name;
    $this -> data = $data;
    $this -> renderCallback = $renderCallback;
    add_action('init', [$this, 'onInit']);
  }

  function OurRenderCallback($attributes, $content) {
    ob_start();
    require get_theme_file_path("/our-blocks/{$this->name}.php");
    return ob_get_clean();
  }

  function onInit() {
    wp_register_script($this->name, get_stylesheet_directory_uri()."/build/{$this->name}.js", array('wp-blocks','wp-editor'));
    if($this->data) {
      wp_localize_script($this->name,$this->name,$this->data);
    }
    $ourArgs = array(
      'editor_script' => $this->name
    );

    if($this->renderCallback) {
      $ourArgs['render_callback'] = [$this, 'OurRenderCallback'];
    }

    register_block_type("ourblocktheme/{$this->name}", $ourArgs);
  }
}

new JSXBlock('testimonial', true, ['fallbackimage' => get_theme_file_uri('images/school-lockers.jpg')]);
new JSXBlock("banner", true, ['fallbackimage' => get_theme_file_uri('images/about.jpg')]);
new JSXBlock("herotitle");
new JSXBlock("slideshow", true);
new JSXBlock("slide", true, ['fallbackimage' => get_theme_file_uri('images/high-school.jpg')]);
new JSXBlock("slidetext");
new JSXBlock('slidebutton', true);
new JSXBlock('blackandwhitesvg', true);
new JSXBlock('videoplayer', true, ['fallbackimage' => get_theme_file_uri('images/school-video.jpg')]);
new JSXBlock('copy', true);
new JSXBlock('copytext');
new JSXBlock('schoolmotto', true);
new JSXBlock('whiteandredsvg', true);
new JSXBlock('titleblock', true);
new JSXBlock('gallery', true);
new JSXBlock('anthem', true, ['fallbackimage' => get_theme_file_uri('images/school-building.jpg')]);
new JSXBlock('buttonsblock', true);


add_action('rest_api_init', function () {
  register_rest_route('wp/v2', '/questions/', [
      'methods'  => 'POST',
      'callback' => 'save_question_data',
      'permission_callback' => '__return_true', // Allow any authenticated user
  ]);
});

function save_question_data($request) {
  $params = $request->get_json_params();
  // Create or update the post
  $post_id = wp_insert_post([
      'post_type'   => 'questions',
      'post_status' => $params['status'] ?? 'draft',
      'post_title' => isset($params['title']) ? sanitize_text_field($params['title']) : 'Default Title',
  ]);

  if (is_wp_error($post_id)) {
      return new WP_Error('post_creation_failed', 'Could not create post', ['status' => 500]);
  }

  // Update ACF fields
  if (isset($params['acf'])) {
      foreach ($params['acf'] as $key => $value) {
          update_field($key, $value, $post_id); // ACF function to save fields
      }
  }

  return [
      'success' => true,
      'post_id' => $post_id,
      'message' => 'Question saved successfully',
  ];
}


add_filter('ai1wm_exclude_content_from_export', 'ignoreCertainFiles');

function ignoreCertainFiles($exclude_filters) {
  $exclude_filters[] = 'themes/mirage-school-theme/node_modules';
  return $exclude_filters;
}