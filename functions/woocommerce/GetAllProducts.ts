/* WOOCOMMERCE PRODUCTS*/
export const getAllProducts = async () => {
	try {
		const response: any = await fetch(
			`${process.env.CMS_URL}/wp-json/wc/v3/products?consumer_key=${process.env.WOO_COMMERCE_KEY}&consumer_secret=${process.env.WOO_COMMERCE_SECRET}`
		);

		return response;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch woocommerce products"
		);
	}
};
