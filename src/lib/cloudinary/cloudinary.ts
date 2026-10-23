import {
  CLOUDINARY_ENVIRONMENT,
  CLOUDINARY_UPLOAD_PRESET,
  CLOUDINARY_ERROR_CODES,
} from "@/constants/app.constants";

/**
 * Uploads a user's avatar image to Cloudinary and returns the secure url
 * @param image avatar image file
 * @returns uploaded image secure url
 */
export const uploadAvatarImage = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUDINARY_ENVIRONMENT}/upload`,
    { method: "post", body: formData },
  );

  if (!response.ok) {
    throw new Error(CLOUDINARY_ERROR_CODES.FAIL_UPLOAD);
  }

  const image = await response.json();
  return image.secure_url;
};

/**
 * Returns true if a given error code matches fail to upload to Cloudinary error
 * @param errorCode error code
 */
export const isFailedUpload = (errorCode: unknown) => {
  return errorCode === CLOUDINARY_ERROR_CODES.FAIL_UPLOAD;
};
