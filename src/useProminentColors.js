import Vibrant from "node-vibrant/dist/vibrant";
import { useEffect, useState } from "react";

export default function useProminentColors(inputRef) {
  const [colors, setColors] = useState({
    colors: null,
    image: null,
  });

  function onInputChange(e) {
    const $img = document.createElement("img");
    const reader = new FileReader();

    reader.onload = async (e) => {
      $img.src = e.target.result;

      const result = await Vibrant.from($img).getPalette();
      setColors({
        colors: result,
        image: { src: e.target.result, width: $img.width, height: $img.height },
      });
    };
    if (e.target && e.target.files && e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  useEffect(() => {
    const $input = inputRef && inputRef.current;

    if ($input) {
      $input.addEventListener("change", onInputChange);
    }
    return () => $input.removeEventListener("change", onInputChange);
  }, [inputRef]);

  return colors;
}
