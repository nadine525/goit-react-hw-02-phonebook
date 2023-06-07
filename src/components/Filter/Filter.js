import React from 'react';
import { Label } from './Filter.styled';
import { Input } from '../ContactForm/ContactForm.styled';

const Filter = () => {
  return (
    <Label>
      Find Contacts by name
      <Input />
    </Label>
  );
};

export default Filter;
