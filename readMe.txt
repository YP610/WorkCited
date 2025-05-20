for each type of source, have multiple databases pulled if theya re equal (exlcusing caps and sapce) then only show one if different we can show the user multiple options 
to chosse from

citeproc json for citing formatting or zotero translations for that or something else

create a central file that takes the input directs it to the correct databse gets the values back then sends it to the correct citation
this file should also figure out author and how many authros publication if it is there or not etc
in this file we also want to have ti set up the new authors so if it finds multiple authors auto format a new author var and then send that 
to citation (puts an and in)

create a database using dynamo db that adds a citation there anytime someone cites and then when another user wants to cite same source grab it 
form there
store metadata there as well as strings with each type of citation if it is there "mla9": or "apa": or "chicago":
for the database we have 3 levels of trust
-isbn/doi: max trust most likely will alwasy be correct we can store it and not worry that the citiation is false
-url: needs user to confirm authenticity or mark as useful to be high trust bc url can create null spaces etc
-title: lowest trust titles are too broad a lot of the data could be false, we dont do it unsless a lot of users report it to be true


okay frontend sends request using api gateway that gets sent to the correct file which then determine if it needs to api mla or chicago and then calls the 
citation method to cite and return it back to the frontend this is the directiory:
/citing
    -Book:MLA, APA, Chicago (calls all of these functions)
    -Academic Journal: MLA, APA, Chicago
    -Web: MLA, APA, Chicago



are we missing a citation let us know? feature

create two different routes one is a cite manual other is cite auto



