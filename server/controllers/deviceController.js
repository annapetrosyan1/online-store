const uuid = require('uuid')
const path = require('path')
const {Device} = require('../models/models')
const ApiError = require('../error/apiError')

class DeviceController {
    async create(req, res, next) {
        try {
            const {name, price, brandId, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + '.jpg' //рандом название картинкам
            img.mv(path.resolve(__dirname, '..', 'static', fileName)) //перемещение файлов от клиента в папку static

            const device = await Device.create({name, price, brandId, typeId, img: fileName})

            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
            
        }
        
    }

    async getAll(req, res) {
        
    }

    async getOne(req, res) { //получение одного девайса
        
    }

}

module.exports = new DeviceController()