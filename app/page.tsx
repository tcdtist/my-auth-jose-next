import { redirect } from "next/navigation";
import { getSession, login, logout } from "@/lib";
import styles from "@/styles/login.module.css";

export default async function IndexPage() {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h1 className={styles.title}>Next.js Authentication</h1>
        {session && (
          <form
            className={styles.form}
            action={async () => {
              "use server";
              await logout();
              redirect("/");
            }}
          >
            <button className={styles.button} type="submit">
              Logout
            </button>
          </form>
        )}
        {session && (
          <pre className={styles.sessionInfo}>
            {JSON.stringify(session, null, 2)}
          </pre>
        )}
      </div>
    </div>
  );
}
