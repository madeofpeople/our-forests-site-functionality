<?php
/**
 * Functions to register client-side assets (scripts and stylesheets) for the
 * Gutenberg block.
 *
 * @package site-functionality
 */
namespace SiteFunctionality\Blocks;

include_once \plugin_dir_path( __FILE__ ) . 'src/defender/index.php';
include_once \plugin_dir_path( __FILE__ ) . 'src/page-nav/index.php';
include_once \plugin_dir_path( __FILE__ ) . 'src/link-group/index.php';
// include_once \plugin_dir_path( __FILE__ ) . 'src/social-cards/index.php';
include_once \plugin_dir_path( __FILE__ ) . 'src/social-card/index.php';
// include_once \plugin_dir_path( __FILE__ ) . 'src/social-card-group/index.php';

const TEMPLATE_PARAMS = array(
	'filter_prefix'             => 'site_functionality',
	'plugin_directory'          => SITE_CORE_DIR,
	'plugin_template_directory' => 'blocks/src/templates',
	'theme_template_directory'  => 'template-parts/blocks',
);

function get_template_params() {
	return TEMPLATE_PARAMS;
}

/**
 * Check if contains video
 * 
 * @link https://developer.wordpress.org/reference/functions/wp_get_attachment_url/
 *
 * @param array $media
 * @param array $formats
 * @return boolean
 */
function has_video( array $media, $formats = array( 'mp4', 'webm' ) ) {
	$has_video = false;
	foreach( $media as $media_id ) {
		if( $has_video = is_video( $media_id, $formats ) ) {
			break;
		}
	}
	return $has_video;
}

/**
 * Check if is video
 *
 * @param integer $media_id
 * @param array $formats
 * @return boolean
 */
function is_video( int $media_id, $formats = array( 'mp4', 'webm' ) ) {
	$data_type = get_data_type( $media_id );
	if( in_array( $data_type, $formats ) ) {
		return true;
	}
	return false;
}


/**
 * Get data type
 * 
 * @link https://developer.wordpress.org/reference/functions/wp_get_attachment_url/
 *
 * @param integer $media_id
 * @return string 
 */
function get_data_type( int $media_id ) {
	$media_attributes = \wp_get_attachment_url( $media_id );
	$data_type = 'm4v' === pathinfo( $media_attributes, PATHINFO_EXTENSION ) ? 'mp4' : pathinfo( $media_attributes, PATHINFO_EXTENSION );
	return $data_type;
}

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * Passes translations to JavaScript.
 */
function init() {

	if ( function_exists( '\wp_set_script_translations' ) ) {
		/**
		 * May be extended to wp_set_script_translations( 'my-handle', 'my-domain',
		 * plugin_dir_path( MY_PLUGIN ) . 'languages' ) ). For details see
		 * https://make.wordpress.org/core/2018/11/09/new-javascript-i18n-support-in-wordpress/
		 */
		wp_set_script_translations( 'site-functionality', 'site-functionality' );
	}
}
\add_action( 'init', __NAMESPACE__ . '\init' );

/**
 * Enqueue Build Script
 *
 * When using @wordpress/create-block set-up with multiple blocks, we get "Block ... is already registered." error because each block's block.json file calls the build script again.
 * Remove build script reference in block.json files
 *
 * @link https://wordpress.slack.com/archives/C02QB2JS7/p1629116113108600
 *
 * @return void
 */
function enqueue_blocks_scripts() {
	$asset_file = require \plugin_dir_path( __FILE__ ) . 'build/index.asset.php';
	\wp_enqueue_script( 'site-functionality', \plugins_url( '/build/index.js', __FILE__ ), $asset_file['dependencies'], $asset_file['version'], false );
}
\add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\enqueue_blocks_scripts' );

/**
 * Register custom block category
 *
 * @see https://developer.wordpress.org/reference/hooks/block_categories_all/
 *
 * @param array  $block_categories
 * @param object $block_editor_context instance of WP_Block_Editor_Context
 */
function register_block_category( $block_categories, $block_editor_context ) {
	return array_merge(
		$block_categories,
		array()
	);
}
// \add_filter( 'block_categories_all', __NAMESPACE__ . '\register_block_category', 9, 2 );

/**
 * Remove wpautop from blocks
 * 
 * @link https://developer.wordpress.org/reference/hooks/render_block/
 * @link https://developer.wordpress.org/reference/functions/wpautop/
 *
 * @param string $block_content
 * @param array $block
 * @return string $block_content
 */
function remove_wpautop( $block_content, $block ) {
    \remove_filter( 'the_content', 'wpautop' );

    return $block_content;
}
\add_filter( 'render_block', __NAMESPACE__ . '\remove_wpautop', 10, 2 );