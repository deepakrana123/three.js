// import React,{useState,useEffect} from 'react'
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSnapshot } from 'valtio';

import config from '../config/config';
import state from '../store';
import { download } from '../assets';
import { downloadCanvasToImage, reader } from '../config/helpers';
import { EditorTabs, FilterTabs, DecalTypes } from '../config/constants';
import { fadeAnimation, slideAnimation } from '../config/motion';
import { AIpicker,ColorPicker,FilePicker,CustomButton,Tab} from '../components';

const Customize = () => {
  const snap=useSnapshot(state)
  const [prompt,setPrompt]=useState("")
  const [file , setFile]=useState()
  const [genratingImg , setGenratingImg] =useState(false)
  const [activeEditorTab , setActiveEditorTab]=useState("")
  const [activeFilterTab,setActiveFilterTab]=useState({
      logoShirt:true,
      stylishShirt:true
    })
    const generateTabContent=()=>{
      switch(activeEditorTab){
        case "colorpicker":
          return <ColorPicker/>
        case "aipicker":
          return <AIpicker/>
        case "filepicker":
          return <FilePicker/>
        default:
            return null
      }
    }
  return (
    // <div>Customize</div>
    <AnimatePresence>
      {!snap.intro && (
        <>
        <motion.div
        key="custom"
        className="absolute top-0 left-0 z-10"
        {...slideAnimation('left')}
        >
          <div className="flex items-center min-h-screen">
              <div className="editortabs-container tabs">
                {EditorTabs.map((tab) => (
                  <Tab 
                    key={tab.name}
                    tab={tab}
                    handleClick={() =>setActiveEditorTab(tab.name)}
                  />
                ))}
                {generateTabContent()}
                </div>
                </div>

        </motion.div>
        <motion.div className="absolute z-10 top-5 right-5"
            {...fadeAnimation}>
        <CustomButton 
              type="filled"
              title="Go Back"
              handleClick={() => state.intro = true}
              customStyles="w-fit px-4 py-2.5 font-bold text-sm"
            />
        </motion.div>
        <motion.div className="filtertabs-container" {...slideAnimation('up')}>
        {FilterTabs.map((tab) => (
                  <Tab 
                    key={tab.name}
                    tab={tab}
                    handleClick={() =>{}}
                    isFilterTab
                    isActiveTab=""
                  />
                ))}
        </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default Customize