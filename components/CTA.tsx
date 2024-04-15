// Imports
import {FC} from "react";
import {ICTA} from "@/types/components/index";

// Components
import CTACard from "./Cards/CTACard";

const CTA: FC<ICTA> = ({title, paragraph, buttonLink, backgroundImage}) => {
	const tailwindStyling = "bg-center bg-no-repeat bg-cover lg:px-0";

	return (
		<>
			<div
				className={tailwindStyling + " hidden lg:block"}
				style={{
					backgroundImage: `url("${backgroundImage?.sourceUrl}")`,
				}}
			>
				<CTACard title={title} paragraph={paragraph} buttonLink={buttonLink} />
			</div>
			<div
				className={tailwindStyling + " block lg:hidden"}
				style={{
					backgroundImage: `linear-gradient(
							0deg,
							rgba(6, 18, 41, 0.50),
							rgba(6, 18, 41, 0.85),
							rgba(6, 18, 41, 0.95)
						),url("${backgroundImage?.sourceUrl}")`,
				}}
			>
				<CTACard title={title} paragraph={paragraph} buttonLink={buttonLink} />
			</div>
		</>
	);
};

export default CTA;
