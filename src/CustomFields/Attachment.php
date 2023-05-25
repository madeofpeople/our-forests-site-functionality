<?php
/**
 * Content Attachment
 *
 * @since   1.0.2
 * @package SiteFunctionality
 */
namespace SiteFunctionality\CustomFields;

use SiteFunctionality\Abstracts\Base;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Attachment extends Base {

	/**
	 * Constructor.
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
		\add_action( 'acf/include_fields', array( $this, 'register_fields' ) );
	}

	/**
	 * Register Custom Fields
	 *
	 * @link https://www.advancedcustomfields.com/resources/register-fields-via-php/
	 *
	 * @return void
	 */
	public function register_fields() {
		\acf_add_local_field_group(
			array(
				'key'                   => 'group_media_details',
				'title'                 => __( 'Media Details', 'site-functionality' ),
				'fields'                => array(
					array(
						'key'               => 'field_intro_text',
						'label'             => __( 'Intro Text', 'site-functionality' ),
						'name'              => 'intro_text',
						'aria-label'        => '',
						'type'              => 'wysiwyg',
						'instructions'      => '',
						'required'          => 0,
						'conditional_logic' => 0,
						'wrapper'           => array(
							'width' => '',
							'class' => '',
							'id'    => '',
						),
						'acfe_save_meta'    => 0,
						'default_value'     => '',
						'tabs'              => 'all',
						'toolbar'           => 'basic',
						'media_upload'      => 0,
						'delay'             => 0,
					),
				),
				'location'              => array(
					array(
						array(
							'param'    => 'attachment',
							'operator' => '==',
							'value'    => 'image',
						),
					),
				),
				'menu_order'            => 0,
				'position'              => 'normal',
				'style'                 => 'default',
				'label_placement'       => 'left',
				'instruction_placement' => 'label',
				'hide_on_screen'        => '',
				'active'                => true,
				'description'           => '',
				'show_in_rest'          => 1,
				'acfe_display_title'    => '',
				'acfe_autosync'         => '',
				'acfe_form'             => 0,
				'acfe_meta'             => '',
				'acfe_note'             => '',
			)
		);
	}
}
