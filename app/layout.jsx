import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
export const metadata = {
    title: "Prompverse",
    description: "Explore and Share powerful AI-generated prompts effortlessly.",
};

const ReactLayout = ({ children }) => {
    return (
        <html lang='en'>
            <body>
                <Provider>
                    {/* This will change the backgrond */}
                    <div className='main'>
                        <div className='gradient' />
                    </div>
                    <main className='app'>
                        <Nav />
                        {children}
                    </main>
                </Provider>
            </body>
        </html>
    )
}

export default ReactLayout
