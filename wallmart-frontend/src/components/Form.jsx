import { useState } from "react"
import { sendData } from "../utils/api"
import styled from "styled-components";

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Kiwi Maru', serif;
  font-size: 24px;
`

const Form = () => {
    const submitHandler = async ( e ) => {
        e.preventDefault();
        const postData = {
            "product": {
                name,
                productName,
                processor,
                hardDrive,
                ramSize,
                screenSize: {
                    height,
                    width
                },
                manufacturer,
                resolution,
                connectors: {
                    HDMI: hdmi,
                    USB: usb,
                    ethernet,
                    wifi,
                    bluetooth
                },
                batteryLife,
                OS: os,
                webCam: webcam,
                weight,
                color
            }
        }
        console.log(await sendData(postData));
    }
    const [name, setName] = useState("");
    const [productName, setProductName] = useState("");
    const [processor, setProcessor] = useState("");
    const [hardDrive, setHardDrive] = useState("");
    const [ramSize, setRamSize] = useState("");
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);
    const [batteryLife, setBatteryLife] = useState(0);
    const [os, setOs] = useState("");
    const [manufacturer, setManufacturer] = useState("");
    const [resolution, setResolution] = useState("");
    const [hdmi, setHdmi] = useState(0);
    const [usb, setUsb] = useState(0);
    const [ethernet, setEthernet] = useState(false);
    const [wifi, setWifi] = useState("");
    const [bluetooth, setBluetooth] = useState("");
    const [webcam, setWebCam] = useState("");
    const [weight, setWeight] = useState("");
    const [color, setColor] = useState("");
    return (
        <FormWrapper>
            <form>
                <label htmlFor="name">Name: </label><br/>
                <input type="text" onChange={(e) => setName(e.target.value)}/><br/>
                <label htmlFor="productName">Product Name: </label><br/>
                <input type="text" onChange={(e) => setProductName(e.target.value)}/><br/>
                <label htmlFor="processor">Processor: </label><br/>
                <input type="text" onChange={(e) => setProcessor(e.target.value)}/><br/>
                <label htmlFor="hardDrive">Hard Drive: </label><br/>
                <input type="text" onChange={(e) => setHardDrive(e.target.value)}/><br/>
                <label htmlFor="ramSize">Ram Size: </label><br/>
                <input type="text" onChange={(e) => setRamSize(e.target.value)}/><br/>
                <label htmlFor="batteryLife">Battery Life: </label><br/>
                <input type="number" onChange={(e) => setBatteryLife(e.target.value)}/><br/>
                <label htmlFor="Height">Height: </label><br/>
                <input type="number" onChange={(e) => setHeight(e.target.value)}/><br/>
                <label htmlFor="Width">Width: </label><br/>
                <input type="number" onChange={(e) => setWidth(e.target.value)}/><br/>
                <label htmlFor="Operating System">Operating System: </label><br/>
                <input type="text" onChange={(e) => setOs(e.target.value)}/><br/>
                <label htmlFor="manufacturer">Manufacturer: </label><br/>
                <input type="text" onChange={(e) => setManufacturer(e.target.value)}/><br/>
                <label htmlFor="resolution">Resolution: </label><br/>
                <input type="text" onChange={(e) => setResolution(e.target.value)}/><br/>
                <label htmlFor="HDMI">HDMI: </label><br/>
                <input type="number" onChange={(e) => setHdmi(e.target.value)}/><br/>
                <label htmlFor="USB">USB: </label><br/>
                <input type="number" onChange={(e) => setUsb(e.target.value)}/><br/>
                <label htmlFor="ethernet">Ethernet: </label><br/>
                <input type="checkbox" onChange={(e) => setEthernet(e.target.value)}/><br/>
                <label htmlFor="wifi">Wifi: </label><br/>
                <input type="text" onChange={(e) => setWifi(e.target.value)}/><br/>
                <label htmlFor="bluetooth">Bluetooth: </label><br/>
                <input type="text" onChange={(e) => setBluetooth(e.target.value)}/><br/>
                <label htmlFor="webcam">WebCam: </label><br/>
                <input type="text" onChange={(e) => setWebCam(e.target.value)}/><br/>
                <label htmlFor="weight">Weight: </label><br/>
                <input type="text" onChange={(e) => setWeight(e.target.value)}/><br/>
                <label htmlFor="color">Color: </label><br/>
                <input type="text" onChange={(e) => setColor(e.target.value)}/><br/>
                <button type="submit" onClick={submitHandler}>Submit</button>
            </form>
        </FormWrapper>
    )
}
export default Form;
/*
    required: ["name", "productName", "processor", "hardDrive", "batteryLife", "OS", "webCam", "weight"
              , "screenSize", "manufacturer", "resolution", "connectors", "color"],

 */