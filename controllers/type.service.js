const getAllTypes = ( req, res, next ) => {
    res.json({ message: 'GET all types' });
}

const getSingleType = ( req, res, next ) => {
    res.json({ message: 'GET single types' });
}

const createType = ( req, res, next ) => {
    res.json({ message: 'Create new type' })
}

const deleteType = ( req, res, next ) => {
    res.json({ message: 'Delete type' });
}

const updateType = ( req, res, next ) => {
    res.json({ message: 'UPDATE type' });
}

module.exports = {
    getAllTypes,
    getSingleType, 
    createType,
    deleteType,
    updateType
}