import './Facts.css';

export const Facts = () => {
	return (
		<section className="teaser-facts">
			<h2>Facts</h2>
			<img
				src="https://media4.giphy.com/media/lGBeeSvVQA7xME62Df/giphy.gif"
				title="Source: Justin"
				alt="Source: Justin"
				draggable="false"
				loading="eager"
			/>{" "}
			<div className="teaser-facts__facts">
				<div className="teaser-facts__fact" style={{ transform: "rotate(-6deg)" }}>
					<h3>Argentinien ist der weltweit größte Produzent von Yerba Mate. </h3>
					<p>
						Hier erstreckt sich der Anbau über eine Fläche von 165.200 Hektar, und im Jahr 2018 wurden 809 Millionen Kilogramm grünes
						Blatt geerntet.
					</p>
				</div>
				<div className="teaser-facts__fact" style={{ marginTop: "38px", transform: "rotate(5deg)" }}>
					<h3>Yerba Mate ist gesund</h3>
					<p>
						Es enthält 60% mehr Antioxidantien (Polyphenole) als grüner Tee, was dazu beiträgt, die natürlichen Abwehrkräfte des Körpers
						zu stärken und ihn vor zellulären Schäden zu schützen, die den Körper altern lassen
					</p>
				</div>
				<div className="teaser-facts__fact" style={{ marginTop: "30px", transform: "rotate(-4deg)" }}>
					<h3>Syrien und Libanon: Die größten Importeure von Yerba Mate weltweit</h3>
					<p>
						Syrien gilt als das größte importierende Land von Yerba Mate weltweit, wobei seine Bürger zusammen mit dem Libanon diese
						Getränke konsumieren
					</p>
				</div>
				<div className="teaser-facts__fact" style={{ transform: "rotate(4deg)" }}>
					<h3>Yerba Mate: Ein fester Bestandteil in 98% der argentinischen Haushalte</h3>
					<p>
						Laut Daten des Nationalen Instituts für Yerba Mate (INYM) wird dieses Getränk in 98% der Haushalte in Argentinien konsumiert
					</p>
				</div>
			</div>
		</section>
	);
};
