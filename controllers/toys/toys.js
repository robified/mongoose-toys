const Toy = require('../../models/toy');

module.exports = {
    new: newToy,
    create,
};

function create(req, res) {
    // convert Still Available's checkbox
    // this is now True or False
    req.body.stillAvailable = !!req.body.stillAvailable;
    // split the maker string into an array
    // using regEx for text processing

    /* 
    g is for not just the first match, but for all
    \s matches any white space 
    * for all what space 
    , to match a comma
    and then match all white space again using \s*
    */
    req.body.maker = req.body.maker.replace(/\s*,\s*/g, ',');

    // check to make sure if there is a maker value, if there is, .split() it
    if (req.body.maker) req.body.maker = req.body.maker.split(',');
    const toy = new Toy(req.body);

    // this is if you need to reference a user to the toy
    // toy.user = req.user._id;
    toy.save(function (err) {
        if (err) return res.render('/toys/new');
        console.log(toy);
        res.redirect('/toys/new');
    });
}

function newToy(req, res) {
    res.render('toys/new');
}
