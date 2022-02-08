#!/usr/bin/env node
var glob = require('glob');
var fs = require('fs-extra');
const options = {}
console.log(`开始执行删除任务`);
glob("**/node_modules/", options, function (err, dirs) {
    dirs = dirs.filter(dir => dir.indexOf('node_modules') === dir.lastIndexOf('node_modules'));
    Promise.all(dirs.map(dir => {
        console.log(`开始删除`, dir);
        return fs.rm(dir, { recursive: true }).then(() => console.log(`删除结束`, dir));
    })).then(() => {
        console.log(`删除任务成功`);
    }).catch(err => {
        console.log(`删除任务失败`, err);
    });
})
