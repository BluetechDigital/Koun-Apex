// Imports
import {motion} from "framer-motion";
import {GetStaticProps, NextPage} from "next";
import {useGlobalContext} from "@/context/global";
import {fadeIn, initialTwo} from "@/animations/animations";

// Components
import ProductLayout from "@/components/Layout/ProductLayout";

const singleProduct: NextPage = ({}) => {
	return (
		<>
			<ProductLayout>
				<motion.h2
					initial={initialTwo}
					whileInView={fadeIn}
					viewport={{once: true}}
					className="max-w-2xl mt-2 text-black font-borexRegular uppercase leading-tight text-lg lg:text-xl xl:text-3xl text-center lg:text-left tracking-[0.05rem]"
				>
					Hello
				</motion.h2>
			</ProductLayout>
		</>
	);
};

export default singleProduct;
