import React from 'react';
import MenuBar from '../components/MenuBar';

interface Props {
    // Define your component props here
}

const Home: React.FC<Props> = (props) => {
    return (
        <>
            <p className='text-8xl font-extrabold font-sans text-[#F9DF7B] my-20 text-center'>SomeThingAwsomeComingSoon!</p>
        </>
    );
};

export default Home;