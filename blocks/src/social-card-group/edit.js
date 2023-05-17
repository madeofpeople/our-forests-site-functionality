import {
	InnerBlocks,
	useBlockProps,
	useInnerBlocksProps
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

import classNames from 'classnames';

const TEMPLATE = [
	[
		'core/group',
		{
			className: 'wp-block-site-functionality-social-cards'
		},
		[
			[
				'site-functionality/social-card',
				{},
			],
			[
				'site-functionality/social-card',
				{},
			],
			[
				'site-functionality/social-card',
				{},
			]
		]
	]
];

const ALLOWED_BLOCKS = ['core/group', 'site-functionality/social-card'];

const Edit = (props) => {
	const {
		attributes,
		className,
		setAttributes,
	} = props;

	const blockProps = useBlockProps( { className: 'wp-block-site-functionality-social-cards-row' } );
    const innerBlocksProps = useInnerBlocksProps(
        blockProps,
        {
            template: TEMPLATE,
			allowedBlocks: ALLOWED_BLOCKS
        }
    );

	return (
		<section {...innerBlocksProps} />
	);
};

export default Edit;
