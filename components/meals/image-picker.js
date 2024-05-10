'use client';

import { useRef, useState } from 'react';
import Image from 'next/image.js';

import styles from './image-picker.module.css';

export default function ImagePicker({ label, name }) {
    const [pickedImage, setPickedImage] = useState(null);
    const imageInput = useRef();

    function handleClickPick() {
        imageInput.current.click();
    }

    function handleChangeImage(ev) {
        const chosenFile = ev.target.files[0];

        if (!chosenFile) {
            setPickedImage(null);
            return;
        }

        //To show the preview => 
        //1. Create instance of the file reader
        const fileReader = new FileReader();
        //2. Generate data URL/input source for an image
        fileReader.readAsDataURL(chosenFile);
        //3. After this async process is finished set the result
        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        };
    }

    return (
        <div className={styles.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={styles.controls}>
                <div className={styles.preview}>
                    {pickedImage
                        ? (
                            <Image
                                src={pickedImage}
                                alt="Selected Image"
                                fill
                            />
                        )
                        : <p>No image picked yet.</p>}
                </div>
                <input
                    className={styles.input}
                    type="file"
                    id={name}
                    name={name}
                    accept="image/png, image/jpeg"
                    ref={imageInput}
                    onChange={handleChangeImage}
                    required
                />
                <button
                    className={styles.button}
                    type="button"
                    onClick={handleClickPick}
                >
                    Pick an Image
                </button>
            </div>
        </div>
    );
}