var fs = require('fs')
var path = require('path');


var file = module.exports = {
    mkdirs:mkdirs,
    read:read,
    write:write
};

// 循环创建所有目录
function mkdirs(dirpath, mode, callback) {
    fs.exists(dirpath, function(exists) {
        if(exists) {
            if(callback) callback(dirpath);
        } else {
            //尝试创建父目录，然后再创建当前目录
            mkdirs(path.dirname(dirpath), mode, function(){
                    fs.mkdir(dirpath, mode, callback);
            });
        }
    });
};
//读取文件内容
function read(filepath) {
    return fs.readFileSync(filepath, 'utf8');
};

//写文件
function write(filepath, content) {
    mkdirs(path.dirname(filepath));
    return fs.writeFileSync(filepath, content);
};

function listmd(){

}