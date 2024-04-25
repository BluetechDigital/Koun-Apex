// Imports
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {IHeroCard} from "@/types/components";
import {initial, fadeInUp} from "@/animations/animations";

const HeroCard: FC<IHeroCard> = ({link, image}) => {
	return (
		<>
			<div className="flex flex-col overflow-hidden">
				<Link
					href={`${link?.url}`}
					target={link?.target}
					aria-label={`${link?.title}`}
					className="transform group-hover:scale-105 transition duration-700 ease-in-out bg-white"
				>
					<motion.div
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="bg-primary-default group-hover:bg-primary-default relative px-4 py-6 w-full lg:py-12 h-[350px] bg-center bg-no-repeat bg-cover"
						style={{
							backgroundImage: `url("${image?.sourceUrl}")`,
						}}
					>
						<div
							className={
								link?.url
									? "absolute -bottom-0 right-0 w-git mx-w-sm"
									: "hidden"
							}
						>
							<div className="w-full py-2 px-4 flex items-center justify-end gap-4 bg-lightGreyTwo hover:bg-lightGrey font-borexRegular text-black uppercase group-hover:bg-primary-default group-hover:text-white group-hover:mb-2 group-hover:pr-6 transition-all delay-200 duration-500 ease-in-out">
								{link?.title}
								<Image
									width={550}
									height={550}
									alt="Right Direction Yellow Arrow Icon"
									src="/svg/right-direction-yellow.svg"
									className="cursor-pointer w-[35px] h-[35px] group-hover:rotate-[-45deg] object-contain object-center transition-all duration-500 ease-in-out"
								/>
							</div>
						</div>
					</motion.div>
				</Link>
			</div>
		</>
	);
};

export default HeroCard;
