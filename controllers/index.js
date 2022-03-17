exports.home = function(req, res, next) {
    res.render('index', { 
        title: 'Home',
        userName: req.user ? req.user.username : '' 
    });
}

exports.gallery = function(req, res, next) {
    res.render(
        'gallery', 
        { 
            title: 'gallery',
            userName: req.user ? req.user.username : '' 
        }
    );
}
    exports.contact = function(req, res, next) {
        res.render(
            'contact', 
            { 
                title: 'contact',
                userName: req.user ? req.user.username : '' 
            }
        );
    }
            exports.about = function(req, res, next) {
                res.render(
                    'about', 
                    { 
                        title: 'about',
                        userName: req.user ? req.user.username : ''  
                    }
                
                );
}