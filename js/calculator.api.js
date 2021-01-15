async function getPercentage(fname,sname){

    const res  = await fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${fname}&sname=${sname}`,{
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "07a00067e2msh82bbff171a1f95fp15a3aejsn6a8a37e762de",
            "x-rapidapi-host": "love-calculator.p.rapidapi.com"
        }
    })
    const cal = await res.json()

    return cal
}