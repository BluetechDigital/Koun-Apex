// Imports
import {client} from "@/config/apollo";
import {DocumentNode, gql} from "@apollo/client";

/* PREVIEW PAGES & BLOGS */
/* Fetch all Flexible Content Components 
(For every flexible content page) */
export const getAllPreviewFlexibleContentComponents = async (
	id: number,
	postType: string,
	authToken: string,
	loginRedirectURL: string,
	postTypeFlexibleContent: string
) => {
	try {
		const content: DocumentNode = gql`
			{
        		mainContent: ${postType}(where: {id: "${id}", status: PUBLISH}) {
        		  edges {
						node {
							template {
								... on DefaultTemplate {
									flexibleContent {
										flexibleContent {
											... on ${postTypeFlexibleContent}_Hero {
												fieldGroupName
												displaySection
												title
              									paragraph
              									ctaParagraph
												buttonLink {
                									url
                									title
                									target
                								}
												buttonLinkTwo {
                									url
                									title
                									target
                								}
              									backgroundImage {
              										altText
              										sourceUrl
              										mediaDetails {
              											height
              											width
              										}
              									}
												servicesLinks {
													image {
														altText
														sourceUrl
														mediaDetails {
															height
															width
														}
													}
													buttonLink {
														url
														title
														target
													}
												}
											}
											... on ${postTypeFlexibleContent}_HeroTwo {
												fieldGroupName
												displaySection
												title
												paragraph
												backgroundImage {
													altText
													sourceUrl
													mediaDetails {
														height
														width
													}
												}
											}
											... on ${postTypeFlexibleContent}_Store {
												fieldGroupName
												displaySection
												title
												subtitle
												paragraph
											}
											... on ${postTypeFlexibleContent}_TitleParagraph {
												fieldGroupName
												title
												paragraph
												displaySection
												displayParagraph
											}
											... on ${postTypeFlexibleContent}_TitleContentImage {
            									fieldGroupName
												displaySection
            									title
            									textTitle
            									paragraph
            									image {
            										altText
            										sourceUrl
            										mediaDetails {
            											height
            											width
            										}
            									}
            									buttonLink {
            										url
            										title
            										target
            									}
            									displayContentOption
            									displayBackgroundColor
            								}
											... on ${postTypeFlexibleContent}_AboutContentImage {
                								fieldGroupName
												displaySection
                								title
                								subtitle
                								paragraph
												quality {
													title
													paragraph
												}
												reliability {
													title
													paragraph
												}
                								image {
                									altText
                									sourceUrl
                									mediaDetails {
                										height
                										width
                									}
                								}
												contentBox {
													text
													subtext
													icon {
														altText
														sourceUrl
														mediaDetails {
															height
															width
														}
													}
												}
                							}
											... on ${postTypeFlexibleContent}_FeaturedBrand {
												fieldGroupName
												displaySection
												brandsGrid {
													image {
														altText
														sourceUrl
														mediaDetails {
															height
															width
														}
													}
												}
											}
											... on ${postTypeFlexibleContent}_NewArrivals {
												fieldGroupName
												displaySection
												subtitle
												title
												paragraph
												buttonLink {
													url
													title
													target
												}
											}
											... on ${postTypeFlexibleContent}_Accreditations {
            									fieldGroupName
												displaySection
              									paragraph
              									accreditationsGrid {
              									  	image {
              									  	  	altText
              									  	  	sourceUrl
              									  	  	mediaDetails {
              									  	  	  	height
              									  	  	  	width
              									  	  	}
              									  	}
              									}
            								}
											... on ${postTypeFlexibleContent}_TestimonialsSlider {
												fieldGroupName
												displaySection
											}
											... on ${postTypeFlexibleContent}_TestimonialsTwo {
												fieldGroupName
												displaySection
												title
												subtitle
											}
											... on ${postTypeFlexibleContent}_TestimonialsGrid {
												fieldGroupName
												displaySection
												title
												subtitle
												paragraph
											}
											... on ${postTypeFlexibleContent}_Faq {
            									fieldGroupName
												displaySection
            									title
            									subtitle
            									paragraph
            									faqGrid {
            										card {
            											title
            											paragraph
            										}
            									}
            								}
											... on ${postTypeFlexibleContent}_FaqTwo {
												fieldGroupName
												displaySection
												title
												subtitle
												paragraph
												buttonLink {
													url
													title
													target
												}
												image {
													altText
													sourceUrl
													mediaDetails {
														height
														width
													}
												}
												faqContent {
													card {
														title
														paragraph
													}
												}
											}
											... on ${postTypeFlexibleContent}_Cta {
												fieldGroupName
												displaySection
												title
												paragraph
												buttonLink {
													url
													title
													target
												}
												backgroundImage {
              										altText
              										sourceUrl
              										mediaDetails {
              											height
              											width
              										}
              									}
											}
											... on ${postTypeFlexibleContent}_CtaTwo {
												fieldGroupName
												displaySection
												title
												buttonLink {
													url
													title
													target
												}
												backgroundImage {
              										altText
              										sourceUrl
              										mediaDetails {
              											height
              											width
              										}
              									}
											}
											... on ${postTypeFlexibleContent}_ContactForm {
												fieldGroupName
												displaySection
												title
												paragraph
											}
											... on ${postTypeFlexibleContent}_RequestAppointmentForm {
												fieldGroupName
												displaySection
												title
												subtitle
												paragraph
											}
											... on ${postTypeFlexibleContent}_Maintenance {
												fieldGroupName
												displaySection
												title
												paragraph
												backgroundImage {
													altText
													sourceUrl
													mediaDetails {
														height
														width
													}
												}
											}
											... on ${postTypeFlexibleContent}_ErrorPageContent {
												fieldGroupName
												displaySection
												title
												paragraph
												buttonLink {
													url
													title
													target
												}
												backgroundImage {
              										altText
              										sourceUrl
              										mediaDetails {
              											height
              											width
              										}
              									}
											}
										}
									}
								}
							}
						}
					}
        		}
			}
		`;

		const response: any = await client.query({
			query: content,
			variables: {
				id: id,
			},
			context: {
				headers: {
					authorization: authToken ? `Bearer ${authToken}` : "",
				},
			},
		});

		return {
			content: response?.data?.mainContent?.flexibleContent?.flexibleContent,
		};
	} catch (error) {
		return loginRedirectURL;
	}
};
