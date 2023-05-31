import multer from "multer"
import path from "path"
import today from "../helpers/today"

const storeImage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "dist/public/images")
    },
    filename: (req, file, cb) => {
        cb(null, today() + path.extname(file.originalname))
    },
})

const uploadImage = multer({
    storage: storeImage,
})

export default uploadImage
