import { registerBlockType, registerBlockCollection } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import * as defender from './defender';
import * as pageNav from './page-nav';
import * as linkGroup from './link-group';
import * as socialCards from './social-cards';
import * as socialCard from './social-card';

const blocks = [
	defender,
	pageNav,
	linkGroup,
	socialCards,
	socialCard
];

/**
 * Function to register an individual block.
 *
 * @param {Object} block The block to be registered.
 *
 */
const registerBlock = ( block ) => {
	if ( ! block ) {
		return;
	}

	const { name, settings } = block;

	registerBlockType( name, {
		...settings,
	} );
};

/**
 * Function to register blocks
 */
export const registerBlocks = () => {
	blocks.forEach( registerBlock );
};

registerBlocks();
