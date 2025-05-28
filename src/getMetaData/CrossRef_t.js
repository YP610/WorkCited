async function getCrossRef_title(title){
    try{
        const response=await fetch(`https://api.crossref.org/works?query.title=${encodeURIComponent(title)}`)
        	const data=await response.json();
            const item=data.message.items[0]
			let title = item.title?.[0] || null;
            const rawAuthors = item.author;
            let author = rawAuthors?.map(a => `${a.given} ${a.family}`).join(", ") || null;
            let journal=item["container-title"][0]||null;
            let volume=item.volume||null;
            let issue=item.issue||null;
            let page=item.page||null;
            let printYear=item["published-print"]?.["date-parts"][0]?.[0]||null
            let onlineYear=item["published-online"]?.["date-parts"][0]?.[0]||null
            let year=printYear;
            if(printYear>=onlineYear){
            	year=onlineYear;
            }
            const titles = data.message.items.map(i => i.title?.[0] || "Untitled");
            console.log(title,author,journal,volume,issue,page,year,titles);
            return {title,author,journal,volume,issue,page,year,titles};
    }
    catch(error){
        console.error("Error:",error)
    }
}
module.exports=getCrossRef_title;

/* TEST:
getCrossRef_title();
*/
