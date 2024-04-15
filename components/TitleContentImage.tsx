// Imports
import {
	slideInLeftInitial,
	slideInRightFinish,
	slideInRightInitial,
} from "../animations/animations";
import {FC} from "react";
import {motion} from "framer-motion";
import {ITitleContentImage} from "@/types/components";

// Components
import TitleContentImageCard from "./Cards/TitleContentImageCard";

const TitleContentImage: FC<ITitleContentImage> = ({
	title,
	image,
	textTitle,
	paragraph,
	buttonLink,
	displayContentOption,
	displayBackgroundColor,
}) => {
	let backgroundColor;

	switch (displayBackgroundColor) {
		case "White":
			backgroundColor = "bg-white";
			break;
		case "Grey":
			backgroundColor = "bg-lightGreyTwo";
			break;
		default:
			backgroundColor = "bg-white";
			break;
	}

	return (
		<>
			<div
				className={`titleContentImage py-16 pb-2 lg:py-0 ${backgroundColor}`}
			>
				<div
					className={`relative z-10 gap-4 lg:gap-x-16 p-0 mx-auto items-center justify-center flex flex-col ${
						displayContentOption == "Left"
							? "lg:flex-row-reverse"
							: "lg:flex-row"
					}`}
				>
					<motion.div
						viewport={{once: true}}
						initial={
							displayContentOption == "Left"
								? slideInRightInitial
								: slideInLeftInitial
						}
						whileInView={slideInRightFinish}
						className={`bg-center bg-no-repeat bg-cover w-full lg:w-1/2 h-[350px] lg:h-[500px]`}
						style={{
							backgroundImage: `url(${image?.sourceUrl})`,
						}}
					/>

					<motion.div
						viewport={{once: true}}
						initial={
							displayContentOption == "Left"
								? slideInLeftInitial
								: slideInRightInitial
						}
						whileInView={slideInRightFinish}
						className={`${
							displayContentOption == "Left"
								? "xl:pl-28 2xl:pl-48 lg:items-end"
								: "xl:pr-28 2xl:pr-32 lg:items-start"
						} lg:w-1/2 h-full`}
					>
						<TitleContentImageCard
							title={title}
							textTitle={textTitle}
							paragraph={paragraph}
							buttonLink={buttonLink}
						/>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default TitleContentImage;
