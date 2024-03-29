
var express = require('express');
var router = express.Router();

var Category = require('../models/Category');
var Content = require('../models/Content');

var data;
/*
* 处理通用的数据
* */
router.use(function (req, res, next) {
    data = {
        userInfo: req.cookies.userInfo,
        categories: []
    }

    Category.find().then(function(categories) {
        data.categories = categories;
        next();
    });
});

/*
* 首页
* */
router.get('/', function(req, res, next) {
    data.category = req.query.category || '';
    data.count = 0;
    data.page = Number(req.query.page || 1);
    data.limit = 10;
    data.pages = 0;

    var where = {};
    if (data.category) {
        where.category = data.category
    }
    Content.find(where).count(function (err,count) {

        data.count = count;
        //计算总页数
        data.pages = Math.ceil(data.count / data.limit);
        //取值不能超过pages
        data.page = Math.min(data.page, data.pages );
        //取值不能小于1
        data.page = Math.max( data.page, 1 );

        var skip = (data.page - 1) * data.limit;
        //find().where(where) == find(where) == where(where)
        return Content.find(where).limit(data.limit).skip(skip).then(function(contents) {
            data.contents = contents//与上式等效.reverse().slice(skip,Math.min(skip+10,data.count));
            res.render('main/index', data);
        })

    })
});

router.get('/view', function (req, res){

    var contentId = req.query.contentid || '';
    Content.findOne({
        _id: contentId
    }).then(function(content) {
        data.content = content;
        content.views++;
        content.save();
        res.render('main/view', data);
    }).catch(function(reason){console.log(reason)});

});

module.exports = router;