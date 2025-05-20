const getOpenLibrary_isbn=require("../../getMetaData/Openlibrary_sc")
const getOpenLibrary_title=require("../../getMetaData/OpenLibrary_t")

async function mlaBook_base(title,author,publisher,date){    
    const citation= (`${author}. ${title}. ${publisher}, ${date}.`)
    console.log(citation);
    return citation;
}

async function mlaWeb_base(title,author,publisher,date,url){
    const citation=(`${author}. ${title}. ${publisher}, ${date}, ${url}`)
    console.log(citation);
    return citation;
} 

async function mlaAJ_base(title,author,journal,volume,issue,page,year){
    const citation=(`${author}. "${title}." ${journal}, vol. ${volume}, no. ${issue}, ${year}, pp. ${page}.`)
    console.log(citation);
    return citation;
}

async function mlaBook3(title,first,last,publisher,date){
	const citation=(`${last}, ${first}, et al. ${title}. ${publisher}, ${date}.`)
    console.log(citation);
    return citation;
}
async function mlaMagazine_base(title,author, magazine, date,pages){
    const citation=(`${author}. "${title}." ${magazine}, ${date} ${pages}.`)
    console.log(citation);
    return citation;
}
async function mla

