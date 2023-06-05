const ResignationModel = require('../models/demissions.models')
const ValidateResignation = require("../validation/Demission")

const AddResignation = async (req ,res)=>{
    const {errors, isValid} = ValidateResignation(req.body)
    try {
        if(!isValid){
          res.status(404).json(errors)
        }else{
            ResignationModel.findOne({user: req.user.id})
        .then(async (resignation)=>{
            if(!resignation){
                req.body.user = req.user.id
                await ResignationModel.create(req.body)
                res.status(200).json({message: "success"})
            }else{
               await  ResignationModel.findOneAndUpdate(
                    {_id: resignation._id},
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

const FindAllResignations = async (req ,res)=>{
    try {
       const data =  await ResignationModel.find().populate('user', ["name", "email", "role"])
       res.status(200).json(data)

    } catch (error) {
        res.status(404).json(error.message)
    }
}

const FindSingleResignation = async (req ,res)=>{
    try {
        const data =  await ResignationModel.findOne({user: req.user.id}).populate('user', ["name", "email", "role"])
        res.status(200).json(data)
 
     } catch (error) {
         res.status(404).json(error.message)
     }
}

const DeleteResignation = async (req ,res)=>{
    try {
        const data =  await ResignationModel.findOneAndRemove({_id: req.params.id})
        res.status(200).json({message: "deleted"})
 
     } catch (error) {
         res.status(404).json(error.message)
     }
}

module.exports = {
    AddResignation,
    FindAllResignations,
    FindSingleResignation,
    DeleteResignation
}