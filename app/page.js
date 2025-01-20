"use client"
export default function Home() {


  return (
    <>
    <div className="flex justify-center flex-col items-center text-white h-[44vh] gap-4">
      <div className="text-3xl flex gap-4 justify-center items-center font-bold">Buy Me A Chai<span><img src="/tea.gif" width={44}  alt="" className="" /></span></div>
      <p>
        A crowd funding platform for creaters. Get funded by your fans. Start Now!
      </p>
      <div className="m-4 flex gap-7 justify-center items-center">
        <button className="bg-[#63e] px-5 py-2 rounded-lg font-bold" onClick={()=>{alert("you have clicked start button")}}>Start Now</button>
        <button className="bg-[#63e] px-5 py-2 rounded-lg font-bold">Read More...</button>
      </div>
    </div>
    <div className="bg-white h-1 opacity-10"></div>

    <div className="text-white  container mx-auto pt-14 pb-32">
        <h1 className="text-2xl font-bold text-center mb-14">Your fans can buy you a chai</h1>
        <div className="flex gap-5 justify-around">
       <div className="items space-y-3 flex flex-col items-center justify-center">
                <img className="bg-slate-500 rounded-full p-2 m-3" src="/man.gif" alt="" width={92} />
                <p className="font-bold">Fans want to help</p>
                <p className=" text-center"> Your fans are available for you to help</p>
            </div>
       <div className="items space-y-3 flex flex-col items-center justify-center">
                <img className="bg-slate-500 rounded-full p-2 m-3" src="/coin.gif" alt="" width={92} />
                <p className="font-bold">Fans want to help</p>
                <p className=" text-center"> Your fans are available for you to help</p>
            </div>
            <div className="items space-y-3 flex flex-col items-center justify-center">
                <img className="bg-slate-500 rounded-full p-2 m-3" src="/group.gif" alt="" width={92} />
                <p className="font-bold">Fans want to help</p>
                <p className=" text-center"> Your fans are available for you to help</p>
            </div>
        </div>
    </div>


    <div className="bg-white h-1 opacity-10"></div>

    <div className="text-white flex flex-col items-center justify-evenly  container mx-auto pt-14 pb-32">
        <h1 className="text-3xl font-bold text-center mb-14">Learn More About Us</h1>
        <div className="video flex gap-8">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/1d_3JUY_UrM?si=4zdkdx1wasnrKORU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/jcsiMH3Go8I?si=qcTwpu7DH3rW8eLX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        
    </div>
    
    </>
  );
}
