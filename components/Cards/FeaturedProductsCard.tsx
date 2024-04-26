// Imports
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {IFeaturedProductsCard} from "@/types/components/index";
import {fadeInUp, initial} from "@/animations/animations";

const FeaturedProductsCard: FC<IFeaturedProductsCard> = ({
	name,
	slug,
	price,
	images,
}) => {
	return (
		<>
			<Link
				target="_self"
				aria-label={`${name}`}
				href={slug ? `/store/product/${slug}` : `/`}
				className="bg-white flex flex-col justify-between group w-full h-full p-4 border-2 border-pureBlack border-solid"
			>
				<motion.div
					initial={initial}
					whileInView={fadeInUp}
					viewport={{once: true}}
				>
					<Image
						priority
						alt={`${images[0]?.name}`}
						src={images[0]?.src}
						width={500}
						height={500}
						className={
							images[0]?.src
								? `block w-full lg:h-[225px] mb-2 transition-transform duration-500 transform  group-hover:scale-102 object-contain object center`
								: `hidden`
						}
					/>
				</motion.div>
				<div>
					<motion.h3
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="text-2xl leading-tight font-schaboCondensed uppercase font-thin text-left text-pureBlack group-hover:text-primary-default transition-all duration-500 ease-in-out"
					>
						{name}
					</motion.h3>
					<motion.h4
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className={
							price
								? "text-base font-PlusJakartaSans tracking-widest font-semibold text-left text-pureBlack"
								: "hidden"
						}
					>
						{`$${price}`}
					</motion.h4>
				</div>
			</Link>
		</>
	);
};

export default FeaturedProductsCard;
