import React, { FC } from 'react';

import { Input } from './input';
import { Label } from './label';
import { Textarea } from './textarea';

interface FieldComposition {
  Label: typeof Label;
  Input: typeof Input;
  Textarea: typeof Textarea;
}

export const Field: FC & FieldComposition = ({ children }) => {
  return <div>{children}</div>;
};

Field.Label = Label;
Field.Input = Input;
Field.Textarea = Textarea;
