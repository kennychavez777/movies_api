const getAllContent = ( req, res, next ) => {
    res.json({ message: 'GET all content' });
}

const getSingleContent = ( req, res, next ) => {
    res.json({ message: 'GET single content' });
}

const createContent = ( req, res, next ) => {
    res.json({ message: 'Create new content' })
}

const deleteContent = ( req, res, next ) => {
    res.json({ message: 'Delete content' });
}

const updateContent = ( req, res, next ) => {
    res.json({ message: 'UPDATE content' });
}



module.exports = {
    getAllContent,
    getSingleContent,
    createContent,
    deleteContent,
    updateContent
}