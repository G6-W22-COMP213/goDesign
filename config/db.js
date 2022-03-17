
let DB_CONNECTION="mongodb+srv://godesign123:08h03jGd7XbIvkvB@cluster0godesign.h4dhj.mongodb.net/test";
//Database setup
let mongoose = require ('mongoose');

module.exports=function(){

    mongoose.connect(DB_CONNECTION);

    let mongodb = mongoose.connection;
        mongodb.on('error', console.error.bind(console, 'Connection Error'));
        mongodb.once('open', ()=>{
        console.log('Connected to MongoDB...');
    })

    return mongodb;
}
