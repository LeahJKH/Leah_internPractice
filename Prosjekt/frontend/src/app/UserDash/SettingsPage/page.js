'use client'
import { useUser } from "@/app/context/usercontext";

export default function SettingsPageU() {
    const {user} = useUser()
    return(
        <>
        <main>
            <p>{user.name}</p>
            <p>{user.lastname}</p>
            <p>{user.birthdate}</p>
            <p>{user.email}</p>
            <p>{user.CreatedAt}</p>
            <p>{user.id}</p>
        </main>
        </>
    )
}