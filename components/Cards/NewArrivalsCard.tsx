// Imports
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {INewArrivalsCard} from "@/types/components/index";
import {fadeInUp, initial} from "@/animations/animations";

const NewArrivalsCard: FC<INewArrivalsCard> = ({title, link, image}) => {
	return (
		<>
			<Link
				aria-label={`${link?.title}`}
				href={link?.url ? link?.url : `/`}
				target={`${link?.target ? link?.target : "_self"}`}
			>
				<motion.div
					initial={initial}
					whileInView={fadeInUp}
					viewport={{once: true}}
					className="bg-white"
				>
					<Image
						priority
						alt={`${image?.altText}`}
						src={image?.sourceUrl}
						width={
							image?.mediaDetails?.width ? image?.mediaDetails?.width : 500
						}
						height={
							image?.mediaDetails?.height ? image?.mediaDetails?.height : 500
						}
						className={
							image?.sourceUrl
								? `block w-full mb-7 transition-transform duration-500 transform h-full min-h-[200px] sm:min-h-[350px] max-h-[350px] group-hover:scale-102 object-cover object center`
								: `hidden`
						}
					/>
				</motion.div>
				<motion.h4
					initial={initial}
					whileInView={fadeInUp}
					viewport={{once: true}}
					className="text-base font-bold tracking-widest text-center sm:text-left text-goldPrime"
				>
					{title}
				</motion.h4>
			</Link>
		</>
	);
};

export default NewArrivalsCard;
