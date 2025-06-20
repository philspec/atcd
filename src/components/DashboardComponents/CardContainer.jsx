import {cards1} from "../../assets/cardData"

export default function CardContainer (){
    return(
        <div className="flex flex-wrap justify-center items-center gap-x-0.2 gap-y-1 p-4 text-center">
        {cards1.map((svg, index) => (
          <div
            key={index}
            dangerouslySetInnerHTML={{ __html: svg }}
            className="w-80 h-40 flex items-center justify-center"
          />
        ))}
      </div>      
    )
}