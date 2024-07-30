import { useState } from 'react';
import { generateClient } from 'aws-amplify/api';
import { createDonorRequest } from './graphql/mutations';
import './UserDashboard.css';


const initial= {name:'',phone:'',age:'',fever:'No',bloodType:''};
const client= generateClient();

const UserDashboard=()=> 
{
  const [details, setdetails] = useState(initial);
 const set = (key, value) => 
 {
    setdetails({ ...details, [key]: value });
 };

const send= async()=> 
{
  const request = { ...details };
  if(details.age<18 || details.fever==='Yes')
   alert('You are not eligible to donate');

  else
  {
    await client.graphql({query: createDonorRequest,variables: {input: request}})
    alert('Donation request sent successfully!');
  }
  setdetails(initial);
};
    
return (
  <div className="user">
    <h2>Register as a Donor</h2>
  <label>
    Name        
     <input value={details.name} onChange={(e)=> set('name', e.target.value)}/>
    </label>

    <label>
    Age:
    <input  value={details.age} onChange={(e)=> set('age', e.target.value)}/>
     </label>

    <label>
    Suffer from from any communicable disease?
    <select value={details.fever} onChange={(e)=> set('fever', e.target.value)}>
      <option value="Yes">Yes</option>
      <option value="No">No</option>
    </select>
    </label>

    <label>
    Blood Type:
    <input value={details.bloodType} onChange={(e)=> set('bloodType', e.target.value)}/>
    </label>

    <label>
    Phone No.:
    <input value={details.phone} onChange={(e)=> set('phone', e.target.value)}/>
    </label>

    <button onClick={send}>Submit Request</button>
  </div>
);};
export default UserDashboard;