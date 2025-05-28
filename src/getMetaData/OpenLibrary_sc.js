async function getOpenLibrary_isbn(isbn){
    try{
        const response=await fetch(`https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`);
        const data= await response.json();
            const type="book";
            const item = data[`ISBN:${isbn}`];
            let title=item.title||null;
            let author=item.authors.map(a=>a.name)||null;
            let publisher=item.publishers[0]?.name||null;
            let date=item.publish_date||null;
            console.log(title,author,publisher,date);
            return {title,author,publisher,date};
    }
    catch(eror){
        console.log("Error:", error)
    }
}
module.exports=getOpenLibrary_isbn;

/*TEST: 
getOpenLibrary_isbn();
*/


    
