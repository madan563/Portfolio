"use client"

import { motion} from 'framer-motion';

export const Contact =() =>{
    return (
        <section id="contact" className="py-32 text-white max-w-[1200px] mx-auto px-4">
            <motion.div
            initial={{ opacity: 0, y:20}}
            whileInView={{ opacity: 1, y:0}}
            transition={{ duration: 0.8}}
            viewport={{ once:true}}
            className="grid lg:grid-cols-2 gap-16"
            >
                <div className="space-y-12">
                    <motion.h2
                    initial={{ opacity:0, x:-20}}
                    whileInView={{ opacity: 1, x:0}}
                    transition={{duration: 0.6, delay: 0.2}}
                    className="text-7xl font-bold text-purple-500"
                    >
                    Contact<span className="text-purple-500"></span>
                    </motion.h2>
                    <motion.div
                    initial={{ opacity: 0, x: -20}}
                    whileInView={{opacity: 1, x:0}}
                    transition={{ duration: 0.6, delay: 0.4}}
                    className="glass p-8 rounded-2xl space-y-8"
                    >
                        <div className="space-y-2">
                            <p className="text-lg text-purple-500"> Phone</p>
                            <a href="tel: +605 659 6690"
                            className="text-2xl font-semibold hover:text-purple-500 transition duration-300 flex items-center gap-2"
                            >
                                +1 605 659 6690
                                <span className="text-purple-500">📱</span>
                            </a>
                        </div>
                        <div className="space-y-2">
                            <p className="text-lg text-purple-500">Email</p>
                            <a href="bandimadan2000@gmail.com"
                            className=" text-2xl font-semibold hover:text-purple-500 transition duration-300 flex items-center gap-2"
                            >
                                bandimadan2000@gmail.com<span className="text-purple-500">📩</span>
                            </a>
                        </div>
                         <div className="space-y-2"> 
                     <p className="text-lg text-purple-500">Location</p>
                     < div className= "text-2xl font-semibold hover:text-purple-500 transition duration-300 flex items-center gap-2 ">
                     Sioux Falls 📌
                     </div>
                
                     <address className="text-xl non italic leading-relaxed">
                     </address>
                     </div>

                    </motion.div>
                    </div>

                    <motion.div
                    initial={{ opacity: 0, x:20}}
                    whileInView={{ opacity: 1, x:0}}
                    transition={{ duration: 0.6, delay: 0.6}}
                    className="w-full h-full min-h-[400px] rounded-2xl overflow-hidden"
                    >
                    </motion.div>
                

                <motion.div
                initial={{opacity: 0,x: 20}}
                whileInView={{ opacity: 1, x:0}}
                transition={{duration: 0.6, delay: 0.6}}
                className= "w-full h-full min-h-[400px] rounded-2xl overflow-hidden"
                >

                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92531.16618689561!2d-96.8060106212343!3d43.55240136147661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x878eb498e0bdacd7%3A0xde95ff3aa8b2fccf!2sSioux%20Falls%2C%20SD!5e0!3m2!1sen!2sus!4v1736711530079!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{border:0}}
                    allowFullScreen
                    loading="lazy"
                    ></iframe> 
                    
              </motion.div>  
            </motion.div>
        </section>

    );
};