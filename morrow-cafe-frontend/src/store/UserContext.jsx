import { createContext } from "react";

const UserContext = createContext({
  formData: {
    name: "",
    phone: "",
  },
  errors: {},
  status: "idle",
  handleSubmit: () => {},
  handleChange: () => {},
});

export default UserContext;
