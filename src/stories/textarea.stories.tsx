import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Field } from '../field/field';

export default {
  title: 'Components/Textarea',
  component: Field.Textarea,
  subcomponents: { Field, label: Field.Label },
} as Meta;

export const Default: Story = ({ placeholder }) => {
  return (
    <Field>
      <Field.Label id="id">Hello</Field.Label>
      <Field.Textarea id="id" placeholder={placeholder} />
    </Field>
  );
};

Default.args = {
  placeholder: 'Placeholder content',
};
