import React from 'react'
import '../stylesheets/dashboard.css'
import { useCompanyContext } from '../context/CompanyContext'
import { useNavigate } from 'react-router-dom'

const Entities = () => {
    const {companies,setCompanies}=useCompanyContext()
    const navigate = useNavigate();

    const handleClick = (id) => {
        console.log("hello")
      navigate(`/company/${id}`);
    };

  return (
    
      <div className='dash'>
        <h1>Companies</h1>
          <hr />
        <div className="company-list">
            {companies.map((i)=>(
                <div className="company-card" key={i._id} onClick={() => handleClick(i._id)}>
                    <h1>{i.companyName}</h1>
                    <div>
                        {i.services.filter((it)=>it.status!="Not Started").map((ev,index)=>(
                            <div className="service-item" key={index}>
                                <p>{ev.serviceName}</p>
                                <p>{ev.status}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            <div className='company-card'>
                <p style={{textAlign:"center",fontSize:"40px"}}>+</p>
                <p style={{textAlign:"center"}}>Add Company</p>
            </div>
        </div>
      </div>
    
  )
}

export default Entities
