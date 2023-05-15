/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

//  Import CSS.
import './editor.scss';
// import './style.scss';

/**
 * Internal dependencies
 */
import metadata from './block.json';
import Edit from './edit';
import Save from './save';
import icon from './icon';

const { name, category } = metadata;

const settings = {
	icon,
	edit: Edit,
	save: Save,
};

export { name, category, settings };
