import React, { useState } from 'react';
import { Container, Typography, TextField, FormControl, RadioGroup, FormControlLabel, Radio, Checkbox, FormGroup, Button } from '@mui/material';
import { db } from './Firebase/firebase'; // تأكد من المسار الصحيح
import { collection, addDoc } from 'firebase/firestore'; // إضافة الاستيراد

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    passportNumber: '',
    entryPermit: '',
    phoneNumber: '',
    visitType: '',
    gender: '',
    travelInsurance: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async () => {
    try {
      // استخدام collection و addDoc لإضافة البيانات
      const docRef = await addDoc(collection(db, 'registrations'), formData);
      console.log('Data added successfully with ID: ', docRef.id);
    } catch (error) {
      console.error('Error adding data: ', error);
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom align="center">
        PilgrimsHub
      </Typography>
      <Typography variant="h6" gutterBottom>
        Hajj or Umrah Registration
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Personal Information
      </Typography>
      <TextField
        label="Full Name"
        variant="outlined"
        fullWidth
        margin="normal"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
      />
      <TextField
        label="Passport Number"
        variant="outlined"
        fullWidth
        margin="normal"
        name="passportNumber"
        value={formData.passportNumber}
        onChange={handleChange}
      />
      <TextField
        label="Entry Permit"
        variant="outlined"
        fullWidth
        margin="normal"
        name="entryPermit"
        value={formData.entryPermit}
        onChange={handleChange}
      />
      <TextField
        label="Phone Number"
        variant="outlined"
        fullWidth
        margin="normal"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
      />

      <FormControl component="fieldset" margin="normal">
        <Typography variant="subtitle1">Visit Type</Typography>
        <RadioGroup row name="visitType" value={formData.visitType} onChange={handleChange}>
          <FormControlLabel value="Hajj" control={<Radio />} label="Hajj" />
          <FormControlLabel value="Umrah" control={<Radio />} label="Umrah" />
        </RadioGroup>
      </FormControl>

      <FormControl component="fieldset" margin="normal">
        <Typography variant="subtitle1">Gender</Typography>
        <RadioGroup row name="gender" value={formData.gender} onChange={handleChange}>
          <FormControlLabel value="Male" control={<Radio />} label="Male" />
          <FormControlLabel value="Female" control={<Radio />} label="Female" />
          <FormControlLabel value="Prefer not to disclose" control={<Radio />} label="Prefer not to disclose" />
        </RadioGroup>
      </FormControl>

      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              name="travelInsurance"
              checked={formData.travelInsurance}
              onChange={handleChange}
            />
          }
          label="Travel Insurance Option"
        />
      </FormGroup>

      <Button
        variant="contained"
        color="primary"
        fullWidth
        style={{ marginTop: '20px' }}
        onClick={handleSubmit}
      >
        Proceed
      </Button>
    </Container>
  );
};

export default RegistrationForm;
