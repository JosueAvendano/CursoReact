import React from "react";
import './Vocabulario.css';

const vocabulary = [
    {
        id: 1,
        german: "Ja",
        english: "Yes"
    },
    {
        id: 2,
        german: "Nein",
        english: "No"
    },
    {
        id: 3,
        german: "Bitte",
        english: "Please"
    },
    {
        id: 4,
        german: "Danke",
        english: "Thank you"
    },
    {
        id: 5,
        german: "Gern geschehen",
        english: "You're welcome"
    },
    {
        id: 6,
        german: "Hallo",
        english: "Hello"
    },
    {
        id: 7,
        german: "Macht's gut, auf wiedersehen",
        english: "Take care, goodbye"
    },
    {
        id: 8,
        german: "Guten Morgen",
        english: "Good Morning"
    },
    {
        id: 9,
        german: "Guten Tag",
        english: "Good day"
    },
]

const basicPhrases = [
    {
        id: 1,
        phrase: "Sprechen sie English?",
        description: "Unless you're fluent, there will, of course, be times when you reach the limits of your German language skills. In that case, ask “sprechen sie English?” (do you speak English?)."
    },
    {
        id: 2,
        phrase: "Wie geht's? ",
        description: "Asking “how are you?” is a brilliant way to start. If they ask back, you can reply “mir geht's gut”, meaning “I am fine”."
    },
    {
        id: 3,
        phrase: "Entschuldigung",
        description: "Just say “entschuldigung” (excuse me) to get the attention of hotel receptionists, ticket officers and waiters, or perhaps people who might look like they know the directions you need."
    },
    {
        id: 4,
        phrase: "Wo ist… ?",
        description: "Where is…? An essential phrase for explorers. Simply add the name of your intended destination to the end."
    },
    {
        id: 5,
        phrase: "Die Rechnung, bitte",
        description: "The bill, please. An essential ending to any meal."
    },
    {
        id: 6,
        phrase: "Prost",
        description: "As the world's largest beer festival, Oktoberfest is a huge draw for travellers and locals every autumn (usually late Steptember or early October), but beer is a big part of German culture year-round. These are some German words you need to know: “Prost!” (cheers!); “maß”, a litre glass jug of beer; and “Eins, Zwei, Drei, G'suffa!”, meaning “one, two, three, drink!”. You’ll probably want a few brezeln (pretzels) to soak up all that beer too. "
    },
    {
        id: 7,
        phrase: "Ich brauche einen Arzt",
        description: "We sincerely hope you don't have to use them, but if anything goes awry, “ich brauche einen Arzt” (I need to see a doctor) or “fahren sie mich bitte zum Krankenhaus” (take me to the hospital) are handy for the linguistic arsenal."
    }
]

const numbersUnit = [
    {
        id: 1,
        number: "1",
        write: "Eins"
    },
    {
        id: 2,
        number: "2",
        write: "Zwei"
    },
    {
        id: 3,
        number: "3",
        write: "Drei"
    },
    {
        id: 4,
        number: "4",
        write: "Vier"
    },
    {
        id: 5,
        number: "5",
        write: "Fünf"
    },
    {
        id: 6,
        number: "6",
        write: "Sechs"
    },
    {
        id: 7,
        number: "7",
        write: "Sieben"
    },
    {
        id: 8,
        number: "8",
        write: "Acht"
    },
    {
        id: 9,
        number: "9",
        write: "Neun"
    },
    {
        id: 10,
        number: "10",
        write: "Zehn"
    }
]
const numbersDec = [
    {
        id: 1,
        number: "11",
        write: "Elf"
    },
    {
        id: 2,
        number: "12",
        write: "Zwölf"
    },
    {
        id: 3,
        number: "20",
        write: "Zwanzig"
    },
    {
        id: 4,
        number: "30",
        write: "Dreizig"
    },
    {
        id: 5,
        number: "40",
        write: "Vierzig"
    },
    {
        id: 6,
        number: "50",
        write: "Fünfzig"
    },
    {
        id: 7,
        number: "60",
        write: "Sechszig"
    },
    {
        id: 8,
        number: "70",
        write: "Siebzig"
    },
    {
        id: 9,
        number: "80",
        write: "Achtzig"
    },
    {
        id: 10,
        number: "90",
        write: "Neunzig"
    },
    {
        id: 11,
        number: "100",
        write: "Hundert"
    },
]

