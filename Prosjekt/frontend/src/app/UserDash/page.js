'use client'
import PostedCard from "@/app/components/postedCard/PostedCard.js"
import {useEffect, useState} from 'react'
export default function UserDash() {
    const [arrengement, setarrengement] = useState([]);

useEffect(()=> {
    fetch("/TestData/planboard.json")
    .then(res => res.json())
    .then(data => setarrengement(data))
},[]) 

    return(
        <>
        <main>
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