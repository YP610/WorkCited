function partAuthor(author){
    let name=author.split(" ");
    if(name.length==1){
        partAuthor=(`${name[0]}`)
    }
    else{
        partAuthor=(`${name[1]}, ${name[0]}`)
    }

    console.log(partAuthor)
    return partAuthor;
}

module.exports=partAuthor;