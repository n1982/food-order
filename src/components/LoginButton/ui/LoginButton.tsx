import { useContext } from "react";
import { Button } from "../../Button";
import { UserContext } from "../../App/model/UserContext.ts";
import styles from "./LoginButton.module.css";

export const LoginButton = () => {
  const {
    user: { userName, isAuthenticated },
    toggleUser,
  } = useContext(UserContext);
  return (
    <>
      {!isAuthenticated && (
        <Button
          className={styles.button}
          title={"Вход"}
          onClick={() => toggleUser()}
        />
      )}
      {isAuthenticated && (
        <>
          <h4>{userName}</h4>
          <Button
            className={styles.button}
            title={"Выход"}
            onClick={() => toggleUser()}
          />
        </>
      )}
    </>
  );
};
