require("@babel/polyfill");

import Search from './model/Search';

/*
    Webapp query, үр дүн
        - Хайлтын query, үр дүн
        - Тухайн үзүүлж байгаа жор
        - Лайкалсан жорууд
        - Захиалж байгаа жорууд
*/

const state = {};

const controlSearch = async() => {
    // 1. Web-ээс хайлтын түлхүүр үгийг гаргаж авна
    const query = 'pizza';

    if(query){
        // 2. Шинээр хайлтын обьектийг гаргаж авна
        state.search = new Search(query);

        // 3. Хайлт хийхэд зориулж дэлгэцийг UI бэлтгэнэ
        // 4. Хайлтыг гүйцэтгэнэ
        await state.search.doSearch();
        // 5. Хайлтын үр дүнг дэлгэцэн үзүүлнэ
        
        console.log(state.search.recipes);
    }
}


document.querySelector(".search").addEventListener("submit", (e)=>{
    e.preventDefault();
    controlSearch();
})

