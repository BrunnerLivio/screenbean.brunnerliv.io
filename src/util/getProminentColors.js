import Vibrant from "node-vibrant/dist/vibrant";

export default function getProminentColors(file) {
  const $img = document.createElement("img");
  const reader = new FileReader();

  reader.readAsDataURL(file);
  return new Promise((resolve) => {
    reader.onload = async (e) => {
      $img.src = e.target.result;

      const result = await Vibrant.from($img).getPalette();
      resolve({
        colors: result,
        image: { src: e.target.result, width: $img.width, height: $img.height },
      });
    };
  });
}
