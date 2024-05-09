
import Header from "../components/Header";
import { SearchSpace } from "../components/SearchSpace";

import { CreateButton } from "../components/CreateButon";
import { SongCardh } from "../components/SongCardh";


function playListView() {

    return (
       <div className="w-screen h-screen">
            <div className="bg-white w-full">
                <SearchSpace />
             
            </div>
<div className="flex justify-center"><SongCardh/></div>

          <CreateButton/>
            </div>
    )
}

export default playListView