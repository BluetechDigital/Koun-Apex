// Imports
import Head from "next/head";

const ProductMetaTag = () => {
	return (
		<Head>
			<title key="title">{`${"Product title"}`}</title>
			<meta name="description" content={"pageContext?.seo?.metaDesc"} />
			<link rel="icon" href="/img/logos/Koun-Apex-Logo-Two.png" />
		</Head>
	);
};

export default ProductMetaTag;
