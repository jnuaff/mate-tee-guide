import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import Mate from "../public/Mate";
import Gaucho from "./components/UI/Gaucho/Gaucho";
import { Environment, OrbitControls } from "@react-three/drei";
import "./App.css";
import { CSSProperties } from "react";
import { History } from "./components/Sections/History/History";
import { About } from "./components/Sections/About/About";
import { Facts } from "./components/Sections/Facts/Facts";
import { Quizz } from "./components/Sections/Quizz/Quizz";
import { Slider } from "./components/Sections/Slider/Slider";

interface MateTeeProps {
	style?: CSSProperties;
}

const MateTee = ({ style }: MateTeeProps) => {
	return (
		<Canvas style={style}>
			<ambientLight intensity={1.5} />
			<OrbitControls enableZoom={false} />
			<Suspense fallback={null}>
				<Mate />
			</Suspense>
			<Environment preset="sunset" />
		</Canvas>
	);
};


function App() {

	return (
		<>
			<header className="header-main">
				<MateTee style={{ height: "100%" }} />
				<div>
					<h1>The Mate Guide</h1>
					<Gaucho width="400px" height="400px" />
				</div>
				<MateTee style={{ height: "100%" }} />
			</header>
			<main>
				<About />
				<History />
				<Facts />
				<Quizz />
				<Slider />
			</main>
		</>
	);
}
export default App;
