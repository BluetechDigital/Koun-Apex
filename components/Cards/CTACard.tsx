// Imports
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {ICTACard} from "@/types/components/index";
import {initial, stagger} from "../../animations/animations";

// Components
import Paragraph from "./../Elements/Paragraph";

const CTACard: FC<ICTACard> = ({title, paragraph, buttonLink}) => {
	return (
		<>
			<div
				className="bg-top bg-no-repeat bg-cover"
				style={{
					backgroundImage: `url("/svg/background/layered-peaks-haikei-blue-bluedarker-two.svg")`,
				}}
			>
				<div className="lg:container px-4 py-12 mx-auto">
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="flex flex-col items-center justify-between gap-10 px-0 lg:px-4 lg:flex-row"
					>
						<div className="flex flex-col justify-between gap-4">
							<h3 className="max-w-xl lg:max-w-sm xl:max-w-xl mx-auto lg:mx-0 font-ObjectSans uppercase  text-white text-center lg:text-left font-extrabold text-lg lg:text-xl">
								{title}
							</h3>
							<Paragraph
								content={paragraph}
								tailwindStyling="max-w-xl lg:max-w-sm xl:max-w-xl text-white text-base text-center lg:text-left"
							/>
						</div>
						<Link
							href={`${buttonLink?.url}`}
							target={buttonLink?.target}
							aria-label={`${buttonLink?.title}`}
							className={buttonLink?.url ? "block" : "hidden"}
						>
							<div className="py-6 pl-4 pr-10 cursor-pointer bg-accent-default hover:bg-tertiary-default transition-all ease-in-out duration-500">
								<span className="font-ObjectSans uppercase relative flex items-center justify-center pl-4 text-lightGrey text-base text-center">
									{buttonLink?.title}
									<Image
										priority
										width={550}
										height={550}
										alt="Black Arrow Icon"
										src="/svg/navigation-menu-dropdown-arrow-white.svg"
										className="my-auto ml-2 absolute top-[-25px] right-[-40px] rotate-[-135deg] cursor-pointer w-[35px] h-[35px] object-contain object-center"
									/>
								</span>
							</div>
						</Link>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default CTACard;
