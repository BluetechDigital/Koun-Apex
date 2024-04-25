// Components
export type ICTA = {
	title: string;
	paragraph: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	backgroundImage: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
};
export type IFAQ = {
	title: string;
	subtitle: string;
	paragraph: string;
	faqGrid: [
		{
			card: {
				title: string;
				paragraph: string;
			};
		}
	];
};
export type IHero = {
	title: string;
	paragraph: string;
	ctaParagraph: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	buttonLinkTwo: {
		url: string;
		title: string;
		target: string;
	};
	servicesLinks: [
		{
			link: {
				url: string;
				title: string;
				target: string;
			};
			image: {
				altText: string;
				sourceUrl: string;
				mediaDetails: {
					width: number;
					height: number;
				};
			};
		}
	];
	mainImageSlider: [
		{
			image: {
				altText: string;
				sourceUrl: string;
				mediaDetails: {
					width: number;
					height: number;
				};
			};
		}
	];
};
export type ICTATwo = {
	title: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	backgroundImage: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
};
export type IHeroTwo = {
	title: string;
	paragraph: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	backgroundImage: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
};
export type IFAQTwo = {
	title: string;
	subtitle: string;
	paragraph: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
	faqGrid: [
		{
			card: {
				title: string;
				paragraph: string;
			};
		}
	];
};
export type IStoreTwo = {
	title: string;
	subtitle: string;
	paragraph: string;
};
export type IVideoBlock = {
	title: string;
	video: string;
	subtitle: string;
	paragraph: string;
	displayVideo: boolean;
	highlightText: string;
	displayYoutubeIcon: boolean;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	videoBackgroundImage: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
};
export type IContactForm = {
	title: string;
	formTitle: string;
	paragraph: string;
};
export type IMaintenance = {
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
};
export type INewArrivals = {
	title: string;
	subtitle: string;
	paragraph: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
};
export type IFeaturedBrand = {
	brandsGrid: [
		{
			image: {
				altText: string;
				sourceUrl: string;
				mediaDetails: {
					width: number;
					height: number;
				};
			};
		}
	];
};
export type IAccreditations = {
	paragraph: string;
	accreditationsGrid: [
		{
			image: {
				altText: string;
				sourceUrl: string;
				mediaDetails: {
					width: number;
					height: number;
				};
			};
		}
	];
};
export type ITitleParagraph = {
	title: string;
	paragraph: string;
	displayParagraph: boolean;
};
export type ITestimonialsTwo = {
	title: string;
	subtitle: string;
	paragraph: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
};
export type ISocialMediaGrid = {
	highlightsGrid: [
		{
			hearts: number;
			comments: number;
			textarea: string;
			link: {
				url: string;
				title: string;
				target: string;
			};
			image: {
				altText: string;
				sourceUrl: string;
				mediaDetails: {
					width: number;
					height: number;
				};
			};
		}
	];
};
export type ITestimonialsGrid = {
	title: string;
	subtitle: string;
	paragraph: string;
};
export type IAboutContentImage = {
	title: string;
	subtitle: string;
	paragraph: string;
	quality: {
		title: string;
		paragraph: string;
	};
	reliability: {
		title: string;
		paragraph: string;
	};
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
	contentBox: {
		text: string;
		subtext: string;
		icon: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
	};
};
export type ITitleContentImage = {
	title: string;
	paragraph: string;
	textTitle: string;
	displayContentOption: string;
	displayBackgroundColor: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
};
export type IRequestAppointmentForm = {
	title: string;
	subtitle: string;
	paragraph: string;
};

// Global
export type ILayout = {
	children: React.ReactNode;
};
export type IErrorPage = {
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
export type IPagination = {
	contentArray: any;
	contentType: string;
	tailwindStyling: string;
	numberOfItemsRenderedPerPage: number;
};

// Cards
export type ICTACard = {
	title: string;
	paragraph: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
};
export type IFAQCard = {
	index: number;
	title: string;
	paragraph: string;
};
export type IHeroCard = {
	link: {
		url: string;
		title: string;
		target: string;
	};
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
};
export type INewArrivalsCard = {
	name: string;
	slug: string;
	price: string;
	images: [
		{
			src: string;
			name: string;
		}
	];
};
export type ITestimonialsCard = {
	name: string;
	position: string;
	paragraph: string;
	reviewType: string;
	rating: number;
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
};
export type IServicesLinksCard = {
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
};
export type ITitleContentImageCard = {
	title: string;
	paragraph: string;
	textTitle: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
};

// Elements
export type ITitle = {
	content: string;
	tailwindStyling: string;
};
export type ISideMenu = {
	menuActive: boolean;
	setMenuActive: any;
};
export type IParagraph = {
	content: string;
	tailwindStyling: string;
};
export type IRenderStars = {
	rating: number;
};
export type IVideoWrapper = {
	children: React.ReactNode;
};
export type IVideoHeroWrapper = {
	children: React.ReactNode;
};
export type IBackHoverButton = {
	link: string;
};
export type IButtonBorderSliced = {
	title: string;
	fullWidth: boolean;
	tailwindColor: string;
};

/* Store E-Commerce Components */
export namespace IStore {
	export type IStore = {
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

	// Cards
	export type IProductListCard = {
		name: string;
		slug: string;
		price: string;
		description: string;
		images: [
			{
				src: string;
				name: string;
			}
		];
	};
}
