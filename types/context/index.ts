export type ISeo = {
	canonical: string;
	cornerstone: Boolean;
	focuskw: string;
	fullHead: string;
	metaDesc: string;
	metaKeywords: string;
	metaRobotsNofollow: string;
	metaRobotsNoindex: string;
	opengraphAuthor: string;
	opengraphDescription: string;
	opengraphImage: {
		mediaItemUrl: string;
	};
	opengraphModifiedTime: string;
	opengraphPublishedTime: string;
	opengraphPublisher: string;
	opengraphSiteName: string;
	opengraphTitle: string;
	opengraphType: string;
	opengraphUrl: string;
	readingTime: number;
	title: string;
	twitterDescription: string;
	twitterTitle: string;
	twitterImage: {
		mediaItemUrl: string;
	};
};
export type IContent = [
	{
		content: any;
	}
];
export type IPostTypes = {
	pages: string;
	posts: string;
	previewPage: string;
	previewPost: string;
	testimonials: string;
};
export type IMobileLinks = [
	{
		node: {
			id: string;
			url: string;
			label: string;
		};
	}
];
export type ITestimonials = [
	{
		node: {
			testimonialReview: {
				name: string;
				rating: number;
				jobTitle: string;
				paragraph: string;
				reviewType: string;
				image: {
					altText: string;
					sourceUrl: string;
					mediaDetails: {
						width: number;
						height: number;
					};
				};
			};
		};
	}
];
export type ICopyrightLinks = [
	{
		node: {
			id: string;
			url: string;
			label: string;
		};
	}
];
export type IFooterMenuLinks = [
	{
		node: {
			id: string;
			url: string;
			label: string;
		};
	}
];
export type INavbarMenuLinks = [
	{
		node: {
			id: string;
			url: string;
			label: string;
		};
	}
];
export type IStorePageContent = {
	store: {
		title: string;
		heroTitle: string;
		subtitle: string;
		paragraph: string;
		heroImage: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
	};
	storeServicesLinks: [
		{
			image: {
				altText: string;
				sourceUrl: string;
				mediaDetails: {
					width: number;
					height: number;
				};
			};
			buttonLink: {
				url: string;
				title: string;
				target: string;
			};
		}
	];
	storeCta: {
		title: string;
		paragraph: string;
		backgroundImage: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
		buttonLink: {
			url: string;
			title: string;
			target: string;
		};
	};
};
export type IThemesOptionsContent = {
	email: string;
	address: string;
	emailTwo: string;
	textarea: string;
	phoneNumber: string;
	phoneNumberTwo: string;
	copyrightText: string;
	facebookLink: {
		url: string;
		title: string;
		target: string;
	};
	twitterLink: {
		url: string;
		title: string;
		target: string;
	};
	linkedinLink: {
		url: string;
		title: string;
		target: string;
	};
	instagramLink: {
		url: string;
		title: string;
		target: string;
	};
	paymentMethods: [
		{
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		}
	];
	store: {
		title: string;
		heroTitle: string;
		subtitle: string;
		paragraph: string;
		heroImage: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
	};
	storeServicesLinks: [
		{
			image: {
				altText: string;
				sourceUrl: string;
				mediaDetails: {
					width: number;
					height: number;
				};
			};
			buttonLink: {
				url: string;
				title: string;
				target: string;
			};
		}
	];
	storeCta: {
		title: string;
		paragraph: string;
		backgroundImage: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
		buttonLink: {
			url: string;
			title: string;
			target: string;
		};
	};
	displayNoticeBanner: boolean;
	noticeBannerTextarea: string;
};

/* WOOCOMMERCE PRODUCTS*/
export type IWooCommerceProducts = [
	{
		id: number;
		name: string;
		slug: string;
		status: string;
		price: string;
		weight: string;
		dimensions: {
			length: string;
			width: string;
			height: string;
		};
		description: string;
		date_created_gmt: string;
		images: [
			{
				src: string;
				name: string;
				paragraph: string;
			}
		];
		// Seo Data
		yoast_head_json: {
			title: string;
			description: string;
			height: string;
			canonical: string;
			og_locale: string;
			og_type: string;
			og_title: string;
			og_description: string;
			og_url: string;
			og_site_name: string;
			og_image: [
				{
					width: 1000;
					height: 718;
					url: string;
					type: string;
				}
			];
			twitter_card: string;
		};
	}
];

/* CONTEXT PROVIDERS  */
export type IPageContext = {
	seo: ISeo;
	content: IContent;
	postTypeFlexibleContent: IPostTypeFlexibleContent;
};
export type IGlobalProps = {
	mobileLinks: IMobileLinks;
	testimonials: ITestimonials;
	copyrightLinks: ICopyrightLinks;
	navbarMenuLinks: INavbarMenuLinks;
	footerMenuLinks: IFooterMenuLinks;
	storePageContent: IStorePageContent;
	wooCommerceProducts: IWooCommerceProducts;
	themesOptionsContent: IThemesOptionsContent;
};
export type IGlobalContext = {
	mobileLinks: IMobileLinks;
	testimonials: ITestimonials;
	copyrightLinks: ICopyrightLinks;
	navbarMenuLinks: INavbarMenuLinks;
	footerMenuLinks: IFooterMenuLinks;
	storePageContent: IStorePageContent;
	wooCommerceProducts: IWooCommerceProducts;
	themesOptionsContent: IThemesOptionsContent;
};
export type IPageContextProvider = {
	seo: ISeo;
	content: IContent;
	children: React.ReactNode;
	postTypeFlexibleContent: IPostTypeFlexibleContent;
};
export type IFlexibleContentType = {
	pages: string;
	previewPage: string;
	previewPost: string;
};
export type IGlobalContextProvider = {
	globalProps: IGlobalContext;
	children: React.ReactNode;
};
export type IPostTypeFlexibleContent = {
	postTypeFlexibleContent: string;
};
