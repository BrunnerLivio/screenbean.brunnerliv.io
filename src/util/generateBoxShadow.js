import c from "color";

export const generateBoxShadow = (color) => `0 2.8px 2.2px ${c(color)
  .fade(0.95)
  .toString()},
      0 6.7px 5.3px ${c(color).fade(0.93).toString()}, 0 12.5px 10px ${c(color)
  .fade(0.91)
  .toString()},
      0 22.3px 17.9px ${c(color).fade(0.9).toString()}, 0 41.8px 33.4px ${c(
  color
)
  .fade(0.83)
  .toString()},
      0 100px 80px ${c(color).fade(0.82).toString()}
  `;

export const neomorphismBoxShadow = (color) => `20px 20px 60px ${c(color)
  .darken(0.5)
  .toString()}, 
-20px -20px 60px ${c(color).lighten(0.5).toString()}`;
