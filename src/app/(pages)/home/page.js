"use client"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react";

const HomePage = () => {
    const [visible, setVisible] = useState(true)
    const handleVisible = () => {
        setVisible(!visible)
    }

    return (
        <div className="my-20 mx-20">
            <motion.button onClick={handleVisible} className="bg-black text-white px-4 py-1 flex justify-center items-center"
                layout
            >Show Card</motion.button>
            <AnimatePresence mode="popLayout">
                <div className='container mx-auto'>
                    {visible && <motion.div
                        initial={{ rotate: "0deg", scale: 0, y: 0, }}  //this component will rotate from 0 deg to 360 deg by 1 second.
                        animate={{ rotate: "180deg", scale: 1, y: [0, 150, -150, -150, 0] }}
                        exit={{ rotate: "0deg", scale: 0, y: 0, }}
                        transition={{
                            duration: 1,
                            ease: "backInOut",
                            times: [0, 0.25, 0.5, 0.85, 1]
                        }}
                        className='bg-neutral-900 text-white h-32 w-32 flex justify-center items-center mt-20'


                    >
                        <h1>Home</h1>
                    </motion.div>}
                </div>
            </AnimatePresence>
        </div>
    );
};

export default HomePage;