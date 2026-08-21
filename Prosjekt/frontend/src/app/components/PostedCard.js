import Image from 'next/image'
export default function Postedcard(info) {
let col;
    switch(info.type) {
  case 1: col = "green";
  case 2: col = "red";
  case 3: col = "pink"  
}
    return(
    <div className="PostedCard">
        <figure>

        {info.image? <Image src={info.image} alt="Image Yipeee"/>: <Image src="/tempImg" alt="no image" />} {/* note too self fix alt tags and solve it. iykyk */}
        </figure>
        <hr  style={`backgroundColor: ${col}`}></hr>
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