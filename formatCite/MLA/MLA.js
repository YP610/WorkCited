const formatAuthor=require('./mlaAuthor');


async function mla_book(title,author,publisher,date){    
    const citation= (`${formatAuthor(author)}. ${title}. ${publisher}, ${date}.`)
    console.log(citation);
    return citation;
}

async function mla_web(title,author,publisher,date,url){
    const citation=(`${formatAuthor(author)}. ${title}. ${publisher}, ${date}, ${url}`)
    console.log(citation);
    return citation;
} 

async function mla_aj(title,author,journal,volume,issue,page,year){
    const citation=(`${formatAuthor(author)}. "${title}." ${journal}, vol. ${volume}, no. ${issue}, ${year}, pp. ${page}.`)
    console.log(citation);
    return citation;
}
async function mla_magazine(title,author, magazine, date,pages){
    const citation=(`${formatAuthor(author)}. "${title}." ${magazine}, ${date} ${pages}.`)
    console.log(citation);
    return citation;
}
module.exports={
    mla_book,
    mla_web,
    mla_aj,
    mla_magazine
}

