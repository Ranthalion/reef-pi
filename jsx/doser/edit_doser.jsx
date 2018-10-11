import React from 'react'
import PropTypes from 'prop-types'
import { ErrorFor, ShowError } from '../utils/validation_helper'
import { showAlert, clearAlert } from 'utils/alert'
import classNames from 'classnames'
import { Field } from 'formik'
import BooleanSelect from '../ui_components/boolean_select'
import Cron from '../ui_components/cron'
import Percent from '../ui_components/percent'

const EditDoser = ({
  values,
  errors,
  touched,
  doser,
  jacks,
  submitForm,
  isValid,
  onBlur,
  handleChange,
  setFieldValue,
  dirty,
  readOnly
}) => {
  const handleSubmit = event => {
    event.preventDefault()
    clearAlert()
    if (dirty === false || isValid === true) {
      submitForm()
    } else {
      submitForm() // Calling submit form in order to show validation errors
      showAlert(
        'The Doser settings cannot be saved due to validation errors.  Please correct the errors and try again.'
      )
    }
  }

  const jackOptions = () => {
    return jacks.map(item => {
      return (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      )
    })
  }

  const pinOptions = () => {
    const selectedJack = jacks.find(j => { return j.id === values.jack })
    if (!selectedJack) { return [] }

    return selectedJack.pins.map(item => {
      return (
        <option key={item} value={item}>
          {item}
        </option>
      )
    })
  }

  const jackChanged = e => {
    setFieldValue('pin', '', false)
    handleChange(e)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='row'>
        <div className='col-12 col-sm-6 col-md-3'>
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <Field
              name='name'
              disabled={readOnly}
              className={classNames('form-control', {
                'is-invalid': ShowError('name', touched, errors)
              })}
            />
            <ErrorFor errors={errors} touched={touched} name='name' />
          </div>
        </div>

        <div className='col-12 col-sm-6 col-md-3'>
          <div className='form-group'>
            <label htmlFor='jack'>Jack</label>
            <Field
              name='jack'
              component='select'
              onChange={jackChanged}
              disabled={readOnly}
              className={classNames('custom-select', {
                'is-invalid': ShowError('jack', touched, errors)
              })}
            >
              <option value='' className='d-none'>-- Select --</option>
              {jackOptions()}
            </Field>
            <ErrorFor errors={errors} touched={touched} name='jack' />
          </div>
        </div>

        <div className='col-12 col-sm-6 col-md-3'>
          <div className='form-group'>
            <label htmlFor='pin'>Pin</label>
            <Field
              name='pin'
              component='select'
              disabled={readOnly}
              className={classNames('custom-select', {
                'is-invalid': ShowError('pin', touched, errors)
              })}
            >
              <option value='' className='d-none'>-- Select --</option>
              {pinOptions()}
            </Field>
            <ErrorFor errors={errors} touched={touched} name='pin' />
          </div>
        </div>

        <div className='col-12 col-sm-6 col-md-3'>
          <div className='form-group'>
            <label htmlFor='enable'>Doser Status</label>
            <Field
              name='enable'
              component={BooleanSelect}
              disabled={readOnly}
              className={classNames('custom-select', {
                'is-invalid': ShowError('enable', touched, errors)
              })}
            >
              <option value='true'>Enabled</option>
              <option value='false'>Disabled</option>
            </Field>
            <ErrorFor errors={errors} touched={touched} name='enable' />
          </div>
        </div>

      </div>

      <div className='row'>
        <div className='col-12 col-xl-6'>
          <Cron values={values}
            touched={touched}
            errors={errors}
            readOnly={readOnly}
          />
        </div>

        <div className='col-12 col-sm-6 col-md-3'>
          <div className='form-group'>
            <label htmlFor='duration'>Duration</label>
            <div className='input-group'>
              <Field
                name='duration'
                readOnly={readOnly}
                type='number'
                className={classNames('form-control', {
                  'is-invalid': ShowError('duration', touched, errors)
                })}
              />
              <div className='input-group-append'>
                <span className='input-group-text d-none d-lg-flex'>
                    second(s)
                </span>
                <span className='input-group-text d-flex d-lg-none'>sec</span>
              </div>
              <ErrorFor errors={errors} touched={touched} name='duration' />
            </div>
          </div>
        </div>

        <div className='col col-sm-6 col-md-3'>
          <div className='form-group'>
            <label htmlFor='speed'>Speed</label>
            <div className='input-group'>
              <Percent type='number'
                className={classNames('form-control', {
                  'is-invalid': ShowError('speed', touched, errors)
                })}
                name='speed'
                onBlur={onBlur}
                readOnly={readOnly}
                onChange={handleChange}
                value={values.speed} />
              <div className='input-group-append'>
                <span className='input-group-text'>
                    %
                </span>
              </div>
              <ErrorFor errors={errors} touched={touched} name='speed' />
            </div>
          </div>
        </div>
      </div>

      <div className={classNames('row', { 'd-none': readOnly })}>
        <div className='col-12'>
          <input
            type='submit'
            value='Save'
            disabled={readOnly}
            className='btn btn-sm btn-primary float-right mt-1'
          />
        </div>
      </div>
    </form>
  )
}

EditDoser.propTypes = {
  values: PropTypes.object.isRequired,
  errors: PropTypes.object,
  touched: PropTypes.object,
  handleBlur: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
  onDelete: PropTypes.func,
  handleChange: PropTypes.func
}

export default EditDoser
