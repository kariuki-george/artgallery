import { useSelector, useDispatch } from "react-redux";
import styles from "./Bottom.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { logout } from "../../state/slices/userSlice";
import toast from "react-hot-toast";

function Bottom() {
  const user = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const router = useRouter();
  const handleAuth = () => {
    if (!user.isLoggedIn) return router.push("/auth/login");
    dispatch(logout());
    window.localStorage.removeItem("user");
    return toast.success("Logged out successfully");
  };
  return (
    <div className={styles.bottom}>
      <Link passHref href="/">
        <span>help</span>
      </Link>
      <Link passHref href="/">
        <span>about</span>
      </Link>
      <Link passHref href="/">
        <span>privacy</span>
      </Link>
      {/* checks if is auth */}

      <span onClick={handleAuth}>
        {user.isLoggedIn ? "sign out " : "sign in"}
      </span>
    </div>
  );
}

export default Bottom;
