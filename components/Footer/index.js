import Link from "next/link";
import Image from "next/image";
import SocialMediaList from "../SocialMedia";

export default function Footer(){

    const socialMediaLinks = [
        { name: 'Facebook', icon: '/public/icon/fb.png', url: 'https://www.facebook.com/yourpage' },
        { name: 'Twitter', icon: '/public/icon/fb.png', url: 'https://twitter.com/yourhandle' },
        { name: 'Instagram', icon: '/public/icon/fb.png', url: 'https://www.instagram.com/yourusername' },
        // Add more social media links as needed
      ];


    return (
        <>
            <section className="footer pt-50">
                <footer>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-4 text-lg-start text-center">
                                <Link href="" className="mb-30">
                                    <Image src="/icon/codashop-logo.png" width={200} height={50} alt="img"/>
                                </Link>
                                
                                <p className="mt-30 text-light mb-30">Copyright 2024 Hendriawan. All Rights Reserved.</p>

                                <SocialMediaList />
                                
                            </div>
                            <div className="col-lg-8 mt-lg-0 mt-20 ">
                                <div className="row gap-sm-0 ">
                                    <div className="col-md-4 col-6 mb-lg-0 mb-25">
                                        <p className="text-light fw-semibold mb-12">Company</p>
                                        <ul className="list-unstyled ">
                                            <li className="mb-6">
                                                <Link href="" className=" text-light text-decoration-none">About Us</Link >
                                            </li>
                                            <li className="mb-6">
                                                <Link href="" className=" text-light text-decoration-none">Press
                                                    Release</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-4 col-6 mb-lg-0 mb-25 ">
                                        <p className=" text-light fw-semibold mb-12">Support</p>
                                        <ul className="list-unstyled text-light">
                                            <li className="mb-6">
                                                <Link href="" className=" text-light text-decoration-none">Refund
                                                    Policy</Link>
                                            </li>
                                            <li className="mb-6">
                                                <Link href="" className=" text-light text-decoration-none">Unlock
                                                    Rewards</Link>
                                            </li>
                                            <li className="mb-6">
                                                <Link href="" className=" text-light text-decoration-none">Live
                                                    Chatting</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-4 col-12 mt-lg-0 mt-md-0 mt-25 flex-row">
                                        <p className=" text-light fw-semibold mb-12">Connect</p>
                                        <ul className="list-unstyled">
                                            <li className="mb-6">
                                                <Link href="mailto: cashless.shop@gmail.com<"
                                                    className=" text-light text-decoration-none">codashop@support.com</Link>
                                            </li>
                                            <li className="mb-6">
                                                <Link href="#" className=" text-light text-decoration-none">Address Codashop
                                                    12,
                                                    Singapore</Link>
                                            </li>
                                            <li className="mb-6">
                                                <Link href="tel: 02111229090"
                                                    className=" text-light text-decoration-none">021 - 1122 -
                                                    9090</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </section>

        </>
    );
};
