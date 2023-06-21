import React from 'react';
import { Text } from '@nextui-org/react';
import { plug } from '../assets';

const Disabled = ({ darkMode }) => {
    return (
        <div className='flex flex-col justify-center items-center text-center w-full mt-[15%]'>
            <img src={plug} width={64} height={64} />

            <Text className={`text-[22px] mb-3`}>
                Extension disabled
            </Text>

            <Text className={`text-[16px] mb-6 ${darkMode ? 'text-textAltDark' : 'text-textAlt'}`}>
                When HYS is disabled, so are all of its features. This means you will start seeing Shorts content on YouTube again
            </Text>

            <Text className={`text-[16px] ${darkMode ? 'text-textAltDark' : 'text-textAlt'}`}>
                You can enable HYS in the <i className='bi bi-gear text-[16px]'></i> settings menu
            </Text>
        </div>
    )
}

export default Disabled;