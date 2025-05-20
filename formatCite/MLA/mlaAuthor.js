const partAuthor=require('../../utils/formatAuthor')

function formatMLA_Author(author){
    if(author.length==0||author==null){
        return "";
    }
    let split=partAuthor(author[0]);
    split=split.replace(/[.,;:]$/, "");
    let newAuthor;
    switch(author.length){
        case 1:
            newAuthor=split;
            break;
        case 2:
            let cleanAuthor=author[1].replace(/[.,;:]$/, "");
            newAuthor=(`${split} and ${cleanAuthor}`);
            break;
        default:
            newAuthor=(`${split}, et al.`);
            break;
    }
    console.log(newAuthor);
    return newAuthor;
}

module.exports=formatMLA_Author;

/*TEST
formatMLA_Author(["J.K. Rowling","Suzanne Collins","Rick Riordan"]) 
*/