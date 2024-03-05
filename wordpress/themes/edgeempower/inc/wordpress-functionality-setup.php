<?php

if ( ! function_exists( 'edgeempower_setup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function edgeempower_setup() {
  /*
   * Make theme available for translation.
   * Translations can be filed in the /languages/ directory.
   * If you're building a theme based on EDGEEMPOWER, use a find and replace
   * to change 'edgeempower' to the name of your theme in all the template files.
   */
  load_theme_textdomain( 'edgeempower', get_template_directory() . '/languages' );

  // Add default posts and comments RSS feed links to head.
  add_theme_support( 'automatic-feed-links' );

  /*
   * Let WordPress manage the document title.
   * By adding theme support, we declare that this theme does not use a
   * hard-coded <title> tag in the document head, and expect WordPress to
   * provide it for us.
   */
  add_theme_support( 'title-tag' );

  /*
   * Enable support for Post Thumbnails on posts and pages.
   *
   * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
   */
  add_theme_support( 'post-thumbnails' );

  /*
   * Switch default core markup for search form, comment form, and comments
   * to output valid HTML5.
   */
  add_theme_support( 'html5', array(
    'search-form',
    'comment-form',
    'comment-list',
    'gallery',
    'caption',
  ) );

  /**
   * Register support for Gutenberg wide images in your theme
   */
  add_theme_support( 'align-wide' );

  /**
   * Fix video size embeded with Gutenberg (they are 16:9 by default)
   */
  add_theme_support( 'responsive-embeds' );

}
endif;
add_action( 'after_setup_theme', 'edgeempower_setup' );
