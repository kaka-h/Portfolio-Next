import CardProject from './cardproject';
import './style.css'

const Project = () => {
    return (
        <section id='project' className='md:flex md:pt-20 pt-0 md:flex-col flex flex-col'>
            <div className='flex flex-col items-center'>
                <h1 className="text-5xl text-center title-project">Project</h1>
                <div className="line-title-project"></div>
            </div>
            <CardProject/>
        </section>
    );
}

export default Project;