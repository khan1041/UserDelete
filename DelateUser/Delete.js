


const User=require('../Skima/Peraon')

const deleteuser=async(req,res)=>{

    try {
      const id=req.params.id
     
      const delet=await User.deleteOne({_id:id})
       
      return res.status(200).json({mas:"user delete"})

    } catch (error) {
      console.log(error)
    }
}

module.exports={deleteuser}








