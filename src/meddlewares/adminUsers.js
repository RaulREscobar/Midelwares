function adminMiddleware (req, res, next) {
    if (req.query.user == "Ada" ||req.query.user == "Ariel" || req.query.user == "Devora") {
        next()
    } else {
        res.send("Raja de aca")
        
    }
}

module.exports= adminMiddleware