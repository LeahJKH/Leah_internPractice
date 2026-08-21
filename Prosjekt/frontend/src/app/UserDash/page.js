'use client'
import PostedCard from "@/app/components/postedCard/PostedCard.js"
import {useEffect, useState} from 'react'
import { useUser } from "../context/usercontext";
import { redirect } from "next/navigation";
export default function UserDash() {
    const {user} = useUser()
    const [arrengement, setarrengement] = useState([]);

useEffect(()=> {
    fetch("/TestData/planboard.json")
    .then(res => res.json())
    .then(data => setarrengement(data))
},[]) 
function toSettings() {
    redirect("/UserDash/SettingsPage")
}
    return(
        <>
        <header>
            <button onClick={toSettings}>Settings</button>
        </header>
        <main>
            <section>
                <h1>Welcome {user.name || "Not found"}!</h1>
            </section>
            <section>
                {arrengement.map((e) => {
                    return(
                     <PostedCard key={e.id} info={e} />
                        )})}
            </section>
        </main>
        </>
    )
}