const MONGODBURI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@api-crud.wqngip3.mongodb.net/Mongo-Atlas-Api?retryWrites=true&w=majority`


module.exports = { MONGODBURI }