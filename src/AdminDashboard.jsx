import { useEffect, useState } from 'react';
import { generateClient } from 'aws-amplify/api';
import { createBloodDonor, deleteBloodDonor } from './graphql/mutations';
import { listBloodDonors, listDonorRequests } from './graphql/queries';
import './AdminDashboard.css';

const initial = { name: '', bloodType: '' };
const client = generateClient();

const AdminDashboard = () => {
  const [formState, setFormState] = useState(initial);
  const [bloodDonor, setBloodDonor] = useState([]);
  const [donorRequest, setDonorRequest] = useState([]);

  useEffect(() => {
    fetchBloodDonors();
    fetchDonorRequests();
  }, []);

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value });
  }

  async function fetchBloodDonors() {
    try {
      const donatedData = await client.graphql({ query: listBloodDonors });
      const donors = donatedData.data.listBloodDonors.items;
      setBloodDonor(donors);
    } catch (error) {
      console.error('Error fetching blood donors:', error);
    }
  }

  async function fetchDonorRequests() {
    try {
      const potentialDonor = await client.graphql({ query: listDonorRequests });
      const requests = potentialDonor.data.listDonorRequests.items;
      setDonorRequest(requests);
    } catch (error) {
      console.error('Error fetching donor requests:', error);
    }
  }

  async function addToDB() {
    if (!formState.name || !formState.bloodType) return;
    const donor = { ...formState };
    setBloodDonor([...bloodDonor, donor]);
    setFormState(initial);
    try {
      await client.graphql({ query: createBloodDonor, variables: { input: donor } });
    } catch (error) {
      console.error('Error adding blood donor:', error);
    }
  }

  async function deleteFromDB(id) {
    try {
      await client.graphql({ query: deleteBloodDonor, variables: { input: { id } } });
      const updatedDonors = bloodDonor.filter((donor) => donor.id !== id);
      setBloodDonor(updatedDonors);
    } catch (error) {
      console.error('Error deleting blood donor:', error);
    }
  }

  return (
    <div className="container">
      <div className="column">
        <h2>Add Blood Donor</h2>
        <label>Name</label>
        <input onChange={(event) => setInput('name', event.target.value)} value={formState.name} />
        <label>Blood Type</label>
        <input onChange={(event) => setInput('bloodType', event.target.value)} value={formState.bloodType} />
        <button className="button" onClick={addToDB}>Add Blood Donor</button>
      </div>

      <div className="column">
        <h2>Delete Blood Donor</h2>
        {bloodDonor.map((donor) => (
          <div className="donorInfo" key={donor.id}>
            <p>{`Name: ${donor.name}, Blood Type: ${donor.bloodType}`}</p>
            <button className="deleteButton" onClick={() => deleteFromDB(donor.id)}>Delete</button>
          </div>
        ))}
      </div>

      <div className="column">
        <h2>Available Blood in DB</h2>
        {bloodDonor.map((donor) => (
          <div className="donor" key={donor.id}>
            <p className="donorInfo">{`ID: ${donor.id}`}</p>
            <p>{`Name: ${donor.name}`}</p>
            <p>{`Blood Type: ${donor.bloodType}`}</p>
          </div>
        ))}
      </div>

      <div className="list">
        <h2 style={{ width: 500, fontSize: 50 }}>Available Blood Donors</h2>
        <table style={{ textAlign: 'center', width: 500 }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Blood Type</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {donorRequest.map((request) => (
              <tr className="request" key={request.id}>
                <td>{request.name}</td>
                <td>{request.bloodType}</td>
                <td>{request.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
