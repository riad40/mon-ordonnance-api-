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
    limits: {
        fileSize: 1024 * 1024 * 5,
    },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png/
        const extName = fileTypes.test(path.extname(file.originalname).toLowerCase())
        const mimeType = fileTypes.test(file.mimetype)

        if (extName && mimeType) return cb(null, true)

        cb(new Error(JSON.stringify("file uploded is invalid")))
    },
})

export default uploadImage
