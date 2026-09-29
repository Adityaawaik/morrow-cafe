import React, { useState } from "react";
import UserContext from "./UserContext";
import { postClaimOffer } from "../service/claimService";

const UserProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const [status, setStatus] = useState("idle");

  const [claimCode, setClaimCode] = useState("");

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid 10-digit mobile number.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    try {
      setStatus("loading");

      const data = await postClaimOffer(
        formData.name.trim(),
        formData.phone.trim()
      );

      setClaimCode(data.claimCode);

      setErrors({});

      setStatus("success");
    } catch (error) {
      setErrors({
        submit: error.message || "Unable to claim the offer.",
      });

      setStatus("error");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
      submit: "",
    }));

    if (status === "error") {
      setStatus("idle");
    }
  };

  const value = {
    formData,
    errors,
    status,
    claimCode,
    handleSubmit,
    handleChange,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
