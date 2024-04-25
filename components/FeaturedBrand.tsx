// Imports
import {
	initial,
	stagger,
	arrayLoopStaggerChildren,
} from "../animations/animations";
import Image from "next/image";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {IFeaturedBrand} from "@/types/components/index";

const FeaturedBrand: FC<IFeaturedBrand> = ({brandsGrid}) => {
	return (
		<>
			<div className="p-4 lg:px-0 bg-pureBlack">
				<div className="lg:container mx-auto">
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className={`grid items-center justify-center grid-cols-2 sm:grid-cols-3 gap-4 max-w-6xl mx-auto ${
							brandsGrid?.length <= 4 ? "lg:grid-cols-4" : "lg:grid-cols-10"
						} lg:items-center lg:justify-between`}
					>
						{brandsGrid?.length > 0 ? (
							brandsGrid?.map((item: any, index: number) => (
								<Fragment key={index}>
									<motion.div
										custom={index}
										initial={initial}
										whileInView="animate"
										viewport={{once: true}}
										variants={arrayLoopStaggerChildren}
									>
										<Image
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
													? `block w-[150px] mx-auto h-full sm:w-[150px] lg:w-full lg:h-[50px] object-contain object-center`
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

export default FeaturedBrand;
