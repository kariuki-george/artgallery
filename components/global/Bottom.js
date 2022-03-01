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
    return toast.success("Logged out successfully");
  };
  return (
    <div className={styles.bottom}>
      <Link href="/">
        <span>help</span>
      </Link>
      <Link href="/">
        <span>about</span>
      </Link>
      <Link href="/">
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
