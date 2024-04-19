import React from "react";
import { MatePot } from "../../UI/MatePot/MatePot";
import { Playadito } from "../../UI/Playadito/Playadito";
import { Thermo } from "../../UI/Thermo/Thermo";
import "./Slider.css";

export const Slider = () => {
	const [currentStep, setCurrentStep] = React.useState<number>(0);
	const [showThermo, setShowThermo] = React.useState<boolean>(false);

	React.useEffect(() => {
		if (currentStep === 4) {
			setShowThermo(true);
			setTimeout(() => {
				setShowThermo(false);
			}, 4000);
		}
	}, [currentStep]);
	return (
		<section className="section-slider">
			<h2>Zubereitung</h2>
			<div className="section-slider__wrapper">
				{currentStep === 0 && (
					<>
						<img
							src="https://media4.giphy.com/media/9VzvvB6jtrPeyRpVps/giphy.gif"
							title="Source: Justin"
							alt="Source: Justin"
							draggable="false"
							loading="eager"
						/>
					</>
				)}
				{currentStep === 1 && (
					<>
						<MatePot currentStep={currentStep} /> <p>Zuerst benötigt man einen Mate-Tee Becher.</p>
					</>
				)}
				{currentStep === 2 && (
					<>
						<div className="slider-item__item">
							<MatePot currentStep={currentStep} />
							<Playadito />
						</div>

						<p>Yerba in die Becher füllen</p>
					</>
				)}
				{currentStep === 3 && (
					<>
						<MatePot currentStep={currentStep} />
						<p>Bombilla an der Seite mit wenig Mateblättern platzieren.</p>
					</>
				)}
				{currentStep === 4 && (
					<>
						<MatePot currentStep={currentStep} />
						{showThermo && <Thermo />}
						<p>Heißes Wasser an der Bombilla entlang vorsichtig in die Mate laufen lassen.</p>
					</>
				)}
				{currentStep === 5 && (
					<>
						<MatePot currentStep={currentStep} />
						<img
							className="section-slider__gif"
							src="https://media4.giphy.com/media/3o7bu1ZQ7C439mFzUI/giphy.gif"
							title="Source: Justin"
							alt="Source: Justin"
							draggable="false"
							loading="eager"
						/>
						<p>Genießen</p>
					</>
				)}
			</div>

			<div className="section-slider__controls">
				<button onClick={() => setCurrentStep((prevStep) => prevStep - 1)} disabled={currentStep === 0}>
					&lt;&lt;
				</button>
				<span>Schritt {currentStep}</span>
				<button onClick={() => setCurrentStep((prevStep) => prevStep + 1)} disabled={currentStep === 5}>
					&gt;&gt;
				</button>
			</div>
		</section>
	);
};
