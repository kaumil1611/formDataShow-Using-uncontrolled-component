import React,{useState} from 'react';
import Form from './Form';
import './css/Card.css';
const Card = () => {

    const [fetchData,setFetchData]  = useState('');
   const getData = (e) =>{
       setFetchData(e);
   }
   if(fetchData === fetchData.Male ||  fetchData === fetchData.Female || fetchData.Other){

   }
    
    return (
    <div className="card card1">
        
            <div className="hadding"> 
                <h1>Task Manager</h1>
                <div className="hadding_bottom"></div>
                    <div className="data_container">
                        <Form data={getData}/>
                    </div>
                    <div className="card">
                        <div className="card-body">
                           <h3>{fetchData.name}</h3>
                           <h4>{fetchData.email}</h4>
                           <h5>{fetchData.date}</h5>
                           <h5>{fetchData.gender}</h5>
                           <h5>{fetchData.hobby}</h5>
                           <h5>{fetchData.mobile}</h5>
                           <h5>{fetchData.age}</h5>
                           <h5>{fetchData.country}</h5>
                           <h5>{fetchData.password}</h5>
                        </div>
                    </div>
                </div>
            </div>

    )
}

export default Card;
