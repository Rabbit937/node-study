import express from 'express'
import multer from 'multer'
import fs from 'fs'

const router = express.Router();

const storage = multer.diskStorage({
    destination(req, file, cb) {
        const dir = '/uploads'

        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true })
        }

        cb(null, './uploads')
    },
    filename(req, file, cb) {
        const ext = file.originalname.split('.').pop();
        cb(null, `${Date.now()}-${file.fieldname}.${ext}`)
    }
})

const upload = multer({
    storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    }
})