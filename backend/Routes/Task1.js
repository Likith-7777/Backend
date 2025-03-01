const express = require('express');
const router = express.Router();
const Task = require('../Schema/Task1');
const User = require('../Schema/Task1');
const Task1 = require('../Schema/Task1');

router.post('/add',async (req,res) =>{
    const{title,descrption,status,priority,createdBy}=req.body;
    const task = new Task({
        title,
        descrption,
        status,
        priority,
        createdBy
    });
    await task.save();
    res.json({message:'task added successfully'});
})

router.get('/get/:userId',async(req,res)=>{
    const userId = req.params.userId;
    try{
        const tasks = await Task1.find({createdBy: userId}).populate('createdBy','name email');
        if(tasks.length ===0){
            return res.status(404).json({massage: "no tasks found for this user"});
        }
        res.json(tasks);

    } catch(err){
        res.status(500).json({message: err.message});
    }
});

router.get('/get',async(req,res)=>{
    try{
        const task1= await Task1.find();
        res.json(task1);
    }catch(err){
        res.json({
            message:err
        });
    }
})



router.post('/register', async (req, res) => {
    const {name,email,Rollno} = req.body;
    const user = new User({
        name,
        email,
        Rollno
    });
    await user.save();
    res.json({message: 'User registered successfully'});
})

router.get('/get',async(req,res)=>{
    try{
        const users = await User.find();
        res.json(users);
        } catch(err){
            res.json({message:err});
        }
});

router.get('/get/:id',async(req,res)=>{
    const id = req.params.id;
    try{
        const user = await User.findById(id);
        res.json(user);
        } catch(err){
            res.json({message:err});
        }
});

router.put('/update/:id',async(req,res)=>{
    const id = req.params.id;
    const {name,email}= req.body;
    try{
        const user =await User.findById(id);
        if(!user){
            res.json({massage:"user not found"});
        }
        if(name){
            user.name = name;
        }
        if(email){
            user.email = email;
        }
        await user.save();
        res.json({message:"user updated successfully"});
    }
    catch(err){
        res.json({message:err});
    }
})



module.exports = router;