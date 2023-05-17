import {
	InnerBlocks,
	useBlockProps,
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

const ALLOWED_BLOCKS = [ 'site-functionality/social-card', 'core/group' ];

const Edit = ( props ) => {
	const {
		attributes,
		className,
		setAttributes,
	} = props;

	const blockProps = useBlockProps( {
		className: 'wp-block-site-functionality-social-card-row',
	} );

	return (
		<div { ...blockProps }>
			<InnerBlocks
				allowedBlocks={ ALLOWED_BLOCKS }
				template={ TEMPLATE }
			/>
		</div>
	);
};

export default Edit;
