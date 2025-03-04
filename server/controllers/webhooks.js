import { Webhook } from 'svix'
import User from '../models/User.js'

// API Controller Fuction to Manage clerk with database 
export const clerkWebhooks = async(req,res)=>{
    try{

        // Create aSvix instance with clerk webhook secret 
        const webhook = new Webhook(process.env.CLERK_WEBHOOK_SECRET)

        // Verifying Hearders 
        await webhook.verify(JSON.stringify(req.body), {  
            'svix-id': req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"]
        })

        // Getting Data form request body 
        const {data, type} =req.body

        // Swtich case for diffferernt Events 
        switch(type){
            case 'user.created':{

                const userData ={
                    _id: data.id,
                    email: data.email_address[0].email_address,
                    name: data.first_name + " " + data.last_name,
                    image: data.image_url,
                    resume:''
                }
                await User.create(userData);
                res.json({})
                break;
            }
            case 'user.updated':{
                const userData ={
                    email: data.email_address[0].email_address,
                    name: data.first_name + " " + data.last_name,
                    iamge: data.image_url
                }
                await User.findByIdAndUpdate(data.id, userData)
                res.json({})
                break;
            }
            case 'user.deleted':{
                // await User.findByIdAndDelete(data.id, userData)
                await User.findByIdAndDelete(data.id);

                res.json({})
                break;
            }
        }
    }catch(error){
        console.log(error.message);
        res.json({success: false, message:"webhook error"})
    }
}