// Imports
import {FC} from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import {ITestimonialsCard} from "@/types/components";
import {initial, stagger} from "@/animations/animations";

// Components
import Paragraph from "@/components/Elements/Paragraph";
import RenderStars from "@/components/Elements/RenderStars";

const TestimonialsCard: FC<ITestimonialsCard> = ({
	name,
	image,
	rating,
	position,
	paragraph,
	reviewType,
}) => {
	let reviewTypeUrl;
	let reviewTypeAltText;
	let reviewTypeLogoHeight;

	switch (reviewType) {
		case "Trustpilot":
			reviewTypeUrl = "/svg/trustpilot-logo-black.svg";
			reviewTypeAltText = "Trustpilot reviews logo";
			reviewTypeLogoHeight = "h-7";
			break;
		case "Google":
			reviewTypeUrl = "/svg/google-logo.svg";
			reviewTypeAltText = "Google reviews logo";
			reviewTypeLogoHeight = "h-16";
			break;
		default:
			reviewTypeUrl = "/svg/google-logo.svg";
			reviewTypeAltText = "Google reviews logo";
			reviewTypeLogoHeight = "h-16";
			break;
	}
	return (
		<>
			<div className="flex flex-col p-4 w-full h-full min-h-[225px] bg-white border-2 border-pureBlack border-solid">
				<motion.div
					initial={initial}
					variants={stagger}
					whileInView="animate"
					viewport={{once: true}}
					className="flex flex-col justify-between h-full"
				>
					<Paragraph
						content={
							paragraph?.length > 275
								? paragraph?.substring(0, 275) + "..."
								: paragraph
						}
						tailwindStyling="max-w-full max-w-sm mx-auto lg:mx-0 text-tiny text-black text-center lg:text-left"
					/>
					<div className="flex flex-col gap-4 justify-start">
						<div className="flex items-center justify-between my-2 gap-4">
							<div className="w-full h-[2px] bg-grey rounded-full hidden sm:block" />
							<div className="w-full sm:w-[10rem] flex flex-wrap items-center justify-center lg:justify-start gap-[5px]">
								<RenderStars rating={rating} />
							</div>
						</div>
						<div className="flex flex-row px-2 -m-2 gap-4">
							<div className="flex items-center justify-between">
								<div className="w-auto pr-2">
									<Image
										className="bg-lightGreyTwo m-auto lg:mx-0 rounded-full w-12 h-12 object-cover object-center"
										alt={image?.altText}
										src={
											image?.sourceUrl
												? image?.sourceUrl
												: `/img/logos/default-avatar-profile.jpg`
										}
										width={
											image?.mediaDetails?.width
												? image?.mediaDetails?.width
												: 500
										}
										height={
											image?.mediaDetails?.height
												? image?.mediaDetails?.height
												: 500
										}
									/>
								</div>
								<div className="my-auto w-auto p-2">
									<h3
										className={`font-schaboCondensed uppercase font-thin tracking-wide text-pureBlack text-xl text-center lg:text-left mb-1`}
									>
										{name}
									</h3>
									<h4
										className={
											position ? "text-sm text-darkGrey text-left" : "hidden"
										}
									>
										{position}
									</h4>
								</div>
							</div>
							<div className="ml-5">
								<Image
									width={500}
									height={500}
									src={reviewTypeUrl}
									alt={reviewTypeAltText}
									className={`my-auto lg:mx-0 w-full ${reviewTypeLogoHeight} mb-1 object-cover object-center`}
								/>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</>
	);
};

export default TestimonialsCard;
