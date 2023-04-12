interface Rect{
    readonly id:string 
    color?: string
    size:{
        width:number
        height:number
    }
}

const rect1 : Rect ={
    id: "135",
    size: {
        width: 100,
        height: 100
    },
    color:"white"
}
const rect2 : Rect ={
    id: "135",
    size: {
        width: 155,
        height: 155
    }
}


const rect3 = {} as Rect
const rect4 = <Rect>{}



//============================ наследование от интерфейса

interface RectWithArea extends Rect{
 getArea:()=>number
}
const rect5 :RectWithArea = {
    id: "135",
    size: {
        width: 100,
        height: 100
    },
    getArea():number{
        return this.size.width * this.size.height
    }
}


interface IClock{
    time:Date
    setTime(date:Date):void
}
class Clock implements IClock {
    time: Date = new Date()
    setTime(date: Date): void {
        this.time =date
    }

}

//=========================== валидация обьекта

interface  Styles {
    [key:string]:string
}

const css:Styles = {
    border:'1px solid gray',
    padding:'1px',
    borderRadius:'3px'
}