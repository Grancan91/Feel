import React, { useEffect, useState } from 'react'
import ButtonCard from '../../Components/ButtonCard/ButtonCard'
import './Home.css'
import ProgressCard from '../../Components/ProgressCard/ProgressCard';
import { motion, AnimatePresence } from 'framer-motion';

function Home() {

    const [showHome, setShowHome] = useState(false);
    
    useEffect(() => {
        setShowHome(true);
    }, []);

    
    return (
        <div className='col-span-12 md:col-span-11 h-screen p-8'>
      <AnimatePresence>
        {showHome && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className='grid grid-cols-1 md:grid-cols-3 gap-4'
          >
            <motion.div className='w-full h-full'>
              <ProgressCard
                Variant={'bg-green'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
            <motion.div className='w-full h-full'>
              <motion.div className='w-full h-full bg-violet' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <ProgressCard
                  Variant={'bg-red'}
                  initial={{ x: -100 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            </motion.div>
            <motion.div className='w-full h-full'>
              <ProgressCard
                Variant={'bg-blue-dark'}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div>
        <div className="w-full p-2">
          <motion.div className="w-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <ButtonCard
              Button_text='Create new record'
              Title_text='Crear nuevo registro de sentimientos'
              Detail_text='¡Comienza a registrar tus sentimientos y obtén una visión más profunda de tu mundo emocional!'
              Route={'/dashboard/NewRecord'}
            />
          </motion.div>
        </div>
        <div className="w-full p-2">
          <motion.div className="w-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <ButtonCard
              Button_text='Create new record'
              Title_text='Export Report'
              Detail_text='¡Comienza a registrar tus sentimientos y obtén una visión más profunda de tu mundo emocional!'
              Route={'/dashboard/NewRecord'}
              variant={2}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Home