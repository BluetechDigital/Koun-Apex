// Imports
import {
	slideInLeftInitial,
	slideInRightFinish,
	slideInRightInitial,
} from "../animations/animations";
import Link from "next/link";
import Image from "next/image";
import {FC} from "react";
import {motion} from "framer-motion";
import {IHero} from "@/types/components/index";

// Styling
import styles from "../styles/components/Hero.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";

const Hero: FC<IHero> = ({
	title,
	paragraph,
	buttonLink,
	buttonLinkTwo,
	backgroundImage,
}) => {
	return (
		<>
			<div className={styles.hero + " relative z-50 flex flex-col"}>
				<div className="lg:relative lg:h-[70vh] flex flex-col lg:flex-row">
					<div
						className={
							styles.leftSideContent +
							" w-full xl:w-[40%] bg-white bg-cover bg-no-repeat bg-center"
						}
						style={{
							backgroundImage: `linear-gradient(
								0deg,
								rgba(6, 18, 41, 0.50),
								rgba(6, 18, 41, 0.85),
								rgba(6, 18, 41, 0.95)
							),url("${backgroundImage?.sourceUrl}")`,
						}}
					>
						<div className="bg-transparent xl:bg-pureBlack w-full h-full px-4 lg:px-10 2xl:px-28 py-16 xl:py-8 flex flex-col justify-center">
							<motion.h1
								viewport={{once: true}}
								initial={slideInLeftInitial}
								whileInView={slideInRightFinish}
								className="font-ObjectSans text-center lg:text-left uppercase text-lg lg:text-3xl 2xl:text-5xl text-white xl:text-grey xl:leading-tight"
							>
								{title}
							</motion.h1>
							<Paragraph
								content={paragraph}
								tailwindStyling="py-2 text-white xl:text-grey leading-[1.75rem] text-base text-center lg:text-left"
							/>
							<motion.div
								viewport={{once: true}}
								initial={slideInLeftInitial}
								whileInView={slideInRightFinish}
								className="mt-4 flex flex-col lg:flex-row gap-4 items-center justify-between lg:justify-start"
							>
								<Link
									href={`${buttonLink?.url}`}
									target={buttonLink?.target}
									aria-label={`${buttonLink?.title}`}
									className={`w-fit mx-auto lg:mx-0 py-4 px-6 cursor-pointer bg-primary-default hover:bg-accent-default  uppercase text-lightGrey text-base text-center font-borexRegular tracking-[0.05rem] transition-all ease-in-out duration-500`}
								>
									{buttonLink?.title}
								</Link>
								<Link
									href={`${buttonLinkTwo?.url}`}
									target={buttonLinkTwo?.target}
									aria-label={`${buttonLinkTwo?.title}`}
									className={`w-fit mx-auto lg:mx-0 py-4 px-6 cursor-pointer bg-primary-default hover:bg-accent-default  uppercase text-lightGrey text-base text-center font-borexRegular tracking-[0.05rem] transition-all ease-in-out duration-500`}
								>
									{buttonLinkTwo?.title}
								</Link>
							</motion.div>
						</div>
					</div>
					<motion.div
						viewport={{once: true}}
						initial={slideInRightInitial}
						whileInView={slideInRightFinish}
						className={
							styles.rightSideContent +
							" hidden xl:flex flex-col w-full xl:w-[60%]"
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
			</div>
		</>
	);
};

export default Hero;
