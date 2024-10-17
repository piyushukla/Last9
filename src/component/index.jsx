import React,{useState,useEffect} from "react";
import yaml from 'js-yaml';
import AlterCard from "./alterCard";
import {APILIST} from './apiList'
import ModalCard from "./modalCard";


const AlertList = () => {


    const [alertRules, setAlertRules] = useState([]);
    const [showApiList,setApiList]=useState(APILIST)
    const [alterDetails,setAlertDetails]=useState([])
    const [title,setTitle]=useState('')
  
   
    useEffect(()=>{
        setApiList([...APILIST])
        setAlertRules([...APILIST])
    },[])
      const fetchYamlFile = async (api) => {
        try {
            // 
          const response = await fetch(`${api}`);
          if (!response.ok) {
            throw new Error('Failed to fetch the YAML file');
          }
          const yamlText = await response.text();
          const jsonData = yaml.load(yamlText); // Convert YAML to JSON
          setAlertDetails(jsonData?.groups?.[0]?.rules);
       
        } catch (err) {
  
          console.log("Error while fetching data",err.message)
      
        }
      };
      function filterAPIList(searchText) {
        if (!searchText) return setAlertRules(APILIST); // Return original array if search text is empty
    
        const lowerCaseSearchText = searchText.toLowerCase();
    
        const filterData= APILIST.map(item => {
            const filteredTypes = item.type.filter(typeItem =>
                typeItem.Title.toLowerCase().includes(lowerCaseSearchText)
            );
    
            // Check if the main item matches the search text
            // const matchesTitle = item.Title.toLowerCase().includes(lowerCaseSearchText);
    
            return {
                ...item,
                type: filteredTypes,
                isMatch:  filteredTypes.length > 0 // Add a flag to indicate if there are matches
            };
        }).filter(item => item.isMatch); // Filter out items that don't match

        setAlertRules(filterData)
    }
    const clearSelectedAlert= ()=>{

      setAlertDetails([])

    }
    console.log("alter",alterDetails)
    return (
        <div className="container-main">
            <div style={{ width: '100%' }}>
                <p className="search-title">Browse Library</p>
                    <input type="text" class="search-input" placeholder="Search..." onChange={(e)=>{
                      filterAPIList(e.target.value)
                    }} />
                   
            </div>
            {alertRules?.length > 0 ? 
            
            <AlterCard alterList={alertRules} apiCall={(data)=>{
              fetchYamlFile(data)
          }} setTitle={setTitle}  />
            
            :
            <h1>NO DATA FOUND</h1>
            }
          
          {alterDetails?.length >0 && (
       <div className="modal-overlay">
       <div className="modal-content">
        <div className="modal-header">
        <h2 className="modal-title">{title}   <span className="rules-container">{alterDetails?.length}</span></h2>
         <p onClick={clearSelectedAlert} className="close-btn">
           X
         </p>
         </div>
       
         <div className="alert-list">
           {alterDetails?.map((alert, index) => (
            <ModalCard alert={alert} index={index} />
           ))}
         </div>
       </div>
     </div>
      )}
        </div>

    )
}
export default AlertList;