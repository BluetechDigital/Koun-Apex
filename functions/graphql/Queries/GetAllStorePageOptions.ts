// Imports
import {client} from "@/config/apollo";
import {DocumentNode, gql} from "@apollo/client";

/* STORE PAGE CONTENT
 The ID number refers to the
"Store Page Content" page ID*/
export const getStorePageContent = async () => {
	try {
		const content: DocumentNode = gql`
			{
				stores(where: {name: "Store Page Content", status: PUBLISH}) {
					edges {
						node {
							storesOptions {
								store {
									title
									subtitle
									heroTitle
									paragraph
									heroImage {
										altText
										sourceUrl
										mediaDetails {
											height
											width
										}
									}
								}
								storeCta {
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
								storeServicesLinks {
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
						}
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return response?.data?.stores?.edges[0]?.node?.storesOptions;
	} catch (error) {
		console.log(error);
		throw new Error("Something went wrong trying to fetch store page content");
	}
};
