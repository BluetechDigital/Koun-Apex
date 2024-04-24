// Imports
import {
	fadeIn,
	initial,
	stagger,
	fadeInUp,
	initialTwo,
	arrayLoopStaggerChildren,
} from "@/animations/animations";
import Link from "next/link";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {IStore} from "@/types/components";
import {useGlobalContext} from "@/context/global";

// Components
import Paragraph from "./../Elements/Paragraph";
import ProductListCard from "./Cards/ProductListCard";
import ServicesLinksCard from "../Cards/ServicesLinksCard";

const Store: FC<IStore.IStore> = ({
	title,
	storeCta,
	subtitle,
	heroTitle,
	paragraph,
	heroImage,
	storeServicesLinks,
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
					className="flex flex-col items-start justify-center lg:flex-row gap-16 py-12"
				>
					<div className="flex flex-col gap-2 w-full lg:w-[30%]">
						<ul className="grid grid-cols-1 gap-2 w-full flex-row items-center justify-start bg-white ">
							{storeServicesLinks?.length > 0 ? (
								storeServicesLinks?.map((item: any, index: number) => (
									<Fragment key={index}>
										<motion.li
											custom={index}
											initial={initial}
											whileInView="animate"
											viewport={{once: true}}
											variants={arrayLoopStaggerChildren}
											className="hidden xl:block bg-cover bg-no-repeat bg-center hover:bg-accent-default"
											style={{
												backgroundImage: `linear-gradient(
												0deg,
												rgba(6, 18, 41, 0.50),
												rgba(6, 18, 41, 0.50),
												rgba(6, 18, 41, 0.50)
											),url("${item?.image?.sourceUrl}")`,
											}}
										>
											<ServicesLinksCard buttonLink={item?.buttonLink} />
										</motion.li>
										<motion.li
											custom={index}
											initial={initial}
											whileInView="animate"
											viewport={{once: true}}
											variants={arrayLoopStaggerChildren}
											className="block xl:hidden bg-cover bg-no-repeat bg-center hover:bg-accent-default"
											style={{
												backgroundImage: `linear-gradient(
												0deg,
												rgba(6, 18, 41, 0.20),
												rgba(6, 18, 41, 0.20),
												rgba(6, 18, 41, 0.20)
											),url("${item?.image?.sourceUrl}")`,
											}}
										>
											<ServicesLinksCard buttonLink={item?.buttonLink} />
										</motion.li>
									</Fragment>
								))
							) : (
								<></>
							)}
						</ul>
						<motion.div
							initial={initial}
							variants={stagger}
							whileInView="animate"
							viewport={{once: true}}
							className="p-10 flex flex-col items-center justify-between bg-cover bg-center bg-no-repeat"
							style={{
								backgroundImage: `linear-gradient(
                                        0deg,
                                        rgba(6, 18, 41, 0.90),
										rgba(6, 18, 41, 0.90),
										rgba(6, 18, 41, 0.90)
                                    ),url("${storeCta?.backgroundImage?.sourceUrl}")`,
							}}
						>
							<div className="flex flex-col gap-4">
								<motion.h3
									initial={initialTwo}
									whileInView={fadeIn}
									viewport={{once: true}}
									className="mb-1 text-center font-bold lg:text-left text-lg tracking-[0.10rem] text-white"
								>
									{storeCta?.title}
								</motion.h3>
								<Paragraph
									content={storeCta?.paragraph}
									tailwindStyling="lg:max-w-3xl mx-auto text-white leading-[1.75rem] text-base text-center lg:text-left"
								/>
							</div>
							<motion.div
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className={storeCta?.buttonLink?.url ? "block mt-4" : "hidden"}
							>
								<Link
									href={`${storeCta?.buttonLink?.url}`}
									target={storeCta?.buttonLink?.target}
									aria-label={`${storeCta?.buttonLink?.title}`}
									className={`w-fit mx-auto lg:mx-0 py-4 px-6 cursor-pointer bg-primary-default hover:bg-accent-default  uppercase text-lightGrey text-base text-center font-borexRegular tracking-[0.05rem] transition-all ease-in-out duration-500`}
								>
									{storeCta?.buttonLink?.title}
								</Link>
							</motion.div>
						</motion.div>
					</div>
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
													description={item?.description}
													price={item?.regular_price || item?.price}
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
