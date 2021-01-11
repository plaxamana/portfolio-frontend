import Project from './Project'

export default function ProjectContainer() {

    return (
        <section className="container mx-auto px-4 md:px-16" id="work">
            <div className="relative flex justify-center md:my-16">
                <h2 className="font-bold text-lg text-center uppercase md:text-2xl">My Work</h2>
                <div className="absolute bottom-0 transform translate-y-1 w-16 h-1 bg-blue-900"></div>
            </div>
            <Project 
                type="Featured Project"
                projectName="GeniusBrain React App"
                description="A simple face-detection application built with React. This was achieved using Clarifai's Artificial Intelligence API to detect the faces.
                Tools used: React, Node, Express.js, PostgreSQL"
                primaryLink="https://geniusbrain.herokuapp.com/"
                secondaryLink="https://github.com/plaxamana/GeniusBrain"
                imageDesc="GeniusBrain App recognizing Justin Beiber's face"
                imageSrc="/img/geniusbrain.png"
                flipped={false}
            />           
            <Project 
                type="Wordpress Site"
                projectName="jfcm.ca"
                description="A Wordpress website for my local church based in Mississauga, ON.

                I volunteered to update the existing website with a modern theme and with updated information. I chose wordpress for quick development and also with the idea of adding a blogging section in the near future."
                primaryLink="https://jfcm.ca"
                secondaryLink="https://github.com/plaxamana/GeniusBrain"
                imageDesc="Screenshot of JFCM Homepage"
                imageSrc="/img/jfcm.png"
                flipped={true}
            />           
            <Project 
                type="Responsive Design"
                projectName="Jake & Elwood Fictional Agency"
                description="A fictional agency site built with only HTML & CSS, using CSS grid."
                primaryLink="https://plaxamana.github.io/jake-elwood-agency/"
                secondaryLink="https://plaxamana.github.io/jake-elwood-agency/"
                imageDesc="Screenshot of Jake & Elwood Agency Homepage"
                imageSrc="/img/jake-elwood.png"
                flipped={false}
            />           
            <Project 
                type="UI Design"
                projectName="Scenic Forests - Forest Vacations"
                description="Who wouldn't want to experience a scenic vacation among the woods? In this project, I had a chance to practice my UI Design Fundamental skills. This site is also optimized for viewing on mobile, tablet and desktop. I've also experimented with css animations using GSAP."
                primaryLink="https://github.com/plaxamana/scenic-vacation"
                secondaryLink="https://plaxamana.github.io/scenic-vacation/"
                imageDesc="Screenshot of Scenic Forests Homepage"
                imageSrc="/img/scenic-forest.png"
                flipped={true}
            />

                    
        </section>
    )
}