'use strict';

var gProjects

_createProjects()

function getProjects() {
    return gProjects
}



function _createProjects() {
    var projects = []
                //_createProj(id, name, title, desc, url, publishDate, ...labels)
    projects.push(_createProj('1', 'Ferrography', 'Ferro-graphy', 'desc', 'url', 'publishDate', 'h', 'g','f'))
    projects.push(_createProj('2', 'Limit calculations', 'Spalling size calc', 'desc', 'url', 'publishDate', 'h', 'g','f'))
    projects.push(_createProj('3', 'Minesweeper', 'Minesweeper', 'desc', 'url', 'publishDate', 'h', 'g','f'))


    gProjects = projects
}

function _createProj(id, name, title, desc, url, publishDate, ...labels) {
    return {
        id,
        name,
        title,
        desc,
        url,
        publishedAt: publishDate,
        lables: [labels]
    }
}
