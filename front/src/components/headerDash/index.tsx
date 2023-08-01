import { MdLogout } from "react-icons/md";
import Logo from "../../assets/Logo.jpg";
import { useAuth } from "../../hooks/useAuth";
import { DashHeader } from "./style";

export const HeaderDash = () => {
  const { Logoult } = useAuth();

  return (
    <>
      <DashHeader>
        <img src={Logo} alt="" />
        <button type="button" onClick={() => Logoult()}>
          <MdLogout size={28} />
        </button>
      </DashHeader>
    </>
  );
};
