const SubModule = require('../Model/SubModule');

exports.CreateSubModules = async (req, res)=>{
    const { name, moduleId } = req.body;
   const data= await SubModule.findOne({ name, moduleId })
    if (data)
    {
        res.send({ 'err': "1", "msg": 'SubModule is Already exist'})
        
    }
    else
    {
         const menu = new SubModule({
        ...req.body
    })
        await menu.save();
        res.send({ 'err': "0", "msg": 'SubModule is Added successfully'})
        }

}

exports.UpdateSubModule = async (req, res) => {
    const { id, name, role,menuId} = req.body
    await SubModule.findByIdAndUpdate({ _id: id }, { $set: { name,role,menuId} })
res.send({ 'err': "0", "msg": 'SubModule is Updated successfully'})
}