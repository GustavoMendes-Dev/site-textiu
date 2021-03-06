import { FormControl, FormSelect } from "react-bootstrap";
import { useField } from "@unform/core";
import React, { useEffect, useRef, useState } from "react";
// import InputMask from "react-input-mask";
// import { mask, unMask } from 'remask';


export const Input = ({ name, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, registerField, error, clearError } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = "";
      },
    });
  }, [fieldName, registerField]);

  return (
    <React.Fragment>
      <FormControl
        className={error && "form-control is-invalid"}
        name={name}
        onFocus={clearError}
        ref={inputRef}
        {...rest}
      />

      {error && <span className="text-danger">{error}</span>}
    </React.Fragment>
  );
};

export const SelectEstado = ({ name, defaultValue, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, registerField, error, clearError } = useField(name);

  // console.log(defaultValue)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = "";
      },
    });
  }, [fieldName, registerField]);

  return (
    <React.Fragment>
      <FormSelect
        aria-label="Default select example"
        className={error ? "form-control is-invalid" : "form-control"}
        name={name}
        onFocus={clearError}
        ref={inputRef}
        {...rest}
      >
        {defaultValue ? (
          <option value={defaultValue}>{defaultValue}</option>
        ) : (
          <option value="0">Escolha o Estado</option>
        )}
        <option value="AC">Acre</option>
        <option value="AL">Alagoas</option>
        <option value="AP">Amap??</option>
        <option value="AM">Amazonas</option>
        <option value="BH">Bahia</option>
        <option value="CE">Cear??</option>
        <option value="DF">Distrito Federal</option>
        <option value="ES">Esp??rito Santo</option>
        <option value="GO">Goi??s</option>
        <option value="MR">Maranh??o</option>
        <option value="MG">Mato Grosso</option>
        <option value="Mato Grosso do Sul">Mato Grosso do Sul</option>
        <option value="Minas Gerais">Minas Gerais</option>
        <option value="Par??">Par??</option>
        <option value="Para??ba">Para??ba</option>
        <option value="Paran??">Paran??</option>
        <option value="Pernambuco">Pernambuco</option>
        <option value="Piau??">Piau??</option>
        <option value="Rio de Janeiro">Rio de Janeiro</option>
        <option value="Rio Grande do Norte">Rio Grande do Norte</option>
        <option value="Rio Grande do Sul">Rio Grande do Sul</option>
        <option value="Rond??nia">Rond??nia</option>
        <option value="Roraima">Roraima</option>
        <option value="Santa Catarina">Santa Catarina</option>
        <option value="S??o Paulos">S??o Paulos</option>
        <option value="Sergipe">Sergipe</option>
        <option value="Tocantins">Tocantins</option>
      </FormSelect>

      {error && <span className="text-danger">{error}</span>}
    </React.Fragment>
  );
};

export const TextArea = ({ name, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, registerField, error, clearError } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = "";
      },
    });
  }, [fieldName, registerField]);

  return (
    <React.Fragment>
      <textarea
        className={error ? "form-control is-invalid" : "form-control"}
        name={name}
        onFocus={clearError}
        ref={inputRef}
        {...rest}
      />

      {error && <span className="text-danger">{error}</span>}
    </React.Fragment>
  );
};

export const Select = ({ name, defaultValue, children, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, registerField, error, clearError } = useField(name);

  // console.log(defaultValue)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = "";
      },
    });
  }, [fieldName, registerField]);

  return (
    <React.Fragment>
      <FormSelect
        aria-label="Default select example"
        className={error ? "form-control is-invalid" : "form-control"}
        name={name}
        onFocus={clearError}
        ref={inputRef}
        {...rest}
      >
        {defaultValue ? (
          <option selected value={defaultValue}>{defaultValue}</option>
        ) : (
          <option disabled selected value="">Escolha uma categoria</option>
        )}
        {children}
      </FormSelect>

      {error && <span className="text-danger">{error}</span>}
    </React.Fragment>
  );
};