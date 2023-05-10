import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
        <div className='lg:w-1/2 relative mb-16 md:mb-0'>
        <img src={person} className="w-3/4  rounded" />
        <img style={{border: '10px solid black'}} src={parts} className="w-1/2 absolute right-5 top-1/2   rounded" />
        </div>
          <div className='lg:w-1/2'>
          <h4>About Us</h4>
            <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
            <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
            <button className="btn mt-5">Get More Info</button>
          </div>
        </div>
      </div>
    );
};

export default About;