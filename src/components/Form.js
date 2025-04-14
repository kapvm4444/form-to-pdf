import React, { useState } from "react";
import TextField from "./TextField";
import Dropdown from "./Dropdown";
import { documentize } from "./hooks/documentize";
import Button from "./Button";

const genders = ["Male", "Female", "Other"];
const diagnosisValues = ["A", "B", "C"];
const treatmentValues = ["A", "B", "C"];

export default function Form({ doctor }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("Male");
  const [mobile, setMobile] = useState("+91 ");
  const [village, setVillage] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [diagnosis, setDiagnosis] = useState(diagnosisValues[0]);
  const [treatment, setTreatment] = useState(treatmentValues[0]);
  const [medicine, setMedicine] = useState("");

  function handleSubmit(print) {
    documentize(
      {
        name,
        age,
        gender,
        mobile,
        village,
        city,
        state,
        diagnosis,
        treatment,
        medicine,
      },
      doctor,
    );
  }

  function handleClear() {
    setName("");
    setAge("");
    setGender("Male");
    setMobile("+91 ");
    setVillage("");
    setCity("");
    setState("");
    setDiagnosis("");
    setTreatment("");
    setMedicine("");
  }

  return (
    <form
      className="max-w-sm mx-auto mt-8"
      onSubmit={(e) => e.preventDefault()}
    >
      {/*Patient Name Field*/}
      <TextField
        placeholder={"i.e. John Doe"}
        value={name}
        onChange={(el) => setName(el.target.value)}
      >
        Patient Name
      </TextField>

      {/*Age*/}
      <TextField value={age} onChange={(el) => setAge(el.target.value)}>
        Age
      </TextField>

      {/*Gender*/}
      <Dropdown
        options={genders}
        value={gender}
        onChange={(el) => setGender(el.target.value)}
      >
        Gender
      </Dropdown>

      {/*Mobile*/}
      <TextField
        placeholder={"+91 "}
        value={mobile}
        onChange={(el) => setMobile(el.target.value)}
      >
        Mobile
      </TextField>

      {/*Village*/}
      <TextField value={village} onChange={(el) => setVillage(el.target.value)}>
        Village
      </TextField>

      {/*City*/}
      <TextField value={city} onChange={(el) => setCity(el.target.value)}>
        City
      </TextField>

      {/*State*/}
      <TextField value={state} onChange={(el) => setState(el.target.value)}>
        State
      </TextField>

      {/*Diagnosis*/}
      <Dropdown
        options={diagnosisValues}
        value={diagnosis}
        onChange={(el) => setDiagnosis(el.target.value)}
      >
        Diagnosis
      </Dropdown>

      {/*Treatment*/}
      <Dropdown
        options={treatmentValues}
        value={treatment}
        onChange={(el) => setTreatment(el.target.value)}
      >
        Treatment
      </Dropdown>

      {/*Medicine*/}
      <TextField
        type="textarea"
        value={medicine}
        onChange={(el) => setMedicine(el.target.value)}
      >
        Medicine
      </TextField>

      <div className="flex justify-evenly">
        <Button onClick={() => handleSubmit()}>Save</Button>
        <Button onClick={() => handleSubmit(true)}>Print</Button>
        <Button onClick={() => handleClear()}>Clear</Button>
      </div>
    </form>
  );
}
