import { FOOTER_CONTENT } from '../constants'

const Footer = () => {
    return (
        <footer className="max-w-7xl mx-auto border-t-2" id="footer">
            <div className="my-20 px-4">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                    
                    {/* Brand Section */}
                    <div className="flex flex-col">
                        <h2 className="text-2xl font-bold uppercase mb-4">Farspace</h2>
                        <p className="max-w-sm text-neutral-600">
                            Crafting high-performance digital experiences that transcend boundaries and elevate brands.
                        </p>
                    </div>

                    {/* Contact Info Section */}
                    <div className="flex flex-col gap-6">
                        {/* Address */}
                        <div className="flex items-center space-x-3">
                            <span className="material-symbols-outlined text-neutral-600">location_on</span>
                            <p className="text-lg">{FOOTER_CONTENT.address}</p>
                        </div>

                        {/* Email */}
                        <div className="flex items-center space-x-3">
                            <span className="material-symbols-outlined text-neutral-600">mail</span>
                            <p className="text-lg">{FOOTER_CONTENT.email}</p>
                        </div>

                        {/* Phone */}
                        <div className="flex items-center space-x-3">
                            <span className="material-symbols-outlined text-neutral-600">call</span>
                            <p className="text-lg">{FOOTER_CONTENT.phone}</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Copyright Bar */}
                <div className="mt-20 pt-8 border-t border-neutral-200">
                    <p className="text-sm text-neutral-500 text-center uppercase tracking-widest">
                        {FOOTER_CONTENT.copyright}
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;