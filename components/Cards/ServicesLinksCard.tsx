// Imports
import {FC} from "react";
import Link from "next/link";
import {IServicesLinksCard} from "@/types/components/index";

// Components
import Title from "./../Elements/Title";

const ServicesLinksCard: FC<IServicesLinksCard> = ({buttonLink}) => {
	return (
		<>
			<Link
				href={`${buttonLink?.url}`}
				target={buttonLink?.target}
				aria-label={`${buttonLink?.title}`}
			>
				<div
					className={`p-2 bg-transparent hover:bg-accent-default w-full h-ful min-h-[20vh] flex flex-col gap-4 items-center justify-center transition-all ease-in-out duration-500`}
				>
					<Title
						content={buttonLink?.title}
						tailwindStyling="py-1 px-4 font-borexRegular tracking-[0.05rem] uppercase text-white text-lg lg:text-xl leading-tight text-center"
					/>
				</div>
			</Link>
		</>
	);
};

export default ServicesLinksCard;
