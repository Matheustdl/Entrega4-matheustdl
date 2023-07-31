import { MdDeleteSweep, MdManageAccounts } from "react-icons/md";
import { useAuth } from "../../hooks/useAuth";
import UserEditModal from "../modal/userModalEdit";
import UserDeleteModal from "../modal/deleteUser";

const UserInfo = () => {
  const {
    userData,
    setUserEditModal,
    userEditModal,
    setUserDeleteModal,
    userDeleteModal,
  } = useAuth();

  return (
    <div>
      {userData && (
        <>
          <div>
            <h1>{userData.name}</h1>
          </div>
          <p>{userData.email}</p>
          <p>{userData.phone}</p>
          <button type="submit" onClick={() => setUserEditModal(true)}>
            <MdManageAccounts />
          </button>
          {userEditModal && <UserEditModal />}
          <button onClick={() => setUserDeleteModal(true)}>
            <MdDeleteSweep />
          </button>
          {userDeleteModal && <UserDeleteModal />}
        </>
      )}
    </div>
  );
};

export default UserInfo;
