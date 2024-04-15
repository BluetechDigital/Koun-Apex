// Imports
import {FC} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import {ITitleContentImageCard} from "@/types/components";
import {fadeInUp, stagger, initial} from "../../animations/animations";

// Components
import Paragraph from "../Elements/Paragraph";

const TitleContentImageCard: FC<ITitleContentImageCard> = ({
	title,
	textTitle,
	paragraph,
	buttonLink,
}) => {
	return (
		<>
			<motion.div
				initial={initial}
				variants={stagger}
				whileInView="animate"
				viewport={{once: true}}
				className={`flex flex-col items-center ${
					title ? "pt-2 pb-10 lg:py-10 xl:py-14" : "py-10"
				} px-4 lg:items-baseline`}
			>
				<motion.h3
					initial={initial}
					whileInView={fadeInUp}
					viewport={{once: true}}
					className="mb-6 lg:max-w-3xl leading-tight uppercase font-ObjectSans text-black text-center lg:text-left font-semibold text-lg sm:text-xl lg:text-2xl"
				>
					{title}
				</motion.h3>
				<Paragraph
					content={textTitle}
					tailwindStyling="mb-2 lg:max-w-xl font-semibold text-center text-base lg:text-left text-black"
				/>
				<Paragraph
					content={paragraph}
					tailwindStyling="lg:max-w-xl text-base text-center lg:text-left text-black"
				/>
				<motion.div
					initial={initial}
					whileInView={fadeInUp}
					viewport={{once: true}}
					className={buttonLink?.title ? "flex mt-2" : "hidden"}
				>
					<Link
						href={`${buttonLink?.url}`}
						target={buttonLink?.target}
						aria-label={`${buttonLink?.title}`}
						className={`mb-8 py-4 px-6 cursor-pointer bg-primary-default hover:bg-accent-three transition-all ease-in-out duration-500 font-semibold uppercase text-lightGrey text-base text-center font-ObjectSans ${
							buttonLink?.url ? "block" : "hidden"
						}`}
					>
						{buttonLink?.title}
					</Link>
				</motion.div>
			</motion.div>
		</>
	);
};

export default TitleContentImageCard;
