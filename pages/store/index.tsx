// Imports
import {IPageContext} from "@/types/context";
import {GetStaticProps, NextPage} from "next";
import {flexibleContentType, postType, storePage} from "@/context/pages";
import {useGlobalContext} from "@/context/global";

// Queries Functions
import {getAllSeoContent} from "@/functions/graphql/Queries/GetAllSeoContent";
import {getAllFlexibleContentComponents} from "@/functions/graphql/Queries/GetAllFlexibleContentComponents";

// Components
import Layout from "@/components/Layout/Layout";
import Store from "@/components/Commerce/Store";
import BackToTopButton from "@/components/Elements/BackToTopButton";
import PageContextProvider from "@/components/Context/PageContextProvider";

const StorePage: NextPage<IPageContext> = ({
	seo,
	content,
	postTypeFlexibleContent,
}) => {
	const globalContext = useGlobalContext();

	return (
		<>
			<PageContextProvider
				seo={seo}
				content={content}
				postTypeFlexibleContent={postTypeFlexibleContent}
			>
				<Layout>
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
				</Layout>
			</PageContextProvider>
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	// Fetch priority content
	const seoContent: any = await getAllSeoContent(storePage, postType?.pages);

	const flexibleContentComponents: any = await getAllFlexibleContentComponents(
		storePage,
		postType?.pages,
		flexibleContentType?.pages
	);

	return {
		props: {
			seo: seoContent,
			content: flexibleContentComponents?.content,
			postTypeFlexibleContent: flexibleContentType?.pages,
		},
		revalidate: 60,
	};
};

export default StorePage;
