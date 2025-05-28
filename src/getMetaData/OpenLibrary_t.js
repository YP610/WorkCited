async function getOpenLibrary_title(title){
    try{
        const response=await fetch(`https://openlibrary.org/search.json?title=${encodeURIComponent(title)}`)
        const data=await response.json();
            const type="book";
            const item = data.docs[0];
            let title = item.title||null;
            let author = item.author_name||null
            let publisher = item.publishers?.[0]||null
            let date = item.first_publish_year||null
            console.log(title, author, publisher, date);
            return {title,author,publisher,date};
        }
    catch(error){
        console.error("Error",error)
    }
}

module.exports=getOpenLibrary_title;

/*TEST:
getOpenLibrary_title();
*/