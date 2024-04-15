import {client} from "@/config/apollo";
import {DocumentNode, gql} from "@apollo/client";

/* TESTIMONIALS */
// Testimonials Content
export const getAllTestimonialsContent = async () => {
	try {
		const content: DocumentNode = gql`
			{
				testimonialsContent: testimonials(
					where: {status: PUBLISH, orderby: {field: DATE, order: DESC}}
					last: 100
				) {
					edges {
						node {
							testimonialReview {
								name
								position
								paragraph
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
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return response?.data?.testimonialsContent?.edges;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch testimonials content"
		);
	}
};
