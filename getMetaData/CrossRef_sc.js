async function getCrossRef_doi(doi){
    try{
        const response=await fetch(`https://api.crossref.org/works/${doi}`);
        const data=await response.json();
            const item=data.message
            const type="academic journal"
            let title=item.title[0]||null;
            let author=item.author.map(a => `${a.given} ${a.family}`).join(", ")||null;
            let journal=item["container-title"][0]||null;
            let volume=item.volume||null;
            let issue=item.issue||null;
            let page=item.page||null;
            let year=item.created["date-parts"][0][0]||null;
            console.log(title,author,journal,volume,issue,page,year);
            return {title,author,journal,volume,issue,page,year};

    }
    catch(error){
        console.error("Error:",error)
    }
}

module.exports= getCrossRef_doi;


/*TEST: 
getCrossRef_doi();
*/

