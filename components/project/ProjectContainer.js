import Project from './Project'
import PrimaryBtn from '../buttons/PrimaryBtn'
import SecondaryBtn from '../buttons/SecondaryBtn'

export default function ProjectContainer() {
    return (
        <section className="container mx-auto px-4">
            <div className="relative flex justify-center">
                <h2 className="font-bold text-xl text-center">My Work</h2>
                <div className="absolute bottom-0 transform translate-y-1 w-16 h-1 bg-blue-900"></div>
            </div>
            <Project 
                type="Featured Project"
                projectName="GeniusBrain React App"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus alias sint, quos mollitia odit voluptas possimus aliquid quis. Recusandae, nisi."
                primaryLink="https://geniusbrain.herokuapp.com/"
                secondaryLink="https://github.com/plaxamana/GeniusBrain"
                imageDesc="GeniusBrain App recognizing Justin Beiber's face"
                imageSrc="/img/geniusbrain.png"
            />           
            <Project 
                type="Wordpress Site"
                projectName="jfcm.ca"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus alias sint, quos mollitia odit voluptas possimus aliquid quis. Recusandae, nisi."
                primaryLink="https://jfcm.ca"
                secondaryLink="https://github.com/plaxamana/GeniusBrain"
                imageDesc="Screenshot of JFCM Homepage"
                imageSrc="/img/jfcm.png"
            />           
            <Project 
                type="Responsive Design"
                projectName="Jake & Elwood Fictional Agency"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus alias sint, quos mollitia odit voluptas possimus aliquid quis. Recusandae, nisi."
                primaryLink="https://plaxamana.github.io/jake-elwood-agency/"
                secondaryLink="https://plaxamana.github.io/jake-elwood-agency/"
                imageDesc="Screenshot of Jake & Elwood Agency Homepage"
                imageSrc="/img/jake-elwood.png"
            />           
            <Project 
                type="UI Design"
                projectName="Scenic Forests - Forest Vacations"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus alias sint, quos mollitia odit voluptas possimus aliquid quis. Recusandae, nisi."
                primaryLink="https://github.com/plaxamana/scenic-vacation"
                secondaryLink="https://plaxamana.github.io/scenic-vacation/"
                imageDesc="Screenshot of Scenic Forests Homepage"
                imageSrc="/img/scenic-forest.png"
            />           
        </section>
    )
}