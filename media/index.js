const jar1 = require('./jar (1).png');
const jar2 = require('./jar (2).png');
const jar3 = require('./jar (3).png');
const jar4 = require('./jar (4).png');
const jar5 = require('./jar (5).png');
const jar6 = require('./jar (6).png');

export const media = [
    {src: jar1, text: 'frasco de maquillaje'}, 
    {src:jar2, text: 'frasco de conserva'}, 
    { src: jar3, text:'frasco multiuso'}, 
    {src: jar4, text: 'tubos de ensayo'}, 
    {src: jar5, text:'frascos para liquidos'}, 
    {src: jar6, text: 'frascos de perfume'}];
export const mediaByIndex = index => media[index % media.length];