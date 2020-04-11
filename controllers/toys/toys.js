module.exports = {
    new: newToy,
};

function newToy(req, res) {
    res.render('toys/new');
}
