import React from 'react'
import { useCompanyContext } from '../context/CompanyContext'
import { useEffect } from 'react'
import axios from 'axios'
import '../stylesheets/dashboard.css'

const DashBoard = () => {
    const {companies,setCompanies}=useCompanyContext()

    useEffect(()=>{
        const getComp=async()=>{
            try {
                await axios.get('http://localhost:3000/api/companies')
                .then(res=>{
                    setCompanies(res.data)
                    console.log("hey inside dashboard",res.data)
                    console.log(companies)
                })
            } catch (error) {
                console.log(error)
            }
        }
        getComp()
    },[])

  return (
    <div className='dash'>
      <h1>Welcome User,</h1>
        <hr />
      <div>
        <h1>Companies</h1>
          <hr />
        <div className="company-list">
            {companies.slice(0,3).map((i)=>(
                <div className="company-card" key={i._id}>
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
        </div>
      </div>
    </div>
  )
}

export default DashBoard
