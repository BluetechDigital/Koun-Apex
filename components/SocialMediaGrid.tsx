// Imports
import Link from "next/link";
import Image from "next/image";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {ISocialMediaGrid} from "@/types/components";
import {initial, arrayLoopStaggerChildren} from "@/animations/animations";

// Components
import Paragraph from "@/components/Elements/Paragraph";

const SocialMediaGrid: FC<ISocialMediaGrid> = ({highlightsGrid}) => {
	return (
		<>
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-center justify-center">
				{highlightsGrid?.length > 0 ? (
					highlightsGrid?.map((item: any, index: number) => (
						<Link
							key={index}
							href={`${item?.link?.url}`}
							target={item?.link?.target}
							aria-label={`${item?.link?.title}`}
						>
							<motion.div
								custom={index}
								initial={initial}
								whileInView="animate"
								viewport={{once: true}}
								variants={arrayLoopStaggerChildren}
								className="group h-[250px] sm:h-[350px] lg:h-[375px] bg-cover bg-center bg-no-repeat"
								style={{
									backgroundImage: `url("${item?.image?.sourceUrl}")`,
								}}
							>
								<div className="h-full flex flex-col p-2 group-hover:bg-tertiary-dark/80 transition-all delay-100 duration-500 ease-in-out">
									<div className="flex justify-end">
										<Image
											width={550}
											height={550}
											alt="Instagram Posts Icon"
											src="/svg/Instagram-posts.svg"
											className="w-7 h-7 object-contain object-center transition-all duration-500 ease-in-out"
										/>
									</div>
									<div className="flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-all delay-100 duration-500 ease-in-out">
										<div className="activity"></div>
										<div className="">
											<Paragraph
												content={item?.textarea}
												tailwindStyling="hidden md:block max-w-3xl pt-4 pb-8 text-lightGreyTwo text-center lg:text-left text-tiny"
											/>
										</div>
									</div>
								</div>
							</motion.div>
						</Link>
					))
				) : (
					<></>
				)}
			</div>
		</>
	);
};

export default SocialMediaGrid;
