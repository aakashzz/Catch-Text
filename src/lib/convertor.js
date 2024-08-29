import { createWorker } from "tesseract.js";

export const tesseractConvertor = async (imagePath) => {
   const worker = await createWorker("eng");
   const ret = await worker.recognize(imagePath);
   const text = ret.data.text;
   await worker.terminate();
   return text;
};

export const ConvertorTesseract = async (img) => {
    let returnText;
   Tesseract.recognize(
      img, // Path to the image file
      "eng", // Language
      {
         logger: (info) => console.log(info), // Optional: log progress
      }
   )
      .then(({ data: { text } }) => {
         returnText = text
         return returnText
      })
      .catch((error) => {
         console.error(error);
      });

};
