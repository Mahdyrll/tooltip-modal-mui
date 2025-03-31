import { useState } from "react"
import DownloadModal from "./components/download modal/downloadModal"
import ToolTip from "./components/tooltip/tooltip"
import { Switch } from "@mui/material"

function App() {
  const [ showComponent , setShowComponent ] = useState(true);

  const switchHandler = () => {
    setShowComponent((prev) => !prev)
  }

  return (
    <div>
      <div className="flex items-center">
        <Switch defaultChecked checked={showComponent} onChange={switchHandler} sx={{marginLeft: '1rem', marginTop: '1rem'}}/>
        <p className="from-indigo-600 to-purple-400 bg-gradient-to-r inline-block text-transparent bg-clip-text mt-3">change UI</p>
      </div>
      <div className="pb-10">
        {showComponent ? <DownloadModal/> : <ToolTip/>}
      </div>
    </div>
  )
}

export default App