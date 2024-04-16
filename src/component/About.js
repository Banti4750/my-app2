import React from 'react';

function About(props) {
    let mystyle = {
        color: props.Mode === 'dark' ? 'white' : '#282828',
        backgroundColor: props.Mode === 'dark' ? '#282828' : 'white'
    };

    let mystyle2 ={
        backgroundColor:'black'
    };

    return (
        <>
            <div className="container my-3" style={mystyle} style={{border:'none'}}>
                <div className="accordion" id="accordionPanelsStayOpenExample">
                    <div className="accordion-item "style={mystyle2}>
                        <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                            <button className="accordion-button" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                <strong>About US</strong>
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                            <div className="accordion-body" style={mystyle}>
                                <strong>TextUtils is your go-to online tool for effortlessly transforming text.</strong> Our aim is to simplify your digital experience by providing intuitive solutions for everyday tasks. Whether you're a student, professional, or just someone looking to streamline your workflow, TextUtils has got you covered.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={mystyle}>
                        <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                            <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                <strong> Easy-to-Use </strong>
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                            <div className="accordion-body" style={mystyle}>
                                TextUtils is designed with simplicity in mind. Our user-friendly interface ensures that even those with limited technical skills can navigate our tools with ease. Whether you're a tech-savvy expert or a novice user, you'll find TextUtils intuitive and straightforward.
                                <br /><br />
                                With features like instant text transformation and a clean, clutter-free design, TextUtils makes it easy to achieve your desired results without any hassle. Spend less time figuring out complex tools and more time focusing on what matters – let TextUtils simplify your text transformation needs.
                                <br /><br />
                                Experience the convenience and reliability of TextUtils today. Try our lowercase to uppercase converter and explore our other text transformation tools to simplify your digital life.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={mystyle}>
                        <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                            <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                <strong>Freemium</strong>
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                            <div className="accordion-body" style={mystyle}>
                                TextUtils is completely free to use! We believe that everyone should have access to powerful text transformation tools without any cost barriers. Enjoy unlimited access to all our features without worrying about subscriptions or hidden fees.
                                <br /><br />
                                Experience the convenience and reliability of TextUtils today. Try our lowercase to uppercase converter and explore our other text transformation tools to simplify your digital life.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
        </>
    );
}

export default About;
