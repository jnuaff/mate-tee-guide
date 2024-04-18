import React from "react";
import "./Quizz.css";

interface Options {
	id: number;
	title: string;
	isCorrect: boolean;
	errorText?: string;
}


const options: Options[] = [
	{
		id: 1,
		title: "A) Teufelskraut",
		isCorrect: true,
	},
	{
		id: 2,
		title: "B) Getränk der Götter",
		isCorrect: false,
	},
	{
		id: 3,
		title: "C) Pflanze des Bösen",
		isCorrect: false,
	},
];
export const Quizz = () => {
    const [answer, setAnswer] = React.useState<boolean | null>(null);
    return(
        <section className="section-quizz">
        <h2>Quizz</h2>
        <p>Wie nannten die spanischen Konquistadoren den Mate?</p>
        <div className="quizz__options">
            {options.map((option) => (
                <div className="quizz__option" key={option.id} onClick={() => (option.isCorrect ? setAnswer(true) : setAnswer(false))}>
                    <span>{option.title}</span>
                </div>
            ))}
        </div>
        {answer === false && <p style={{ color: "red" }}>Falsch! Versuch es nochmal</p>}
        {answer && (
            <>
                <p>
                    Genau! Die Iberer, die die Ureinwohner dabei beobachteten, wie sie es tranken, nannten den Mate "Teufelskraut", weil
                    sie die Praxis und ihre Auswirkungen nicht kannten. Sie behaupteten auch, dass es ein Getränk für Faulenzer sei, da
                    die Einheimischen mehrere Stunden am Tag dieser Praxis widmeten.
                </p>
                <img
                    style={{ zIndex: 0 }}
                    src="https://media4.giphy.com/media/dvOL3NQlD4aRP6Pm1B/giphy.gif"
                    title="Source: Justin"
                    alt="Source: Justin"
                    draggable="false"
                    loading="eager"
                />
            </>
        )}
    </section>
    )
}