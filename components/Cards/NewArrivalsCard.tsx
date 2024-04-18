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
				href={slug ? `/store/products/${slug}` : `/`}
				target={`${slug ? slug : "_self"}`}
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
								? `block w-full mb-7 transition-transform duration-500 transform h-full min-h-[200px] sm:min-h-[350px] max-h-[350px] group-hover:scale-102 object-cover object center`
								: `hidden`
						}
					/>
				</motion.div>
				<motion.h3
					initial={initial}
					whileInView={fadeInUp}
					viewport={{once: true}}
					className="text-base font-PlusJakartaSans tracking-widest text-center text-white"
				>
					{name}
				</motion.h3>
				<motion.h4
					initial={initial}
					whileInView={fadeInUp}
					viewport={{once: true}}
					className="text-paragraph font-PlusJakartaSans tracking-widest text-center text-white"
				>
					{`$${price}`}
				</motion.h4>
			</Link>
		</>
	);
};

export default NewArrivalsCard;
