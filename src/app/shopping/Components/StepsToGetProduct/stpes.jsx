'use server'
import Styles from "./steps.module.css"
export default async function StepsToGetProduct(){
    return(
        <>
        <div style={{ backgroundImage: `url(/StepsBG.svg)`}} className={Styles.MainSteps}>
        </div>
        </>
    )
}