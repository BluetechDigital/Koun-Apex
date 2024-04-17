// Imports
import {FC} from "react";
import {ILayout} from "@/types/components";

// Components
import Navbar from "../Global/Navbar";
import Footer from "../Global/Footer";
import MetaTag from "@/components/Meta/MetaTag";

const Layout: FC<ILayout> = ({children}) => {
	return (
		<>
			<MetaTag />

			<Navbar />

			<div className="pt-[85px] lg:pt-[115px]">{children}</div>

			<Footer />
		</>
	);
};

export default Layout;
