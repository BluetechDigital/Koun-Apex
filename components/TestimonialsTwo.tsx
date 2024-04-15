// Imports
import Image from "next/image";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {useGlobalContext} from "@/context/global";
import {ITestimonialsTwo} from "@/types/components/index";
import {fadeInUp, initial, stagger} from "../animations/animations";

// Styling
import styles from "../styles/components/Testimonials.module.scss";

// Components
import RenderStars from "./Elements/RenderStars";
import TestimonialsCard from "./Cards/TestimonialsCard";

const TestimonialsTwo: FC<ITestimonialsTwo> = ({title, subtitle}) => {
	const globalContext = useGlobalContext();
	return (
		<>
			<div className={styles.testimonials + ` py-6 px-4 bg-white`}>
				<div className="lg:container m-auto px-0 flex flex-col gap-6">
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className={
							title && subtitle
								? "w-full flex flex-col lg:flex-row items-center justify-between py-4 gap-3"
								: "hidden"
						}
					>
						<div>
							<motion.h4
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="font-ObjectSans uppercase max-w-sm mx-auto lg:mx-0 leading-tight text-center text-base text-primary-default lg:text-left"
							>
								{subtitle}
							</motion.h4>
							<motion.h3
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="my-3 max-w-xl mx-auto xl:mx-0 uppercase text-black font-extrabold text-lg lg:text-xl text-center lg:text-left"
							>
								{title}
							</motion.h3>
						</div>
						<motion.div
							initial={initial}
							variants={stagger}
							whileInView="animate"
							viewport={{once: true}}
							className="w-full lg:w-1/4 max-w-sm lg:max-w-full mx-auto lg:mx-0 py-3 px-4 grid sm:grid-cols-2 items-center justify-center lg:justify-start gap-6"
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
							<div className="flex items-center justify-center lg:justify-start gap-0">
								<Image
									priority
									className="bg-white my-auto lg:mx-0 rounded-full p-1 w-full h-10 object-cover object-center"
									alt={`Trustpilot reviews logo`}
									src="/svg/trustpilot-logo-black.svg"
									width={500}
									height={500}
								/>
							</div>
							<div className="flex items-center justify-center lg:justify-start gap-0">
								<Image
									priority
									className="bg-white my-auto lg:mx-0 rounded-full p-1 w-full h-16 object-contain object-center"
									alt={`Trustatrade reviews logo`}
									src="/img/trustatrade-logo-proud-members.png"
									width={500}
									height={500}
								/>
							</div>
						</motion.div>
					</motion.div>
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="flex flex-col lg:flex-row items-center justify-center gap-4"
					>
						{globalContext?.testimonials?.length > 0 ? (
							globalContext?.testimonials
								?.slice(0, 3)
								?.map((item: any, keys: number) => (
									<Fragment key={keys}>
										<TestimonialsCard
											name={item?.node?.testimonialReview?.name}
											image={item?.node?.testimonialReview?.image}
											rating={item?.node?.testimonialReview?.rating}
											position={item?.node?.testimonialReview?.position}
											paragraph={item?.node?.testimonialReview?.paragraph}
										/>
									</Fragment>
								))
						) : (
							<></>
						)}
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default TestimonialsTwo;
