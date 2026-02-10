const Contact = () => {
    return (
        <section className="max-w-7xl mx-auto border-b-2" id="contact">
            <div className="my-20">
                <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mb-12">
                    Get In Touch
                </h2>
                
                {/* --- The Grid Section for Icons and Info --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                    
                    {/* Div 1: Email */}
                    <div className="flex flex-col items-center p-6 border rounded-3xl hover:bg-neutral-50 transition">
                        <span className="material-symbols-outlined text-4xl mb-4">mail</span>
                        <h3 className="text-lg font-semibold uppercase">Email Us</h3>
                        <p className="mt-2 text-neutral-600 text-center text-sm">hello@farspace.com</p>
                    </div>

                    {/* Div 2: Office */}
                    <div className="flex flex-col items-center p-6 border rounded-3xl hover:bg-neutral-50 transition">
                        <span className="material-symbols-outlined text-4xl mb-4">location_on</span>
                        <h3 className="text-lg font-semibold uppercase">Our Studio</h3>
                        <p className="mt-2 text-neutral-600 text-center text-sm">123 Digital Ave, Space City</p>
                    </div>

                    {/* Div 3: Socials */}
                    <div className="flex flex-col items-center p-6 border rounded-3xl hover:bg-neutral-50 transition">
                        <span className="material-symbols-outlined text-4xl mb-4">public</span>
                        <h3 className="text-lg font-semibold uppercase">Connect</h3>
                        <p className="mt-2 text-neutral-600 text-center text-sm">@farspace_web</p>
                    </div>

                </div>

                {/* --- Additional Content Div Below --- */}
                <div className="mt-20 mx-4 p-10 bg-neutral-900 text-white rounded-3xl text-center">
                    <h3 className="text-2xl lg:text-4xl font-light mb-6">
                        Ready to launch your project into the Farspace?
                    </h3>
                    <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-neutral-200 transition">
                        Start a Conversation
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Contact;