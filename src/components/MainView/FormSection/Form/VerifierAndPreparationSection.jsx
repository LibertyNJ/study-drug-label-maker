import PropTypes from 'prop-types';
import React from 'react';

import FormRow from './FormRow';
import FormSubsection from './FormSubsection';
import Input from './Input';
import Toggle from './Toggle';

const VerifierAndPreparationSection = props => (
  <FormSubsection heading="Medication">
    <FormRow>
      <Input
        type="text"
        name="medicationName"
        value={props.medication.name}
        label="Name"
        required
        attributes={{
          placeholder: 'Drugitol…',
        }}
        handleChange={props.handleFormControlChange}
      />
      <Input
        type="text"
        name="medicationStrength"
        value={props.medication.strength.value}
        label="Strength"
        required={props.medication.strength.isRequired}
        disabled={!props.medication.strength.isRequired}
        attributes={{
          placeholder: '100 mG…',
        }}
        handleChange={props.handleFormControlChange}
        append={medicationStrengthToggle}
      />
      <Input
        type="text"
        name="medicationForm"
        value={props.medication.form}
        label="Form"
        required
        attributes={{
          placeholder: 'Tablet…',
        }}
        handleChange={props.handleFormControlChange}
      />
      <Input
        type="text"
        name="medicationManufacturer"
        value={props.medication.manufacturer}
        label="Manufacturer"
        required
        attributes={{
          placeholder: 'Liberty Pharma…',
        }}
        handleChange={props.handleFormControlChange}
      />
    </FormRow>
    <FormRow>
      <Input
        type="number"
        name="medicationQuantity"
        value={props.medication.quantity}
        label="Quantity"
        required
        attributes={{
          placeholder: '100…',
          min: 1,
        }}
        handleChange={props.handleFormControlChange}
      />
      <Input
        type="textarea"
        name="medicationSig"
        value={props.medication.sig}
        label="Sig"
        required
        attributes={{
          placeholder: 'One tablet by mouth every day…',
        }}
        handleChange={props.handleFormControlChange}
      />
    </FormRow>
    <FormRow>
      <Input
        type="text"
        name="medicationDiluent"
        value={props.medication.diluent}
        label="Diluent"
        required
        attributes={{
          placeholder: '0.9% Sodium Chloride…',
        }}
        handleChange={props.handleFormControlChange}
      />
      <Input
        type="text"
        name="medicationVolume"
        value={props.medication.volume}
        label="Volume"
        required
        attributes={{
          placeholder: '100 mL…',
        }}
        handleChange={props.handleFormControlChange}
      />
      <Input
        type="text"
        name="medicationRate"
        value={props.medication.rate}
        label="Rate"
        required
        attributes={{
          placeholder: '50 mL / hr…',
        }}
        handleChange={props.handleFormControlChange}
      />
    </FormRow>
    <FormRow>
      <Input
        type="datetime-local"
        name="medicationPreparation"
        value={props.medication.preparation}
        label="Preparation date and time"
        required
        info="Time must include AM or PM"
        attributes={{
          max: '9999-12-31T23:59',
        }}
        handleChange={props.handleFormControlChange}
      />
      <Input
        type="datetime-local"
        name="medicationExpiration"
        value={props.medication.expiration}
        label="Expiration date and time"
        required
        info="Time must include AM or PM"
        attributes={{
          max: '9999-12-31T23:59',
        }}
        handleChange={props.handleFormControlChange}
      />
    </FormRow>
  </FormSubsection>
);

VerifierAndPreparationSection.propTypes = {
  handleFormControlChange: PropTypes.func.isRequired,
  labelType: PropTypes.oneOf(['standard', 'infusion', 'syringe', '']).isRequired,
  medication: PropTypes.shape({
    diluent: PropTypes.string,
    expiration: PropTypes.string,
    form: PropTypes.string,
    manufacturer: PropTypes.string,
    name: PropTypes.string,
    preparation: PropTypes.string,
    quantity: PropTypes.string,
    rate: PropTypes.string,
    sig: PropTypes.string,
    strength: PropTypes.object,
    volume: PropTypes.string,
  }).isRequired,
};

export default VerifierAndPreparationSection;
