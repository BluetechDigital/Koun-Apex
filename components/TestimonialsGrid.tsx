// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {useGlobalContext} from "@/context/global";
import {ITestimonialsGrid} from "@/types/components/index";
import {fadeInUp, initial, stagger} from "../animations/animations";

// Styling
import styles from "../styles/components/Testimonials.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";
import Pagination from "./Elements/Pagination";

const TestimonialsGrid: FC<ITestimonialsGrid> = ({
	title,
	subtitle,
	paragraph,
}) => {
	const globalContext = useGlobalContext();

	return (
		<>
			<div
				className={
					styles.testimonials + ` relative py-16 lg:py-28 px-4 bg-white`
				}
			>
				<div className="lg:container relative m-auto flex flex-col items-center gap-6 sm:gap-12 lg:gap-20">
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="flex flex-col items-center"
					>
						<motion.h4
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="font-ObjectSans uppercase max-w-sm mx-auto lg:mx-0 leading-tight text-center text-base text-primary-default"
						>
							{subtitle}
						</motion.h4>
						<motion.h3
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="my-3 max-w-xl mx-auto xl:mx-0 font-ObjectSans uppercase text-black text-center font-extrabold text-lg lg:text-xl"
						>
							{title}
						</motion.h3>
						<Paragraph
							content={paragraph}
							tailwindStyling="lg:max-w-3xl mx-auto text-black leading-[1.75rem] text-paragraph text-center"
						/>
					</motion.div>
					<Pagination
						contentType="TestimonialsCard"
						numberOfItemsRenderedPerPage={12}
						contentArray={globalContext?.testimonials}
						tailwindStyling={`grid px-4 lg:px-16 lg:-m-4 gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4`}
					/>
				</div>
			</div>
		</>
	);
};

export default TestimonialsGrid;
