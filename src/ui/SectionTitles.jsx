const SectionTitles = ({ heading, subHeading }) => {
    return (
        <section className='text-center'>
            <h1 className='md:text-6xl text-4xl poppins font-semibold mb-6'>{heading}</h1>
            <p className='md:w-[80%] md:mx-auto w-full poppins font-normal md:text-lg text-xs'>{subHeading}</p>
        </section>
    );
};

export default SectionTitles;