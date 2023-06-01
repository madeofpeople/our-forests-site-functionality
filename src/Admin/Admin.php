<?php
/**
 * Admin Customizations
 *
 * @since   1.0.0
 * @package SiteFunctionality
 */

namespace SiteFunctionality\Admin;

use SiteFunctionality\Abstracts\Base;
use SiteFunctionality\Admin\Options;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Admin extends Base {

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
	 * Dependencies
	 *
	 * @return void
	 */
	public function init() {
		new Options( $this->version, $this->plugin_name );
		add_filter( 'trp_translating_capability', array( $this, 'translating_capability' ) );
	}

	/**
	 * Modify Admin Menu Name
	 *
	 * @param array $args
	 * @return array $args
	 */
	public function modify_admin_menu( $args ) {
		return $args;
	}

	/**
	 * Modify capability required for TranslatePress
	 *
	 * @param string $capability
	 * @return string $capability
	 */
	public function translating_capability( $capability ) : string {
		$capability = 'publish_posts';
		return $capability;
	}

	/**
	 * Load admin JS
	 *
	 * @see https://developer.wordpress.org/reference/hooks/admin_enqueue_scripts/
	 *
	 * @param string $hook
	 * @return void
	 */
	function admin_enqueue_scripts( $hook ) {
		\wp_enqueue_script( 'site-functionality-admin-js', SITE_CORE_DIR_URI . 'assets/js/admin.js', array( 'jquery' ), '', true );
	}

}
