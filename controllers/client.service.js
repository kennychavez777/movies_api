const getAllClient = ( req, res, next ) => {
    res.json({ message: 'GET all Client' });
}

const getSingleClient = ( req, res, next ) => {
    res.json({ message: 'GET single Client' });
}

const createClient = ( req, res, next ) => {
    res.json({ message: 'Create new Client' })
}

const deleteClient = ( req, res, next ) => {
    res.json({ message: 'Delete Client' });
}

const updateClient = ( req, res, next ) => {
    res.json({ message: 'UPDATE Client' });
}

const login = (req, res, next) => {
    res.json({ message: 'login' });
}

const register = (req, res, next) => {
    res.json({ message: 'cliente registerd' });
}

module.exports = {
    getAllClient,
    getSingleClient,
    createClient,
    deleteClient,
    updateClient,
    login,
    register
}