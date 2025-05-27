import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from "react"
import { auth, googleProvider } from "./config/firebase";

export const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPasssword] = useState("");

    // 查看登入者資訊
    console.log(auth?.currentUser?.email);

    // 帳密登入
    const signIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (err) {
            console.error(err);
        }
    };

    // google登入
    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider)
        } catch (err) {
            console.log(err);
        }
    }

    // 登出
    const logout = async () => {
        try {
            await signOut(auth);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <div>
                {/* 填寫email */}
                <input type="text" placeholder="請輸入email" />
                onChange={(e) => setEmail(e.target.value)}
                {/* 填寫密碼 */}
                <input type="password" placeholder="請輸入密碼" />
                onChange={(e) => setPasssword(e.target.value)}

                <button onClick={signIn}>帳密登入</button>

                <button onClick={signInWithGoogle}>Google登入</button>
                <button onClick={logout}>登出</button>
            </div>

        </>

    )
}