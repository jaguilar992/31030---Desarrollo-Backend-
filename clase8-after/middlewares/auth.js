function auth (req, res, next) {
    const token = req.body.token;
    if (!token) {
        res.send({error: "Necesita autenticarse"})
        return ;
    } else {
        req.token = token;
        next();
    }
}

module.exports = {
    auth
}