import React from 'react';
import { Label } from './Filter.styled';
import { Input } from '../ContactForm/ContactForm.styled';

const Filter = ({ value, onChange }) => {
  return (
    <Label>
      Find Contacts by name
      <Input type="text" value={value} onChange={onChange} />
    </Label>
  );
};

export default Filter;
