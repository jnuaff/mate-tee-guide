import './History.css';
import soldados from '../../../assets/soldados.jpg';
import mapuches from '../../../assets/mapuches.jpg';
import dr_france from '../../../assets/dr_france.jpg';

export const History = () => {
	return (
		<section className="section-history">
			<h2>Mate in der geschichte</h2>
			<div className="section-history__gallery">
				<figure style={{ display: "flex" }}>
					<picture>
						<a href="https://es.wikipedia.org/wiki/Pueblo_mapuche" target="_blank">
							<img className="gallery__item mapuches" src={mapuches} alt="Mapuches" />
						</a>
					</picture>
					<figcaption style={{ writingMode: "vertical-lr", transform: "rotate(-5deg)" }}>Mapuches trinken Mate</figcaption>
				</figure>
				<figure>
					<picture>
						<a href="https://es.wikipedia.org/wiki/Jos%C3%A9_Gaspar_Rodr%C3%ADguez_de_Francia" target="_blank">
							<img
								className="gallery__item"
								src={dr_france}
								alt="dr_france"
								style={{ width: "250px", height: "360px" }}
							/>
						</a>
					</picture>
					<figcaption style={{ maxWidth: "200px" }}>Gaspar Rodríguez de Francia, Diktator von Paraguay, trinkt Mate (ca. 1820).</figcaption>
				</figure>
				<figure style={{ display: "flex" }}>
					<picture>
						<img className="gallery__item soldiers" src={soldados} alt="Mapuches" />
					</picture>
					<figcaption style={{ writingMode: "vertical-lr", transform: "rotate(10deg)" }}>
						Soldaten am östlichen Ufer des Río de la Plata trinken Mate.
					</figcaption>
				</figure>
			</div>
		</section>
	);
};
