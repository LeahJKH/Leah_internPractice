import Image from 'next/image'
import style from './PostedCard.module.css'

export default function Postedcard(info) {
info = info.info
    let col;
    switch(info.type) {
  case 1: col = "green";
  case 2: col = "red";
  case 3: col = "blue"  
}
    return(
    <div className={style.PostedCard}>
        <figure className={style.imgCont}>
            {info.image? <Image src={info.image} alt="Image Yipeee" width={300} height={124}/>: <Image src="/tempImg.webp" alt="no image" width={300} height={124} />} {/* note too self fix alt tags and solve it. iykyk */}
        </figure>

        <div className={style.seperator} style={{backgroundColor: col}}></div>

        <aside className={style.leftBot}>
            <h3>{info.tittel}</h3>
            <p>{info.description}</p>
        </aside>

        <aside className={style.rightBot}>
            <p>{info.time}</p>
            <p>{info.date}</p>
            <button>Se mer</button>
        </aside>
    </div>
)
}