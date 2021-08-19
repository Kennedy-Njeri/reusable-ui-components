import React, {useState} from 'react';
import Layout from '../src/core/Layout'
import InputField from  '../src/library/components/InputField'
import Button from  '../src/library/components/Button'
import RadioButton from  '../src/library/components/RadioButton'
import Dropdown from  '../src/library/components/Dropdown'
import CheckBox from  '../src/library/components/CheckBox'


const  App = () => {
    const [name, setName] = useState('')
    const [amount, setAmount] = useState(0)
    const [country, setCountry] = useState('')
    const [gender, setGender] = useState('')
    const [accept, setAccept] = useState('')



  return (


      <Layout>
          <h2 className="mb-4">Create Form</h2>

          <div className="form-group col-md-12">
          <form>
              <div className="form-row">
                  <div className="form-group col-md-6">
                      <InputField label="Name" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)}/>
                  </div>

                  <div className="form-group col-md-6">
                      <InputField label="Amount" placeholder="Enter Amount" value={amount} onChange={(e) => setAmount(e.target.value)}/>
                  </div>

              </div>

              <div className="form-group col-md-6">
              <CheckBox label="i accept" selected={accept} onChange={(e) => setAccept(e.target.value)} type="checkbox"/>
              </div>

              <div className="form-row">
                  <Dropdown data={[
                      {value: 1, label: 'India'},
                      {value: 2, label: 'USA'},
                      {value: 3, label: 'UK'},
                      {value: 4, label: 'Germany'},
                      {value: 5, label: 'Russia'},
                      {value: 5, label: 'Italy'},
                  ]} onChange={(e) => setCountry(e.target.value)} name="Select country" value={country} placeholder="select country"/>
              </div><br/>

              <div className="radio">
              <RadioButton data={[{ text: 'Male', value: '1' },
                  { text: 'Female', value: '2' }]}
                           name="Select Gender" selected={gender}  onChange={(e) => setGender(e.target.value)} type="radio"/>
              </div><br/>
              <div className="form-row">
              <Button className="btn btn-success" name="Submit"/>
              </div>
          </form>
          </div>


      </Layout>
  );
}

export default App;
