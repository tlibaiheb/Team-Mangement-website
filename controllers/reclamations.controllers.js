const ReclamationModel = require('../models/reclamations.models')
const ValidateReclamation = require("../validation/Reclamation")
const AddReclamation = async (req ,res)=>{
    const {errors, isValid} = ValidateReclamation(req.body)
    try {
        if(!isValid){
          res.status(404).json(errors)
        }else{
            ReclamationModel.findOne({user: req.user.id})
        .then(async (reclamation)=>{
            if(!reclamation){
                req.body.user = req.user.id
                await ReclamationModel.create(req.body)
                res.status(200).json({message: "success"})
            }else{
               await  ReclamationModel.findOneAndUpdate(
                    {_id: reclamation._id},
                    req.body,
                    {new: true}
                ).then(result=>{
                    res.status(200).json(result)
                })
            }
        })
        }
    } catch (error) {
         res.status(404).json(error.message)
    }
}

const FindAllReclamations = async (req ,res)=>{
    try {
       const data =  await ReclamationModel.find().populate('user', ["name", "email", "role"])
       res.status(200).json(data)

    } catch (error) {
        res.status(404).json(error.message)
    }
}

const FindSingleReclamation = async (req ,res)=>{
    try {
        const data =  await ReclamationModel.findOne({user: req.user.id}).populate('user', ["name", "email", "role"])
        res.status(200).json(data)
 
     } catch (error) {
         res.status(404).json(error.message)
     }
}

const DeleteReclamation = async (req ,res)=>{
    try {
        const data =  await ReclamationModel.findOneAndRemove({_id: req.params.id})
        res.status(200).json({message: "deleted"})
 
     } catch (error) {
         res.status(404).json(error.message)
     }
}

module.exports = {
    AddReclamation,
    FindAllReclamations,
    FindSingleReclamation,
    DeleteReclamation
}