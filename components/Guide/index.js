import CardGuide from "./cardGuide";

export default function Guide(){
    return (
        <>
            <section id="feature" className="feature pt-50 pb-50">
                <div className="container-fluid">
                    <h2 className="text-4xl fw-bold color-palette-1 text-center mb-30">Do You Have a Problem With Us?
                    </h2>
                    <div className="guide row gap-lg-0 gap-4" data-aos="fade-up">
                        <CardGuide icon="icon/guidestep1.svg" title="Payment and Purchases Issue" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
                        <CardGuide icon="icon/guidestep2.svg" title="Tutorials" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit"/>
                        <CardGuide icon="icon/guidestep3.svg" title="Service Announcements" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit"/>

                    </div>
                </div>
            </section>
        </>
    )
}
