// Imports
import {NextApiRequest, NextApiResponse} from "next";
import {IWooCommerceResponseData} from "@/types/api/api";

const WooCommerceRestApi: any =
	require("@woocommerce/woocommerce-rest-api").default;

const api: any = new WooCommerceRestApi({
	url: process.env.CMS_URL,
	consumerKey: process.env.WOO_COMMERCE_KEY,
	consumerSecret: process.env.WOO_COMMERCE_SECRET,
	version: "wc/v3",
});

const getAllProducts = async (
	req: NextApiRequest,
	res: NextApiResponse
): Promise<unknown> => {
	const responseData: IWooCommerceResponseData = {
		success: false,
		error: "",
		products: [],
	};

	/* Allows you to attached a query for 
	[X] number of items "?perPage=1" after endpoint */
	const {perPage} = req?.query ?? {};

	try {
		const {data}: any = await api.get("products", {
			per_page: perPage || 20,
		});

		responseData.success = true;
		responseData.products = data;

		return res.status(200).json(responseData.products);
	} catch (error: any) {
		responseData.success = false;
		responseData.error = error.message;

		return res.status(500).json(responseData);
	}
};

export default getAllProducts;
