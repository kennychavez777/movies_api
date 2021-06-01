const connection = require('./../db/conn');
const handlers = require('./../handlers/handlers');

const getAllContent = async ( req, res, next ) => {
    const query = 'SELECT * FROM contenido';
    let results = await connection.getResults(query);
    if (!results) {
        res.json({
            msg: handlers.messages.no_results
        });
    }

    res.json(results['rows']);
}

const getSingleContent = async ( req, res, next ) => {
    const { id } = req.params;
    if (id) {
        const query = 'SELECT * FROM contenido WHERE id_contenido = ' + id;
        let results = await connection.getResults(query);
        if (!results) {
            res.json({
                msg: handlers.messages.no_results
            });
        }

        res.json(results['rows']);
    }
}

const createContent = async ( req, res, next ) => {
    res.json({ message: 'Create new content' })
}

const deleteContent = async ( req, res, next ) => {
    const { id } = req.params;
    if (id) {
        const query = 'DELETE FROM contenido WHERE id_contenido = ' + id;
        console.log(query);
        let results = await connection.getResults(query);
        if (!results) {
            res.json({
                msg: handlers.messages.no_results
            });
        }
        res.json(results);
    }
}

const updateContent = async ( req, res, next ) => {
    res.json({ message: 'UPDATE content' });
}

module.exports = {
    getAllContent,
    getSingleContent,
    createContent,
    deleteContent,
    updateContent
}