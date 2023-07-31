import { useEffect } from "react";
import { IUser } from "../../providers/userProvider/@types";
import { MdLogout } from "react-icons/md";
import { useAuth } from "../../hooks/useAuth";
import { ContactCart } from "../../components/card";
import UserInfo from "../../components/userInfo";

export const Dashboard = () => {
  const { Logoult, setUserData } = useAuth();

  useEffect(() => {
    setUserData({
      name: localStorage.getItem("user-name") || "",
      email: localStorage.getItem("user-email") || "",
      phone: localStorage.getItem("user-phone") || "",
      id: localStorage.getItem("user-id") || "",
    } as IUser);
  }, []);
  return (
    <>
      <header>
        <button type="button" onClick={() => Logoult()}>
          <MdLogout size={28} />
        </button>
      </header>

      <section>
        <UserInfo />
      </section>

      <main>
        <h2>Contatos:</h2>
        <ul>
          <ContactCart />
        </ul>
        <button type="button">adicionar</button>
      </main>
    </>
  );
};
