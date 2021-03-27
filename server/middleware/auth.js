import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'


dotenv.config()

const auth = async (req,res,next ) => {
    try {
        //console.log(req.headers)
        const token = req.headers
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

export default auth 