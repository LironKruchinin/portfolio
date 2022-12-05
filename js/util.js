'use strict';

function millsecToDate(date) {
    const milliseconds = date
    const dateObject = new Date(milliseconds)
    const humanDateFormat = dateObject.toLocaleString() //2019-12-9 10:30:15
    return humanDateFormat.split(' ')[0]
}