import React from "react";
import { useState } from "react";

const SloganContent = () => {
  const [inputSearch, setInputSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const data = [
    "There is no Sore it will Not Heal, No cool it will not Subdue.",
    "Review the facts cool is the best.",
    "coziness building for tomorrow",
    "The Cozy Detective Agency",
    "Where you find the cozy, you find the crimes",
    "Welcome to The Cozy Detective Agency",
    "I'm going to need a hug.",
    "I'm going to need a place to put this cozy mug.",
    "This cozy coffee is for me, not you.",
    "When the stakes are high, you need the professionals",
    "There is no Sore it will Not Heal, No cool it will not Subdue.",
    "Review the facts cool is the best.",
    "coziness building for tomorrow",
    "The Cozy Detective Agency",
    "Where you find the cozy, you find the crimes",
    "Welcome to The Cozy Detective Agency",
    "I'm going to need a hug.",
    "I'm going to need a place to put this cozy mug.",
    "This cozy coffee is for me, not you.",
    "When the stakes are high, you need the professionals",
    "There is no Sore it will Not Heal, No cool it will not Subdue.",
    "Review the facts cool is the best.",
    "coziness building for tomorrow",
    "The Cozy Detective Agency",
    "Where you find the cozy, you find the crimes",
    "Welcome to The Cozy Detective Agency",
    "I'm going to need a hug.",
    "I'm going to need a place to put this cozy mug.",
    "This cozy coffee is for me, not you.",
    "When the stakes are high, you need the professionals",
    "There is no Sore it will Not Heal, No cool it will not Subdue.",
    "Review the facts cool is the best.",
    "coziness building for tomorrow",
    "The Cozy Detective Agency",
    "Where you find the cozy, you find the crimes",
    "Welcome to The Cozy Detective Agency",
    "I'm going to need a hug.",
    "I'm going to need a place to put this cozy mug.",
    "This cozy coffee is for me, not you.",
    "When the stakes are high, you need the professionals",
    "There is no Sore it will Not Heal, No cool it will not Subdue.",
    "Review the facts cool is the best.",
    "coziness building for tomorrow",
    "The Cozy Detective Agency",
    "Where you find the cozy, you find the crimes",
    "Welcome to The Cozy Detective Agency",
    "I'm going to need a hug.",
    "I'm going to need a place to put this cozy mug.",
    "This cozy coffee is for me, not you.",
    "When the stakes are high, you need the professionals",
  ];

  const onSubmit = (e) => {
    e.preventDefault();
    const filterData = data
      .map((dataItem) => {
        if (dataItem.includes(inputSearch)) return dataItem;
      })
      .filter((e) => e);
    setFilteredData(filterData);
  };

  return (
    <div className="section-content">
      <div className="container">
        <div className="slogan-content-wrapper">
          <h1>Free slogan maker</h1>
          <p>
            Simply enter a term that describes your business, and get up to
            1,000 relevant slogans for free.
          </p>
          <form onSubmit={(e) => onSubmit(e)} className="search-wrapper">
            <label for="name">Word for your slogan</label>
            <input
              type="search"
              id="name"
              onChange={(e) => setInputSearch(e.target.value)}
            />
            <button
              type="submit"
              className="btn"
              disabled={inputSearch.length == 0}
            >
              Generate Slogans
            </button>
          </form>
          {filteredData.length !== 0 && (
            <>
              <div className="hr"></div>
              <div className="slogan-header-wrapper">
                <p>
                  We have generated {filteredData.length} slogans for “cozy”
                </p>
                <a href="#" className="btn-small">
                  Download All
                </a>
              </div>
              <div className="slogan-wrapper">
                {filteredData.map((slogan) => {
                  return (
                    <div
                      className="slogan tooltip"
                      onClick={(e) => {
                        console.log(e, e.target.innerText);

                        navigator.clipboard.writeText(e.target.innerText);

                        // alert("Copied the text: " + e.target.innerText);

                        e.target.children[0].innerHTML = "Copied!";
                      }}
                    >
                      <span class="tooltiptext" id="myTooltip">
                        Click to copy
                      </span>
                      {slogan}
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SloganContent;
