const getBookByTitle=require('./OpenLibrary_t');
const getBookByISBN=require('./OpenLibrary_sc');
const getJournalByTitle=require('./CrossRef_t');
const getJournalByDOI=require('./CrossRef_sc');
const getWebsite=require('./metaScraper');

module.exports={
    book:{
        title: getBookByTitle,
        isbn: getBookByISBN
    },
    aj,magazine:{
        title: getJournalByTitle,
        doi: getJournalByDOI
    },
    website:{
        url: getWebsite
    }

};