import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import classNames from 'classnames';

const Save = ( props ) => {
	const {
		attributes: {
			id,
			url,
			alt,
			tagName,
			layout
		},
		className,
		setAttributes,
	} = props;

	const backgroundImage = url ? `url(${ url })` : undefined;
	const bgStyle = { backgroundImage: backgroundImage }
	const blockProps = useBlockProps.save({
		className: classNames(className, 'defender'),
		style: bgStyle
	});

	return (
		<div {...useBlockProps.save()}>
			<InnerBlocks.Content />
		</div>
	)
};

export default Save;
