
// const fs=require("fs")
// const allData=require("./allData")
// console.log(allData.fname)
// console.log(allData.age)
const data1=require("./data1")
const yargs=require("yargs")

yargs.command({
    
    command:"add",
    describe:"to add an item",
    builder :{

        fname:{
            describe:"the describtion for fname in add command",
            demandOption:true,
            type:"string"
        },
        lname:{
            describtion:"the describtion to lname in add command",
            demandOption:true,
            type:"string"
        }
    },
        handler:(x)=>{
            data1.addPerson(x.id,x.fname,x.lname,x.city , x.age) 
        }
    
})

yargs.command({
    command : "delete",
    describe: "to delete an item",
    handler : (x)=> {
       data1.deleteData(x.id)
    }
 })


 ////////////////////////////////////////////////////////////////

 yargs.command ({
    command : "read",
    describe : "to read an item",
    builder : {
       id : {
          describe : "this is id desc in read command ",
          demandOption : true,
          type: "string"
       }
    },
    handler: (x) => {
       data1.readData(x.id)
    }

 })

////////////////////////////////////

 yargs.command ({
    command : "list",
    describe : "to list data",
    handler : () =>{
       data1.listData()
    }
 })


yargs.parse()