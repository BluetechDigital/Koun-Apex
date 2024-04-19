// Imports
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {INewArrivalsCard} from "@/types/components/index";
import {fadeInUp, initial} from "@/animations/animations";

const NewArrivalsCard: FC<INewArrivalsCard> = ({name, slug, price, images}) => {
	return (
		<>
			<Link
				aria-label={`${name}`}
				href={slug ? `/store/product/${slug}` : `/`}
				target="_self"
			>
				<motion.div
					initial={initial}
					whileInView={fadeInUp}
					viewport={{once: true}}
					className="bg-white"
				>
					<Image
						priority
						alt={`${images[0]?.name}`}
						src={images[0]?.src}
						width={500}
						height={500}
						className={
							images[0]?.src
								? `block w-full h-[300px] mb-7 transition-transform duration-500 transform  group-hover:scale-102 object-contain object center`
								: `hidden`
						}
					/>
				</motion.div>
				<motion.h3
					initial={initial}
					whileInView={fadeInUp}
					viewport={{once: true}}
					className="text-base font-PlusJakartaSans tracking-widest text-center text-grey"
				>
					{name}
				</motion.h3>
				<motion.h4
					initial={initial}
					whileInView={fadeInUp}
					viewport={{once: true}}
					className="text-paragraph font-PlusJakartaSans tracking-widest text-center text-grey"
				>
					{`$${price}`}
				</motion.h4>
			</Link>
		</>
	);
};

export default NewArrivalsCard;
