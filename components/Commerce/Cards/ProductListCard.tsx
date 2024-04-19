// Imports
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {IStore} from "@/types/components/index";
import {fadeInUp, initial} from "@/animations/animations";

// Components
import Paragraph from "@/components/Elements/Paragraph";

const ProductListCard: FC<IStore.IProductListCard> = ({
	name,
	slug,
	price,
	images,
	description,
}) => {
	return (
		<>
			<Link
				aria-label={`${name}`}
				href={slug ? `/store/product/${slug}` : `/`}
				target="_self"
				className="group bg-white"
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
								? `block w-full h-[100px] lg:h-[200px] mb-7 transition-transform duration-500 transform group-hover:scale-102 object-contain object center`
								: `hidden`
						}
					/>
				</motion.div>
				<div className="flex flex-col">
					<motion.h3
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="text-paragraph font-PlusJakartaSans font-extrabold text-left text-black group-hover:text-primary-default transition-all duration-200 ease-in-out"
					>
						{name}
					</motion.h3>
					<Paragraph
						content={
							description?.length > 100
								? description?.substring(0, 100) + "..."
								: description
						}
						tailwindStyling="text-left text-darkGrey text-tiny leading-tight"
					/>
					<motion.h4
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="text-paragraph font-borexRegular tracking-[0.05rem] text-left text-primary-default"
					>
						{`$${price}`}
					</motion.h4>
				</div>
			</Link>
		</>
	);
};

export default ProductListCard;
