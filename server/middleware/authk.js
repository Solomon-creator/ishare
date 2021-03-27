import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'


const token = jwt.sign({_id:user._id}, process.env.TOKEN_SECRET)
        res.header('auth-token',token).send(token);

const authk = async (req,res,next ) => {
    try {
        //console.log(req.headers)
        const token = req.headers('auth-token')
        const isCustomAuth= token.length < 500 ;
        let decodedData ;

        if (token && isCustomAuth){
             decodedData = jwt.verify(token,process.env.TOKEN_SECRET) ;

             req.userId = decodedData?.id ;
             next()
        }else {
            decodedData = jwt.decode(token)

            req.userId = decodedData?.sub ;
            next()
        }
        
    } catch (error) {
        console.log(error)
    }
}


export default authk


