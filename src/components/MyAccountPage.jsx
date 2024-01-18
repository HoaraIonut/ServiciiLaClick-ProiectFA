import { React, useState, useEffect } from "react";
import { Center, HStack } from "@chakra-ui/react";

import { useTheme } from "../store/Theme.context";
import Sidebar from "./Sidebar";
import InfoMyAccount from "./InfoMyAccount";
import axios from "axios";

function MyAccountPage() {
  // eslint-disable-next-line
  const { theme, switchTheme } = useTheme();
  // eslint-disable-next-line
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchMyAccount() {
      let dateUser = {
        email: localStorage.getItem("AuthToken"),
        nume: "",
        prenume: "",
        telefon: "",
        dataNasterii: "",
      };
      try {
        // const dateObtinute = await axios.get(
        //   "http://localhost:5000/myaccount",
        //   { params: { email: dateUser.email } }
        // );
        const dateObtinute = await axios.get(
          "https://proiectfa-backend-production.up.railway.app/myaccount",
          { params: { email: dateUser.email } }
        );
        console.log(
          "Cererea de obtinere a infomartiilor despre cont a fost trimisa cu succes.",
          dateObtinute
        );
        dateUser.nume = dateObtinute.data.nume;
        dateUser.prenume = dateObtinute.data.prenume;
        dateUser.telefon = dateObtinute.data.telefon;
        dateUser.dataNasterii = dateObtinute.data.dataNastere;
      } catch (err) {
        console.error(
          "Eroare la cererea de obtinere a informatiilor despre cont.",
          err
        );
      }
      setUser(dateUser);
    }
    fetchMyAccount();
  }, []);

  if (!user) {
    return null;
  }

  return (
    <Center
      height="calc(100vh - 3rem)"
      bgColor={theme === "light" ? "#F0ECE5" : "#080911"}
    >
      <HStack height="calc(100vh - 3rem)" width="100%">
        <Sidebar user={user} />
        <InfoMyAccount user={user} theme={theme} />
      </HStack>
    </Center>
  );
}

export default MyAccountPage;
