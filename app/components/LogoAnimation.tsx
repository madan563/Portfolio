"use client";

import Image from "next/image"
import { motion} from "framer-motion"
import udemy from "../../public/assets/java.png"
import fiverr from "../../public/assets/react.png"
import elementor from "../../public/assets/SQL.png"
import logitech from "../../public/assets/aws.png"
import oracle from "../../public/assets/python.png"

const images=[
    {src:udemy, alt: "figma"},
    {src:fiverr, alt: "fiverr"},
    {src:elementor, alt: "elementor"},
    {src:logitech, alt: "logitech"},
    {src:oracle, alt: "oracle"},
    {src:udemy, alt: "figma"},
    {src:fiverr, alt: "fiverr"},
    {src:elementor, alt: "elementor"},
    {src:logitech, alt: "logitech"},
    {src:oracle, alt: "oracle"},
    {src:udemy, alt: "figma"},
    {src:fiverr, alt: "fiverr"},
    {src:elementor, alt: "elementor"},
    {src:logitech, alt: "logitech"},
    {src:oracle, alt: "oracle"},
    {src:udemy, alt: "figma"},
    {src:fiverr, alt: "fiverr"},
    {src:elementor, alt: "elementor"},
    {src:logitech, alt: "logitech"},
    {src:oracle, alt: "oracle"},
]


export const LogoAnimation =() => {
    return  (
        <div className="py-8 my-30 bg-purple-500/10 text-white opacity-80 glass">
            <div className= "container mx-auto">
                <div className="overflow-hidden
                [mask-image:linear-gradient(to_right,_transparent,_black_25%,_black_75%,_transparent)]">
                    <motion.div
                    className="flex gap-10 flex-none pr-10"
                    animate={{
                        translateX: '-50%',
                    }}
                    transition={{
                        duration:35,
                        repeat:Infinity,
                        ease: "linear",
                        repeatType:"loop",
                    }}
                    >
                        {images.map((image,index) => (
                            <Image
                            key={index}
                            src={image.src}
                            alt={image.alt}
                            height={35}
                            />

                        ))}

                    </motion.div>
                </div>
            </div>
        </div>
    )
}
