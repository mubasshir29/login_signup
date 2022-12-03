import Employee from './../model/userModel.js'
import bcrypt from 'bcrypt'

export const userSignup = async (req,res)=>{
    try{
        const user = req.body;
        console.log(req.body)
        const saltRounds = 10;
        let hashedPassword = await bcrypt.hash(user.password, saltRounds)

        const userEntry = {...user, password: hashedPassword}
        const userEntryForDB = new Employee(userEntry)
        userEntryForDB.save()
        console.log('Account has been created')
        res.status(201).json(userEntry)
        
    }
    catch(error){
        res.status(401).json({message: error.message})
    }
}

export const userLogin = async (req,res)=>{
    try{
        const user = req.body;
        //console.log(req.body)
        //res.status(201).json(userEntry)
        const foundUser = await Employee.findOne({username: req.body.username})
        //console.log(foundUser)
        const passwordMatch = await bcrypt.compare(req.body.password, foundUser.password);
        if(passwordMatch){
            console.log("User verified")
            res.status(201).json({name: foundUser.name, email: foundUser.email})
        }
        else throw error;
    }
    catch(error){
        console.log("User not verified")
        res.status(401).json({message: error.message})
    }
}