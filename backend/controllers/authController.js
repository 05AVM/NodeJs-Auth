import  User  from "../models/User.js";
export const signup=async(req,res)=>{
    const{email,password,name}=req.body;
    try{
        if(!email||!password || !name){
            return res.status(400).json({msg:"Please fill in all fields"})
        }
        const userAlreadyExists=await User.findOne({email});
        if(userAlreadyExists)
        {
            return res.status(400).json({msg:"User Already Exists"});
        }
        const hashedPassword=await bcryptjs.hash(password,10);
        const verificationToken=Math.floor(100000+Math.random()*900000).toString();
        //generate the verification token randomly
        const User=new User({
            email,
            password:hashedPassword,
            name,
            verificationToken,
            verificationTokenExpiresAt:Date.now()+24*60*60*1000//24 hrs
        })
        await User.save();
        generateTokenAndSetCookie(res,user._id);//to make sure that the user has been authenticated..
    }
    

    catch(err){
        res.status(400).json({message:err.message});
    }
}

export const login=async(req,res)=>{
    res.send("login route")
}

export const logout=async(req,res)=>{
    res.send("logout route")
}