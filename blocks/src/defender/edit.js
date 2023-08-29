import {
	InnerBlocks,
	InspectorControls,
	useBlockProps,
	BlockControls,
	MediaPlaceholder,
	MediaReplaceFlow
} from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { select, useSelect } from '@wordpress/data';

import classNames from 'classnames';

const ALLOWED_MEDIA_TYPES = ['image'];

const TEMPLATE = [
	[
		'core/group',
		{
			className: 'row',
			layout: {
				type: 'flex',
				flexWrap: 'nowrap',
				verticalAlignment: 'top'
			}
		},
		[
			[
				'core/group',
				{
					className: 'defender__profile',
					layout: {
						type: 'flex',
						orientation: 'vertical'
					}
				},
				[
					[
						'core/image',
						{
							className: 'defender__profile-image',
							sizeSlug: 'thumbnail'
						}
					],
					[
						'core/group',
						{
							className: 'profile__wrapper',
							layout: {
								type: 'flex',
								orientation: 'vertical'
							}
						},
						[
							[
								'core/heading',
								{
									className: 'defender__profile-title',
									placeholder: __('Add Name...', 'site-functionality'),
									level: 3
								}
							],
							[
								'core/social-links',
								{
									className: 'is-style-logos-only defender__social-links',
									iconColor: 'green-dark',
									openInNewTab: true,
									showLabels: true,
									size: 'has-normal-icon-size',
									layout: {
										type: 'flex',
										orientation: 'vertical'
									}
								},
							],
							[
								'core/paragraph',
								{
									className: 'defender__profile-bio content',
									placeholder: __('Add bio...', 'site-functionality'),
								}
							]
						]
					]
				]
			],
			[
				'core/group',
				{
					className: 'defender__forest',
					layout: {
						type: 'flex',
						orientation: 'vertical'
					}
				},
				[
					[
						'core/image',
						{
							className: 'defender__forest-image',
							sizeSlug: 'medium'
						}
					],
					[
						'core/heading',
						{
							className: 'defender__forest-title',
							placeholder: __('Add Forest Name ...', 'site-functionality'),
							level: 3
						}
					],
					[
						'core/social-links',
						{
							className: 'is-style-logos-only defender__social-links',
							iconColor: 'white',
							iconColorValue: '#fff',
							openInNewTab: true,
							showLabels: true,
							size: 'has-normal-icon-size',
							layout: {
								type: 'flex',
								orientation: 'vertical'
							}
						},
						[
							[
								'core/social-link',
								{
									url: 'https://instagram.com/username',
									service: 'instagram',
									label: 'username'
								}
							],
							[
								'core/social-link',
								{
									url: 'https://twitter.com/handle',
									service: 'twitter',
									label: 'handle'
								}
							]
						]
					],
					[
						'core/paragraph',
						{
							className: 'defender__forest-description content',
							placeholder: __('Add forest description...', 'site-functionality'),
						}
					]
				]
			]
		]
	]
];

const ALLOWED_BLOCKS = ['core/group', 'core/heading', 'core/paragraph', 'core/image', 'core/social-links'];

const Edit = (props) => {
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

	const setImageUrl = (newURL) => {
		setAttributes({
			url: newURL
		});
	}


	const backgroundImage = !!url && (
		<img src={url} alt={alt} />
	);

	const bgStyle = { backgroundImage: url ? `url(${url})` : undefined }

	const blockProps = useBlockProps({
		className: classNames(className, 'defender'),
		style: bgStyle
	});

	return (
		<div {...blockProps}>
			<InspectorControls>
				<PanelBody
					title={__('Background Image', 'site-functionality')}
					initialOpen={true}
				>
					<MediaPlaceholder
						accept="image/*"
						allowedTypes={ALLOWED_MEDIA_TYPES}
						onSelect={setImageAttributes}
						mediaPreview={backgroundImage}
						multiple={false}
						handleUpload={true}
					/>
				</PanelBody>
			</InspectorControls>
			<BlockControls>
				<MediaReplaceFlow
					mediaId={id}
					mediaURL={url}
					allowedTypes={ALLOWED_MEDIA_TYPES}
					accept="image/*"
					onSelect={setImageAttributes}
					onSelectURL={setImageUrl}
					name={!url ? __('Add Background Image', 'site-functionality') : __('Replace Background Image', 'site-functionality')}
				/>
			</BlockControls>
			<InnerBlocks
				allowedBlocks={ALLOWED_BLOCKS}
				template={TEMPLATE}
				templateLock="all"
			/>
		</div>
	);
};

export default Edit;
