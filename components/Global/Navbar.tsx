"use client";

// Imports
import fadeInUp, {
	initial,
	stagger,
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
			<nav className={styles.navbar + ` z-[999] h-fit w-full fixed`}>
				<NoticeInfoBanner />
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
							className={`${menuActive ? "hidden" : "block"} ${
								globalContext?.themesOptionsContent?.displayNoticeBanner
									? "top-[62.5px]"
									: "top-[20px]"
							} bg-primary-default w-[50px] h-[50px] cursor-pointer flex flex-col hover:bg-accent-default hover:opacity-70 transition-all duration-200 ease-in-out`}
						>
							<span aria-hidden="true"></span>
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
						<Link href="/cart" target="_self" aria-label="Shopping Cart Logo">
							<Image
								priority
								width={500}
								height={500}
								alt="Shopping Cart Logo"
								src="/svg/1029 - Shopping Cart.svg"
								className="object-contain object-center w-full h-16 hover:opacity-70 transition-all duration-200 ease-in-out"
							/>
						</Link>
					</div>
				</div>
				<div className="py-2 bg-primary-default">
					<motion.ul
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="flex w-auto gap-0 p-0 items-center justify-center lg:items-start gap-6"
					>
						{globalContext?.navbarMenuLinks?.length > 0 ? (
							globalContext?.navbarMenuLinks?.map((item: any, keys: number) => (
								<Fragment key={keys}>
									<motion.li
										custom={keys}
										initial={initial}
										whileInView="animate"
										viewport={{once: true}}
										variants={arrayLoopStaggerChildren}
									>
										<Link
											href={`${item?.node?.url}`}
											target={`${
												item?.node?.target ? item?.node?.target : "_self"
											}`}
											aria-label={`${item?.node?.label}`}
											className="font-borexRegular uppercase text-white text-paragraph tracking-[0.05rem] hover:opacity-70 transition-all duration-200 ease-in-out"
										>
											{item?.node?.label}
										</Link>
									</motion.li>
								</Fragment>
							))
						) : (
							<></>
						)}
					</motion.ul>
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
