const Video =()=>{
    return(
        <div>
        <div className="video">
        <video src="/videos/Enspire2.mp4" autoPlay muted height={646.6}loop>
            <p color="white">hello</p>
        </video>
        </div>
        <div className="mainContent">
            <div className="flexVertical">
                <p className="smallText">IIITL E-cell presents</p>
                <p><span className="E">E</span>nspire<span className="E">'23</span></p>
                <img src="/images/innovationOdyssey.png" alt="" />
            </div>
        </div>
        </div>
        
    )
}

export default Video;