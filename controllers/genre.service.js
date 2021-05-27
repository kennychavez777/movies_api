const getAllGenre = ( req, res, next ) => {
    res.json({ message: 'GET all genres' });
}

const getSingleGenre = ( req, res, next ) => {
    res.json({ message: 'GET single genre' });
}

const createGenre = ( req, res, next ) => {
    res.json({ message: 'Create new genre' })
}

const deleteGenre = ( req, res, next ) => {
    res.json({ message: 'Delete genre' });
}

const updateGenre = ( req, res, next ) => {
    res.json({ message: 'UPDATE genre' });
}

module.exports = {
    getAllGenre,
    getSingleGenre,
    createGenre,
    deleteGenre,
    updateGenre
}