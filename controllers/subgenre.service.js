const getAllSubGenre = ( req, res, next ) => {
    res.json({ message: 'GET all subgenres' });
}

const getSingleSubGenre = ( req, res, next ) => {
    res.json({ message: 'GET single subgenre' });
}

const createSubGenre = ( req, res, next ) => {
    res.json({ message: 'Create new subgenre' })
}

const deleteSubGenre = ( req, res, next ) => {
    res.json({ message: 'Delete subgenre' });
}

const updateSubGenre = ( req, res, next ) => {
    res.json({ message: 'UPDATE subgenre' });
}

module.exports = {
    getAllSubGenre,
    getSingleSubGenre,
    createSubGenre,
    deleteSubGenre,
    updateSubGenre
}