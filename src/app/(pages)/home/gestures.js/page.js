'use client'
import { motion, MotionConfig } from "framer-motion"

const GesturesPage = () => {
    return (
        <div className='m-20 flex flex-col justify-center items-center gap-5'>
            <MotionConfig transition={{
                duration: 0.125,
                ease: "easeInOut"
            }}>
                <motion.button className='px-4 py-2 bg-blue-500 text-white'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95, rotate: "2.5deg" }}

                >
                    click me!
                </motion.button>
                <motion.button className='px-4 py-2 bg-red-500 text-white'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95, rotate: "2.5deg" }}

                >
                    click me!
                </motion.button>
            </MotionConfig>
        </div>
    );
};

export default GesturesPage;