require("@babel/polyfill");

import Search from './model/Search';

let search = new Search('pasta');

search.doSearch().then((result)=> console.log(result));