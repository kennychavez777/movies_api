const connection = require('./../db/conn');
const handlers = require('./../handlers/handlers');

const getAllGenre = async ( req, res, next ) => {
    const query = 'SELECT * FROM GENERO';
    let results = await connection.getResults(query);
    if (!results) {
        res.json({
            msg: handlers.messages.no_results
        });
    }

    res.json(results['rows']);
}

const getSingleGenre = async ( req, res, next ) => {
    const { id } = req.params;
    if (id) {
        const query = 'SELECT * FROM genero WHERE id_genero = ' + id;
        let results = await connection.getResults(query);
        if (!results) {
            res.json({
                msg: handlers.messages.no_results
            });
        }

        res.json(results['rows']);
    }
}

const createGenre = async( req, res, next ) => {
    res.json({ message: 'Create new genre' })
}

const deleteGenre = async ( req, res, next ) => {
    const { id } = req.params;
    if (id) {
        const query = 'DELETE FROM genero WHERE id_genero = ' + id;
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

const updateGenre = async ( req, res, next ) => {
    res.json({ message: 'UPDATE genre' });
}

module.exports = {
    getAllGenre,
    getSingleGenre,
    createGenre,
    deleteGenre,
    updateGenre
}