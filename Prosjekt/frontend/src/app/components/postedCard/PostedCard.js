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
    <div className="PostedCard">
        <figure>

        {info.image? <Image src={info.image} alt="Image Yipeee" width={100} height={100}/>: <Image src="/tempImg" alt="no image" width={100} height={100} />} {/* note too self fix alt tags and solve it. iykyk */}
        </figure>
        <div className={style.seperator} style={{backgroundColor: col}}></div>
        <aside>
        <h3>{info.tittel}</h3>
        <p>{info.description}</p>
        </aside>
        <aside>
            <p>{info.time}</p>
            <p>{info.date}</p>
            <button>Se mer</button>
        </aside>
    </div>
)
}