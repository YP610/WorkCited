const generators= require('./formatCite/index');
const scrapers=require('./getMetaData/index');

async function generateCitation(req,res){
    const{format,type}=req.params; // mla, book
    const input=req.body.input; // Matilda
    const inputType=req.body.input.type; //title
    
    const scrape= scrapers[type]?.[inputType];
    if(!scrape){
        return res.status(400).json({error: "Unsupported Source"});
    }
    const generatorFn=generators[type]?.[`mla_${type}`];

    if(!generatorFn){
        return res.status(400).json({error:"Unsupported Citation Generator"})
    }
    const citation= await generatorFn(scrape);
    res.json({citation});
}