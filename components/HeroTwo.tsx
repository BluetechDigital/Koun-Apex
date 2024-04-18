// Imports
import {fadeIn, initial, stagger, initialTwo} from "../animations/animations";
import {FC} from "react";
import {motion} from "framer-motion";
import {IHeroTwo} from "@/types/components/index";

// Styling
import styles from "../styles/components/Hero.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";

const HeroTwo: FC<IHeroTwo> = ({title, paragraph, backgroundImage}) => {
	return (
		<>
			<div
				className={styles.heroTwo + ` bg-cover bg-no-repeat bg-center`}
				style={{
					backgroundImage: `url("${backgroundImage?.sourceUrl}")`,
				}}
			>
				<motion.div
					initial={initial}
					variants={stagger}
					whileInView="animate"
					viewport={{once: true}}
					className="lg:relative z-50 h-[35vh] flex flex-col items-center justify-center"
				>
					<motion.h1
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						className="text-center lg:text-left uppercase text-2xl lg:text-6xl xl:text-8xl text-white xl:leading-[2.5rem]"
					>
						{title}
					</motion.h1>
					<Paragraph
						content={paragraph}
						tailwindStyling="pt-4 lg:max-w-sm xl:max-w-xl mx-auto lg:mx-0 text-white leading-tight text-lg lg:text-xl text-center lg:text-left"
					/>
				</motion.div>
			</div>
		</>
	);
};

export default HeroTwo;
