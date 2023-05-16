<?php
/**
 * Register and Render Block
 *
 * @since   1.0.1
 * @package Site_Functionality
 */
namespace Site_Functionality\Blocks\Defender;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Render Block
 *
 * @param array  $block_attributes
 * @param string $content
 * @return string
 */
function render( $attributes, $content, $block ) {
	$args = array();
	if ( array_key_exists( 'id', $attributes ) && $attributes['id'] > 0 ) {
		$args['style'] = sprintf( 'background-image: url(%s);', \wp_get_attachment_image_url( (int) $attributes['id'], 'full' ) );
	}
	$tag_name           = ( isset( $attributes['tagName'] ) ) ? $attributes['tagName'] : 'article';
	$wrapper_attributes = \get_block_wrapper_attributes( $args );

	$content = sprintf( '<%s %s>', esc_attr( $tag_name ), $wrapper_attributes );

	foreach ( $block->inner_blocks as $inner_block ) {
		\remove_filter( 'the_content', 'wpautop' );
		$content .= \apply_filters( 'the_content', $inner_block->render() );
		\add_filter( 'the_content', 'wpautop' );
	}

	$content .= sprintf( '</%s>', esc_attr( $tag_name ) );

	return $content;
}

/**
 * Registers the `site-functionality/defender` block on the server.
 */
function register() {
	\register_block_type(
		__DIR__,
		array(
			'render_callback' => __NAMESPACE__ . '\render',
		)
	);
}
add_action( 'init', __NAMESPACE__ . '\register' );

/**
 * Add Image Size
 *
 * @link https://developer.wordpress.org/reference/functions/add_image_size/
 *
 * @return void
 */
function add_image_size() {
	\add_image_size( 'defender', 600, 600, true );
}
// add_action( 'after_setup_theme', __NAMESPACE__ . '\add_image_size' );

/**
 * Add Image Size to Media Picker
 *
 * @link https://developer.wordpress.org/reference/functions/add_image_size/
 *
 * @param array $sizes
 * @return array $sizes
 */
function add_image_size_to_picker( $sizes ) {
	return array_merge(
		$sizes,
		array(
			'defender' => __( 'Defender', 'site-functionality' ),
		)
	);
}
// add_filter( 'image_size_names_choose', __NAMESPACE__ . '\add_image_size_to_picker' );
