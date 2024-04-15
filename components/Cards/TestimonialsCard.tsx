// Imports
import {FC} from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import {ITestimonialsCard} from "@/types/components";
import {initial, stagger} from "@/animations/animations";

// Components
import Paragraph from "@/components/Elements/Paragraph";

const TestimonialsCard: FC<ITestimonialsCard> = ({
	name,
	image,
	rating,
	position,
	paragraph,
}) => {
	return (
		<>
			<motion.div
				initial={initial}
				variants={stagger}
				whileInView="animate"
				viewport={{once: true}}
				className="p-6 w-full h-full min-h-[250px] flex flex-col items-center lg:items-baseline gap-6 overflow-hidden bg-lightGrey"
				style={{
					boxShadow: "28px 28px 2px -20px rgba(0,0,0,0.1)",
					clipPath: `polygon(95% 0, 100% 10%, 100% 100%, 0 100%, 0 0)`,
				}}
			>
				<div className="flex items-center justify-start gap-6 w-full">
					<svg
						width="39"
						height="26"
						fill="none"
						className="w-fit"
						viewBox="0 0 39 26"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M30.8203 25.7201C29.5781 25.7201 28.4297 25.5209 27.375 25.1224C26.3438 24.724 25.4531 24.1498 24.7031 23.3998C23.9531 22.6263 23.3672 21.7006 22.9453 20.6224C22.5234 19.5443 22.3125 18.3256 22.3125 16.9662C22.3125 13.8959 23.3555 10.9662 25.4414 8.17712C27.5508 5.36462 30.6094 2.86853 34.6172 0.688843L38.4844 6.20837C37.4297 6.77087 36.4922 7.32166 35.6719 7.86072C34.875 8.39978 34.1719 8.95056 33.5625 9.51306C32.9766 10.0756 32.4609 10.6615 32.0156 11.2709C31.5938 11.8568 31.207 12.4896 30.8555 13.1693C32.0039 13.1693 33.0352 13.3334 33.9492 13.6615C34.8867 13.9896 35.6836 14.4467 36.3398 15.0326C37.0195 15.5951 37.5352 16.2631 37.8867 17.0365C38.2617 17.7865 38.4492 18.5951 38.4492 19.4623C38.4492 20.3295 38.2617 21.1498 37.8867 21.9232C37.5352 22.6732 37.0195 23.3295 36.3398 23.892C35.6836 24.4545 34.8867 24.8998 33.9492 25.2279C33.0117 25.556 31.9688 25.7201 30.8203 25.7201ZM8.95312 25.7201C7.71094 25.7201 6.5625 25.5209 5.50781 25.1224C4.47656 24.724 3.58594 24.1498 2.83594 23.3998C2.08594 22.6263 1.5 21.7006 1.07812 20.6224C0.65625 19.5443 0.445312 18.3256 0.445312 16.9662C0.445312 13.8959 1.48828 10.9662 3.57422 8.17712C5.68359 5.36462 8.74219 2.86853 12.75 0.688843L16.6172 6.20837C15.5625 6.77087 14.625 7.32166 13.8047 7.86072C13.0078 8.39978 12.3047 8.95056 11.6953 9.51306C11.1094 10.0756 10.5938 10.6615 10.1484 11.2709C9.72656 11.8568 9.33984 12.4896 8.98828 13.1693C10.1367 13.1693 11.168 13.3334 12.082 13.6615C13.0195 13.9896 13.8164 14.4467 14.4727 15.0326C15.1523 15.5951 15.668 16.2631 16.0195 17.0365C16.3945 17.7865 16.582 18.5951 16.582 19.4623C16.582 20.3295 16.3945 21.1498 16.0195 21.9232C15.668 22.6732 15.1523 23.3295 14.4727 23.892C13.8164 24.4545 13.0195 24.8998 12.082 25.2279C11.1445 25.556 10.1016 25.7201 8.95312 25.7201Z"
							fill="#3434e1"
						></path>
					</svg>
					<div className="flex flex-col gap-1">
						<div className="flex items-center">
							<Image
								priority
								alt={`${image?.altText}`}
								src={image?.sourceUrl}
								width={
									image?.mediaDetails?.width ? image?.mediaDetails?.width : 500
								}
								height={
									image?.mediaDetails?.height
										? image?.mediaDetails?.height
										: 500
								}
								className={
									image?.sourceUrl
										? `object-cover object-center w-14 h-14 rounded-full`
										: `hidden`
								}
							/>
							<div className={image?.sourceUrl ? "ml-5" : "ml-0"}>
								<span className="block mb-3 text-base text-black font-semibold leading-none">
									{name}
								</span>
								<span className="block text-sm text-black">{position}</span>
								<motion.div
									initial={initial}
									variants={stagger}
									whileInView="animate"
									viewport={{once: true}}
									className="flex items-center mt-2"
								>
									<svg
										className="mr-1 w-3 h-3"
										width="20"
										height="20"
										viewBox="0 0 20 20"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M11.227 0.796478L13.2574 5.09148C13.4564 5.51312 13.8405 5.8055 14.2859 5.87316L18.8282 6.56543C19.9504 6.73699 20.397 8.17711 19.5848 9.00228L16.3002 12.344C15.9774 12.6727 15.8305 13.1451 15.9068 13.609L16.682 18.3268C16.8729 19.4939 15.6997 20.3843 14.6967 19.8322L10.6369 17.6032C10.2389 17.3845 9.76225 17.3845 9.3631 17.6032L5.30334 19.8322C4.30026 20.3843 3.1271 19.4939 3.31916 18.3268L4.09316 13.609C4.16952 13.1451 4.02259 12.6727 3.6998 12.344L0.4152 9.00228C-0.396983 8.17711 0.0496019 6.73699 1.17185 6.56543L5.71406 5.87316C6.15949 5.8055 6.54475 5.51312 6.74375 5.09148L8.77305 0.796478C9.27517 -0.265493 10.7248 -0.265493 11.227 0.796478Z"
											fill="#FFD33C"
										></path>
									</svg>
									<svg
										className="mr-1 w-3 h-3"
										width="20"
										height="20"
										viewBox="0 0 20 20"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M11.227 0.796478L13.2574 5.09148C13.4564 5.51312 13.8405 5.8055 14.2859 5.87316L18.8282 6.56543C19.9504 6.73699 20.397 8.17711 19.5848 9.00228L16.3002 12.344C15.9774 12.6727 15.8305 13.1451 15.9068 13.609L16.682 18.3268C16.8729 19.4939 15.6997 20.3843 14.6967 19.8322L10.6369 17.6032C10.2389 17.3845 9.76225 17.3845 9.3631 17.6032L5.30334 19.8322C4.30026 20.3843 3.1271 19.4939 3.31916 18.3268L4.09316 13.609C4.16952 13.1451 4.02259 12.6727 3.6998 12.344L0.4152 9.00228C-0.396983 8.17711 0.0496019 6.73699 1.17185 6.56543L5.71406 5.87316C6.15949 5.8055 6.54475 5.51312 6.74375 5.09148L8.77305 0.796478C9.27517 -0.265493 10.7248 -0.265493 11.227 0.796478Z"
											fill="#FFD33C"
										></path>
									</svg>
									<svg
										className="mr-1 w-3 h-3"
										width="20"
										height="20"
										viewBox="0 0 20 20"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M11.227 0.796478L13.2574 5.09148C13.4564 5.51312 13.8405 5.8055 14.2859 5.87316L18.8282 6.56543C19.9504 6.73699 20.397 8.17711 19.5848 9.00228L16.3002 12.344C15.9774 12.6727 15.8305 13.1451 15.9068 13.609L16.682 18.3268C16.8729 19.4939 15.6997 20.3843 14.6967 19.8322L10.6369 17.6032C10.2389 17.3845 9.76225 17.3845 9.3631 17.6032L5.30334 19.8322C4.30026 20.3843 3.1271 19.4939 3.31916 18.3268L4.09316 13.609C4.16952 13.1451 4.02259 12.6727 3.6998 12.344L0.4152 9.00228C-0.396983 8.17711 0.0496019 6.73699 1.17185 6.56543L5.71406 5.87316C6.15949 5.8055 6.54475 5.51312 6.74375 5.09148L8.77305 0.796478C9.27517 -0.265493 10.7248 -0.265493 11.227 0.796478Z"
											fill="#FFD33C"
										></path>
									</svg>
									<svg
										className="mr-1 w-3 h-3"
										width="20"
										height="20"
										viewBox="0 0 20 20"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M11.227 0.796478L13.2574 5.09148C13.4564 5.51312 13.8405 5.8055 14.2859 5.87316L18.8282 6.56543C19.9504 6.73699 20.397 8.17711 19.5848 9.00228L16.3002 12.344C15.9774 12.6727 15.8305 13.1451 15.9068 13.609L16.682 18.3268C16.8729 19.4939 15.6997 20.3843 14.6967 19.8322L10.6369 17.6032C10.2389 17.3845 9.76225 17.3845 9.3631 17.6032L5.30334 19.8322C4.30026 20.3843 3.1271 19.4939 3.31916 18.3268L4.09316 13.609C4.16952 13.1451 4.02259 12.6727 3.6998 12.344L0.4152 9.00228C-0.396983 8.17711 0.0496019 6.73699 1.17185 6.56543L5.71406 5.87316C6.15949 5.8055 6.54475 5.51312 6.74375 5.09148L8.77305 0.796478C9.27517 -0.265493 10.7248 -0.265493 11.227 0.796478Z"
											fill="#FFD33C"
										></path>
									</svg>
									<svg
										width="20"
										height="20"
										viewBox="0 0 20 20"
										fill="none"
										className="w-4 h-3"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M11.227 0.796478L13.2574 5.09148C13.4564 5.51312 13.8405 5.8055 14.2859 5.87316L18.8282 6.56543C19.9504 6.73699 20.397 8.17711 19.5848 9.00228L16.3002 12.344C15.9774 12.6727 15.8305 13.1451 15.9068 13.609L16.682 18.3268C16.8729 19.4939 15.6997 20.3843 14.6967 19.8322L10.6369 17.6032C10.2389 17.3845 9.76225 17.3845 9.3631 17.6032L5.30334 19.8322C4.30026 20.3843 3.1271 19.4939 3.31916 18.3268L4.09316 13.609C4.16952 13.1451 4.02259 12.6727 3.6998 12.344L0.4152 9.00228C-0.396983 8.17711 0.0496019 6.73699 1.17185 6.56543L5.71406 5.87316C6.15949 5.8055 6.54475 5.51312 6.74375 5.09148L8.77305 0.796478C9.27517 -0.265493 10.7248 -0.265493 11.227 0.796478Z"
											fill="#FFD33C"
										></path>
									</svg>
								</motion.div>
							</div>
						</div>
					</div>
				</div>

				<Paragraph
					content={
						paragraph?.length > 200
							? paragraph?.substring(0, 200) + "..."
							: paragraph
					}
					tailwindStyling="text-center lg:text-left text-black text-tiny lg:text-base leading-relaxed"
				/>
			</motion.div>
		</>
	);
};

export default TestimonialsCard;
