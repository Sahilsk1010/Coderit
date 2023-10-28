import Card from "@/src/Card/Card"
import Faculty from "./Faculty"
import Seniors from "./Seniors"
import Juniors from './Juniors'

export default function Team(){
    return(
        <div className="mt-[100px] ">
            <div className="bg-blue-300 mx-4 p-4">
                <h1 className="text-center text-4xl p-4">The Faculty</h1>
                <div className="grid grid-cols-3 gap-3 justify-center">
                    {
                        Faculty.map((ele,index)=>{
                            return(
                                <Card person={ele} key={index}/>
                            )
                        })
                    }
                </div>
            </div>
            <div className="bg-red-300 mx-4 p-4">
                <h1 className="text-center text-4xl p-4">Senior Core</h1>
                <div className="grid grid-cols-4 gap-3">
                    {
                        Seniors.map((ele,index)=>{
                            return(
                                <Card person={ele} key={index}/>
                            )
                        })
                    }
                </div>
            </div>
            <div className="bg-orange-300 mx-4 p-4">
                <h1 className="text-center text-4xl p-4">Junior Core</h1>
                <div className="grid grid-cols-4 gap-3">
                    {
                        Juniors.map((ele,index)=>{
                            return(
                                <Card person={ele} key={index}/>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}