"use client";

// Imports
import {
	initial,
	stagger,
	fadeInUp,
	arrayLoopStaggerChildren,
} from "@/animations/animations";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {useState, FC, Fragment} from "react";
import {useGlobalContext} from "@/context/global";

// Styling
import styles from "./../../styles/components/Navbar.module.scss";

// Components
import SideMenu from "../Elements/SideMenu";
import RenderStars from "../Elements/RenderStars";
import NoticeInfoBanner from "../NoticeInfoBanner";
import NavbarContactInfoBanner from "../Elements/NavbarContactInfoBanner";

const Navbar: FC = () => {
	const globalContext = useGlobalContext();

	// Display all sublinks & Mobile Links
	const [menuActive, setMenuActive] = useState(false);

	/* Hides or Displays the Full Nav Menu */
	const toggleMenu = () => {
		setMenuActive(!menuActive);
	};

	return (
		<>
			<nav className={styles.navbar + ` navbar z-[999] h-fit w-full fixed`}>
				<NoticeInfoBanner />
				<motion.div
					initial={initial}
					variants={stagger}
					whileInView="animate"
					viewport={{once: true}}
					className="bg-lightGreyTwo md:hidden w-full max-w-lg lg:max-w-full mx-auto lg:mx-0 py-2 rounded-2xl flex items-center justify-center lg:justify-start gap-2"
				>
					{globalContext?.themesOptionsContent?.paymentMethods?.length > 0 ? (
						globalContext?.themesOptionsContent?.paymentMethods?.map(
							(item: any, index: number) => (
								<Fragment key={index}>
									<motion.div
										custom={index}
										initial={initial}
										whileInView="animate"
										viewport={{once: true}}
										variants={arrayLoopStaggerChildren}
									>
										<Image
											priority
											alt={`${item?.altText}`}
											src={item?.sourceUrl}
											width={
												item?.mediaDetails?.width
													? item?.mediaDetails?.width
													: 500
											}
											height={
												item?.mediaDetails?.height
													? item?.mediaDetails?.height
													: 500
											}
											className={
												item?.sourceUrl
													? `block object-contain object-center w-full h-5 `
													: `hidden`
											}
										/>
									</motion.div>
								</Fragment>
							)
						)
					) : (
						<></>
					)}
				</motion.div>
				<NavbarContactInfoBanner />
				<div className="bg-white flex items-center justify-between gap-2 px-4 lg:px-6">
					<div className="flex items-center justify-center">
						<motion.button
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							type="button"
							onClick={toggleMenu}
							aria-label="toggle menu"
							className={`hamburger-lines bg-tertiary-default hover:bg-accent-default p-2  ${
								globalContext?.themesOptionsContent?.displayNoticeBanner
									? "top-[62.5px]"
									: "top-[20px]"
							} w-[50px] h-[50px] cursor-pointer group flex flex-col items-center justify-center transition-all duration-200 ease-in-out`}
						>
							<span className="line line1" aria-hidden="true"></span>
							<span className="line line2" aria-hidden="true"></span>
							<span className="line line3" aria-hidden="true"></span>
							<span className="font-schaboCondensed text-lg text-center text-primary-default group-hover:text-white uppercase">
								Menu
							</span>
						</motion.button>
						<Link href="/" target="_self" aria-label="Koun Apex Website Link">
							<Image
								priority
								width={500}
								height={500}
								alt="KounApex Logo"
								src="/img/logos/Koun-Apex-Logo-Two.png"
								className="object-contain object-center w-full h-[75px]"
							/>
						</Link>
					</div>
					<div className="flex items-center justify-center gap-4">
						<motion.div
							initial={initial}
							variants={stagger}
							whileInView="animate"
							viewport={{once: true}}
							className="hidden w-fit max-w-lg lg:max-w-full mx-auto lg:mx-0 py-[1px] px-4 rounded-2xl md:grid sm:grid-cols-3 items-center justify-center lg:justify-start gap-4"
						>
							<div className="flex items-center justify-center lg:justify-start gap-3">
								<Image
									className="my-auto lg:mx-0 rounded-full w-8 h-8 object-cover object-center"
									alt={`Facebook reviews logo`}
									src="/img/facebook-logo-blue-circle-large-white.webp"
									width={500}
									height={500}
								/>
								<div className="flex flex-col gap-1">
									<div className="flex items-center justify-start gap-1">
										<RenderStars rating={5} />
									</div>
									<h3 className="font-medium text-sm font-PlusJakartaSans text-black">
										5.0 Rating
									</h3>
								</div>
							</div>
							<div className="flex items-center justify-center lg:justify-start gap-3">
								<Image
									className="bg-white my-auto lg:mx-0 rounded-full p-1 w-8 h-8 object-cover object-center"
									alt={`Google reviews logo`}
									src="/svg/google-tile-logo.svg"
									width={500}
									height={500}
								/>
								<div className="flex flex-col gap-1">
									<div className="flex items-center justify-start gap-1">
										<RenderStars rating={5} />
									</div>
									<h3 className="font-medium text-sm font-PlusJakartaSans text-black">
										5.0 Rating
									</h3>
								</div>
							</div>
							<div className="flex items-center justify-center lg:justify-start gap-0 basis-1/2">
								<Image
									className="my-auto lg:mx-0 p-1 w-full h-9 object-cover object-center"
									alt={`Trustpilot reviews logo`}
									src="/svg/trustpilot-logo-black.svg"
									width={500}
									height={500}
								/>
							</div>
						</motion.div>
						<Link
							href="/cart"
							target="_self"
							aria-label="Shopping Cart Logo"
							className="py-0 px-2"
						>
							<Image
								priority
								width={500}
								height={500}
								alt="Shopping Cart Logo"
								src="/svg/e-commerce/1029 - Shopping Cart.svg"
								className="object-contain object-center w-full h-12 hover:opacity-70 transition-all duration-200 ease-in-out"
							/>
						</Link>
					</div>
				</div>
				<motion.div
					initial={initial}
					variants={stagger}
					whileInView="animate"
					viewport={{once: true}}
					className="bg-white md:hidden w-full px-4 py-2 grid sm:grid-cols-3 items-center justify-center lg:justify-start gap-4"
				>
					<div className="flex items-center justify-center lg:justify-start gap-3">
						<Image
							className="my-auto lg:mx-0 rounded-full w-8 h-8 object-cover object-center"
							alt={`Facebook reviews logo`}
							src="/img/facebook-logo-blue-circle-large-white.webp"
							width={500}
							height={500}
						/>
						<div className="flex flex-col gap-1">
							<div className="flex items-center justify-start gap-1">
								<RenderStars rating={5} />
							</div>
							<h3 className="font-medium text-sm font-PlusJakartaSans text-black">
								5.0 Rating
							</h3>
						</div>
					</div>
					<div className="flex items-center justify-center lg:justify-start gap-3">
						<Image
							className="bg-white my-auto lg:mx-0 rounded-full p-1 w-8 h-8 object-cover object-center"
							alt={`Google reviews logo`}
							src="/svg/google-tile-logo.svg"
							width={500}
							height={500}
						/>
						<div className="flex flex-col gap-1">
							<div className="flex items-center justify-start gap-1">
								<RenderStars rating={5} />
							</div>
							<h3 className="font-medium text-sm font-PlusJakartaSans text-black">
								5.0 Rating
							</h3>
						</div>
					</div>
					<div className="flex items-center justify-center lg:justify-start gap-0 basis-1/2">
						<Image
							className="my-auto lg:mx-0 p-1 w-full h-9 object-cover object-center"
							alt={`Trustpilot reviews logo`}
							src="/svg/trustpilot-logo-black.svg"
							width={500}
							height={500}
						/>
					</div>
				</motion.div>

				{/* Hidden Tablet & Mobile  Side Menu */}
				{/* <div className={menuActive ? "flex flex-col xl:block" : "hidden"}>
					<SideMenu menuActive={menuActive} setMenuActive={setMenuActive} />
				</div> */}
			</nav>
		</>
	);
};

export default Navbar;
