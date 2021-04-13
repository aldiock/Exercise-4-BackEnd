import React, { useState, useEffect } from "react";
import CustomButton from "../../atom/Button";
import InputText from "../../atom/InputText";
import NavBar from "../../molecules/NavigationBar";

const RegisterPage = () => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = () => {
    const data = {
      fullname: fullName,
      username: username,
      email: email,
      phoneNumber: phonenumber,
      address: address,
    };
    console.log(data);
  };

  return (
    <div class="container-sm mb-4">
      <NavBar />
      <br />
      <h3>Register</h3>
      <p>Full Name</p>
      <InputText
        class="form-control"
        placeholder="Masukkan nama lengkap anda"
        value={fullName}
        onChange={(event) => setFullName(event.target.value)}
      />
      <br />

      <p>Username</p>
      <InputText
        class="form-control"
        placeholder="Masukkan username anda"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <br />

      <p>Email</p>
      <InputText
        class="form-control"
        placeholder="Masukkan email anda"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <br />

      <p>Phone Number</p>
      <InputText
        class="form-control"
        placeholder="Masukkan nomor telepon anda"
        value={phonenumber}
        onChange={(event) => setPhoneNumber(event.target.value)}
      />
      <br />

      <p>Address</p>
      <InputText
        class="form-control"
        placeholder="Masukkan alamat lengkap anda"
        value={address}
        onChange={(event) => setAddress(event.target.value)}
      />

      <br />

      <CustomButton handle={handleSubmit} labelButton="Register" />
    </div>
  );
};

export default RegisterPage;
