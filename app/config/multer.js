import multer from "multer";
import dateFormat from "dateformat";

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __dirname + "/../../static/uploads");
    },
    filename: (req, file, cb) => {
        const now = new Date();
        const date = dateFormat(now, "yyyy-mm-dd_HH:MM");
        cb(null, date + "_" + file.originalname);
    }
});

export default multer({ storage: storage });
