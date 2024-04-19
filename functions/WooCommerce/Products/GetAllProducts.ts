// Imports
import {IWooCommerceProducts} from "@/types/context";

/* WOOCOMMERCE PRODUCTS*/
export const getAllProducts = async (): Promise<IWooCommerceProducts[]> => {
	try {
		const response: any = await fetch(
			`${process.env.SITE_URL}/api/woocommerce/products/get-all-products`
		);

		if (!response.ok) {
			throw new Error("Failed to fetch products");
		}

		const data = await response.json();

		return data as IWooCommerceProducts[];
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch WooCommerce products"
		);
	}
};
