import React from "react";
import displayCard from "../displayCard";

import * as displays from "../displays";

import useWindowSize from "../util/useWindowSize";
import DisplayCategory from "./DisplayCategory";

// Wrap all the displays into the display card so there is a "Download"-functionality
const displayComponents = Object.values(displays).map(
  ({ component, ...rest }) => ({
    ...rest,
    component: displayCard(component),
  })
);

// Sort by categories
const categories = [];

for (const display of displayComponents) {
  const category = categories.find((c) => c.name === display.category);
  if (category) {
    category.displays.push(display);
  } else {
    categories.push({
      name: display.category,
      displays: [display],
    });
  }
}

export default function DisplayList({ colors, image }) {
  const window = useWindowSize();

  let width = 1200;
  const ratio = 0.75;

  if (window.width < 2600) {
    width = 700;
  }
  if (window.width < 2000) {
    width = 600;
  }
  if (window.width < 1800) {
    width = 500;
  }
  if (window.width < 1100) {
    width = 300;
  }

  return categories.map((category, index) => (
    <DisplayCategory
      displayWidth={width}
      displayHeight={width * ratio}
      category={category}
      colors={colors}
      key={index}
      image={image}
    />
  ));
}
