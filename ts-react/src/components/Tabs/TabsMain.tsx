import { title } from 'process';
import React,{useState} from 'react'
import TabsChild from './TabsChild';
const data = [
  {
    desc: "one!",
    title: "This is panel header 1",
    id: 1,
  },
  {
    desc: "two!",
    title: "This is panel header 2",
    id: 2,
  },
  {
    desc: "three!",
    title: "This is panel header 3",
    id: 3,
  },
  {
    desc: "Four!",
    title: "This is panel header 4",
    id: 4,
  },
  {
    desc: "Six!",
    title: "This is panel header 5",
    id: 5,
  },
];
type Tab = {
  data: Element[];
};
type Element = { title: string; desc: string };
const TabsMain = () => {
   const [opened, setOpened] = useState<number>(0);
   const [childData, setChildData]=useState<any>("my name goutham")

   const handleOpen = (index: number) => {
     setOpened(index);
   
   };
   return (
     <div className="one">
       <div className="coin">
         {data.map((el, index) => (
           <TabsChild
             key={index}
             handleOpen={handleOpen}
             isVisible={index === opened}
             title={el.desc}
             desc={el.title}
             index={index}
           />
         ))}
       </div>
     </div>
   );
}

export default TabsMain