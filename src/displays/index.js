import React from "react";
import { BackgroundDisplay } from "./BackgroundDisplay";
import { PlayfulBackgroundDisplay } from "./PlayfulBackgroundDisplay";
import {
  generateBoxShadow,
  neomorphismBoxShadow,
} from "../util/generateBoxShadow";

export const VibrantBackgroundDisplay = {
  name: "Vibrant Simple Background",
  category: "Simple",
  component: React.forwardRef(({ ...props }, ref) => (
    <BackgroundDisplay
      ref={ref}
      background={(colors) => colors.Vibrant.hex}
      {...props}
    />
  )),
};

export const DarkVibrantBackgroundDisplay = {
  name: "Dark Vibrant Simple Background",
  category: "Simple",
  component: React.forwardRef(({ ...props }, ref) => (
    <BackgroundDisplay
      ref={ref}
      background={(colors) => colors.DarkVibrant.hex}
      {...props}
    />
  )),
};

export const LightVibrantBackgroundDisplay = {
  name: "Light Vibrant Simple Background",
  category: "Simple",
  component: React.forwardRef(({ ...props }, ref) => (
    <BackgroundDisplay
      ref={ref}
      background={(colors) => colors.LightVibrant.hex}
      {...props}
    />
  )),
};

export const MutedBackgroundDisplay = {
  name: "Muted Simple Background",
  category: "Simple",
  component: React.forwardRef(({ ...props }, ref) => (
    <BackgroundDisplay
      ref={ref}
      background={(colors) => colors.Muted.hex}
      {...props}
    />
  )),
};

export const VibrantGradientBackgroundDisplay = {
  name: "Vibrant Gradient Background",
  category: "Gradient",
  component: React.forwardRef(({ ...props }, ref) => (
    <BackgroundDisplay
      ref={ref}
      background={(colors) =>
        `linear-gradient(0deg, ${colors.LightVibrant.hex} 0%, ${colors.Vibrant.hex} 100%)`
      }
      {...props}
    />
  )),
};

export const DarkGradientBackgroundDisplay = {
  name: "Dark Vibrant Gradient Background",
  category: "Gradient",
  component: React.forwardRef(({ ...props }, ref) => (
    <BackgroundDisplay
      ref={ref}
      background={(colors) =>
        `linear-gradient(0deg, ${colors.DarkVibrant.hex} 0%, ${colors.Muted.hex} 100%)`
      }
      {...props}
    />
  )),
};

export const VibrantMaterialShadowDisplay = {
  name: "Vibrant Material Shadow",
  category: "Shadow",
  component: React.forwardRef(({ ...props }, ref) => (
    <BackgroundDisplay
      ref={ref}
      boxShadow={(colors) => generateBoxShadow(colors.Vibrant.hex)}
      background={(colors) => `${colors.LightVibrant.hex}`}
      {...props}
    />
  )),
};

export const DarkVibrantMaterialShadowDisplay = {
  name: "Dark Vibrant Material Shadow",
  category: "Shadow",
  component: React.forwardRef(({ ...props }, ref) => (
    <BackgroundDisplay
      ref={ref}
      boxShadow={(colors) => generateBoxShadow(colors.DarkVibrant.hex)}
      background={(colors) => `${colors.Muted.hex}`}
      {...props}
    />
  )),
};

export const VibrantNeoShadowDisplay = {
  name: "Vibrant Neomorphism Shadow",
  category: "Shadow",
  component: React.forwardRef(({ ...props }, ref) => (
    <BackgroundDisplay
      ref={ref}
      boxShadow={(colors) => neomorphismBoxShadow(colors.Vibrant.hex)}
      background={(colors) => `${colors.Vibrant.hex}`}
      {...props}
    />
  )),
};

export const DarkVibrantNeoShadowDisplay = {
  name: "Dark Vibrant Neomorphism Shadow",
  category: "Shadow",
  component: React.forwardRef(({ ...props }, ref) => (
    <BackgroundDisplay
      ref={ref}
      boxShadow={(colors) => neomorphismBoxShadow(colors.DarkVibrant.hex)}
      background={(colors) => `${colors.DarkVibrant.hex}`}
      {...props}
    />
  )),
};

export const VibrantPlayfulBackgroundDisplay = {
  name: "Vibrant Playful Background",
  category: "Playful",
  component: React.forwardRef(({ ...props }, ref) => (
    <PlayfulBackgroundDisplay
      ref={ref}
      dotTwoBackground={(colors) => colors.LightVibrant.hex}
      dotThreeBackground={(colors) => colors.Muted.hex}
      background={(colors) => colors.Vibrant.hex}
      {...props}
    />
  )),
};

export const DarkVibrantPlayfulBackgroundDisplay = {
  name: "Dark Vibrant Playful Background",
  category: "Playful",
  component: React.forwardRef(({ ...props }, ref) => (
    <PlayfulBackgroundDisplay
      ref={ref}
      dotTwoBackground={(colors) => colors.Muted.hex}
      dotThreeBackground={(colors) => colors.LightVibrant.hex}
      background={(colors) => colors.DarkVibrant.hex}
      {...props}
    />
  )),
};
