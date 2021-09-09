import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
const items=[
    {
        title:'What is React',
        content:'React is a front end javascript framework'
    },
    {
        title:'Whhy use React',
        content:'React is a favourrite js liberay among engineers'
    },
    {
        title:'how use React',
        content:'We use react by creating components'
    },
    

]
const options=[
    {
        label:'The Color Red',
        value:'red'
    },
    {
        label:'The Color Green',
        value:'green'
    },
    {
        label:'The Shade of Blue',
        value:'blue'
    }
]
export default () => {
    const [selected,setSelected]=useState(options[0]);
    const [showDropdown,setShowDropdown]=useState(true);
    return (
       <div>
           <button onClick={()=>setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
           
          { showDropdown?
          ( <Dropdown 
           selected={selected} 
           onSelectedChange={setSelected} 
           options={options}
           />) : null
        }
           
       </div>

    );
};