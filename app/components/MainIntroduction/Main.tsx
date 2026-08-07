import "./main.css"

export default function Main() {
  return (
    <div className="w-[70%]  flex flex-col justify-between  mt-25 relative ">
      <div className="flex w-full mt-25 justify-between">
        <div className=" w-[50%] border flex flex-col gap-5">
          <h1 className="text-4xl font-bold font-yekan">
            پیاروگلد؛ پلتفرم خرید و فروش آنلاین <span className="gold">طلا</span>
          </h1>
          <p>
            خرید آنلاین طلا و نقره بدون اجرت و مالیات با ارائه فاکتور رسمی،
            ضمانت اصالت و امکان تحویل فیزیکی را در پیاروگلد تجربه کنید.
          </p>
          <div>
            <button>

            </button>
            <button>
              
            </button>
          </div>
        </div>
        <video
          loop
          controls={false}
          width={400}
          height={200}
          autoPlay
          muted
          src="/vid/s5.mp4"
          className="h-fit self-center"
        ></video>
      </div>
      
      <div className="w-[70%] border border-gray-300 h-50 self-center -translate-10 z-10 bg-white  rounded-2xl"></div>
    </div>
  );
}
