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
		className: classNames( className, 'social-post' )
	} );
	
	const { children, ...innerBlocksProps } = useInnerBlocksProps.save( 
		{
			className: 'image-group'
		}
	);

	// return null;
	return (
		<article {...blockProps}>
			<div {...innerBlocksProps}>
				{ children }
			</div>
		</article>
	);
};

export default Save;
