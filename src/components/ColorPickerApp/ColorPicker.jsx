import { useState } from "react";
import './color.css'

const ColorPicker = () => {

    const [color, setColor] = useState("#059862");

    const handleColorChange = (e) => {
        setColor(e.target.value);
    }

    return (
        <div className="container">
            <h1>Color Picker</h1>
            <div className="color-display" style={{backgroundColor: color}}>
                <p className="display">Selected Color : {color}</p>
            </div>
            <div className="select-color">
                <label className="select-label">Select a color</label>
                <input type="color" value={color} onChange={handleColorChange}/>
            </div>
        </div>
    );
};

export default ColorPicker;
