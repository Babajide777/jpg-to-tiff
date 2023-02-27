const {
  pictureTransform,
  cloudinaryImageUpload,
} = require("../config/cloudinary");

const pictureUpload = async (req, res) => {
  if (req.files !== undefined) {
    try {
      const pic = await cloudinaryImageUpload(req.files.picture.path);
      const transformedImage = pictureTransform(pic);
      res.status(200).json({
        sucess: true,
        picture: transformedImage,
      });
    } catch (error) {
      res.status(400).json({
        sucess: false,
        error,
      });
    }
  } else {
    res.status(400).json({
      sucess: false,
      error: "No image was uploaded",
    });
  }
};

module.exports = {
  pictureUpload,
};
