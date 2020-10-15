import React from "react";
import { BackgroundDisplay } from "./BackgroundDisplay";
import { PlayfulBackgroundDisplay } from "./PlayfulBackgroundDisplay";
import {
  generateBoxShadow,
  neomorphismBoxShadow,
} from "../util/generateBoxShadow";

export const VibrantBackgroundDisplay = React.forwardRef(
  ({ ...props }, ref) => (
    <BackgroundDisplay
      ref={ref}
      background={(colors) => colors.Vibrant.hex}
      {...props}
    />
  )
);

export const DarkVibrantBackgroundDisplay = React.forwardRef(
  ({ ...props }, ref) => (
    <BackgroundDisplay
      ref={ref}
      background={(colors) => colors.DarkVibrant.hex}
      {...props}
    />
  )
);

export const VibrantGradientBackgroundDisplay = React.forwardRef(
  ({ ...props }, ref) => (
    <BackgroundDisplay
      ref={ref}
      background={(colors) =>
        `linear-gradient(0deg, ${colors.LightVibrant.hex} 0%, ${colors.Vibrant.hex} 100%)`
      }
      {...props}
    />
  )
);

export const DarkGradientBackgroundDisplay = React.forwardRef(
  ({ ...props }, ref) => (
    <BackgroundDisplay
      ref={ref}
      background={(colors) =>
        `linear-gradient(0deg, ${colors.DarkVibrant.hex} 0%, ${colors.Muted.hex} 100%)`
      }
      {...props}
    />
  )
);

export const LightVibrantBackgroundDisplay = React.forwardRef(
  ({ ...props }, ref) => (
    <BackgroundDisplay
      ref={ref}
      background={(colors) => colors.LightVibrant.hex}
      {...props}
    />
  )
);

export const MutedBackgroundDisplay = React.forwardRef(({ ...props }, ref) => (
  <BackgroundDisplay
    ref={ref}
    background={(colors) => colors.Muted.hex}
    {...props}
  />
));

export const VibrantMaterialShadowDisplay = React.forwardRef(
  ({ ...props }, ref) => (
    <BackgroundDisplay
      ref={ref}
      boxShadow={(colors) => generateBoxShadow(colors.Vibrant.hex)}
      background={(colors) => `${colors.LightVibrant.hex}`}
      {...props}
    />
  )
);

export const DarkVibrantMaterialShadowDisplay = React.forwardRef(
  ({ ...props }, ref) => (
    <BackgroundDisplay
      ref={ref}
      boxShadow={(colors) => generateBoxShadow(colors.DarkVibrant.hex)}
      background={(colors) => `${colors.Muted.hex}`}
      {...props}
    />
  )
);

export const VibrantNeoShadowDisplay = React.forwardRef(({ ...props }, ref) => (
  <BackgroundDisplay
    ref={ref}
    boxShadow={(colors) => neomorphismBoxShadow(colors.Vibrant.hex)}
    background={(colors) => `${colors.Vibrant.hex}`}
    {...props}
  />
));

export const DarkVibrantNeoShadowDisplay = React.forwardRef(
  ({ ...props }, ref) => (
    <BackgroundDisplay
      ref={ref}
      boxShadow={(colors) => neomorphismBoxShadow(colors.DarkVibrant.hex)}
      background={(colors) => `${colors.DarkVibrant.hex}`}
      {...props}
    />
  )
);

export const VibrantPlayfulBackgroundDisplay = React.forwardRef(
  ({ ...props }, ref) => (
    <PlayfulBackgroundDisplay
      ref={ref}
      dotTwoBackground={(colors) => colors.LightVibrant.hex}
      dotThreeBackground={(colors) => colors.Muted.hex}
      background={(colors) => colors.Vibrant.hex}
      {...props}
    />
  )
);

export const DarkVibrantPlayfulBackgroundDisplay = React.forwardRef(
  ({ ...props }, ref) => (
    <PlayfulBackgroundDisplay
      ref={ref}
      dotTwoBackground={(colors) => colors.Muted.hex}
      dotThreeBackground={(colors) => colors.LightVibrant.hex}
      background={(colors) => colors.DarkVibrant.hex}
      {...props}
    />
  )
);
