// Imports
import {
	initial,
	slideInRightFinish,
	slideInLeftInitial,
	slideInRightInitial,
	arrayLoopStaggerChildren,
} from "../animations/animations";
import Image from "next/image";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {IAccreditations} from "@/types/components/index";

// Styling
import styles from "../styles/components/Accreditations.module.scss";

// Components
import Title from "./Elements/Title";

const Accreditations: FC<IAccreditations> = ({
	paragraph,
	accreditationsGrid,
}) => {
	return (
		<>
			<div
				className={
					styles.accreditations +
					" accreditations bg-accent-three lg:bg-white bg-center bg-no-repeat bg-cover"
				}
				style={{
					backgroundImage: `url("/svg/background/layered-peaks-haikei-blue-bluedarker-two.svg")`,
				}}
			>
				<div className="flex flex-col lg:flex-row items-center justify-between px-4 py-10 lg:py-0 lg:px-0 lg:container mx-auto gap-10 lg:gap-20">
					<motion.div
						viewport={{once: true}}
						initial={slideInLeftInitial}
						whileInView={slideInRightFinish}
					>
						<Title
							content={paragraph}
							tailwindStyling="title mb-3 lg:mb-0 text-white uppercase font-semibold font-ObjectSans leading-tight text-lg lg:text-xl text-center lg:text-left"
						/>
					</motion.div>
					<motion.div
						viewport={{once: true}}
						initial={slideInRightInitial}
						whileInView={slideInRightFinish}
						className="grid grid-cols-2 gap-10 lg:grid-cols-3 py-0 lg:py-6 items-center justify-center"
					>
						{accreditationsGrid?.length > 0 ? (
							accreditationsGrid?.map((item: any, keys: number) => (
								<Fragment key={keys}>
									<motion.div
										custom={keys}
										initial={initial}
										whileInView="animate"
										viewport={{once: true}}
										variants={arrayLoopStaggerChildren}
									>
										<Image
											priority
											alt={`${item?.image?.altText}`}
											src={item?.image?.sourceUrl}
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
											className={
												item?.image?.sourceUrl
													? `block object-contain object-center w-full h-full max-h-[90px]`
													: `hidden`
											}
										/>
									</motion.div>
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

export default Accreditations;
