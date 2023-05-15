import {
	InnerBlocks,
	useBlockProps,
	useInnerBlocksProps,
	RichText,
} from '@wordpress/block-editor';

import classNames from 'classnames';

const Save = ( props ) => {
	const {
		attributes: {
			message,
			shareLinks,
			url,
			alt
		},
		isSelected,
		setAttributes,
		className,
	} = props;

	const blockProps = useBlockProps.save( {
		className: classNames( className, 'social-card' ),
		message
	} );
	
	const innerBlocksProps = useInnerBlocksProps.save( { 
		className: 'social-card-inner' 
	} );

	return null;
};

export default Save;
