// Imports
import {
	fadeIn,
	initial,
	stagger,
	fadeInUp,
	initialTwo,
	slideInRightFinish,
	slideInRightInitial,
} from "../animations/animations";
import Link from "next/link";
import Image from "next/image";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {IFAQTwo} from "@/types/components/index";

// Components
import FAQCard from "./Cards/FAQCard";
import Paragraph from "./Elements/Paragraph";

const FAQTwo: FC<IFAQTwo> = ({
	title,
	image,
	subtitle,
	paragraph,
	faqContent,
	buttonLink,
}) => {
	return (
		<>
			<div className="py-16 px-4 lg:px-0 bg-white">
				<div className="lg:container px-0 mx-auto flex flex-col gap-4">
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="w-full flex flex-col items-center lg:justify-between lg:flex-row gap-4"
					>
						<div className="lex flex-col">
							<motion.h4
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="font-ObjectSans uppercase max-w-sm mx-auto lg:mx-0 text-center lg:text-left text-base text-primary-default"
							>
								{subtitle}
							</motion.h4>
							<motion.h3
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="my-3 max-w-xl mx-auto xl:mx-0 uppercase text-black text-center lg:text-left font-extrabold text-lg lg:text-xl"
							>
								{title}
							</motion.h3>
						</div>
						<Paragraph
							content={paragraph}
							tailwindStyling="lg:max-w-3xl mx-auto lg:mx-0 text-black text-base text-center lg:text-left"
						/>
					</motion.div>
					<div className="flex flex-col lg:flex-row gap-4 xl:gap-10">
						<motion.div
							initial={initial}
							variants={stagger}
							whileInView="animate"
							viewport={{once: true}}
							className={`w-full flex flex-col items-center justify-center gap-4 ${
								image?.sourceUrl ? "lg:w-1/2" : `w-full`
							}`}
						>
							{faqContent?.length > 0 ? (
								faqContent.map((item: any, keys: number) => (
									<Fragment key={keys}>
										<FAQCard
											index={keys}
											title={item?.card?.title}
											paragraph={item?.card?.paragraph}
										/>
									</Fragment>
								))
							) : (
								<></>
							)}
						</motion.div>
						<div className={image?.sourceUrl ? "w-full lg:w-1/2" : `hidden`}>
							<motion.div
								viewport={{once: true}}
								initial={slideInRightInitial}
								whileInView={slideInRightFinish}
								className="relative"
							>
								<Image
									priority
									src={image?.sourceUrl}
									alt={`${image?.altText}`}
									width={
										image?.mediaDetails?.width
											? image?.mediaDetails?.width
											: 500
									}
									height={
										image?.mediaDetails?.height
											? image?.mediaDetails?.height
											: 500
									}
									className={
										image?.sourceUrl
											? `block object-cover object-center w-full h-[350px] sm:h-[400px]`
											: `hidden`
									}
								/>
								<Link
									href={`${buttonLink?.url}`}
									target={buttonLink?.target}
									aria-label={`${buttonLink?.title}`}
									className={`w-fit mx-auto lg:mx-0 py-4 px-6 cursor-pointer bg-primary-two hover:bg-accent-three transition-all ease-in-out duration-500 font-semibold uppercase text-lightGrey text-base text-center font-ObjectSans ${
										buttonLink?.url
											? "lg:block absolute bottom-0 left-0"
											: "lg:hidden"
									}`}
								>
									{buttonLink?.title}
								</Link>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default FAQTwo;
