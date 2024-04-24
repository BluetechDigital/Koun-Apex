// Imports
import {NextPage} from "next";
import {useGlobalContext} from "@/context/global";

// Components
import Store from "@/components/Commerce/Store";
import Navbar from "@/components/Global/Navbar";
import Footer from "@/components/Global/Footer";
import BackToTopButton from "@/components/Elements/BackToTopButton";

const StorePage: NextPage = () => {
	const globalContext = useGlobalContext();

	return (
		<>
			<Navbar />

			<div className="pt-[110px] lg:pt-[115px]">
				<Store
					storeCta={globalContext?.themesOptionsContent?.storeCta}
					title={globalContext?.themesOptionsContent?.store?.title}
					storeServicesLinks={
						globalContext?.themesOptionsContent?.storeServicesLinks
					}
					subtitle={globalContext?.themesOptionsContent?.store?.subtitle}
					heroTitle={globalContext?.themesOptionsContent?.store?.heroTitle}
					paragraph={globalContext?.themesOptionsContent?.store?.paragraph}
					heroImage={globalContext?.themesOptionsContent?.store?.heroImage}
				/>
				<BackToTopButton link={`#`} />
			</div>

			<Footer />
		</>
	);
};

export default StorePage;
