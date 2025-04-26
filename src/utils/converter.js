import Papa from "papaparse"

export async function converter (data){
    const parsed =  Papa.parse(data,{
        header: true,
        skipEmptyLines: true
    })
    return parsed.data
}