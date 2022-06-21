import React, { useState, useEffect } from "react";
import "./App.css";

import Home from "./pages/Home";
import HighlightCard from "./components/HighlightCard";
import Categories from "./components/Categories";

function App() {
    const [footballData, setFootballData] = useState([]);

    const england = footballData.filter((highlight) =>
        highlight.competition.includes("ENGLAND")
    );
    const englandHighlights = england.map((highlight, i) => (
        <HighlightCard key={i} footballData={highlight} />
    ));

    const spain = footballData.filter((highlight) =>
        highlight.competition.includes("SPAIN")
    );
    const spainHighlights = spain.map((highlight, i) => (
        <HighlightCard key={i} footballData={highlight} />
    ));

    const germany = footballData.filter((highlight) =>
        highlight.competition.includes("GERMANY")
    );
    const germanyHighlights = germany.map((highlight, i) => (
        <HighlightCard key={i} footballData={highlight} />
    ));

    const italy = footballData.filter((highlight) =>
        highlight.competition.includes("ITALY")
    );
    const italyHighlights = italy.map((highlight, i) => (
        <HighlightCard key={i} footballData={highlight} />
    ));

    const france = footballData.filter((highlight) =>
        highlight.competition.includes("FRANCE")
    );
    const franceHighlights = france.map((highlight, i) => (
        <HighlightCard key={i} footballData={highlight} />
    ));

    const international = footballData.filter((highlight) =>
        highlight.competition.includes("UEFA NATIONS LEAGUE" || "INTERNATIONAL" || "CONCACAF")
    );
    // "INTERNATIONAL" || "UEFA" || "UEFA NATIONS LEAGUE" || "CONCACAF"
    const internationalHighlights = international.map((highlight, i) => (
        <HighlightCard key={i} footballData={highlight} />
    ));

    useEffect(() => {
        const fetchFootballData = async () => {
            const res = await fetch(
                "https://www.scorebat.com/video-api/v3/feed/?token=MTk4ODVfMTY1MzMyNTIyM183YThjMmY1MTlmMTdlZDQ5MDU2NzZkZTBkMmYzZjIxNGI1Nzg2OTM2"
            );
            const data = await res.json(res);
            setFootballData(data.response);
        };

        fetchFootballData();
    }, []);

    // console.log(england[0])

    return (
        <div className="App">
            <h1 className="Title bg-dark text-light mt-3 p-4 text-center rounded">
                Football Highlights
            </h1>
            <Categories />
            {window.location.href.split("/")[3] === "" &&
                footballData.map((highlight, i) => (
                    <HighlightCard key={i} footballData={highlight} />
                ))}
            {window.location.href.split("/")[3] === "england" && englandHighlights}
            {window.location.href.split("/")[3] === "spain" && spainHighlights }
            {window.location.href.split("/")[3] === "germany" && germanyHighlights}
            {window.location.href.split("/")[3] === "italy" && italyHighlights }
            {window.location.href.split("/")[3] === "france" && franceHighlights}
            {window.location.href.split("/")[3] === "international" && internationalHighlights}
        </div>
    );
}

export default App;

// const filterLeague = (e) => {
//     setFilteredLeague(footballData.filter(highlight => (
//         highlight.competition.includes(e.target.value)
//     )))
// }

{
    /* <h1 className="bg-dark text-light mb-0 p-4 text-center">Football Highlights</h1>
    <Categories filterLeague={filterLeague} />
    <div className="App pt-4">
      {filteredLeague.length != 0 ? 
      filteredLeague.map(((highlight, i) => (
          <HighlightCard key={i} footballData={highlight} />
      ))) : 
        // "Nothin to see here really"
      footballData.map(((highlight, i) => (
        <HighlightCard key={i} footballData={highlight} />
    )))
    }
    </div> 
  */
}
