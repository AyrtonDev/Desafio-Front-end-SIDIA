import CenteredContent from "./components/template/centered-content"
import Header from "./components/header"
import {Wellcome} from "./components/wellcome"
import { Released } from "./components/released"
import { useEffect, useState } from "react"
import {converter} from "./utils/converter"
import { serviceCSV } from "./services/csv"
import {dataRelease, ranking, revenueList} from "./utils/data-tratament"
import { Loading } from "./components/loading"
import { Emphasis } from "./components/emphasis"
import { Revenue } from "./components/revenue"

function App(){ 
  const [listRelease, setListRelease] = useState(null)
  const [listRank, setListRank] = useState(null)
  const [listRevenue, SetListRevenue] = useState(null)
  useEffect(()=>{
    async function getData() {
        const data = await serviceCSV()
        const response = await converter(data)
        const released = dataRelease(response)
        const rank = ranking(response)
        const cost = revenueList(response) 
        console.log(cost)

        setListRelease(released)
        setListRank(rank)
        SetListRevenue(cost)
    }
    getData()

  },[])
  return (
    <CenteredContent>
      <Header/>
      <Wellcome/>
      {!listRelease && <Loading/>}
      {listRelease && <Released movies={listRelease}/>}
      {!listRank && <Loading/>}
      {listRank && <Emphasis movies={listRank}/>}
      {!listRevenue && <Loading/>}
      {listRevenue && <Revenue movies={listRevenue}/>}
    </CenteredContent>
  )
}

export default App
