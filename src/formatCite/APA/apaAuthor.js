const partAuthor=require("../../../utils/formatAuthor")

function formatAPA_Author(author){
    if(author.length==0||author==null){
        return "";
    }
    let name;
    switch(author.length){
        case 1:
            name=`${partAuthor(author[0])}.`
            break;
        case 2:
            name=`${partAuthor(author[0])}, & ${partAuthor(author[1])}.`
            name=name.replace(/[.]$/, "");
            break;
        default:
            name=`${partAuthor(author[0])} et al.`
            break;
    }
    console.log(name)
    return name
}
module.exports=formatAPA_Author;

/*TEST:
formatAPA_Author(["Roald Dahl","J.K. Rowling"])
*/