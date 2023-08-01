import { MdDeleteSweep, MdManageAccounts } from "react-icons/md";
import { useAuth } from "../../hooks/useAuth";
import UserEditModal from "../modal/userModalEdit";
import UserDeleteModal from "../modal/deleteUser";
import { DivContainer, DivInfoUser, DivUser } from "./style";

const UserInfo = () => {
  const {
    userData,
    setUserEditModal,
    userEditModal,
    setUserDeleteModal,
    userDeleteModal,
  } = useAuth();

  return (
    <DivContainer>
      {userData && (
        <DivInfoUser>
          <h1>{userData.name}</h1>
          <p>{userData.email}</p>
          <DivUser>
            <p>{userData.phone}</p>
            <button type="submit" onClick={() => setUserEditModal(true)}>
              <MdManageAccounts />
            </button>
            {userEditModal && <UserEditModal />}
            <button onClick={() => setUserDeleteModal(true)}>
              <MdDeleteSweep />
            </button>
            {userDeleteModal && <UserDeleteModal />}
          </DivUser>
        </DivInfoUser>
      )}
    </DivContainer>
  );
};

export default UserInfo;
