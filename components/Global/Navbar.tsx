"use client";

// Imports
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {useState, FC} from "react";
import {useGlobalContext} from "@/context/global";
import {initial, stagger, fadeInUp} from "@/animations/animations";

// Styling
import styles from "./../../styles/components/Navbar.module.scss";

// Components
import SideMenu from "../Elements/SideMenu";
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
				<NavbarContactInfoBanner />
				<div className="bg-white w-full flex lg:grid grid-cols-3 gap-5 items-center justify-between px-4 lg:px-6">
					<div className="flex items-center justify-start">
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
							} w-fit h-full cursor-pointer group flex flex-col items-center justify-center transition-all duration-200 ease-in-out`}
						>
							<span className="mt-[2px] font-schaboCondensed text-lg text-center tracking-[0.05rem] text-white uppercase">
								{menuActive ? "Close" : "Menu"}
							</span>
						</motion.button>
						<motion.button
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className=""
						>
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
						</motion.button>
					</div>
					<motion.ul
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="hidden lg:flex itemc-center justify-center gap-5"
					>
						{globalContext?.navbarMenuLinks.length > 0 ? (
							globalContext?.navbarMenuLinks?.map(
								(item: any, index: number) => (
									<li key={index}>
										<Link
											href={`${item?.node?.url}`}
											target={`${
												item?.node?.target ? item?.node?.target : "_self"
											}`}
											aria-label={`${item?.node?.label}`}
											className="font-borexRegular uppercase text-black text-lg xl:text-xl tracking-[0.05rem] hover:text-accent-default transition-all duration-200 ease-in-out"
										>
											{item?.node?.label}
										</Link>
									</li>
								)
							)
						) : (
							<></>
						)}
					</motion.ul>
					<div className="flex items-center justify-end gap-4">
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

				{/* Hidden Tablet & Mobile  Side Menu */}
				<div className={menuActive ? "flex flex-col xl:block" : "hidden"}>
					<SideMenu menuActive={menuActive} setMenuActive={setMenuActive} />
				</div>
			</nav>
		</>
	);
};

export default Navbar;
