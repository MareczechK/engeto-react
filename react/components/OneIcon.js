import "./OneIcon.css"
import dataIcons from "./dataIcons"
import { FaMasksTheater } from "react-icons/fa6"

const OneIcon = () => {
    return <div className="icon-container">
        {
            dataIcons.map((oneData) => {
                const { id, image, title, description } = oneData
                return <div className="one-icon" key={id}>
                    <FaMasksTheater className="one-image" />
                    <h1>{title}</h1>
                    <img src={image} alt="" />
                    <p>{description}</p>
                </div>
            })
        }
    </div>
}

export default OneIcon