
const fs=require("fs")

const addPerson=(id , fname , lname , city , age)=>{

    const allData=loadInfo()

    const duplicatedData = allData.filter((obj) =>{
        return  obj.id === id 
     })

       if (duplicatedData.length == 0  ){

          allData.push({
            id : id,
            fname : fname,
            lname : lname,
            city : city,
            age : age
     })
     saveAllData(allData)
    } else {
      console.log("Error duplicated data")
    }
}

const loadInfo= ()=>{
    try{
        const jsonData=fs.readFileSync("data2.json").toString()
        return JSON.parse(jsonData)
    }
    catch{
        return[]
    }


}


const saveAllData=(allData)=>{

    const saveallDataJson=JSON.stringify(allData)
    fs.writeFileSync("data2.json",saveallDataJson)

}


const deleteData  = (id) =>{
    const allData = loadInfo()

     const data = allData.filter((obj) => {
        return obj.id !== id
     })

  
     saveAllData(data)
    
 }


 // to read data :

 const readData = (id) => {
    const allData = loadInfo()

    const itemNeeded = allData.find((obj) => {
       return  obj.id == id 
    })

    
    if (itemNeeded) {
      console.log(itemNeeded)
    }else {
      console.log("Not found this id! Enter another one")
    }
}


// list 
const listData = () => {
    const  allData = loadInfo()

     allData.forEach((obj) => {
       console.log(obj.fname ,obj.lname, obj.city)
     })

 }


module.exports={
    addPerson,
    deleteData ,
    readData ,
    listData


}