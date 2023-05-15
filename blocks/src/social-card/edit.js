import {
	InnerBlocks,
	BlockControls,
	MediaPlaceholder,
	MediaReplaceFlow,
	RichText,
	useBlockProps,
	useInnerBlocksProps,
} from '@wordpress/block-editor';

import {
	Button,
	Placeholder,
	SelectControl,
	TextareaControl,
	TextControl
} from '@wordpress/components';
import { useState } from '@wordpress/element';
import { select, useSelect } from '@wordpress/data';
import { external } from '@wordpress/icons';

import { __ } from '@wordpress/i18n';

import icons from './icons';

import classNames from 'classnames';

const ALLOWED_MEDIA_TYPES = ['image'];

const TEMPLATE = [
	[
		'core/image',
		{
			className: 'share-image',
			sizeSlug: 'medium'
		}
	],
	[
		'core/social-links',
		{
			className: 'is-style-logos-only share-links',
		},
		[
			['core/social-link-facebook', { service: 'facebook' }],
			['core/social-link-twitter', { service: 'twitter' }],
			['core/social-link-instagram', { service: 'instagram' }],
		]
	],
	[
		'core/paragraph',
		{
			className: 'share-message',
			placeholder: __('Add share message', 'site-functionality')
		},
	]
];

const ALLOWED_BLOCKS = ['core/paragraph', 'core/image', 'site-functionality/social-links'];

const Edit = (props) => {
	const {
		attributes: {
			message,
			url,
			id,
			alt,
			twitter,
			instagram,
			facebook
		},
		isSelected,
		setAttributes,
		className,
	} = props;

	const [ previewVisability, setPreviewVisability ] = useState( { previewVisability: true } );
	const [ editVisability, setEditVisability ] = useState( { previewVisability: true } );

	const setImageAttributes = (media) => {
		if (!media || !media.url) {
			setAttributes({
				url: null,
				id: null,
				alt: null,
			});
			return;
		}
		setAttributes({
			url: media.url,
			id: media.id,
			alt: media?.alt,
		});
	};

	const onSetPreviewVisability = () => {
		setPreviewVisability( !previewVisability );
	}

	const onSetEditVisability = () => {
		setEditVisability( !editVisability );
	}

	const imageObj = select('core').getMedia(id);
	const sizedImage = !!imageObj && (
		<img src={imageObj?.sizes?.medium?.url || url} height={imageObj?.sizes?.medium?.height || imageObj?.height} width={imageObj?.sizes?.medium?.width || imageObj?.width} />
	);

	const image = !!url && (
		<img src={url} alt={alt} />
	);

	const previewVisabilityButton = !!previewVisability ? (
		<Button
				variant="link"
				icon="hidden"
				onClick={ onSetPreviewVisability }
			>
				{ __('Hide Preview', 'site-functionality') }
			</Button>
		) : (
			<Button
					variant="link"
					icon="visibility"
					onClick={ onSetPreviewVisability }
				>
					{ __('Show Preview', 'site-functionality') }
			</Button>
	);

	const renderService = ( service ) => {
		const title = service.toLowerCase().charAt(0).toUpperCase() + service.slice(1);
		return (
			<li className={`outermost-social-sharing-link outermost-social-sharing-link-${service}`}>
				<a 
					className='wp-block-outermost-social-sharing-link-anchor' 
					href={props.attributes[service]}
					data-vars-ga-category={__('Share Cards', 'site-functionality')}
					aria-label={__('Share on ' + title, 'site-functionality')}
				>
					{icons[service]}
					<span className='wp-block-outermost-social-sharing-link-label screen-reader-text'>{__('Share on ' + title, 'site-functionality')}</span>
				</a>
			</li>
		)
	}

	const blockProps = useBlockProps({
		className: classNames(className, 'social-card'),
	});

	const innerBlocksProps = useInnerBlocksProps(
		{
			className: 'social-post'
		},
		{
			allowedBlocks: ALLOWED_BLOCKS,
			template: TEMPLATE,
			templateLock: "all"
		}
	);

	return (
		<section {...blockProps}>
			{previewVisabilityButton}
			
			{
				previewVisability && (
					<article  {...innerBlocksProps}>
						<ul className="image-group">
							{sizedImage}
						</ul>
						<div className="share-actions">
							<ul className="wp-block-outermost-social-sharing is-style-logos-only">
								{ twitter && (
									renderService('twitter')
								) }
								{ facebook && (
									renderService('facebook')
								) }
								{ instagram && (
									renderService('instagram')
								) }
								
							</ul>
						</div>
					</article>					
				)
			}

			<BlockControls>
				<MediaReplaceFlow
					mediaId={id}
					mediaURL={url}
					allowedTypes={ALLOWED_MEDIA_TYPES}
					accept="image/*"
					onSelect={setImageAttributes}
					name={!url ? __('Add Image', 'site-functionality') : __('Replace Image', 'site-functionality')}
				/>
			</BlockControls>
			<MediaPlaceholder
				accept="image/*"
				allowedTypes={ALLOWED_MEDIA_TYPES}
				onSelect={setImageAttributes}
				mediaPreview={sizedImage}
				multiple={false}
				handleUpload={true}
			/>
			<TextControl
				label={ __('Twitter URL', 'site-functionality')}
				value={twitter}
				className='twitter-link'
				placeholder={__('https://twitter.com/@user', 'site-functionality')}
				type="url"
				onChange={(twitter) => setAttributes({ twitter })}
			/>
			<TextControl
				label={ __('Facebook URL', 'site-functionality')}
				value={facebook}
				className='facebook-link'
				placeholder={__('https://facebook.com/@user', 'site-functionality')}
				type="url"
				onChange={(facebook) => setAttributes({ facebook })}
			/>
			<TextControl
				label={__('Instagram URL', 'site-functionality')}
				value={instagram}
				className='instagram-link'
				placeholder={__('https://instagram.com/@user', 'site-functionality')}
				type="url"
				onChange={(instagram) => setAttributes({ instagram })}
			/>
			<div className='rich-text-group'>
				<label className="rich-text-group__label" htmlFor="share-message">{__('Share Message', 'site-functionality')}</label>
				<RichText
					label={__('Share Message', 'site-functionality')}
					tagName="div"
					className='share-message rich-text-group__field'
					id="share-message"
					value={message}
					allowedFormats={['core/bold', 'core/italic', 'core/link']}
					onChange={(message) => setAttributes({ message })}
					placeholder={__('Add share message...', 'site-functionality')}
				/>
			</div>
			{/* <TextareaControl
				label={__('Share Message', 'site-functionality')}
				value={ message }
				onChange={(message) => setAttributes({ message })}
			/> */}
		</section>
	);
};

export default Edit;
