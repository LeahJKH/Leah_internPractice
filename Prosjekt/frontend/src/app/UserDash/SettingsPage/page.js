'use client'
import { useUser } from "@/app/context/usercontext";

export default function SettingsPageU() {
    const {user} = useUser()
    return(
        <>
        <main>
            <section>
                <p>fornavn: {user.name}</p>
                <p>etternavn: {user.lastname}</p>
                <p>fødselsdag: {user.birthdate}</p>
                <p>email: {user.email}</p>
                <p>bruker lagd: {user.CreatedAt}</p>
                <p>Bruker id: {user.id}</p>
            </section>
        </main>
        </>
    )
}