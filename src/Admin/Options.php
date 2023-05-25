<?php
/**
 * Site Options Page
 *
 * @since   1.0.0
 * @package Core_Functionality
 */

namespace SiteFunctionality\Admin;

use SiteFunctionality\Abstracts\Base;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Options extends Base {

	/**
	 * Constructor.
	 *
	 * @since 1.0.0
	 */
	public function __construct( $version, $plugin_name ) {
		parent::__construct( $version, $plugin_name );
		$this->init();
	}

	/**
	 * Init
	 *
	 * @return void
	 */
	public function init() {
		\add_action( 'acf/init', array( $this, 'add_media_settings_page' ) );
	}

	/**
	 * Add options page
	 *
	 * @link https://www.advancedcustomfields.com/resources/acf_add_options_page/
	 *
	 * @return void
	 */
	function add_media_settings_page() {
		$args = array(
			'menu_slug'       => 'media-settings',
			'page_title'      => __( 'Media Settings', 'site-functionality' ),
			'active'          => true,
			'menu_title'      => __( 'Settings', 'site-functionality' ),
			'capability'      => 'edit_posts',
			'parent_slug'     => 'upload.php',
			'position'        => '',
			'icon_url'        => '',
			'redirect'        => false,
			'post_id'         => 'options',
			'autoload'        => false,
			'update_button'   => __( 'Update', 'site-functionality' ),
			'updated_message' => __( 'Settings Updated', 'site-functionality' ),
		);
		if ( function_exists( '\acf_add_options_page' ) ) {
			\acf_add_options_page( $args );
		}
		
	}
}
