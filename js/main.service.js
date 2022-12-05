'use strict';

var gProjects

_createProjects()

function getProjects() {
    return gProjects
}

function _createProjects() {
    var projects = []
                //_createProj(id, name, title, desc, url, publishDate, ...labels)
    projects.push(_createProj('1', 'Ferrography', 'Ferro-graphy', 'desc', 'https://github.com/LilKruchi/ferrography', 1662757200000, 'Image analysis', 'Chemistry'))
    projects.push(_createProj('2', 'Limit calculations', 'Spalling size calc', 'desc', 'https://github.com/LilKruchi/calculate-limits', 1663102800000, 'Data analysis', 'Aircraft'))
    projects.push(_createProj('3', 'Minesweeper', 'Minesweeper', 'desc', 'https://lilkruchi.github.io/minesweeper/', 1669413600000, 'Web game', 'Nostalgia'))


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
