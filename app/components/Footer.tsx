import { AiFillFacebook, AiFillLinkedin, AiFillInstagram} from 'react-icons/ai';

const socialLinks =[
    {href : "https://www.facebook.com/madan.ashok.79/", Icon: AiFillFacebook, label: "Facebook"},
    {href : "https://www.instagram.com/_madhan77/", Icon: AiFillInstagram, label: "Instagram"},
    {href : "linkedin.com/in/madan-bandi-2a684a196", Icon: AiFillLinkedin, label: "Linkedin"}
    
];

export const Footer =() => {
    return(
        <footer className="relative py-8 max-w-[1200px] mx-auto px-4">
        {/* <div className="md:hidden absolute inset-0 overflow-hidden">
            <div className="absolute top-[20%] left-[20%] w-[100px] h-[100px] bg-purple-300 rounded-full opacity-30 -translate-x-1/2 -translate-y-1/2 "></div>
            <div className="absolute top-[26%] left-[50%] w-[150px] h-[70px] bg-purple-900 rounded-lg opacity-50 -translate-x-1/2 -translate-y-1/2 "></div>
            <div className="absolute top-[25%] left-[65%] w-[100px] h-[100px] bg-purple-600 rounded-lg opacity-30 -translate-x-1/2 -translate-y-1/2 "></div>
        </div>

        <div className="hidden md:block absolute inset-0 overflow-hidden">
            <div className="absolute top-[40%] left-[20%] w-[200px] h-[200px] bg-purple-300 rounded-full opacity-40 -translate-x-1/2 -translate-y-1/2 "></div>
            <div className="absolute top-[45%] left-[60%] w-[250px] h-[150px] bg-purple-200 rounded-lg opacity-20 -translate-x-1/2 -translate-y-1/2 "></div>
            <div className="absolute top-[60%] left-[49%] w-[200px] h-[100px] bg-purple-600 rounded-lg opacity-30 -translate-x-1/2 -translate-y-1/2 "></div>
        </div> */}

        <div className="relative z-10 text-center mt-8">
            <h1 className="hidden md:block text=[10rem md:text-[12rem] lg:text-[15rem] font-bold text-white opacity-15">MADAN</h1>
            <h1 className="md:hidden text-9xl font-bold text-white opacity-10">
                MADAN
            </h1>
        </div>
        <div className="mt-12 flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
            <p className="text-gray-200">
                
            </p>
            <ul className="flex gap-5 flex-wrap">
                {socialLinks.map(({href, Icon, label}) => (
                    <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className=" text-purple-200 flex items-center justify-center w-10 h-10 rounded-full hover:text-purple-400 transition-colors"
                    >
                        <Icon size={30}/>
                    </a>



                ))}

            </ul>


        </div>


        </footer>

    );
};