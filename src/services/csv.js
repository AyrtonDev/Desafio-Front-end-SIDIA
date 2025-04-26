

export async function serviceCSV (){
     const response = await fetch("/data-movies.csv")
     const reader = response.body.getReader()
     const result = await reader.read()
     const decoder = new TextDecoder('utf-8')
     const csv = decoder.decode(result.value)

     return csv
}