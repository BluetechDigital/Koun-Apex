// Imports
import {
	initial,
	fadeInUp,
	slideInRightFinish,
	slideInRightInitial,
	slideInLeftInitial,
} from "@/animations/animations";
import {FC} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import {IVideoBlock} from "@/types/components";

// Styling
import styles from "../styles/components/VideoBlock.module.scss";

// Components
import Title from "./Elements/Title";
import Paragraph from "./Elements/Paragraph";
import VideoWrapper from "./Elements/VideoWrapper";
import YoutubeButtonBorderSliced from "./Elements/YoutubeButtonBorderSliced";

const VideoBlock: FC<IVideoBlock> = ({
	title,
	video,
	paragraph,
	buttonLink,
	displayVideo,
	displayYoutubeIcon,
	videoBackgroundImage,
}) => {
	return (
		<>
			<div
				id="VideoBlock"
				className={
					styles.videoBlock +
					" videoBlock p-4 bg-white bg-cover bg-no-repeat bg-center"
				}
			>
				<div className="flex flex-col xl:flex-row items-center justify-between gap-4 lg:gap-16 py-4">
					<motion.div
						viewport={{once: true}}
						initial={slideInLeftInitial}
						whileInView={slideInRightFinish}
						className="max-w-2xl mx-auto text-center lg:max-w-5xl w-full xl:w-[35%]"
					>
						<Title
							content={title}
							tailwindStyling="title max-w-2xl mt-2 text-black font-borexRegular uppercase leading-tight text-lg lg:text-xl xl:text-3xl text-center lg:text-left tracking-[0.05rem]"
						/>
					</motion.div>
					<motion.div
						viewport={{once: true}}
						initial={slideInRightInitial}
						whileInView={slideInRightFinish}
						className={
							paragraph && buttonLink?.url
								? "flex flex-col items-end justify-center text-center lg:text-left w-full xl:w-[65%]"
								: "hidden"
						}
					>
						<div>
							<Paragraph
								content={paragraph}
								tailwindStyling="font-PlusJakartaSans max-w-2xl mx-auto xl:mx-0 text-center xl:text-left text-black text-paragraph"
							/>
							<Link
								href={`${buttonLink?.url}`}
								target={buttonLink?.target}
								aria-label={`${buttonLink?.title}`}
								className={
									buttonLink?.url
										? "flex mt-6 xl:mt-0 items-center justify-center xl:justify-start"
										: "hidden"
								}
							>
								<YoutubeButtonBorderSliced
									title={buttonLink?.title}
									displayYoutubeIcon={displayYoutubeIcon}
								/>
							</Link>
						</div>
					</motion.div>
				</div>
				<motion.div
					initial={initial}
					whileInView={fadeInUp}
					viewport={{once: true}}
					className={`${
						displayVideo ? "h-fit" : "h-[300px] lg:h-[500px]"
					} bg-center bg-no-repeat bg-cover mt-6 lg:mt-0 w-full`}
					style={{
						backgroundImage: `url("${
							displayVideo ? "none" : videoBackgroundImage?.sourceUrl
						}")`,
						boxShadow: `${
							displayVideo ? "none" : "20px 40px 2px -20px rgba(0,0,0,0.1)"
						}`,
					}}
				>
					{displayVideo ? <VideoWrapper>{video}</VideoWrapper> : <></>}
				</motion.div>
			</div>
		</>
	);
};

export default VideoBlock;
