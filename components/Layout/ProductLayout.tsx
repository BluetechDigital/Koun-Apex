// Imports
import {FC} from "react";
import {ILayout} from "@/types/components";

// Components
import Navbar from "../Global/Navbar";
import Footer from "../Global/Footer";
import ProductMetaTag from "@/components/Meta/ProductMetaTag";
import BackToTopButton from "../Elements/BackToTopButton";

const ProductLayout: FC<ILayout> = ({children}) => {
	return (
		<>
			<ProductMetaTag />

			<Navbar />

			<div className="pt-[110px] lg:pt-[115px]">{children}</div>

			<BackToTopButton link={`#`} />
			<Footer />
		</>
	);
};

export default ProductLayout;
