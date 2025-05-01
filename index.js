import { catalog } from './catalog.js';

const century = 20;
const search = 'Тихие';

console.log(catalog);

function languages() {
    let lang = []
    for (let i = 0; i < catalog.length; i += 1) {
        if (lang.includes(catalog[i].language) === false) {
            lang.push(catalog[i].language)
        }
    }
    return lang
}

console.log(languages())

function Century(century) {
    let kniga = [];
    for (let i = 0; i < catalog.length; i += 1) {
        if (catalog[i].year > ((century - 1) * 100) && catalog[i].year < ((century) * 100)) {
            kniga.push(catalog[i].title)
        }
    }
    return kniga
}

console.log(Century(century))

function aot(search) {
    let res = []
    for (let i = 0; i < catalog.length; i++) {
        let aut = catalog[i].author
        let title = catalog[i].title
        if (aut.includes(search) === true || aut.includes(search.toLowerCase()) === true) {
            res.push(`${catalog[i].author} "${catalog[i].title}"`)
        } 
        else if (title.includes(search) === true || title.includes(search.toLowerCase()) === true) {
            res.push(`${catalog[i].author} "${catalog[i].title}"`)
        }
    }
    return res
}

console.log(aot(search))