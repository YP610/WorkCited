const partAuthor=require('../../../utils/formatAuthor')

function formatChicago_Author(author){
    if(author.length==0||author==null){
        return "";
    }
    let newName=partAuthor(author[0]);
    switch(author.length){
        case 1:
            newName=newName.replace(/[.,;:]$/, "");
            newAuthor=`${newName}.`
            break;
        case 2:
            let cleanAuthor=author[1].replace(/[.,;:]$/, "");
            newAuthor=`${newName}, and ${cleanAuthor}.`
            break;
        default:
            if(author.length>10){
                newAuthor=`${newName} et al.`
                break;
            }
            else{
                newAuthor=`${newName}, `
                for(let i=1;i<author.length-1;i++){
                newAuthor+=`${author[1]}, `
                }
                newAuthor+=`and ${author[author.length-1]}`
                break;
            }
    }        
    console.log(newAuthor);
    return newAuthor;
}
module.exports=formatChicago_Author;
/*TEST:
formatChicago_Author(["J.K. Rowling","Suzanne Collins"])
*/
