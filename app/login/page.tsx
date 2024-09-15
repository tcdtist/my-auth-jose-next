import { redirect } from "next/navigation";
import { getSession, login, logout } from "@/lib";
import styles from "@/styles/login.module.css";

export default async function LoginPage() {
  const session = await getSession();

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h1 className={styles.title}>Next.js Authentication</h1>
        {!session && (
          <form
            className={styles.form}
            action={async (formData) => {
              "use server";
              await login(formData);
              redirect("/");
            }}
          >
            <input
              className={styles.input}
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <button className={styles.button} type="submit">
              Login
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
