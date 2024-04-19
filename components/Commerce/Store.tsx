// Imports
import {
	fadeIn,
	initial,
	stagger,
	initialTwo,
	arrayLoopStaggerChildren,
} from "@/animations/animations";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {IStore} from "@/types/components";
import {useGlobalContext} from "@/context/global";

// Components
import Paragraph from "./../Elements/Paragraph";
import ProductListCard from "./Cards/ProductListCard";

const Store: FC<IStore.IStore> = ({
	title,
	subtitle,
	heroTitle,
	paragraph,
	heroImage,
}: any) => {
	const globalContext = useGlobalContext();
	return (
		<>
			<div className="py-6 lg:container mx-auto">
				<div
					className="w-full h-[200px] lg:h-[350px] bg-center bg-no-repeat bg-cover flex flex-col items-center justify-center"
					style={{
						backgroundImage: `linear-gradient(
							0deg,
							rgba(6, 18, 41, 0.50),
							rgba(6, 18, 41, 0.50),
							rgba(6, 18, 41, 0.50)
						),url("${heroImage?.sourceUrl}")`,
					}}
				>
					<motion.h2
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						className="max-w-2xl text-white font-borexRegular uppercase leading-tight text-lg lg:text-4xl xl:text-5xl text-center tracking-[0.05rem]"
					>
						{heroTitle}
					</motion.h2>
				</div>
				<motion.div
					initial={initial}
					variants={stagger}
					whileInView="animate"
					viewport={{once: true}}
					className="flex flex-col items-center justify-center lg:flex-row gap-6 py-12"
				>
					<div className="flex flex-col w-full lg:w-[30%]">Enter</div>
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="flex flex-col w-full lg:w-[70%] gap-4"
					>
						<motion.div
							initial={initial}
							variants={stagger}
							whileInView="animate"
							viewport={{once: true}}
							className="pb-8 flex flex-col gap-2"
						>
							<motion.span
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className="font-schaboCondensed uppercase text-primary-default text-2xl text-center lg:text-left tracking-[0.05rem]"
							>
								{subtitle}
							</motion.span>
							<motion.h2
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className="max-w-2xl text-black font-borexRegular uppercase leading-tight text-lg lg:text-xl xl:text-3xl text-center lg:text-left tracking-[0.05rem]"
							>
								{title}
							</motion.h2>
							<Paragraph
								content={paragraph}
								tailwindStyling="max-w-4xl text-darkGrey text-center lg:text-left text-base"
							/>
						</motion.div>
						<div className="grid items-start justify-center grid-cols-1 sm:grid-cols-2 gap-4 px-4 sm:items-center lg:-mb-8 lg:gap-10 lg:-mx-4 lg:grid-cols-4 lg:justify-between xl:-mx-8">
							{globalContext?.wooCommerceProducts?.length > 0 ? (
								globalContext?.wooCommerceProducts?.map(
									(item: any, index: any) => (
										<Fragment key={index}>
											<motion.div
												custom={index}
												initial={initial}
												whileInView="animate"
												viewport={{once: true}}
												variants={arrayLoopStaggerChildren}
												className="w-full"
											>
												<ProductListCard
													slug={item?.slug}
													name={item?.name}
													images={item?.images}
													price={item?.regular_price}
													description={item?.description}
												/>
											</motion.div>
										</Fragment>
									)
								)
							) : (
								<></>
							)}
						</div>
					</motion.div>
				</motion.div>
			</div>
		</>
	);
};

export default Store;
