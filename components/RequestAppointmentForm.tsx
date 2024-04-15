"use client";

// Imports
import {
	fadeIn,
	initial,
	stagger,
	fadeInUp,
	initialTwo,
} from "@/animations/animations";
import Link from "next/link";
import {motion} from "framer-motion";
import {useRouter} from "next/router";
import React, {useState, FC} from "react";
import ReCAPTCHA from "react-google-recaptcha";
import {useGlobalContext} from "@/context/global";
import {sendContactForm} from "@/lib/contactForm";
import {useFormik, Formik, Field, Form} from "formik";
import {IRequestAppointmentForm} from "@/types/components";

// Styling
import styles from "@/styles/components/RequestAppointmentForm.module.scss";

// Components
import Title from "./Elements/Title";
import Paragraph from "./Elements/Paragraph";

const RequestAppointmentForm: FC<IRequestAppointmentForm> = ({
	title,
	subtitle,
	paragraph,
}) => {
	const router = useRouter();
	const globalContext = useGlobalContext();

	// Loading, Send & Error Message States
	const [loading, setLoading] = useState(false);
	const [messageSent, setMessageSent] = useState(false);
	const [errorMessage, setErrorMessage] = useState(false);

	// A custom validation function. This must return an object
	// which keys are symmetrical to our values/initialValues
	const validate: any = (values: any) => {
		const errors: any = {};
		if (!values?.fullName) {
			errors.fullName = "Required*";
		} else if (values?.fullName.length >= 26) {
			errors.fullName = "Must be 25 characters or less";
		}

		if (!values?.phoneNumber) {
			errors.phoneNumber = "Required*";
		} else if (values?.phoneNumber.length < 1) {
			errors.phoneNumber = "Please inform us about the topic.";
		}

		if (!values?.subject) {
			errors.subject = "Required*";
		} else if (values?.subject.length <= 0) {
			errors.subject = "Please inform us about the topic.";
		}

		if (!values?.message) {
			errors.message = "Required*";
		} else if (values?.message.length <= 0) {
			errors.message = "Please tell us about your Inquiry.";
		}

		return errors;
	};

	// Google ReCaptcha Validation
	const [reCaptchaResult, setReCaptchaResult] = useState(null);
	const googleReCaptchaValidate = (value: any) => {
		return value;
	};

	const handleReCaptchaChange = (response: any) => {
		const result = googleReCaptchaValidate(response);
		setReCaptchaResult(result);
	};

	/* Contact Form Fields
	And Initial Values */
	const formik: any = useFormik({
		initialValues: {
			fullName: "",
			phoneNumber: "",
			subject: "",
			message: "",
		},
		validate,
		onSubmit: async (values: any) => {
			if (reCaptchaResult) {
				try {
					console.log(values);
					await sendContactForm(values);
				} catch (error) {
					setErrorMessage(true);
					throw new Error(
						"Error Message: Something went wrong with Sending your Message. Please try again."
					);
				}
			} else {
				throw new Error(
					"Error Message: Something went wrong with your Google Recaptcha validation. Please try again."
				);
			}
		},
	});

	// Form Submission
	const onFormSubmit = (event: any) => {
		event.preventDefault();
		setErrorMessage(false);
		if (reCaptchaResult) {
			try {
				setLoading(true);
				/* Send Form Content */
				formik.handleSubmit();
				setLoading(false);
				setMessageSent(true);
				setTimeout(() => {
					router.reload();
				}, 3000);
			} catch (error) {
				setErrorMessage(true);
				throw new Error(
					"Error Message: Something went wrong with Sending your Message. Please try again."
				);
			}
		} else {
			throw new Error(
				"Error Message: Something went wrong with your Google Recaptcha validation. Please try again."
			);
		}
	};

	return (
		<>
			<div
				id="requestAppointmentForm"
				className={
					styles.requestAppointmentForm +
					" px-4 py-10 bg-white requestAppointmentForm"
				}
			>
				<div className="lg:container mx-auto px-0 flex flex-col lg:flex-row items-baseline justify-between gap-8">
					<div className="flex flex-col items-center justify-center lg:items-baseline w-full gap-2xl:gap-6">
						<motion.div
							initial={initial}
							variants={stagger}
							whileInView="animate"
							viewport={{once: true}}
							className="xlmb-4"
						>
							<motion.h4
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="font-ObjectSans uppercase max-w-sm mx-auto lg:mx-0 text-center lg:text-left text-base text-primary-default"
							>
								{subtitle}
							</motion.h4>
							<Title
								content={title}
								tailwindStyling="title my-3 max-w-xl mx-auto xl:mx-0 font-ObjectSans uppercase text-black text-center lg:text-left leading-tight font-extrabold text-lg lg:text-xl"
							/>
							<Paragraph
								content={paragraph}
								tailwindStyling="mb-3 mx-auto lg:mx-0 max-w-full lg:max-w-md xl:max-w-xl mx-auto xl:mx-0 text-black text-base text-center lg:text-left"
							/>
						</motion.div>
						<div className="flex flex-col xl:flex-row gap-8 items-center justify-center xl:gap-12 lg:justify-start">
							<motion.div
								initial={initial}
								variants={stagger}
								whileInView="animate"
								viewport={{once: true}}
								className={
									globalContext?.themesOptionsContent?.phoneNumber ||
									globalContext?.themesOptionsContent?.address
										? "flex items-center w-full xl:w-1/2 2xl:w-full"
										: "hidden"
								}
							>
								<div className="flex flex-shrink-0 mr-5 items-center justify-center p-1 w-10 h-10 rounded-full bg-primary-default">
									<svg
										viewBox="0 0 24 24"
										fill="none"
										className="w-5 h-5"
										xmlns="http://www.w3.org/2000/svg"
									>
										<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
										<g
											id="SVGRepo_tracerCarrier"
											strokeLinecap="round"
											strokeLinejoin="round"
										></g>
										<g id="SVGRepo_iconCarrier">
											{" "}
											<path
												d="M14.5 6.5C15.2372 6.64382 15.9689 6.96892 16.5 7.5C17.0311 8.03108 17.3562 8.76284 17.5 9.5M15 3C16.5315 3.17014 17.9097 3.91107 19 5C20.0903 6.08893 20.8279 7.46869 21 9M20.9995 16.4767V19.1864C21.0037 20.2223 20.0723 21.0873 19.0265 20.9929C10.0001 21 3.00006 13.935 3.00713 4.96919C2.91294 3.92895 3.77364 3.00106 4.80817 3.00009H7.52331C7.96253 2.99577 8.38835 3.151 8.72138 3.43684C9.66819 4.24949 10.2772 7.00777 10.0429 8.10428C9.85994 8.96036 8.99696 9.55929 8.41026 10.1448C9.69864 12.4062 11.5747 14.2785 13.8405 15.5644C14.4272 14.9788 15.0274 14.1176 15.8851 13.935C16.9855 13.7008 19.7615 14.3106 20.5709 15.264C20.858 15.6021 21.0105 16.0337 20.9995 16.4767Z"
												stroke="#ffffff"
												strokeWidth="1.5"
												strokeLinecap="round"
												strokeLinejoin="round"
											></path>{" "}
										</g>
									</svg>
								</div>
								<motion.div
									initial={initial}
									variants={stagger}
									whileInView="animate"
									viewport={{once: true}}
									className={
										globalContext?.themesOptionsContent?.phoneNumber
											? "max-w-xl mx-auto sm:mx-0"
											: "hidden"
									}
								>
									<Link
										className={
											globalContext?.themesOptionsContent?.phoneNumber
												? "flex items-center gap-3 text-tiny sm:text-base text-center sm:text-left"
												: "hidden"
										}
										href={`tel:${globalContext?.themesOptionsContent?.phoneNumber}`}
										aria-label={`${globalContext?.themesOptionsContent?.phoneNumber}`}
									>
										<span className="font-semibold uppercase font-ObjectSans">
											Office:
										</span>
										<span className="text-black hover:text-primary-default hover:border-b-2">
											{globalContext?.themesOptionsContent?.phoneNumber}
										</span>
									</Link>
									<Link
										href={`tel:${globalContext?.themesOptionsContent?.phoneNumberTwo}`}
										aria-label={`${globalContext?.themesOptionsContent?.phoneNumberTwo}`}
										className={
											globalContext?.themesOptionsContent?.phoneNumberTwo
												? "flex items-center gap-3 text-tiny sm:text-base text-center sm:text-left"
												: "hidden"
										}
									>
										<span className="font-semibold uppercase font-ObjectSans">
											Office:
										</span>
										<span className="text-black hover:text-primary-default hover:border-b-2">
											{globalContext?.themesOptionsContent?.phoneNumberTwo}
										</span>
									</Link>
								</motion.div>
							</motion.div>
							<motion.div
								initial={initial}
								variants={stagger}
								whileInView="animate"
								viewport={{once: true}}
								className={
									globalContext?.themesOptionsContent?.address
										? "flex items-center w-full xl:w-1/2 2xl:w-full"
										: "hidden"
								}
							>
								<div className="hidden sm:flex flex-shrink-0 mr-5 sm:mr-8 items-center justify-center p-1 w-10 h-10 rounded-full bg-primary-default">
									<svg
										fill="#000000"
										className="w-5 h-5"
										viewBox="0 0 512 512"
										xmlns="http://www.w3.org/2000/svg"
									>
										<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
										<g
											id="SVGRepo_tracerCarrier"
											strokeLinecap="round"
											strokeLinejoin="round"
										></g>
										<g id="SVGRepo_iconCarrier">
											{" "}
											<path
												fill="var(--ci-primary-color, #ffffff)"
												d="M253.924,127.592a64,64,0,1,0,64,64A64.073,64.073,0,0,0,253.924,127.592Zm0,96a32,32,0,1,1,32-32A32.037,32.037,0,0,1,253.924,223.592Z"
											></path>
											<path
												fill="var(--ci-primary-color, #ffffff)"
												d="M376.906,68.515A173.922,173.922,0,0,0,108.2,286.426L229.107,472.039a29.619,29.619,0,0,0,49.635,0L399.653,286.426A173.921,173.921,0,0,0,376.906,68.515Zm-4.065,200.444L253.925,451.509,135.008,268.959C98.608,213.08,106.415,138.3,153.571,91.142a141.92,141.92,0,0,1,200.708,0C401.435,138.3,409.241,213.08,372.841,268.959Z"
											></path>
										</g>
									</svg>
								</div>
								<motion.div
									initial={initial}
									variants={stagger}
									whileInView="animate"
									viewport={{once: true}}
									className="w-full lg:min-w-[20rem]"
								>
									<motion.h3
										initial={initial}
										whileInView={fadeInUp}
										viewport={{once: true}}
										className="mb-2 uppercase text-black text-center sm:text-left font-semibold text-base"
									>
										Address
									</motion.h3>
									<Paragraph
										content={globalContext?.themesOptionsContent?.address}
										tailwindStyling="text-tiny sm:text-base text-black text-center sm:text-left"
									/>
								</motion.div>
							</motion.div>
						</div>
					</div>
					<Formik
						onSubmit={formik?.onSubmit}
						initialValues={formik?.initialValues}
					>
						<Form className="py-6 px-6 sm:px-10 md:px-12 xl:mr-8 w-full bg-primary-default max-w-full lg:max-w-md xl:max-w-xl">
							{loading ? (
								<motion.div
									initial={initialTwo}
									whileInView={fadeIn}
									viewport={{once: true}}
									className="flex items-center justify-center my-4 mb-8 gap-x-2"
								>
									<h3 className="text-xl font-semibold uppercase font-ObjectSans text-white">
										Sending Message...
									</h3>
								</motion.div>
							) : messageSent ? (
								<motion.div
									initial={initialTwo}
									whileInView={fadeIn}
									viewport={{once: true}}
									className="flex items-center justify-center my-4 mb-8 gap-x-2"
								>
									<h3 className="text-xl font-semibold text-center uppercase font-ObjectSans text-white">
										Message Sent!
									</h3>
								</motion.div>
							) : errorMessage ? (
								<motion.div
									initial={initialTwo}
									whileInView={fadeIn}
									viewport={{once: true}}
									className="flex items-center justify-center my-4 mb-8 gap-x-2"
								>
									<h3 className="text-xl font-semibold text-center uppercase font-ObjectSans text-white">
										Error Message: Something went wrong with sending your
										message. Please try again.
									</h3>
								</motion.div>
							) : (
								<motion.div
									initial={initialTwo}
									whileInView={fadeIn}
									viewport={{once: true}}
									className="mb-6"
								>
									<motion.h3
										initial={initial}
										whileInView={fadeInUp}
										viewport={{once: true}}
										className="my-3 max-w-xl mx-auto xl:mx-0 uppercase font-ObjectSans text-white text-center lg:text-left font-semibold text-lg md:text-lg"
									>
										We Promise to Fast-track your safety
									</motion.h3>
								</motion.div>
							)}

							<motion.div
								initial={initial}
								variants={stagger}
								whileInView="animate"
								viewport={{once: true}}
								className="flex flex-col gap-4"
							>
								<div className="flex flex-col md:flex-row gap-4">
									<motion.div
										initial={initial}
										whileInView={fadeInUp}
										viewport={{once: true}}
										className="w-full"
									>
										{formik?.touched?.fullName && formik?.errors?.fullName ? (
											<div>
												<p className="py-1 text-left text-tiny md:text-base text-white">
													{formik?.errors?.fullName}
												</p>
											</div>
										) : null}
										<Field
											id="fullName"
											name="fullName"
											placeholder="Full Name"
											onBlur={formik?.handleBlur}
											onChange={formik?.handleChange}
											value={formik?.values?.fullName}
											className="px-4 py-3 w-full text-tiny md:text-base text-black placeholder-black bg-white bg-opacity-90 outline-none border-[1px] border-primary-default active:border-accent-default focus:border-accent-default focus:ring-[1px] focus:ring-accent-default"
										/>
									</motion.div>
									<motion.div
										initial={initial}
										whileInView={fadeInUp}
										viewport={{once: true}}
										className="w-full"
									>
										{formik?.touched?.phoneNumber &&
										formik?.errors?.phoneNumber ? (
											<div>
												<p className="py-1 text-left text-tiny md:text-base text-white">
													{formik?.errors?.phoneNumber}
												</p>
											</div>
										) : null}
										<Field
											id="phoneNumber"
											name="phoneNumber"
											type="number"
											placeholder="Phone Number"
											onBlur={formik?.handleBlur}
											onChange={formik?.handleChange}
											value={formik?.values?.phoneNumber}
											className="px-4 py-3 w-full text-tiny md:text-base text-black placeholder-black bg-white bg-opacity-90 outline-none border-[1px] border-primary-default active:border-accent-default focus:border-accent-default focus:ring-[1px] focus:ring-accent-default"
										/>
									</motion.div>
								</div>
								<motion.div
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className="w-full"
								>
									{formik?.touched?.subject && formik?.errors?.subject ? (
										<div>
											<p className="py-1 text-left text-tiny md:text-base text-white">
												{formik?.errors?.subject}
											</p>
										</div>
									) : null}
									<Field
										id="subject"
										name="subject"
										type="text"
										placeholder="Subject"
										onBlur={formik?.handleBlur}
										onChange={formik?.handleChange}
										value={formik?.values?.subject}
										className="px-4 py-3 w-full text-tiny md:text-base text-black placeholder-black bg-white bg-opacity-90 outline-none border-[1px] border-primary-default active:border-accent-default focus:border-accent-default focus:ring-[1px] focus:ring-accent-default"
									/>
								</motion.div>
								<motion.div
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
								>
									{formik?.touched?.message && formik?.errors?.message ? (
										<div>
											<p className="py-1 text-left text-tiny md:text-base text-white">
												{formik?.errors?.message}
											</p>
										</div>
									) : null}
									<textarea
										rows={5}
										id="message"
										name="message"
										placeholder="Your message"
										onBlur={formik?.handleBlur}
										onChange={formik?.handleChange}
										value={formik?.values?.message}
										className="p-4 w-full h-32 text-tiny md:text-base text-black placeholder-black bg-white bg-opacity-90 outline-none border-[1px] border-primary-default active:border-accent-default focus:border-accent-default resize-none focus:ring-[1px] focus:ring-accent-default"
									/>
								</motion.div>
								<motion.div
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className={
										formik?.touched?.fullName ||
										formik?.touched?.lastName ||
										formik?.touched?.email
											? "block"
											: "hidden"
									}
								>
									<ReCAPTCHA
										sitekey={`6Lcb2rQpAAAAAIyP_tcS5urSOS2opAg18WTXpebR`}
										onChange={handleReCaptchaChange}
									/>
								</motion.div>
								<motion.button
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									onClick={onFormSubmit}
									disabled={
										!formik?.values?.fullName ||
										!formik?.values?.lastName ||
										!formik?.values?.email ||
										!formik?.values?.phoneNumber ||
										!formik?.values?.selectedServices ||
										!formik?.values?.subject ||
										!formik?.values?.message ||
										reCaptchaResult === null ||
										reCaptchaResult === undefined
									}
									className="w-fit mx-auto lg:mx-0 text-white font-semibold tracking-wide disabled:bg-opacity-20 disabled:cursor-not-allowed"
									type="submit"
								>
									<span
										className={
											messageSent
												? `${styles.messageSent}`
												: `${styles.submitButton}`
										}
									>
										<span className="tracking-widest uppercase font-ObjectSans text-sm">
											{loading
												? "Sending Message..."
												: messageSent
												? "Message Sent!"
												: errorMessage
												? "Sending Error!"
												: "Request A Quote"}
										</span>
									</span>
								</motion.button>
							</motion.div>
						</Form>
					</Formik>
				</div>
			</div>
		</>
	);
};

export default RequestAppointmentForm;
