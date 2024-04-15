// Imports
import {
	fadeIn,
	stagger,
	initial,
	initialTwo,
	slideInLeftInitial,
	slideInRightFinish,
	slideInRightInitial,
	arrayLoopStaggerChildren,
} from "../animations/animations";
import Link from "next/link";
import Image from "next/image";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {IHero} from "@/types/components/index";

// Styling
import styles from "../styles/components/Hero.module.scss";

// Components
import Title from "./Elements/Title";
import Paragraph from "./Elements/Paragraph";
import RenderStars from "./Elements/RenderStars";

const Hero: FC<IHero> = ({
	title,
	paragraph,
	buttonLink,
	buttonLinkTwo,
	servicesLinks,
	backgroundImage,
}) => {
	return (
		<>
			<div className={styles.hero + " relative z-50 flex flex-col"}>
				<div className="lg:relative pt-[85px] lg:pt-[100px] lg:h-[90vh] xl:h-[70vh] flex flex-col lg:flex-row">
					<div
						className={
							styles.leftSideContent +
							" px-4 xl:px-10 2xl:px-28 py-16 lg:py-8 bg-lightGrey w-full lg:w-[55%] xl:w-[40%]"
						}
					>
						<motion.div
							viewport={{once: true}}
							initial={slideInLeftInitial}
							whileInView={slideInRightFinish}
							className="lg:container px-4 lg:px-10 xl:px-0 mx-auto max-w-xl flex flex-col justify-center h-full"
						>
							<motion.h1
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className="font-ObjectSans text-center lg:text-left uppercase text-lg lg:text-xl xl:text-3xl text-black font-extrabold xl:leading-tight"
							>
								{title}
							</motion.h1>
							<Paragraph
								content={paragraph}
								tailwindStyling="py-2 text-black leading-[1.75rem] text-base text-center lg:text-left"
							/>
							<motion.div
								initial={initial}
								variants={stagger}
								whileInView="animate"
								viewport={{once: true}}
								className="w-fit max-w-lg lg:max-w-full mx-auto lg:mx-0 py-3 px-4 grid sm:grid-cols-2 2xl:grid-cols-3 items-center justify-center lg:justify-start gap-6"
							>
								<div className="flex items-center justify-center lg:justify-start gap-3">
									<Image
										priority
										className="my-auto lg:mx-0 rounded-full w-10 h-10 object-cover object-center"
										alt={`Facebook reviews logo`}
										src="/img/facebook-logo-blue-circle-large-white.webp"
										width={500}
										height={500}
									/>
									<div className="flex flex-col gap-1">
										<div className="flex items-center justify-start gap-1">
											<RenderStars rating={5} />
										</div>
										<h3 className="text-tiny font-PlusJakartaSans text-black">
											5.0 Rating
										</h3>
									</div>
								</div>
								<div className="flex items-center justify-center lg:justify-start gap-3">
									<Image
										priority
										className="bg-white my-auto lg:mx-0 rounded-full p-1 w-10 h-10 object-cover object-center"
										alt={`Google reviews logo`}
										src="/svg/google-tile-logo.svg"
										width={500}
										height={500}
									/>
									<div className="flex flex-col gap-1">
										<div className="flex items-center justify-start gap-1">
											<RenderStars rating={5} />
										</div>
										<h3 className="text-tiny font-PlusJakartaSans text-black">
											5.0 Rating
										</h3>
									</div>
								</div>
								<div className="flex items-center justify-center lg:justify-start gap-0 basis-1/2">
									<Image
										priority
										className="my-auto lg:mx-0 p-1 w-full h-10 object-cover object-center"
										alt={`Trustpilot reviews logo`}
										src="/svg/trustpilot-logo-black.svg"
										width={500}
										height={500}
									/>
								</div>
							</motion.div>
							<div className="mt-4 flex flex-col lg:flex-row gap-4 items-center justify-between lg:justify-start">
								<Link
									href={`${buttonLink?.url}`}
									target={buttonLink?.target}
									aria-label={`${buttonLink?.title}`}
									className={`w-fit mx-auto lg:mx-0 py-4 px-6 cursor-pointer bg-primary-default hover:bg-primary-two transition-all ease-in-out duration-500 font-semibold uppercase text-lightGrey text-base text-center font-ObjectSans`}
								>
									{buttonLink?.title}
								</Link>
								<Link
									href={`${buttonLinkTwo?.url}`}
									target={buttonLinkTwo?.target}
									aria-label={`${buttonLinkTwo?.title}`}
									className={`w-fit mx-auto lg:mx-0 py-4 px-6 cursor-pointer bg-primary-two hover:bg-accent-three transition-all ease-in-out duration-500 font-semibold uppercase text-lightGrey text-base text-center font-ObjectSans`}
								>
									{buttonLinkTwo?.title}
								</Link>
							</div>
						</motion.div>
					</div>
					<motion.div
						viewport={{once: true}}
						initial={slideInRightInitial}
						whileInView={slideInRightFinish}
						className={
							styles.rightSideContent +
							" flex flex-col w-full lg:w-[45%] xl:w-[60%]"
						}
					>
						<Image
							priority
							alt={`${backgroundImage?.altText}`}
							src={backgroundImage?.sourceUrl}
							width={
								backgroundImage?.mediaDetails?.width
									? backgroundImage?.mediaDetails?.width
									: 500
							}
							height={
								backgroundImage?.mediaDetails?.height
									? backgroundImage?.mediaDetails?.height
									: 500
							}
							className={`${
								backgroundImage?.sourceUrl
									? "w-full h-full max-h-[400px] md:max-h-[500px] lg:max-h-[800px] object-cover object-center"
									: "hidden"
							}`}
						/>
					</motion.div>
				</div>
				<div className="relative flex flex-row py-0 justify-start items-center lg:justify-between">
					<ul className="hidden md:grid grid-cols-4 w-full lg:w-full xl:w-[65%] 2xl:w-[55%] xl:absolute mb-0 xl:mb-[-30px] 2xl:mb-[0px] right-0 flex-row items-center justify-end">
						{servicesLinks?.length > 0 ? (
							servicesLinks?.map((item: any, keys: number) => (
								<Fragment key={keys}>
									<motion.li
										custom={keys}
										initial={initial}
										whileInView="animate"
										viewport={{once: true}}
										variants={arrayLoopStaggerChildren}
									>
										<Link
											key={keys}
											href={`${item?.buttonLink?.url}`}
											target={item?.buttonLink?.target}
											aria-label={`${item?.buttonLink?.title}`}
										>
											<div
												className={`p-2 pr-0 hover:bg-primary-two w-full sm:min-h-[14vh] lg:min-h-[14vh] sm:max-h-[20vh] lg:max-h-[20vh] transition-all ease-in-out duration-500 ${
													keys === 0
														? "bg-primary-default"
														: keys === 1
														? "bg-primary-two"
														: keys === 2
														? "bg-accent-two"
														: keys === 3
														? "bg-accent-three"
														: "bg-primary-default"
												}`}
											>
												<Image
													priority
													alt={`${item?.icon?.altText}`}
													src={item?.icon?.sourceUrl}
													width={
														item?.icon?.mediaDetails?.width
															? item?.icon?.mediaDetails?.width
															: 500
													}
													height={
														item?.icon?.mediaDetails?.height
															? item?.icon?.mediaDetails?.height
															: 500
													}
													className={
														item?.icon?.sourceUrl
															? `block object-contain object-center w-full h-[50px] lg:h-[60px] mb-6`
															: `hidden`
													}
												/>

												<span className="flex items-center justify-center pl-4">
													<Title
														content={item?.buttonLink?.title}
														tailwindStyling="font-ObjectSans uppercase text-white font-semibold text-base leading-tight text-center"
													/>
													<Image
														priority
														width={550}
														height={550}
														alt="Black Arrow Icon"
														src="/svg/navigation-menu-dropdown-arrow-white.svg"
														className="my-auto ml-2 mb-20 rotate-[-135deg] cursor-pointer w-[35px] h-[35px] object-contain object-center"
													/>
												</span>
											</div>
										</Link>
									</motion.li>
								</Fragment>
							))
						) : (
							<></>
						)}
					</ul>
				</div>
			</div>
		</>
	);
};

export default Hero;
