import React from 'react';
import { render, screen } from '@testing-library/react';

import { Field } from './field';

describe('Field Component', () => {
  test('renders a label and input with correct id', () => {
    render(
      <Field>
        <Field.Label id="id">Label</Field.Label>
        <Field.Input id="id" />
      </Field>
    );

    expect(screen.getByText('Label')).toHaveAttribute('for', 'id');
    expect(screen.getByLabelText('Label')).toHaveAttribute('id', 'id');
  });

  test('renders a label and textarea with correct id', () => {
    render(
      <Field>
        <Field.Label id="id">Label</Field.Label>
        <Field.Textarea id="id" />
      </Field>
    );

    expect(screen.getByText('Label')).toHaveAttribute('for', 'id');
    expect(screen.getByLabelText('Label')).toHaveAttribute('id', 'id');
  });
});
