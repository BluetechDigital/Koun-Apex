// Imports
import {
	initial,
	slideInLeftInitial,
	slideInRightFinish,
	slideInRightInitial,
	arrayLoopStaggerChildren,
} from "@/animations/animations";
import Link from "next/link";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {IFeaturedProducts} from "@/types/components";

// Styling
import styles from "../styles/components/Store.module.scss";

// Components
import Title from "./Elements/Title";
import Paragraph from "./Elements/Paragraph";
import {useGlobalContext} from "@/context/global";
import FeaturedProductsCard from "./Cards/FeaturedProductsCard";

const FeaturedProducts: FC<IFeaturedProducts> = ({
	title,
	paragraph,
	buttonLink,
}) => {
	const globalContext = useGlobalContext();
	return (
		<>
			<div
				className={
					styles.FeaturedProducts +
					" featuredProducts p-4 bg-white bg-center bg-no-repeat bg-cover"
				}
				style={{
					backgroundImage: `linear-gradient(
								0deg,
								rgb(255, 255, 255, 0.85),
								rgba(255, 255, 255, 0.85),
								rgba(255, 255, 255, 0.95),
								rgba(255, 255, 255, 1)
							),url("/svg/background/grid-background-06.svg")`,
				}}
			>
				<div className="flex flex-col xl:flex-row items-center justify-between gap-4 lg:gap-16 py-4">
					<motion.div
						viewport={{once: true}}
						initial={slideInLeftInitial}
						whileInView={slideInRightFinish}
						className="flex flex-col text-center lg:max-w-5xl w-full xl:w-[65%]"
					>
						<Title
							content={title}
							tailwindStyling="title max-w-2xl mt-2 text-black font-borexRegular uppercase leading-tight text-lg lg:text-xl xl:text-3xl text-center lg:text-left tracking-[0.05rem]"
						/>
						<Paragraph
							content={paragraph}
							tailwindStyling="font-PlusJakartaSans max-w-8xl mx-auto xl:mx-0 text-center xl:text-left text-black text-paragraph"
						/>
					</motion.div>
					<motion.div
						viewport={{once: true}}
						initial={slideInRightInitial}
						whileInView={slideInRightFinish}
						className={
							paragraph && buttonLink?.url
								? "flex flex-col items-end justify-center text-center lg:text-left w-full xl:w-[35%]"
								: "hidden"
						}
					>
						<div>
							<Link
								href={`${buttonLink?.url}`}
								target={buttonLink?.target}
								aria-label={`${buttonLink?.title}`}
								className="flex items-center justify-center xl:justify-start w-fit mx-auto lg:mx-0 py-4 px-6 cursor-pointer bg-pureBlack hover:bg-primary-default uppercase text-lightGrey text-base text-center font-borexRegular tracking-[0.05rem] transition-all duration-500 ease-in-out"
							>
								{buttonLink?.title}
							</Link>
						</div>
					</motion.div>
				</div>
				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 items-center justify-center gap-4">
					{/* {globalContext?.commerceProducts?.length > 0 ? (
						globalContext?.commerceProducts
							?.slice(0, 5)
							?.map((item: any, index: any) => (
								<Fragment key={index}>
									<motion.div
										custom={index}
										initial={initial}
										whileInView="animate"
										viewport={{once: true}}
										variants={arrayLoopStaggerChildren}
										className="w-full h-full"
									>
										<FeaturedProductsCard
											slug={item?.slug}
											name={item?.name}
											images={item?.images}
											price={item?.regular_price || item?.price}
										/>
									</motion.div>
								</Fragment>
							))
					) : (
						<></>
					)} */}
				</div>
			</div>
		</>
	);
};

export default FeaturedProducts;
