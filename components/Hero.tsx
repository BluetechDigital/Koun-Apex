// Imports
import {
	initial,
	stagger,
	slideInLeftInitial,
	slideInRightFinish,
	arrayLoopStaggerChildren,
} from "../animations/animations";
import Link from "next/link";
import Image from "next/image";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {IHero} from "@/types/components/index";

// Swiper.js Slider
import "swiper/css";
import "swiper/css/navigation";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";

// Styling
import styles from "../styles/components/Hero.module.scss";

// Components
import HeroCard from "./Cards/HeroCard";
import Paragraph from "./Elements/Paragraph";

const Hero: FC<IHero> = ({
	title,
	paragraph,
	buttonLink,
	buttonLinkTwo,
	servicesLinks,
	mainImageSlider,
}) => {
	return (
		<>
			<div
				className={styles.hero + " bg-center bg-no-repeat bg-cover"}
				style={{
					backgroundImage: `linear-gradient(
								0deg,
								rgb(255, 255, 255, 0.75),
								rgba(255, 255, 255, 0.85),
								rgba(255, 255, 255, 0.85),
								rgba(255, 255, 255, 0.95)
							),url("/svg/background/grid-background-12.svg")`,
				}}
			>
				<div className="px-10 lg:px-20 py-10">
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="flex flex-col-reverse lg:flex-row justify-between -m-4 gap-6 lg:gap-0"
					>
						<div className="w-full lg:w-5/12 px-4">
							<div className="HeroSwiperSlider group relative overflow-hidden h-[450px] lg:h-[745px]">
								<Swiper
									loop={true}
									navigation={true}
									spaceBetween={30}
									centeredSlides={true}
									modules={[Autoplay, Navigation]}
									autoplay={{
										delay: 3000,
										disableOnInteraction: false,
									}}
								>
									{mainImageSlider?.length > 0 ? (
										mainImageSlider?.map((item: any, index: number) => (
											<Fragment key={index}>
												<SwiperSlide>
													<Image
														priority
														src={item?.image?.sourceUrl}
														alt={`${item?.image?.altText}`}
														width={
															item?.image?.mediaDetails?.width
																? item?.image?.mediaDetails?.width
																: 500
														}
														height={
															item?.image?.mediaDetails?.height
																? item?.image?.mediaDetails?.height
																: 500
														}
														className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition duration-700 ease-in-out"
													/>
												</SwiperSlide>
											</Fragment>
										))
									) : (
										<></>
									)}
								</Swiper>
								<motion.div
									viewport={{once: true}}
									initial={slideInLeftInitial}
									whileInView={slideInRightFinish}
									className="absolute z-50 bottom-1/2 lg:bottom-4 left-4 right-4 hidden lg:flex flex-col lg:flex-row gap-4 items-center justify-between lg:justify-start"
								>
									<Link
										href={`${buttonLink?.url}`}
										target={buttonLink?.target}
										aria-label={`${buttonLink?.title}`}
										className="w-fit mx-auto lg:mx-0 py-4 px-6 cursor-pointer bg-pureBlack group-hover:bg-primary-default uppercase text-lightGrey text-base text-center font-borexRegular tracking-[0.05rem] transition-all delay-200 duration-500 ease-in-out"
									>
										{buttonLink?.title}
									</Link>
									<Link
										href={`${buttonLinkTwo?.url}`}
										target={buttonLinkTwo?.target}
										aria-label={`${buttonLinkTwo?.title}`}
										className="w-fit mx-auto lg:mx-0 py-4 px-6 cursor-pointer bg-pureBlack hover:bg-lightGreyTwo uppercase text-lightGrey hover:text-pureBlack text-base text-center font-borexRegular tracking-[0.05rem] transition-all duration-500 ease-in-out"
									>
										{buttonLinkTwo?.title}
									</Link>
								</motion.div>
							</div>
						</div>
						<div className="w-full lg:w-7/12 px-4 flex flex-col items-center lg:items-baseline justify-between">
							<motion.div
								viewport={{once: true}}
								initial={slideInLeftInitial}
								whileInView={slideInRightFinish}
							>
								<h1 className="leading-[2.5rem] font-thin uppercase mt-6 text-6xl mb-4 mx-auto lg:mx-0 max-w-full lg:max-w-3xl text-center lg:text-left">
									{title}
								</h1>
								<Paragraph
									content={paragraph}
									tailwindStyling="mb-4 lg:mb-12 mx-auto lg:mx-0 max-w-full lg:max-w-2xl py-2 text-darkGrey text-paragraph text-center lg:text-left"
								/>
							</motion.div>
							<motion.div
								viewport={{once: true}}
								initial={slideInLeftInitial}
								whileInView={slideInRightFinish}
								className="flex lg:hidden flex-col lg:flex-row gap-4 items-center justify-between lg:justify-start"
							>
								<Link
									href={`${buttonLink?.url}`}
									target={buttonLink?.target}
									aria-label={`${buttonLink?.title}`}
									className="w-fit mx-auto lg:mx-0 py-4 px-6 cursor-pointer bg-pureBlack hover:bg-primary-default uppercase text-lightGrey text-base text-center font-borexRegular tracking-[0.05rem] transition-all duration-500 ease-in-out"
								>
									{buttonLink?.title}
								</Link>
								<Link
									href={`${buttonLinkTwo?.url}`}
									target={buttonLinkTwo?.target}
									aria-label={`${buttonLinkTwo?.title}`}
									className="w-fit mx-auto lg:mx-0 py-4 px-6 cursor-pointer bg-pureBlack hover:bg-primary-default uppercase text-lightGrey text-base text-center font-borexRegular tracking-[0.05rem] transition-all duration-500 ease-in-out"
								>
									{buttonLinkTwo?.title}
								</Link>
							</motion.div>
							<div className="w-full relative grid grid-cols-1 md:grid-cols-2 pt-6 px-0 gap-6 items-start justify-center">
								{servicesLinks?.length > 0 ? (
									servicesLinks?.map((item: any, index: number) => (
										<Fragment key={index}>
											<motion.div
												custom={index}
												initial={initial}
												whileInView="animate"
												viewport={{once: true}}
												variants={arrayLoopStaggerChildren}
												className="group overflow-hidden"
											>
												<HeroCard link={item?.link} image={item?.image} />
											</motion.div>
										</Fragment>
									))
								) : (
									<></>
								)}
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default Hero;
