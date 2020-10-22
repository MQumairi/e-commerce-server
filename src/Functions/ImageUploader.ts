import cloudinary from "cloudinary";
import dotenv from "dotenv";
import streamifier from "streamifier";

export interface ICloudinaryImage {
  public_id: string;
  secure_url: string;
}

dotenv.config();

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUDNAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

//*** UPLOAD */
//A function that takes in an array of Multer Files and outputs and array of ICloudinaryImage objects
const uploadImages = async (
  fileArray:
    | {
        [fieldname: string]: Express.Multer.File[];
      }
    | Express.Multer.File[]
): Promise<ICloudinaryImage[]> => {
  let images: ICloudinaryImage[] = [];
  for (let i = 0; i < fileArray.length; i++) {
    console.log("The Image: ");
    console.log(fileArray[i]);

    let result: any = await asyncStreamUpload(fileArray[i]);

    console.log("In uploadImages loop");
    console.log(result);

    let uploadedImage: ICloudinaryImage = {
      public_id: result.public_id,
      secure_url: result.secure_url,
    };

    images.push(uploadedImage);
  }
  return images;
};

let streamUpload = (file: Express.Multer.File) => {
  return new Promise((resolve, reject) => {
    let stream = cloudinary.v2.uploader.upload_stream((error, result) => {
      if (result) {
        resolve(result);
      } else {
        reject(error);
      }
    });

    streamifier.createReadStream(file.buffer).pipe(stream);
  });
};

async function asyncStreamUpload(file: Express.Multer.File) {
  let result = await streamUpload(file);
  console.log("In asyncStreamUpload");
  console.log(result);

  return result;
}

export default uploadImages;

//*** DELETE */
//A function that takes in an image public id, and deletes the image from Cloudinary
export const deleteImage = async (public_id: string) => {
  await cloudinary.v2.uploader.destroy(public_id);
};
