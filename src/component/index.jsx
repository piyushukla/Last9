import React, { useState, useEffect } from "react";
import yaml from 'js-yaml';
import AlterCard from "./alterCard";
import { APILIST } from './apiList'
import ModalCard from "./modalCard";
import CrossIcon from '../cross-icon.svg'


const AlertList = () => {


  const [alertRules, setAlertRules] = useState([]);
  const [showApiList, setApiList] = useState(APILIST)
  const [alterDetails, setAlertDetails] = useState([])
  const [title, setTitle] = useState('')


  useEffect(() => {
    setApiList([...APILIST])
    setAlertRules([...APILIST])
  }, [])
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

      console.log("Error while fetching data", err.message)

    }
  };
  function filterAPIList(searchText) {
    if (!searchText) return setAlertRules(APILIST); // Return original array if search text is empty

    const lowerCaseSearchText = searchText.toLowerCase();

    const filterData = APILIST.map(item => {
      const filteredTypes = item.type.filter(typeItem =>
        typeItem.Title.toLowerCase().includes(lowerCaseSearchText)
      );

      // Check if the main item matches the search text
      // const matchesTitle = item.Title.toLowerCase().includes(lowerCaseSearchText);

      return {
        ...item,
        type: filteredTypes,
        isMatch: filteredTypes.length > 0 // Add a flag to indicate if there are matches
      };
    }).filter(item => item.isMatch); // Filter out items that don't match

    setAlertRules(filterData)
  }
  const clearSelectedAlert = () => {

    setAlertDetails([])

  }
  console.log("alter", alterDetails)
  return (
    <div className="container-main" style={{ marginTop: '30px' }}>
      <div style={{ width: '100%' }}>
        <p className="search-title">Browse Library</p>
        <input type="text" class="search-input" placeholder="Search..." onChange={(e) => {
          filterAPIList(e.target.value)
        }} />

      </div>
      {alertRules?.length > 0 ?

        <AlterCard alterList={alertRules} apiCall={(data) => {
          fetchYamlFile(data)
        }} setTitle={setTitle} />

        :
        <h1>NO DATA FOUND</h1>
      }

      {alterDetails?.length > 0 && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title">   <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 0C4.4775 0 0 4.47667 0 10C0 15.5225 4.4775 20 10 20C15.5225 20 20 15.5225 20 10C20 4.47667 15.5225 0 10 0ZM10 18.7167C8.42917 18.7167 7.155 17.6667 7.155 16.3717H12.845C12.845 17.6658 11.5717 18.7167 10 18.7167ZM14.7 15.5958H5.3V13.8908H14.7V15.5958ZM14.6667 13.0142H5.32583C5.295 12.9783 5.26333 12.9425 5.23333 12.9058C4.27083 11.7383 4.04417 11.1283 3.825 10.5067C3.82083 10.4858 4.99167 10.7458 5.82083 10.9325C5.82083 10.9325 6.24833 11.0317 6.8725 11.145C6.2725 10.4425 5.91667 9.54917 5.91667 8.63667C5.91667 6.63167 7.45417 4.88 6.9 3.46417C7.44 3.50833 8.01667 4.60333 8.05583 6.31583C8.63 5.52333 8.87 4.07417 8.87 3.18667C8.87 2.2675 9.47583 1.19917 10.0817 1.1625C9.54167 2.05333 10.2217 2.81583 10.8267 4.70917C11.0533 5.42083 11.0242 6.6175 11.1992 7.37667C11.2575 5.8 11.5283 3.5 12.5283 2.70583C12.0875 3.70583 12.5942 4.9575 12.94 5.55917C13.4992 6.52917 13.8383 7.265 13.8383 8.65583C13.8351 9.57129 13.5074 10.4559 12.9133 11.1525C13.5733 11.0283 14.03 10.9167 14.03 10.9167L16.1742 10.4983C16.1742 10.4983 15.8633 11.78 14.6667 13.0142Z" fill="#E6522C" />
              </svg> {title}   <span className="rules-container">{alterDetails?.length}</span></h2>
              <p onClick={clearSelectedAlert} >
                <img style={{ cursor: 'pointer' }} src={CrossIcon} />
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