const otherNumber = [
    {
        id: 1,
        number: "1000",
        write: "Eintausand"
    },
    {
        id: 2,
        number: "500,000",
        write: "Fünfhunderttausend"
    },
    {
        id: 3,
        number: "1,000,000",
        write: "Eine Million"
    },
    {
        id: 4,
        number: "1,000,000,000,000",
        write: "Eine Milliarde"
    }
]

const decNumbersExample = [
    {
        id: 1,
        number: "21",
        write: "ein-und-zwanzig"
    },
    {
        id: 2,
        number: "22",
        write: "zwei-und-zwanzig"
    },
    {
        id: 3,
        number: "23",
        write: "drei-und-zwanzig"
    },
    {
        id: 4,
        number: "24",
        write: "vier-und-zwanzig"
    },
    {
        id: 5,
        number: "25",
        write: "fünf-und-zwanzig"
    },
    {
        id: 6,
        number: "26",
        write: "sechs-und-zwanzig"
    },
    {
        id: 7,
        number: "27",
        write: "sieben-und-zwanzig"
    },
    {
        id: 8,
        number: "28",
        write: "acht-und-zwanzig"
    },
    {
        id: 9,
        number: "29",
        write: "neun-und-zwanzig"
    },
]

export default function Vocabulario() {
    const vocabList = vocabulary.map(vocab => 
        <li key={vocab.id}>
            <p><span>{vocab.german}</span>: {vocab.english}</p>
        </li>    
    );
    const phrasesList = basicPhrases.map(phrase =>
        <li key={phrase.id}>
            <h3>{phrase.phrase}</h3>
            <p>{phrase.description}</p>
        </li>         
    )
    const numbersUnitList = numbersUnit.map(number =>
        <li key={number.id}>
            <h2>{number.number}</h2>
            <p>{number.write}</p>
        </li>         
    )
    const numbersDecList = numbersDec.map(number =>
        <li key={number.id}>
            <h2>{number.number}</h2>
            <p>{number.write}</p>
        </li>         
    )
    const numbersOtherList = otherNumber.map(number =>
        <li key={number.id}>
            <h2>{number.number}</h2>
            <p>{number.write}</p>
        </li>         
    )
    const numbersDecExList = decNumbersExample.map(number =>
        <li key={number.id}>
            <p><span className="span-dec-example">{number.number}</span>: {number.write}</p>
        </li>         
    )
    return(
        <div className="div-vocab-general-container">
            <div className="div-vocab-container">
                <h1>Basic German Vocabulary</h1>
                <hr/>
                <ul>{vocabList}</ul>
                <hr/>
                <h1>Basic German Phrases for Tourists</h1>
                <hr/>
                <ul>{phrasesList}</ul>
                <hr/>
                <h1>Basic German Number Counting</h1>
                <hr/>
                <div className="div-number-general-container">
                    <p>
                        The numbers in german are pretty straight forward from <span>1-10</span>. Where it gets tricky, it's afterwards... The german language uses a different system when counting in <span>'tens'</span>.
                        You first need to say the <span>'unit'</span> and then the <span>'ten'</span>, with the exception of <span>11</span> and <span>12</span>, which have a different pronunciation.
                    </p>
                    <div className="row">
                        <div className="col">
                            <div className="div-number-unit-container"><ul>{numbersUnitList}</ul></div>
                        </div>
                        <div className="col">
                            <div className="div-number-dec-container"><ul>{numbersDecList}</ul></div>
                        </div>
                        <div className="col">
                            <div className="div-number-other-container">
                                <p><span>For example</span>, from the number <span>21</span> to <span>29</span> it would be like this:</p>
                                <ul>{numbersDecExList}</ul>
                                <p>This same structure applies to every other <span>'tens'</span> until you get to <span>90</span>.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row row-other-numbers">
                        <div className="col col-other-numbers">
                            <p>What about the <span>other numbers</span>? Well... there you have them:</p>
                                <ul>{numbersOtherList}</ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}