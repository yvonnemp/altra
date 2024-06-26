<?php

// Frontend Assets
function altra_scripts()
{

  global $wp_query;

  // Styles

  wp_enqueue_style('altra-fonts', get_template_directory_uri() . '/assets/css/fonts.css', false, filemtime(get_template_directory() . '/assets/css/fonts.css'));

  wp_enqueue_style('altra-main-style', get_template_directory_uri() . '/assets/css/main.css', false, filemtime(get_template_directory() . '/assets/css/main.css'));

  wp_enqueue_style('aos', get_template_directory_uri() . '/assets/css/vendor/aos.css', false, filemtime(get_template_directory() . '/assets/css/vendor/aos.css'));

  wp_enqueue_style('fontawesome', get_template_directory_uri() . '/assets/css/vendor/fontawesome.css', false, filemtime(get_template_directory() . '/assets/css/vendor/fontawesome.css'));

  wp_enqueue_style('hamburgers', get_template_directory_uri() . '/assets/css/vendor/hamburgers.css', false, filemtime(get_template_directory() . '/assets/css/vendor/hamburgers.css'));

  // JavaScript

  // Vanila JS
  wp_enqueue_script('aos', get_template_directory_uri() . '/assets/js/vendor/aos.js', array(), filemtime(get_template_directory() . '/assets/js/vendor/aos.js'), true);

  // jQuery Based

  wp_enqueue_script('jquery-debouncedresize', get_template_directory_uri() . '/assets/js/vendor/jquery-debouncedresize.js', array('jquery'), filemtime(get_template_directory() . '/assets/js/vendor/jquery-debouncedresize.js'), true);

  wp_enqueue_script('jquery-match-height', get_template_directory_uri() . '/assets/js/vendor/jquery-match-height.js', array('jquery'), filemtime(get_template_directory() . '/assets/js/vendor/jquery-match-height.js'), true);

  wp_enqueue_script('fitvids', get_template_directory_uri() . '/assets/js/vendor/fitvids.js', array('jquery'), filemtime(get_template_directory() . '/assets/js/vendor/fitvids.js'), true);

  wp_enqueue_script('altra-onload', get_template_directory_uri() . '/assets/js/onload.js', array('jquery'), filemtime(get_template_directory() . '/assets/js/onload.js'), true);

  wp_enqueue_script('altra-script', get_template_directory_uri() . '/assets/js/main.js', array('jquery'), filemtime(get_template_directory() . '/assets/js/main.js'), true);

  // The core GSAP library
  wp_enqueue_script('gsap-js', 'https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js', array(), false, true);
  // ScrollTrigger - with gsap.js passed as a dependency
  wp_enqueue_script('gsap-st', 'https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js', array('gsap-js'), false, true);
  // Your animation code file - with gsap.js passed as a dependency
  wp_enqueue_script('gsap-js2', get_template_directory_uri() . 'js/app.js', array('gsap-js'), false, true);

  if (!get_field('default_wordpress_block_styles', 'option')) {
    wp_dequeue_style('wp-block-library');
  }

  if (is_singular() && comments_open() && get_option('thread_comments')) {
    wp_enqueue_script('comment-reply');
  }

  if (get_field('show_popup_after_refuse', 'option')) {
    $cookie_popup = 1;
    $cookie_popup_text = get_field('message_in_popup_after_refuse', 'option');
  } else {
    $cookie_popup = 0;
    $cookie_popup_text = '';
  }

  $theme_settings = array(
    'cookie_popup' => $cookie_popup,
    'cookie_popup_text' => $cookie_popup_text,
    'home_dir' => esc_url(home_url('/')),
    'template_dir' => get_template_directory_uri(),
    'ajaxurl' => admin_url('admin-ajax.php'),
    'noposts'  => esc_html__('No older posts found', 'altra'),
    'loadmore' => esc_html__('Load more', 'altra'),
    'loading' => esc_html__('Loading', 'altra'),
    'posts' => json_encode($wp_query->query_vars),
    'current_page' => get_query_var('paged') ? get_query_var('paged') : 1,
    'max_page' => $wp_query->max_num_pages
  );

  wp_localize_script('altra-script', 'theme_settings', $theme_settings);
}

add_action('wp_enqueue_scripts', 'altra_scripts');

// Admin assets
function custom_editor_styles()
{
  add_theme_support('editor-styles');
  add_editor_style('assets/css/editor-styles.css');
}
add_action('after_setup_theme', 'custom_editor_styles');

function admin_style()
{
  wp_enqueue_style('admin-global', get_template_directory_uri() . '/assets/css/admin-global.css', false, filemtime(get_template_directory() . '/assets/css/admin-global.css'));
  wp_enqueue_style('admin-acf-blocks', get_template_directory_uri() . '/assets/css/admin-acf-blocks.css', false, filemtime(get_template_directory() . '/assets/css/admin-acf-blocks.css'));
}
add_action('admin_enqueue_scripts', 'admin_style');

// Disable default WordPress Block Styles if it allowed in the settings

// function action_disable_block_styles() {
// 	wp_dequeue_style( 'wp-block-library' );
// }

// if(get_field('default_wordpress_block_styles') == false) {
//   //add_action( 'wp_enqueue_scripts', 'action_disable_block_styles' );
// }
