// const resepa = require('../models/resepmodel')
// const mongoose = require('mongoose')
// // get all recipes
// const getallresep = async(req, res) =>{
//     const reseps = await resepa.find({}).sort({createdAt: -1})
//     res.status(200).json(reseps)
// }

// // get a single recipes
// const getresep = async(req, res) =>{
//     const {id} = req.params
//     if(!mongoose.Types.ObjectId.isValid(id)){
//         return res.status(404).json({error: "No such Recipe"})
//     }
//     const resep = await resepa.findById(id)

//     if(!resepa){
//         return res.status(404).json({error: "No such Recipe"})
//     }
//     res.status(200).json(resep)

// }

// // create resep
// const buatresep = async(req, res) => {
//     const {title,Kcal,prepare} = req.body;

//     try{
//         const recipee = await resepa.create(title,Kcal,prepare)
//         res.status(200).json(recipee)
//     } catch(error){
//         res.status(400).json({error: error.message})
//     }
// }
// module.exports = {
//     buatresep,
//     getallresep,
//     getresep
// }