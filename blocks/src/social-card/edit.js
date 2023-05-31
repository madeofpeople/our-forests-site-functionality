import {
	InspectorControls,
	BlockControls,
	MediaPlaceholder,
	MediaReplaceFlow,
	RichText,
	useBlockProps,
	useInnerBlocksProps,
} from '@wordpress/block-editor';
import {
	Button,
	PanelBody,
	Placeholder,
	SelectControl,
	TextareaControl,
	TextControl
} from '@wordpress/components';
import { 
	useState, 
	Fragment 
} from '@wordpress/element';
import { select, useSelect } from '@wordpress/data';

import { __ } from '@wordpress/i18n';

import icons from './icons';

import classNames from 'classnames';

const ALLOWED_MEDIA_TYPES = ['image'];

const TEMPLATE = [
	[
		'core/image',
		{
			className: 'share-image',
			sizeSlug: 'social-thumbnail'
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
			title,
			message,
			url,
			id,
			alt,
			link,
			sizeSlug,
			sizes,
			twitter,
			placeholderTitle,
			placeholderUrl,
			placeholderMessage,
			instagram,
		},
		isSelected,
		setAttributes,
		className,
	} = props;

	const setImageAttributes = ( media ) => {
		if ( !media || !media.id ) {
			setAttributes({
				id: null,
				url: null,
				alt: null,
				sizes: [],
				placeholderUrl: null,
				placeholderMessage: null
			});
			return;
		}
		setAttributes({
			id: media.id,
			url: media.url,
			alt: media?.alt,
			sizes: media?.sizes,
			placeholderTitle: media?.title,
			placeholderUrl: media.link,
			placeholderMessage: media?.description
		});
	};

	const imageObj = select('core').getMedia(id);

	const sizedImage = (
		<img 
			src={imageObj?.sizes?.[sizeSlug]?.url || imageObj?.sizes?.[sizeSlug]?.url || url} 
			height={imageObj?.sizes?.[sizeSlug]?.height || imageObj?.sizes?.[sizeSlug]?.height || imageObj?.height} 
			width={imageObj?.sizes?.[sizeSlug]?.width || imageObj?.sizes?.[sizeSlug]?.width || imageObj?.width} 
		/>
	);

	const image = !!url && (
		<img src={url} alt={alt} />
	);

	const renderFields = (
		<>
			<MediaPlaceholder
				accept="image/*"
				allowedTypes={ALLOWED_MEDIA_TYPES}
				onSelect={ setImageAttributes }
				mediaPreview={sizedImage}
				multiple={false}
				handleUpload={true}
			/>
			<TextControl
				label={ __( 'Title', 'site-functionality' )}
				description={ __( 'Title to add to share posting.', 'site-functionality' ) }
				value={title}
				className='share-title'
				placeholder={ placeholderTitle }
				type="text"
				onChange={( title ) => setAttributes({ title })}
			/>
			<TextControl
				label={ __( 'Link', 'site-functionality')}
				description={ __( 'URL to add to share posting.', 'site-functionality' )}
				value={link}
				className='share-link'
				placeholder={ placeholderUrl }
				type="url"
				onChange={( link ) => setAttributes({ link })}
			/>
			<TextControl
				label={__( 'Instagram Link', 'site-functionality' )}
				description={ __( 'Instagram link to send users to.', 'site-functionality' )}
				value={ instagram }
				className='instagram-link'
				placeholder={ __('https://instagram.com/user', 'site-functionality' ) }
				type="url"
				onChange={( instagram ) => setAttributes({ instagram })}
			/>
			<TextareaControl
				label={__( 'Twitter Share Message', 'site-functionality' )}
				value={ message }
				onChange={( message ) => setAttributes({ message })}
				placeholder={ placeholderMessage }
				className='share-message'
			/>
		</>
	);

	const renderService = ( service ) => {
		const title = service.toLowerCase().charAt(0).toUpperCase() + service.slice(1);
		return (
			<li className={`outermost-social-sharing-link outermost-social-sharing-link-${service}`}>
				<a 
					className='wp-block-outermost-social-sharing-link-anchor' 
					href='#'
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

	const blockPreview = !! id ?(
		<>
			<ul className="image-group">
				{sizedImage}
			</ul>
			<div className="share-actions">
				<ul className="wp-block-outermost-social-sharing is-style-logos-only">
					{ renderService('twitter') }
					{ instagram && (
						renderService('instagram')
					) }
					{ renderService('facebook') }
					{ renderService('download') }
				</ul>
			</div>
		</>	
	) : (
		<MediaPlaceholder
			accept="image/*"
			allowedTypes={ALLOWED_MEDIA_TYPES}
			onSelect={setImageAttributes}
			mediaPreview={sizedImage}
			multiple={false}
			handleUpload={true}
			labels = { { 
				title: __( 'Select Image', 'site-functionality' ),
				instructions: __( 'Update block settings in right panel', 'site-functionality' )

			} }
		/>
	);

	return (
		<article {...blockProps}>
			<InspectorControls>
				<PanelBody
					title={__( 'Block Settings', 'site-functionality' )}
					initialOpen={true}
				>
				{ renderFields }
				</PanelBody>
			</InspectorControls>
			<BlockControls>
				<MediaReplaceFlow
					mediaId={id}
					mediaURL={url}
					allowedTypes={ALLOWED_MEDIA_TYPES}
					accept="image/*"
					onSelect={ setImageAttributes }
					name={ !id ? __( 'Add Image', 'site-functionality' ) : __( 'Replace Image', 'site-functionality' ) }
				/>
			</BlockControls>
			<article  {...innerBlocksProps}>
				{ blockPreview }
			</article>
		</article>
	);
};

export default Edit;
