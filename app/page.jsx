import Feed from "@components/Feed"
const Home = () => {
    return (
        <section className='w-full flex-center flex-col'>
            <h1 className='head_text text-center'>
                Discover & Share
                <br className='max-md:hidden' />
                <span className='orange_gradient text-center'> AI-Powered Prompts</span>
            </h1>
            <p className='desc text-center'>
                Promptverse is an open-source AI prompting platform for the modern era, designed to help users explore, craft, and share innovative prompts effortlessly
            </p>

            <Feed />
        </section>
    )
}

export default Home
