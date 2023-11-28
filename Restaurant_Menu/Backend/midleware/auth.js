

const verifyAdmin = (req, res, next)=> {
    
    req.headers.mkey  === process.env.API_KEY ? next() : res.status(400).json({message: "unotharized , admin role"});  
   
}

module.exports = verifyAdmin;