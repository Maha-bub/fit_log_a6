import Image from 'next/image';
import Logo from '@/assets/logo.png';
const Footer = () => {
    return (
        <footer className="container mx-auto mt-10 bg-base-300 text-base-content p-5 rounded-lg">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">

                
                <div className="flex items-center gap-2">
                    <Image
                        src={Logo}
                        width={50}
                        height={50}
                        alt="Fitlog logo"
                        className="w-5 md:w-10 h-10 object-contain"
                    />

                    <h1 className="text-lg md:text-2xl lg:text-3xl font-bold text-white uppercase">
                        Fitlog
                    </h1>
                </div>

            
                <p className="text-sm md:text-base">
                    &copy; {new Date().getFullYear()} Fitlog -Workout Library. Train hard, log honest.
                </p>

            </div>
        </footer>
    );
};

export default Footer;