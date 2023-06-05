const LeaveModel = require('../models/conges.models')
const ValidateLeave = require("../validation/Conge")

const AddLeave = async (req ,res)=>{
    const {errors, isValid} = ValidateLeave(req.body)
    try {
        if(!isValid){
          res.status(404).json(errors)
        }else{
            LeaveModel.findOne({user: req.user.id})
        .then(async (leave)=>{
            if(!leave){
                req.body.user = req.user.id
                await LeaveModel.create(req.body)
                res.status(200).json({message: "success"})
            }else{
               await  LeaveModel.findOneAndUpdate(
                    {_id: leave._id},
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

const FindAllLeaves = async (req ,res)=>{
    try {
       const data =  await LeaveModel.find().populate('user', ["name", "email", "role"])
       res.status(200).json(data)

    } catch (error) {
        res.status(404).json(error.message)
    }
}

const FindSingleLeave = async (req ,res)=>{
    try {
        const data =  await LeaveModel.findOne({user: req.user.id}).populate('user', ["name", "email", "role"])
        res.status(200).json(data)
 
     } catch (error) {
         res.status(404).json(error.message)
     }
}

const DeleteLeave = async (req ,res)=>{
    try {
        const data =  await LeaveModel.findOneAndRemove({_id: req.params.id})
        res.status(200).json({message: "deleted"})
 
     } catch (error) {
         res.status(404).json(error.message)
     }
}

module.exports = {
    AddLeave,
    FindAllLeaves,
    FindSingleLeave,
    DeleteLeave
}