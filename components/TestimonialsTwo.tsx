// Imports
import {
	fadeIn,
	initial,
	stagger,
	initialTwo,
	slideInLeftInitial,
	slideInRightFinish,
	arrayLoopStaggerChildren,
} from "../animations/animations";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {useGlobalContext} from "@/context/global";
import {ITestimonialsTwo} from "@/types/components/index";

// Styling
import styles from "../styles/components/Testimonials.module.scss";

// Components
import TestimonialsCard from "./Cards/TestimonialsCard";

const TestimonialsTwo: FC<ITestimonialsTwo> = ({title, subtitle}) => {
	const globalContext = useGlobalContext();
	return (
		<>
			<div
				className={styles.testimonials + ` p-4 bg-white flex flex-col gap-0`}
			>
				<motion.div
					viewport={{once: true}}
					initial={slideInLeftInitial}
					whileInView={slideInRightFinish}
					className={
						title && subtitle
							? "w-full flex flex-col lg:flex-row items-center justify-between py-4 gap-3"
							: "hidden"
					}
				>
					<div>
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
							className="max-w-2xl mt-2 text-black font-borexRegular uppercase leading-tight text-lg lg:text-xl xl:text-3xl text-center lg:text-left tracking-[0.05rem]"
						>
							{title}
						</motion.h2>
					</div>
				</motion.div>
				<motion.div
					initial={initial}
					variants={stagger}
					whileInView="animate"
					viewport={{once: true}}
					className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 items-center justify-center gap-4"
				>
					{globalContext?.testimonials?.length > 0 ? (
						globalContext?.testimonials
							?.slice(0, 5)
							?.map((item: any, index: number) => (
								<Fragment key={index}>
									<motion.div
										custom={index}
										initial={initial}
										whileInView="animate"
										viewport={{once: true}}
										variants={arrayLoopStaggerChildren}
										className="w-full"
									>
										<TestimonialsCard
											name={item?.node?.testimonialReview?.name}
											image={item?.node?.testimonialReview?.image}
											rating={item?.node?.testimonialReview?.rating}
											position={item?.node?.testimonialReview?.position}
											paragraph={item?.node?.testimonialReview?.paragraph}
											reviewType={item?.node?.testimonialReview?.reviewType}
										/>
									</motion.div>
								</Fragment>
							))
					) : (
						<></>
					)}
				</motion.div>
			</div>
		</>
	);
};

export default TestimonialsTwo;
