
const Footer = () => {
    return (
        <div className="bg-[#e2e1e1] text-center py-24">
            <div>
                <p className="text-3xl font-bold">Gadget Heaven</p>
                <p className="mt-3 font-medium opacity-80">Leading the way in cutting-edge technology and innovation</p>
            </div>
            <div className="flex justify-around mt-12">
                <div>
                    <p className="mb-4 text-xl font-bold">Services</p>
                    <p className="opacity-70">Product Support</p>
                    <p className="my-3 opacity-70">Order Tracking</p>
                    <p className="opacity-70">Shipping & Delivery</p>
                    <p className="mt-3 opacity-70">Returns</p>
                </div>
                <div>
                    <p className="mb-4 text-xl font-bold">Company</p>
                    <p className="opacity-70">About us</p>
                    <p className="my-3 opacity-70">Careers</p>
                    <p className="opacity-70">Contact</p>
                </div>
                <div>
                    <p className="mb-4 text-xl font-bold">Legal</p>
                    <p className="opacity-70">Terms of Services</p>
                    <p className="my-3 opacity-70">Privacy Policy</p>
                    <p className="opacity-70">Cookie Policy</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;